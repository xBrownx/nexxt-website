import bgFlare from '@/routes/home/assets/bg-flare-2.png';

import { BrandsScroll } from '@/routes/home/components/brands-scroll';
export const HomeBrands = () => {
    return (
        <section
            className={
                'relative flex h-screen w-full flex-col items-center pt-20'
            }
        >
            <div className={'w-[1440px]'}>
                <div
                    className={
                        'flex w-full max-w-full flex-col items-center justify-center'
                    }
                >
                    <h1
                        className={
                            'w-fit text-center font-lato text-5xl text-[#000000]'
                        }
                    >
                        Brands we&#39;ve worked with
                    </h1>
                </div>
            </div>
            <BrandsScroll />
            <div className={'z-10 w-[1440px]'}>
                <div
                    className={
                        'relative  flex h-[516px] w-full max-w-full flex-col items-center justify-center bg-[#D9D9D9]'
                    }
                ></div>
            </div>
            <img
                src={bgFlare}
                alt={''}
                className={'absolute bottom-[-400px] left-[-400px] z-0'}
            />
        </section>
    );
};
