import React from 'react';

import { Heading } from '@/components/ui/text';
import bgFlare from '@/routes/services/assets/bg-flare.png';

import { ServiceCards } from '@/routes/services/components/service-cards';
import { WhyChooseUs } from '@/routes/services/components/why-choose-us';
export function ServicesLanding() {
    return (
        <>
            <section className="relative flex h-screen items-center justify-center bg-#EDEDEB">
                <div className="flex h-screen w-full flex-col ">
                    <div className={'size-full flex-1 pt-40'}>
                        <div
                            className={
                                'flex size-full justify-center bg-y-grey-gradient'
                            }
                        >
                            <div
                                className={
                                    'flex h-full w-[1440px] flex-col justify-center'
                                }
                            >
                                <div
                                    className={
                                        'flex h-full w-1/2 flex-col justify-center gap-4'
                                    }
                                >
                                    <Heading className={'text-5xl text-white'}>
                                        What we do best
                                    </Heading>
                                    <p
                                        className={
                                            'font-lato text-lg text-white/80'
                                        }
                                    >
                                        We’re here to make your creative and
                                        technical ideas a reality. Whether
                                        you’re launching something new or
                                        enhancing an existing project, we
                                        provide tailored, affordable solutions
                                        designed to fit your goals. Here’s how
                                        we can support you:
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={
                            'flex size-full flex-1 flex-col items-center'
                        }
                    >
                        <div
                            className={
                                'relative flex w-[1440px] flex-col justify-center'
                            }
                        >
                            <div
                                className={
                                    'absolute z-10 flex h-fit w-full translate-y-1/2 flex-col justify-center'
                                }
                            >
                                <ServiceCards />
                                <WhyChooseUs />
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={bgFlare}
                    alt={''}
                    className={'absolute right-[-250px] top-[150px] z-0'}
                />
            </section>
            <section className="flex h-screen w-full items-center justify-center bg-white"></section>
        </>
    );
}
