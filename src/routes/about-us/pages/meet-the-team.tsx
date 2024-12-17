export const MeetTheTeam = () => {    return (        <section className="flex h-screen items-center justify-center bg-[#EDEDEB]">            <div                className={'flex h-full w-[1440px] flex-col gap-[105px] py-60'}            >                <h1 className={'font-lato text-5xl font-bold'}>                    Meet the Team                </h1>                <div                    className={'flex size-full flex-row justify-center gap-24'}                >                    <div className={'flex h-full w-[25rem] flex-col gap-4'}>                        <div className={'size-full bg-black/20'} />                        <div className={'flex flex-col'}>                            <h1 className={'font-lato tracking-widest'}>                                ANDREW BROWN                            </h1>                            <p className={'font-lato font-light tracking-wide'}>                                Co-Founder {' | '} Lead Developer{' '}                            </p>                        </div>                    </div>                    <div className={'flex h-full w-[25rem] flex-col gap-4'}>                        <div className={'size-full bg-black/20'} />                        <div className={'flex flex-col'}>                            <h1 className={'font-lato text-lg tracking-widest'}>                                WINNY CLAYTON                            </h1>                            <p className={'font-lato font-light tracking-wide'}>                                Co-Founder {' | '} Lead Designer {' | '}{' '}                                Developer{' '}                            </p>                        </div>                    </div>                </div>            </div>        </section>    );};