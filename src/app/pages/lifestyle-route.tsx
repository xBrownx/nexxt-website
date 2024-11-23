import * as React from 'react';import { lifestyleAssets as ASSETS } from '@/assets';import { SectionTitle } from '@/components/layouts';import { InfiniteScroll } from '@/components/ui/infitine-scroll';import { useMobile } from '@/hooks/use-mobile';import { cn } from '@/utils/cn';const ScrollingImages = () => {    return (        <InfiniteScroll>            <div className="flex h-[120px] w-max max-w-fit gap-4 pr-8 md:h-[300px] md:gap-8">                {ASSETS.img.carousel.map((image, idx) => (                    <img                        key={idx}                        src={image.src}                        alt={image.alt}                        className={`h-full w-auto rounded-lg object-contain`}                    />                ))}                {ASSETS.img.carousel.map((image, idx) => (                    <img                        key={idx}                        src={image.src}                        alt={image.alt}                        className={`h-full w-auto rounded-lg object-contain`}                    />                ))}            </div>        </InfiniteScroll>    );};export const LifestyleRoute: React.FC = () => {    const isMobile = useMobile();    return (        <section            className={cn(                `box-border md:h-screen w-screen bg-background-primary pb-16 md:pb-32 flex flex-col justify-end`,            )}        >            <div                className={cn(                    `box-border flex md:size-fit md:gap-32 overflow-hidden md:px-40 md:pb-8 md:pt-32 gap`,                )}            >                <SectionTitle                    variant={isMobile ? 'mobile' : 'col'}                    subtitleVariant={'default'}                    indentVariant={'default'}                    subtitle={'LIFESTYLE'}                    title={'Everyday is an\nexperience'}                    paragraph={                        'The essence of Melbourne’s vibrant lifestyle, offering a perfect blend of\nconvenience, culture, and connectivity.'                    }                />            </div>            <ScrollingImages />        </section>    );};