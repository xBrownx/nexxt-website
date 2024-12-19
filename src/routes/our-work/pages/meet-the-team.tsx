import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { MobileDemo } from '@/routes/our-work/components/mobile-demo';

import demo01 from '../assets/hake-01.jpg';
import demo02 from '../assets/hake-02.jpg';
import demo03 from '../assets/hake-03.jpg';

export const MeetTheTeam = () => {
    return (
        <section className="flex h-screen w-full flex-col items-center justify-center bg-[#EDEDEB]">
            <div className="flex w-[1440px] flex-row items-start gap-10">

                <div className="flex flex-row items-start gap-10">
                    <span className="flex flex-row items-start gap-5 font-title text-sm tracking-custom">
                        <span className="text-end">TEAM</span>
                        <AiFillCaretRight className="mt-1 size-5" />
                    </span>
                    <div className="h-full w-[300px] text-[15px] leading-loose">
                        <p className="text-justify font-title text-3xl tracking-wider">
                            Embracing the dual-sided brilliance of creativity
                            and logic
                        </p>
                        <p className="text-justify font-bodycopy text-sm leading-loose tracking-wider mt-4">
                            At CBx Creative, we turn bold ideas into exceptional
                            digital experiences. With a passion for innovation
                            and a commitment to quality, we craft seamless apps,
                            high-performance websites, and memorable brands that
                            truly stand out. We thrive on collaboration,
                            combining our strengths and continuously learning
                            from each other to deliver the best results. We
                            believe great ideas are born from great
                            conversations—whether over coffee or a casual
                            beer—and we’re here to bring your vision to life.
                            We’re dedicated, creative, and always up for a
                            challenge. Let’s work together to build something
                            extraordinary.
                        </p>
                    </div>
                </div>


                <div className="relative flex size-full flex-1 flex-col items-center">
                    <div className="flex size-full items-center justify-center"></div>
                </div>
            </div>
        </section>
    );
};
