import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
        <>
            <div className="bg-[#9538E2] text-center text-white pt-10 pb-64  rounded-bl-xl rounded-br-xl">
                <div className="space-y-3">
                    <h1 className="font-bold text-3xl w-1/2 mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="w-1/2 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="btn">Shop Now</button>
                </div>
                <div className='relative flex justify-center mt-10'>
                    <img className='absolute rounded-lg w-2/3 h-[500px] border-2 border-gray-300 p-2 ' src={bannerImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;