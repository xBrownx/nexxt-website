import React from 'react';import testRing from '../assets/test-ring.svg';export function OurWorkLanding() {    return (        <section className="flex h-screen items-center justify-center bg-y-grey-gradient">            <div className="flex h-full w-[1440px] items-center justify-center">                <div className={'flex-1'}>                    <img src={testRing} alt={''} />                </div>                <div className={'flex flex-1 flex-col gap-6'}>                    <h1                        className={                            'font-lato text-5xl font-bold text-primary-white'                        }                    >                        Our Work                    </h1>                    <p                        className={                            'w-3/5 font-lato text-lg font-light text-white/80'                        }                    >                        From local legends to global players, we’ve worked with                        businesses of all shapes and sizes. Whether it’s web                        design, app development, branding, or prototyping, we                        turn big ideas into standout solutions with a creative                        edge.                    </p>                </div>            </div>        </section>    );}