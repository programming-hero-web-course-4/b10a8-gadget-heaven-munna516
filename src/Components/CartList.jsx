import React, { useEffect, useState } from 'react';
import { HiOutlineAdjustments } from "react-icons/hi";
import { addToStoreCartList, getStoreCartList, getStoreWishList } from '../Utilities/AddToDb';
import { useLoaderData } from 'react-router-dom';
import CartAndWishlist from '../Components/CartAndWishlist';


const CartList = () => {
    // const location = useLocation()
    const data = useLoaderData()
    const storedCartId = getStoreCartList()
    const storedInCart = data.filter(items => storedCartId.includes(items.product_id))
    const [store, setStore] = useState(storedInCart)
    const totalPrice = storedInCart.reduce((accumulator, item) => accumulator + item.price, 0);

    const handleCart = () => {
        const storedCartId = getStoreCartList()
        const storedInCart = data.filter((items) => storedCartId.includes(items.product_id))
        setStore(storedInCart)
    }

    const handleSortByPrice = () => {

        const storedCartId = getStoreCartList()
        const storedInCart = data.filter(items => storedCartId.includes(items.product_id))
        const sortedByPrice = [...storedInCart].sort((a, b) => b.price - a.price)
        setStore(sortedByPrice)

    }
    const handleDelete = (id) => {
        const storedCartId = getStoreCartList()
        const storedInCart = storedCartId.filter(item => item !== id);
        localStorage.setItem('cart-list', JSON.stringify(storedInCart))
        handleCart()
    }
    return (
        <div>
            <div className='flex justify-between items-center mt-10 '>
                <h1 className='text-xl font-bold'>Cart</h1>
                <div className='flex items-center gap-4'>
                    <h1 className='text-xl font-bold'>Total Cost: ${totalPrice}</h1>
                    <button onClick={() => handleSortByPrice()} className="border-2 border-[#9538E2] bg-white px-6 py-1 rounded-full text-[#9538E2] flex gap-2 items-center hover:bg-[#9538E2] hover:text-white">Sort By Price <HiOutlineAdjustments /></button>

                    <button className="border-2 border-[#9538E2] bg-white px-6 py-1 rounded-full text-[#9538E2] flex gap-2 items-center hover:bg-[#9538E2] hover:text-white">Purchase</button>
                </div>
            </div>

            <div className='mt-10 mb-20 space-y-5'>
                {
                    store.map(product => <CartAndWishlist key={product.product_id} product={product} handleDelete={handleDelete}></CartAndWishlist>)
                }
            </div>
        </div>
    );
};

export default CartList;