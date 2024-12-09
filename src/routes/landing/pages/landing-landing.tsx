import React from 'react';
import placeholder from '@/assets/images/landing-placeholder.jpg';
import { SplitScreen } from '@/components/layouts';
import { Button } from '@/components/ui/button';

import { ArrowButton } from '@/components/ui/button/arrow-button';
import { DisplayTitle } from '@/components/ui/display-title';
import { useNavigationContext } from '@/context/navigation-context';
import { NavButton } from '@/features/header/components';
import {
    headerConfig,
    HeaderConfigKey,
} from '@/features/header/config/header-config';
import { cn } from '@/utils/cn';
export const LandingLanding = () => {
    const { pageRefs, navigateToPage } = useNavigationContext();

    return (
        <section
            ref={pageRefs.landing}
            className={`flex h-screen w-screen flex-col items-center justify-center bg-accent-purple`}
        >
            <div
                className={`flex h-full w-[1440px] flex-col items-center justify-center`}
            >
                <div className="relative box-border flex size-full justify-center overflow-hidden px-0">
                    <div
                        className={cn(
                            'flex h-full flex-1 items-center justify-center',
                            'pt-56 pb-16',
                        )}
                    >
                        <div
                            className={cn(
                                'flex size-full  flex-1 items-center justify-center ',
                                'border-r-2 border-r-primary-grey/20 ',
                            )}
                        >
                            <img
                                src={placeholder}
                                alt={''}
                                className={'opacity-0'}
                            />
                        </div>
                    </div>

                    <div
                        className={'flex flex-1 flex-col justify-center pl-20'}
                    >
                        <DisplayTitle align={'default'}>
                            {'Github'}
                        </DisplayTitle>
                        <DisplayTitle align={'default'}>
                            {'Testing'}
                        </DisplayTitle>
                        <p
                            className={
                                'py-4 font-primaryLight text-xl text-white/70'
                            }
                        >
                            Grow your idea through powerful branding and
                            <br />
                            modern tech solutions.
                        </p>
                        <Button
                            className={cn(
                                `group flex relative w-fit overflow-hidden md:rounded-lg md:border md:border-primary-grey bg-transparent md:px-6 md:py-2 shadow-none md:after:absolute md:after:inset-x-0 md:after:-top-full md:after:bottom-full md:after:z-[-0] md:after:block md:after:bg-primary-white md:after:px-2 md:after:py-4 md:after:transition-all md:after:duration-300 md:after:content-[''] md:hover:bg-transparent md:hover:after:inset-x-0 md:after:hover:bottom-0 md:hover:after:top-0`,
                            )}
                            onClick={() => navigateToPage('')}
                        >
                            <p
                                className={`duration-[0.35s] z-50 m-0 w-full bg-transparent p-0 text-right font-secondaryRegular text-4xl font-bold text-primary-grey transition-all md:text-lg md:font-normal md:group-hover:text-primary-white`}
                            >
                                LEARN MORE
                            </p>
                        </Button>
                    </div>
                </div>
                <div
                    className={cn(
                        `absolute bottom-0 md:right-0 z-10 flex h-fit px-8 py-16 md:w-auto`,
                        `w-full justify-center`,
                    )}
                >
                    <ArrowButton onClick={() => navigateToPage('home')} />
                </div>
            </div>
        </section>
    );
};
