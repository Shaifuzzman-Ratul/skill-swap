import React from 'react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='bg-gray-100'>
            <div className='text-center max-w-[1200px] mx-auto pt-10 flex flex-col justify-center items-center'>
                <h1 className='font-bold text-6xl p-5'>We Build <br />
                    <span className='text-[#804ee8]'>Productive</span> Apps</h1>
                <p className='text-gray-500 lg:w-[700px] text-center mt-4 mb-8'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <span className='flex gap-6 mb-6'>

                    <button className="w-[155px] h-[50px] btn border-1 border-gray-300 p-2 rounded-md"> <a href="https://play.google.com/store/games?hl=en" target="_blank" className='flex items-center gap-2 justify-center'><IoLogoGooglePlaystore className='text-2xl' />
                        Google Play</a>
                    </button>

                    <button className='btn border-1 border-gray-300 p-2 rounded-md w-[155px] h-[50px]'>
                        <a className='flex items-center gap-2 justify-center' href="https://www.apple.com/app-store/" target="_blank"><FaAppStoreIos className='text-2xl' />
                            App Store</a></button>
                </span>
                <img src="https://i.ibb.co.com/x82tCxMY/hero.png" alt="" />
            </div>
            <div className='text-white bg-gradient-to-b from-[#6832e5] to-[#8a4fed] lg:h-[360px] text-center p-15'>
                <h1 className='text-4xl font-bold pb-6'>Trusted by Millions, Built for You</h1>

                <div className='flex flex-col lg:flex-row justify-between py-4 items-center max-w-[900px]  mx-auto '>

                    <span><h4 className='text-gray-300 pb-3' >Total Downloads</h4>
                        <h1 className='text-5xl font-extrabold pb-4'>29.6M</h1>
                        <p className='text-gray-300'>21% more than last month</p></span>

                    <span><h4 className='text-gray-300 pb-3'>Total Reviews</h4>
                        <h1 className='text-5xl font-extrabold pb-4'>906K</h1>
                        <p className='text-gray-300'>46% more than last month</p></span>
                    <span><h4 className='text-gray-300 pb-3'>Active Apps</h4>
                        <h1 className='text-5xl font-extrabold pb-4'>132+</h1>
                        <p className='text-gray-300'>31 more will Launch</p></span>
                </div>
            </div>

        </div >
    );
};

export default Banner;