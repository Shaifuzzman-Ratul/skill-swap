import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const EachApp = ({ app }) => {

    return (
        <Link to={`/appDetails/${app.id}`}>  <div className='shadow-sm p-3 bg-white rounded-sm   '>
            <img src={app.image} alt={app.title} className='rounded-2xl mx-auto m-3' />
            <h3 className='font-semibold pb-5'>{app.title}</h3>

            <span className='flex justify-between'><p className='text-green-400 w-[65px] h-[29px] rounded-md bg-gray-100 flex gap-1 justify-center items-center p-'><FaArrowDown />
                {app.downloads}M</p>
                <p className='text-[#ff8811] w-[60px] h-[26px] rounded-md bg-[#fff0e1] flex gap-1 justify-center items-center p-' ><FaStar />
                    {app.ratingAvg
                    }</p></span>
        </div></Link>
    );
};
//
export default EachApp;