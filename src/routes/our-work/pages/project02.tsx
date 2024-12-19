import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';

import { DesktopDemo } from '@/routes/our-work/components/desktop-demo';
import ReplikaVideo from '@/routes/our-work/assets/replika-vid.mp4';

export const Project02Page = () => {
    return (
        <section className="flex h-screen w-full flex-col items-center justify-center bg-y-grey-gradient">
            <div className="flex w-[1440px] flex-row items-start gap-10">

                <div className="relative flex size-full flex-1 flex-col items-center">
                    <div className="relative flex size-full items-center justify-center">

                        <DesktopDemo
                            mediaSrc={ReplikaVideo}
                            className="absolute z-10 mr-[30rem] mt-16 w-[450px]"
                        />
                    </div>
                    <h1 className="relative mt-[16rem] text-center font-title text-white text-4xl font-bold">
                        Replika
                    </h1>
                </div>


                <div className="flex flex-col items-start gap-10">
                    <div className="h-full w-[300px] text-[15px] leading-loose">
                        <p className="text-justify font-bodycopy text-sm text-white leading-loose tracking-wider">
                            This project involved designing a fully interactive
                            and animated website prototype using Figma,
                            showcasing the website's functionality and user
                            experience without any code. By incorporating
                            dynamic interactions and animations, the design
                            provided a realistic preview of the final product,
                            allowing customers to visualise the website before
                            development begins.
                        </p>
                        <p className="text-justify font-bodycopy text-sm text-white leading-loose tracking-wider mt-4">
                            This process not only ensures alignment with the
                            client’s vision but also streamlines the development
                            phase by addressing design feedback early. It
                            demonstrates my ability to leverage Figma’s powerful
                            features to create engaging, high-fidelity
                            prototypes that bridge the gap between concept and
                            execution.
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
