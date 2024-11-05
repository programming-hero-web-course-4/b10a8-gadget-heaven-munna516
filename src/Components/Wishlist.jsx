import React from 'react';

const Wishlist = () => {
    return (
        <div className={({ isActive }) => (isActive ? "active-tab" : "tab")}>
            Wishlist
        </div>
    );
};

export default Wishlist;