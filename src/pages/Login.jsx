import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import imggg from "../assets/assets/login.webp";
import { loginUser } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slices/cartSlice"; // ✅ Ensure this is imported!

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  // ✅ Proper login handler
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await dispatch(loginUser({ email, password })).unwrap();
      console.log("Logged in:", result); // Should have user info now

      // No need to manually set localStorage here; loginUser already does this.
      // Cookies will also be set automatically if backend sends them correctly.

      // Navigation handled by useEffect after user changes
    } catch (err) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left - Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-white p-8 rounded-lg shadow border"
        >
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Rabbit</h2>
          </div>

          <h3 className="text-2xl font-bold text-center mb-2">Login 🚀</h3>
          <p className="text-center text-gray-500 mb-6">
            Enter your email and password to login
          </p>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

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
            className={`w-full py-2 rounded text-white font-medium ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-900"
            }`}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to={`/register?redirect=${encodeURIComponent(redirect)}`}
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>

      {/* Right - Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={imggg}
          alt="Login visual"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/600x800?text=Image+Not+Found";
          }}
        />
      </div>
    </div>
  );
};

export default Login;
