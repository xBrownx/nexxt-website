import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { MobileDemo } from '@/routes/our-work/components/mobile-demo';

import demo01 from '../assets/hake-01.jpg';
import demo02 from '../assets/hake-02.jpg';
import demo03 from '../assets/hake-03.jpg';

export const Project01Page = () => {
    return (
        <section className="flex h-screen w-full flex-col items-center justify-center bg-[#EDEDEB]">
            <div className="flex w-[1440px] flex-row items-start gap-10">

                <div className="flex flex-row items-start gap-10">
                    <span className="flex flex-row items-start gap-5 font-title text-sm tracking-custom">
                        <span className="text-end">
                            REACT
                            <br />
                            MOBILE
                            <br />
                            APP
                        </span>
                        <AiFillCaretRight className="mt-1 size-5" />
                    </span>
                    <div className="h-full w-[300px] text-[15px] leading-loose">
                        <p className="text-justify font-bodycopy text-sm leading-loose tracking-wider">
                            HAKE, an esteemed art gallery celebrated for its
                            remarkable online presence, approached us with the
                            vision to transform their website into a
                            cutting-edge mobile app for iOS and Android
                            platforms. The goal was to enhance accessibility,
                            elevate the art-viewing experience, and broaden
                            their audience reach through an intuitive and
                            visually engaging application.
                        </p>
                        <p className="text-justify font-bodycopy text-sm leading-loose tracking-wider mt-4">
                            Built in Visual Studio Code with React, the app
                            offers a seamless and user-friendly navigation
                            experience while maintaining visual consistency with
                            HAKE’s artistic brand identity. A standout feature
                            of the app allows users to take a photo of their
                            wall and virtually visualise how a selected artwork
                            would look in their space—empowering users to make
                            confident purchasing decisions.
                        </p>
                    </div>
                </div>


                <div className="relative flex size-full flex-1 flex-col items-center">
                    <div className="flex size-full items-center justify-center">
                        <MobileDemo
                            imgSrc={demo01}
                            className="w-64 translate-x-[15%]"
                        />
                        <MobileDemo imgSrc={demo03} className="z-20 w-80" />
                        <MobileDemo
                            imgSrc={demo02}
                            className="w-64 translate-x-[-15%]"
                        />
                    </div>
                    <h1 className="mt-10 text-center font-lato text-4xl font-bold">
                        Hake House of Art
                    </h1>
                </div>
            </div> 
        </section>
    );
};
