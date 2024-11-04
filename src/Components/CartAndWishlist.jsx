import { MdDeleteForever } from "react-icons/md";
const CartAndWishlist = ({ product }) => {
    const { product_image, product_title, description, price } = product
    return (
        <>
            <div className="border-2 border-gray-300 flex justify-between items-center p-5  rounded-2xl">
                <div className="flex gap-4 items-center">
                    <div>
                        <img className="h-[120px] w-[150px] rounded-xl" src={product_image} alt="" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-xl font-bold">{product_title}</h1>
                        <p className="text-gray-400">{description}</p>
                        <p className="font-semibold">Price: ${price}</p>
                    </div>
                </div>
                <div className="text-2xl text-red-500 ">
                    <MdDeleteForever />

                </div>
            </div>
        </>
    );
};

export default CartAndWishlist;