import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

import demo01 from '@/routes/our-work/assets/next-01.png';
import demo02 from '@/routes/our-work/assets/next-02.png';
import demo03 from '@/routes/our-work/assets/next-03.png';
import demo04 from '@/routes/our-work/assets/next-04.png';
import { MobileDemo } from '@/routes/our-work/components/mobile-demo';

export const Project06Page = () => {
    return (
        <section className="flex h-screen w-full flex-col items-center justify-center bg-y-grey-gradient">
            <div className="flex w-[1440px] flex-row items-start gap-10">

                <div className="relative flex size-full flex-1 flex-col items-center">
                    <div className="relative flex size-full items-center justify-center">
                        <MobileDemo
                            imgSrc={demo03}
                            className={'absolute z-10 mr-[30rem] mt-16 w-64'}
                        />
                        <MobileDemo
                            imgSrc={demo04}
                            className={'absolute z-10 mr-32 mt-32 w-64'}
                        />
                        <MobileDemo
                            imgSrc={demo02}
                            className={'absolute z-20 ml-64 mt-16 w-64'}
                        />
                        <MobileDemo
                            imgSrc={demo01}
                            className={'absolute z-10 ml-[38rem] mt-32 w-64'}
                        />
                    </div>

                    <h1 className="relative mt-[14rem] text-center font-title text-white text-4xl font-bold">
                        NEXT Mobile Application
                    </h1>
                </div>


                <div className="flex flex-col items-start gap-10">
                    <div className="h-full w-[300px] text-[15px] leading-loose">
                        <p className="text-justify font-bodycopy text-sm text-white leading-loose tracking-wider">
                            This project emphasised the importance of creating
                            prototypes across various fidelity levels—low,
                            medium, and high—to ensure a thoughtful and
                            iterative design process. Industry-standard tools
                            played a crucial role in the development pipeline:
                            Figma was used for crafting visually appealing and
                            user-centric designs, Marvel enabled the creation
                            of functional and interactive prototypes, and
                            Ballpark HQ facilitated usability testing with the
                            general public.
                        </p>
                        <p className="text-justify font-bodycopy text-sm text-white leading-loose tracking-wider mt-4">
                            This approach underscores our commitment to
                            delivering intuitive and effective designs through
                            meticulous planning, user feedback integration, and
                            the application of best practices in UI/UX design.
                        </p>
                    </div>


                    <span className="flex flex-row items-center gap-5 font-title text-white text-sm tracking-custom">
                        <AiFillCaretRight className="mt-1 rotate-180 size-5" />
                        <span className="text-start">
                            UI/UX
                            <br />
                            DESIGN
                        </span>
                    </span>
                </div>
            </div>
        </section>
    );
};
