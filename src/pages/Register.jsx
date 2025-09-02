// src/pages/Register.jsx

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imggg from "../assets/assets/login.webp";

import { registerUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slices/cartSlice";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { user, guestId } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);

    // Extract redirect param
    const redirect = new URLSearchParams(location.search).get("redirect") || "/";
    const isCheckoutRedirect = redirect.includes("checkout");

    // ✅ Effect: Only run when user changes
    useEffect(() => {
        if (user) {
            if (cart?.products?.length > 0 && guestId) {
                dispatch(mergeCart({ guestId, user })).then(() => {
                    navigate(isCheckoutRedirect ? "/checkout" : "/");
                });
            } else {
                navigate(isCheckoutRedirect ? "/checkout" : "/");
            }
        }
    }, [user, guestId, cart, isCheckoutRedirect, navigate, dispatch]);



    const handleRegister = async (e) => {
        e.preventDefault();
      
        if (!firstName || !lastName || !email || !password) {
          setError("Please fill in all fields.");
          return;
        }
      
        try {
          setLoading(true);
          setError("");
      
          // Dispatch register thunk and wait for response
          const result = await dispatch(
            registerUser({ firstName, lastName, email, password })
          ).unwrap();
      
          // Save user and token properly
          localStorage.setItem("userInfo", JSON.stringify(result.user));
          localStorage.setItem("userToken", result.token);
      
          // Redirect to profile page
          navigate("/");
        } catch (err) {
          setError(err.message || "Something went wrong. Try again later.");
        } finally {
          setLoading(false);
        }
      };
      

    return (
        <div className="flex min-h-screen">
            {/* Left - Form */}
            <div className="w-full md:w-1/2 flex justify-center items-center p-6">
                <form
                    onSubmit={handleRegister}
                    className="w-full max-w-sm bg-white p-8 rounded-lg shadow border"
                >
                    <div className="text-center mb-4">
                        <h2 className="text-xl font-bold text-gray-800">Rabbit</h2>
                    </div>

                    <h3 className="text-2xl font-bold text-center mb-2">Join us 🚀</h3>
                    <p className="text-center text-gray-500 mb-6">Create your account below</p>

                    {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

                    <label htmlFor="firstName" className="text-sm font-medium block mb-1">
                        First Name
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label htmlFor="lastName" className="text-sm font-medium block mb-1">
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <label htmlFor="email" className="text-sm font-medium block mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password" className="text-sm font-medium block mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-2 rounded text-white font-medium ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-black hover:bg-gray-900"
                            }`}
                    >
                        {loading ? "Creating..." : "Create Account"}
                    </button>

                    <p className="text-sm text-center mt-4 text-gray-600">
                        Already have an account?{" "}
                        <Link to={`/login?redirect=${encodeURIComponent(redirect)}`} className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>

            {/* Right - Image */}
            <div className="hidden md:block w-1/2">
                <img
                    src={imggg}
                    alt="Register visual"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x800?text=Image+Not+Found";
                    }}
                />
            </div>
        </div>
    );
};

export default Register;
