import React from 'react';

const ErrorPage = () => {
    return (
        <div className='text-center py-28'>
            <img src="https://i.ibb.co.com/RG5JxznR/image.png" className='mx-auto' alt="" />
            <h1 className='font-bold text-5xl pt-5 pb-5'>
                Oops, page not found!
            </h1>
            <p className='text-gray-500 pb-5'>The page you are looking for is not available.</p>
            <div className="">
                <a href='/' className="btn bg-gradient-to-r from-[#6832e5] to-[#8f54ee] text-white">

                    Go Back!</a>
            </div>
        </div>
    );
};

export default ErrorPage;