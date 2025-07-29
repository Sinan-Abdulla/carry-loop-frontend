import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({
        category: "",
        gender: "",
        color: [],
        size: [],
        material: [],
        brand: [],
        price: 100,
    });

    // Load from URL on first render
    useEffect(() => {
        const category = searchParams.get("category") || "";
        const gender = searchParams.get("gender") || "";
        const color = searchParams.get("color")?.split(",") || [];
        const size = searchParams.get("size")?.split(",") || [];
        const material = searchParams.get("material")?.split(",") || [];
        const brand = searchParams.get("brand")?.split(",") || [];
        const price = parseInt(searchParams.get("maxPrice")) || 100;

        setFilters({
            category,
            gender,
            color,
            size,
            material,
            brand,
            price,
        });
    }, []); // only run on mount

    // Update URL when filters change
    useEffect(() => {
        const params = {};

        if (filters.category) params.category = filters.category;
        if (filters.gender) params.gender = filters.gender;
        if (filters.color.length) params.color = filters.color.join(",");
        if (filters.size.length) params.size = filters.size.join(",");
        if (filters.material.length) params.material = filters.material.join(",");
        if (filters.brand.length) params.brand = filters.brand.join(",");
        if (filters.price !== 100) params.maxPrice = filters.price;

        setSearchParams(params);
    }, [filters]);

    const handleChange = (type, value) => {
        if (type === "category" || type === "gender") {
            setFilters(prev => ({ ...prev, [type]: value }));
        } else if (type === "price") {
            setFilters(prev => ({ ...prev, price: value }));
        } else {
            setFilters(prev => {
                const current = prev[type];
                const updated = current.includes(value)
                    ? current.filter(v => v !== value)
                    : [...current, value];
                return { ...prev, [type]: updated };
            });
        }
    };

    return (
        <div className="w-[13.75rem] sm:w-[16rem] lg:w-[13.75rem] p-4 sm:border-r lg:border-r-0 h-auto sm:h-screen overflow-y-auto lg:overflow-visible bg-white">




            <h2 className="text-xl font-semibold mb-4">Filter</h2>

            {/* Category */}
            <div className="mb-5">
                <h3 className="font-medium mb-2">Category</h3>
                {["Top Wear", "Bottom Wear"].map((cat, index) => (
                    <label key={index} className="flex items-center mb-1">
                        <input
                            type="radio"
                            name="category"
                            className="mr-2"
                            checked={filters.category === cat}
                            onChange={() => handleChange("category", cat)}
                        />
                        {cat}
                    </label>
                ))}
            </div>

            {/* Gender */}
            <div className="mb-5">
                <h3 className="font-medium mb-2">Gender</h3>
                {["Men", "Women"].map((g, index) => (
                    <label key={index} className="flex items-center mb-1">
                        <input
                            type="radio"
                            name="gender"
                            className="mr-2"
                            checked={filters.gender === g}
                            onChange={() => handleChange("gender", g)}
                        />
                        {g}
                    </label>
                ))}
            </div>

            {/* Color */}
            <div className="mb-5">
                <h3 className="font-medium mb-2">Color</h3>
                <div className="grid grid-cols-2 lg:grid-cols-2 gap-2">
                    {["black", "blue", "red", "green", "yellow", "white", "pink", "purple"].map((color, index) => (
                        <label key={index} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={filters.color.includes(color)}
                                onChange={() => handleChange("color", color)}
                            />
                            <div
                                className="w-4 h-4 rounded-full border border-gray-400"
                                style={{ backgroundColor: color }}
                            ></div>
                            <span className="capitalize">{color}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Size */}
            <div className="mb-5">
                <h3 className="font-medium mb-2">Size</h3>
                {["XS", "S", "M", "L", "XL", "XXL"].map((size, index) => (
                    <label key={index} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={filters.size.includes(size)}
                            onChange={() => handleChange("size", size)}
                        />
                        {size}
                    </label>
                ))}
            </div>

            {/* Material */}
            <div className="mb-5">
                <h3 className="font-medium mb-2">Material</h3>
                {["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen", "Viscose", "Fleece"].map((mat, index) => (
                    <label key={index} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={filters.material.includes(mat)}
                            onChange={() => handleChange("material", mat)}
                        />
                        {mat}
                    </label>
                ))}
            </div>

            {/* Brand */}
            <div className="mb-5">
                <h3 className="font-medium mb-2">Brand</h3>
                {["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashionista", "ChicStyle"].map((brand, index) => (
                    <label key={index} className="flex items-center mb-1">
                        <input
                            type="checkbox"
                            className="mr-2"
                            checked={filters.brand.includes(brand)}
                            onChange={() => handleChange("brand", brand)}
                        />
                        {brand}
                    </label>
                ))}
            </div>

            {/* Price */}
            <div className="mb-5">
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="flex items-center justify-between gap-2">
                    <span>$0</span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={filters.price}
                        className="w-full"
                        onChange={(e) => handleChange("price", Number(e.target.value))}
                    />
                    <span>${filters.price}</span>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
