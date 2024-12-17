export function AboutUsLanding() {    return (        <section className="flex h-screen items-center justify-center bg-y-grey-gradient">            <div className="flex h-full w-[1440px] items-center justify-center gap-8 px-28 py-80">                <div                    className={                        ' flex size-full flex-[1] items-center justify-center bg-x-grey-gradient'                    }                ></div>                <div                    className={                        'flex size-full flex-[2] flex-col justify-center gap-8'                    }                >                    <h1                        className={                            '-translate-x-20 font-lato text-5xl font-bold text-white'                        }                    >                        Embracing the dual-sided brilliance of creativity and                        logic                    </h1>                    <div className={'flex flex-col gap-6 pr-28'}>                        <p                            className={                                'text-justify font-lato text-lg font-light leading-[23px] tracking-[0.1rem] text-white'                            }                        >                            At CBx Creative, we turn bold ideas into exceptional                            digital experiences. With a passion for innovation                            and a commitment to quality, we craft seamless apps,                            high-performance websites, and memorable brands that                            truly stand out.                        </p>                        <p                            className={                                'text-justify font-lato text-lg font-light leading-[23px] tracking-[0.1rem] text-white'                            }                        >                            We thrive on collaboration, combining our strengths                            and continuously learning from each other to deliver                            the best results. We believe great ideas are born                            from great conversations—whether over coffee or a                            casual beer—and we’re here to bring your vision to                            life.                        </p>                        <p                            className={                                'text-justify font-lato text-lg font-light leading-[23px] tracking-[0.1rem] text-white'                            }                        >                            We’re dedicated, creative, and always up for a                            challenge. Let’s work together to build something                            extraordinary.                        </p>                    </div>                </div>            </div>        </section>    );}