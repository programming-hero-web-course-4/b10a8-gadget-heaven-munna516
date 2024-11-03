import React from 'react';
import PropTypes from 'prop-types';
const Product = ({ product }) => {
    const { product_title, product_image, price } = product
    return (
        <>
            <div className="card card-compact bg-base-100 border-2 border-gray-200  p-3 transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden">
                <figure>
                    <img
                        className='w-full h-[250px] rounded-lg'
                        src={product_image}
                        alt={product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p className='text-xl text-gray-500'>Price : ${price}</p>
                    <div className="card-actions justify-start mt-2">
                        <button className="text-lg hover:bg-[#9538E2] hover:text-white border-2 border-[#9538E2] px-4 py-1 rounded-full">Details</button>
                    </div>
                </div>
            </div>
        </>

    );
};
Product.propTypes= {
    product: PropTypes.object
}
export default Product;