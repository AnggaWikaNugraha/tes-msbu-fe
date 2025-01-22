'use client';

import React from 'react'
import Image from 'next/image';

interface LayoutAuthProps {
    children: React.ReactNode;
}


const LayoutAuth: React.FC<LayoutAuthProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex">
            {/* Left side - Background Image */}
            <div className="hidden pl-16 pt-16 pb-16 lg:flex lg:w-2/3 relative flex-col justify-between">
                <div className="absolute inset-0 bg-black opacity-90 z-[1]"></div> {/* Overlay Gradien */}
              
                {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}
                <div className="z-10">
                    <div className="font-bold text-[40px] leading-[60px] text-white w-[500px]">Login dulu</div>
                   
                </div>

            </div>

            {/* Right side - Login Form */}
            <div className="w-full lg:w-1/3 flex items-start md:items-center justify-center p-8 bg-white">
                {children}
            </div>
        </div>
    );
};


export default LayoutAuth