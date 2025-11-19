import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer/Footer';
import { CircleLoader } from 'react-spinners';
const Root = () => {
    const navigation = useNavigation();
    return (
        <div className=''>
            {navigation.state === "loading" && (
                <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50">
                    <CircleLoader color="#3B82F6" />                </div>
            )}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;