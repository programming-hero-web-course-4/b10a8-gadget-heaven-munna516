import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import ReusableBanner from './ReusableBanner';


const Details = () => {
    const navigate = useNavigate()
    const { title } = useParams()
    const data = useLoaderData()
    const detailsProduct = data.find(product => product.product_title === title)
    const { product_image, product_title, price, availability, rating, specification, description } = detailsProduct
    return (
        <div>
            <div className="bg-[#9538E2] text-center text-white pt-10 pb-64  rounded-bl-xl rounded-br-xl mb-96">

                <ReusableBanner title={"Product Details"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></ReusableBanner>

                <div className='relative flex justify-center mt-10 text-black'>
                    <div className='absolute rounded-lg w-2/3 h-[550px] border-2 border-gray-300 p-4 bg-white mb-96 flex gap-8 items-center'>
                        <div className='w-1/2'>
                            <img className='h-[470px]  rounded-lg' src={product_image} alt="" />
                        </div>
                        <div className='w-1/2 text-left space-y-2'>
                            <h1 className='text-2xl font-bold'>{product_title}</h1>
                            <p className='text-2xl'>Price : ${price}</p>
                            <button className='border-2 border-green-400 px-3 py-1 rounded-full bg-green-200'>In Stock</button>
                            <br />

                            <p className='text-gray-400'>{description}</p>
                            <h1 className='font-bold text-lg'>Specification: </h1>
                            {
                                specification.map((item, index) => <p className='text-gray-400'>{index + 1}. {item}</p>)
                            }
                            <h1 className='font-bold text-lg'>Ratings : </h1>
                            <div className='flex items-center gap-6'>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-6"
                                        className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <h1 className='text-xl font-bold'>{rating}</h1>

                            </div>
                            <div className='flex items-center gap-16'>
                                <button className='flex items-center gap-3 text-xl px-4 py-3 rounded-full bg-[#9538E2] text-white'>Add to cart <FaCartPlus /></button>
                                <button className='border-2 border-r-gray-300 rounded-full p-3 text-4xl'><FaRegHeart /></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;