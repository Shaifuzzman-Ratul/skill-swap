import React, { useEffect, useState } from 'react';
import TrendingApp from './TrendingApp';
import { HashLoader } from 'react-spinners';

const TrendingApps = () => {
    const [apps, setApps] = useState([]);
    useEffect(() => {
        fetch('/trendingApss.json').then(res => res.json()).then(data => {
            setApps(data)
        }
        )
    }, [])
    return (
        <div className='w-max-[1200px] mx-auto text-center bg-gray-100  pb-40'>
            <div>
                <h1 className='font-bold text-4xl pt-9 '>Trending Apps</h1>
                <p className='text-gray-600 mt-2'>Explore All Trending Apps on the Market developed by us</p></div>
            <div className='lg:m-15 mx-auto pt-9 grid lg:grid-cols-4  gap-4'>
                {apps.length === 0 ? (<div className='flex col-span-full justify-center items-center  text-5xl'> <HashLoader color="#2bbfda" /> </div>) :
                    apps.map(app => <TrendingApp app={app} key={app.id}></TrendingApp>)}
            </div>
            <div className="">
                <a href='/apps' className="btn bg-gradient-to-r from-[#6832e5] to-[#8f54ee] text-white">

                    Show All</a>
            </div>




        </div>
    );
};

export default TrendingApps;