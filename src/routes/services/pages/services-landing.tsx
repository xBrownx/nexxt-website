import React from 'react';

import servicesheaderimg from '@/routes/services/assets/services img.png'

import { ServiceCards } from '@/routes/services/components/service-cards';
import { WhyChooseUs } from '@/routes/services/components/why-choose-us';
import { LearnVideo } from '@/routes/services/components/learn-video'

export function ServicesLanding() {
    return (
        <>
            <section className="relative flex flex-col items-center justify-center bg-y-grey-gradient">
                <div className="mb-20 mt-32 flex w-full flex-col pt-10">
                    <div className="flex size-full justify-center">
                        <div className="flex h-full w-full flex-col justify-center">
                            <div className="flex h-full w-full flex-col justify-center px-4">
                            <img src={servicesheaderimg} alt={''} className={'z-10 w-full'} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="-mb-20 flex w-full items-center justify-center">
                    <div className="relative flex w-[1440px] flex-col justify-center">
                        <div className="z-10 flex h-fit w-full flex-col justify-center">
                            <ServiceCards />
                        </div>
                    </div>
                </div>

                {/* <img
                    src={bgFlare}
                    alt=""
                    className="absolute right-[-250px] top-[150px] z-0 animate-rotate-slow transition-all hover:-translate-x-full"
                /> */}
            </section>

            <section className="relative flex w-full items-center justify-center bg-y-grey-gradient pt-10">
                <div className="w-[1440px]">
                    <LearnVideo />
                </div>
            </section>
        </>
    );
}
