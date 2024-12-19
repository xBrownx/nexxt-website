import { AiFillCaretRight } from 'react-icons/ai';

import bgFlare from '@/routes/home/assets/bg-flare-2.png';
import { BrandsScroll } from '@/routes/home/components/brands-scroll';
import mobileDemo from '@/routes/services/assets/mobile-demo.png';
import webDemo from '@/routes/services/assets/web-demo.png';
export const HomeBrands = () => {
    return (
        <section
            className={
                'relative flex h-screen w-full flex-col items-center gap-40 pt-40'
            }
        >
            <div className={'flex w-[1440px] flex-row items-center gap-10'}>
                <span
                    className={
                        'flex flex-row items-center gap-5 font-title text-sm tracking-custom'
                    }
                >
                    CLIENTS <AiFillCaretRight className={'size-5'} />
                </span>
                <BrandsScroll />
            </div>
            <div className={'flex w-[1440px] flex-row items-start gap-10'}>
                <span
                    className={
                        'flex flex-row items-start gap-5 font-title text-sm tracking-custom'
                    }
                >
                    <span className={'text-end'}>
                        WHY
                        <br />
                        CHOOSE
                        <br />
                        US?
                    </span>{' '}
                    <AiFillCaretRight className={'mt-1 size-5'} />
                </span>
                <div className={'h-full w-[300px] text-[15px] leading-loose '}>
                    <p className={'text-justify font-bodycopy tracking-widest'}>
                        <span className={'font-title'}>WE’RE PASSIONATE</span>{' '}
                        about building real connections, keeping things
                        authentic, transparent, and fun along the way.{' '}
                        <span className={'font-title'}>
                            WE TACKLE EVERY PROJECT
                        </span>{' '}
                        with energy, care, and enthusiasm - because when we’re
                        excited, amazing things happen.{' '}
                        <span className={'font-title'}>WE CREATE</span>{' '}
                        cutting-edge digital solutions that blend creativity and
                        precision, delivering results that wow and perform.{' '}
                        <span className={'font-title'}>WE PARTNER</span> with
                        bold thinkers to turn big ideas into reality, whether
                        it’s apps, websites, branding, or prototyping.{' '}
                        <span className={'font-title'}>WE CRAFT SYSTEMS</span>{' '}
                        with bold thinkers to turn big ideas into reality,
                        whether it’s apps, websites, branding, or prototyping.
                    </p>
                </div>
                <div
                    className={
                        'relative flex size-full flex-1 items-start justify-end'
                    }
                >
                    <img
                        src={mobileDemo}
                        alt={''}
                        className={
                            'absolute bottom-0 left-[10%] z-10 size-fit self-end'
                        }
                    />
                    <img src={webDemo} alt={''} className={'size-fit'} />
                </div>
            </div>

            <img
                src={bgFlare}
                alt={''}
                className={
                    'absolute bottom-[-400px] left-[-400px] z-0 animate-rotate-slow'
                }
            />
        </section>
    );
};
