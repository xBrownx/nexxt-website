import { Button } from '@/components/ui/button';import { Heading } from '@/components/ui/text/text';import techIcons from '@/routes/home/assets/tech-icons.png';export const HomeToolkit = () => {    return (        <section            className={'flex h-screen w-full justify-center bg-primary-grey'}        >            <div className={'flex h-full w-[1440px] flex-row gap-32'}>                <div                    className={'flex size-full flex-1 flex-col justify-center'}                >                    <div className={'flex flex-col justify-center gap-6'}>                        <Heading                            className={                                'text-[52px] font-bold leading-[52px] text-white'                            }                        >                            Our Technical Toolkit                        </Heading>                        <p                            className={                                'font-lato text-[23px] font-light leading-[27px] tracking-wider text-white/80'                            }                        >                            We leverage the latest and most advanced tools in                            design and development to create innovative,                            future-ready solutions. Our toolkit is constantly                            evolving as we learn and adapt to emerging                            technologies, ensuring we stay at the forefront of                            the industry. These are the technologies that power                            our ability to craft exceptional digital                            experiences, combining precision, creativity, and                            efficiency.                        </p>                    </div>                    <div>                        <Button className={'mt-[105px] w-[184px] bg-white'}>                            <span className={'font-lato text-[19px] font-bold'}>                                OUR WORK                            </span>                        </Button>                    </div>                </div>                <div                    className={'flex size-full flex-1 flex-col justify-center'}                >                    <img src={techIcons} alt="Technical Toolkit" />                </div>            </div>        </section>    );};