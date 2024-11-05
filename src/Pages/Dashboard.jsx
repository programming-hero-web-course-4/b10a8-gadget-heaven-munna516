import ReusableBanner from '../Components/ReusableBanner';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

    return (
        <>
            <div className={`bg-[#9538E2] text-center text-white pt-10 pb-14   rounded-bl-xl rounded-br-xl ${location.pathname != '/' ? 'rounded-tl-xl rounded-tr-xl' : ''}`}>
                <div className="space-y-3">
                    <ReusableBanner title={"Dashboard"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></ReusableBanner>
                    <div className=' gap-5'>

                        <NavLink to='/dashboard' className="text-2xl border-2 bg-white px-6 py-1 rounded-full text-[#9538E2] hover:bg-blue-400 hover:text-white hover:border-none">Cartlist</NavLink>

                        <NavLink to='/dashboard/wishlist' className="text-2xl border-2 bg-white px-6 py-1 rounded-full text-[#9538E2] ml-5 hover:bg-red-400 hover:text-white hover:border-none">Wishlist</NavLink>
                    </div>
                </div>
            </div >

            <Outlet></Outlet>



        </>
    );
};

export default Dashboard;