import { NavLink, useLoaderData } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";
import CategoryNotFound from "./CategoryNotFound";

const AllProducts = () => {
    const allproducts = useLoaderData()
    const [product, setProduct] = useState(allproducts)

    const handleCategory = category => {
        if (category == "all") {
            setProduct(allproducts)
        } else {
            const categoryProduct = [...allproducts].filter(item => item.category == category)
            setProduct(categoryProduct)
        }
    }

    return (
        <>
            <div className="mt-72">
                <h1 className="text-center font-bold text-3xl">Explore Cutting-Edge Gadgets</h1>

                <div className="flex gap-5 my-10">
                    {/* Category */}
                    <div className="w-2/6 md:w-1/6 border-2 border-gray-300 rounded-xl flex justify-center max-h-[300px] items-center">
                        <div className="space-y-2 py-2 flex flex-col">

                            <NavLink onClick={() => handleCategory("all")} className="btn rounded-lg w-28 lg:w-36 text-white hover:text-white bg-[#9538E2]">All Products</NavLink>

                            <NavLink to='/category' onClick={() => handleCategory("Laptops")} className="btn w-28 lg:w-36 hover:border-[#9538E2] ">Laptops</NavLink>

                            <NavLink to='/category' onClick={() => handleCategory("Smartphones")} className="btn w-28 lg:w-36 hover:border-[#9538E2] ">Phones</NavLink>

                            <NavLink to='/category' onClick={() => handleCategory("Accessories")} className="btn w-28 lg:w-36 hover:border-[#9538E2] ">Accesories</NavLink>

                            <NavLink onClick={() => handleCategory("Watches")} className="btn w-28 lg:w-36 hover:border-[#9538E2] ">Watches</NavLink>

                        </div>
                    </div>

                    {/* Card */}
                    <div className="w-4/6 md:w-5/6 border-2 border-gray-300 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                            {

                                product.length > 0 ? product.map(product => <Product key={product.product_id} length={1} product={product}></Product>) : <Product product={product} length={0}></Product>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProducts;