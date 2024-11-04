import React, { useEffect, useState } from 'react';
import ReusableBanner from '../Components/ReusableBanner';
import { HiOutlineAdjustments } from "react-icons/hi";
import { getStoreCartList, getStoreWishList } from '../Utilities/AddToDb';
import { useLoaderData } from 'react-router-dom';
import CartAndWishlist from '../Components/CartAndWishlist';

const Dashboard = () => {
    const data = useLoaderData()
    const storedCartId = getStoreCartList()
    const storedInCart = data.filter(items => storedCartId.includes(items.product_id))
    const [store, setStore] = useState(storedInCart)
    const totalPrice = storedInCart.reduce((accumulator, item) => accumulator + item.price, 0);
    const handleCartList = () => {
        const storedCartId = getStoreCartList()
        const storedInCart = data.filter(items => storedCartId.includes(items.product_id))
        setStore(storedInCart)
    }
    const handleWishList = () => {
        const storedWishId = getStoreWishList()
        const storedInWish = data.filter(items => storedWishId.includes(items.product_id))
        setStore(storedInWish)
    }
    const handleSortByPrice = () => {
        const storedCartId = getStoreCartList()
        const storedInCart = data.filter(items => storedCartId.includes(items.product_id))
        const sortedByPrice = [...storedInCart].sort((a, b) => b.price - a.price)
        setStore(sortedByPrice)
        
    }
    return (
        <>
            <div className={`bg-[#9538E2] text-center text-white pt-10 pb-14   rounded-bl-xl rounded-br-xl ${location.pathname != '/' ? 'rounded-tl-xl rounded-tr-xl' : ''}`}>
                <div className="space-y-3">
                    <ReusableBanner title={"Dashboard"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></ReusableBanner>
                    <div className=' gap-5'>
                        <button onClick={() => handleCartList()} className="border-2 bg-white px-6 py-1 rounded-full text-[#9538E2]">Cartlist</button>
                        <button onClick={() => handleWishList()} className="border-2 bg-white px-6 py-1 rounded-full text-[#9538E2] ml-5">Wishlist</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-10'>
                <h1 className='text-xl font-bold'>Cart</h1>
                <div className='flex items-center gap-4'>
                    <h1 className='text-xl font-bold'>Total Cost: ${totalPrice}</h1>
                    <button onClick={() => handleSortByPrice()} className="border-2 border-[#9538E2] bg-white px-6 py-1 rounded-full text-[#9538E2] flex gap-2 items-center hover:bg-[#9538E2] hover:text-white">Sort By Price <HiOutlineAdjustments /></button>
                    <button className="border-2 border-[#9538E2] bg-white px-6 py-1 rounded-full text-[#9538E2] flex gap-2 items-center hover:bg-[#9538E2] hover:text-white">Purchase</button>
                </div>
            </div>
            <div className='mt-10 mb-20 space-y-5'>
                {
                    store.map(product => <CartAndWishlist key={product.product_id} product={product}></CartAndWishlist>)
                }

            </div>
        </>
    );
};

export default Dashboard;