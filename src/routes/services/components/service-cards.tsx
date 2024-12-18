import React from 'react';

import brandingIcon from '@/routes/services/assets/icon-service-branding.svg';
import commerceIcon from '@/routes/services/assets/icon-service-commerce.svg';
import mobileIcon from '@/routes/services/assets/icon-service-mobile.svg';
import solutionsIcon from '@/routes/services/assets/icon-service-solution.svg';
import webIcon from '@/routes/services/assets/icon-service-web.svg';
import uxIcon from '@/routes/services/assets/icon-ux.svg';
import mobileDemo from '@/routes/services/assets/mobile-demo.png';
import webDemo from '@/routes/services/assets/web-demo.png';

import { cn } from '@/utils/cn';

const ServiceCard = ({
    icon,
    title,
    body,
    isLeft,
}: {
    icon: any;
    title: string;
    body: string;
    isLeft?: boolean;
}) => {
    return (
        <div
            className={cn(
                'w-full rounded-xl p-px shadow-xl',
                // !isLeft ? 'bg-border-gradient' : 'bg-border-gradient-reverse',
            )}
        >
            <div
                className={
                    'flex size-full flex-col gap-4 rounded-xl bg-x-grey-gradient p-10 ' //this is the servicecards boxes
                }
            >
                                <h2 className={'font-subheading text-1xl font-bold text-white tracking-custom uppercase'}>
                    {title}
                </h2>
                <img src={icon} alt={''} className={'h-16 w-fit'} />

                <p className={'font-bodycopy text-sm text-white tracking-wider leading-loose'}>{body}</p>
                <h3
                    className={
                        'mt-6 font-subheading tracking-custom text-white underline hover:cursor-pointer'
                    }
                >
                    ENQUIRE
                </h3>
            </div>
        </div>
    );
};

export const ServiceCards = () => {
    return (
        <div className={'flex w-full flex-col px-16'}>
            <div
                className={'flex w-full  flex-row justify-center gap-16 pt-16 '}
            >
                <ServiceCard
                    isLeft
                    icon={mobileIcon}
                    title={'Mobile App Development'}
                    body={
                        "We specialise in creating full-stack, cross-platform, and native applications for both iOS and Android. From initial concept to final deployment, we deliver sleek, user-centric apps that cater to your audience's needs. Our services include app design, development, and testing, ensuring your app is polished, intuitive, and ready to launch."
                    }
                />
                <ServiceCard
                    icon={webIcon}
                    title={'Web Development'}
                    body={
                        'We design and develop custom websites tailored to your brand and user needs. Our process starts with discussing your vision and inspiration, followed by creating prototypes. From desktop to mobile-friendly designs, we ensure your website is visually engaging, functional, and responsive.'
                    }
                />
            </div>
            <div
                className={
                    'z-10 flex w-full flex-row justify-center gap-16 pt-16'
                }
            >
                <ServiceCard
                    isLeft
                    icon={brandingIcon}
                    title={'Branding & Identity Design'}
                    body={
                        "Your brand is more than just a logo—it's your story. We craft complete branding packages, including logo design, typography, colour palettes, and brand guidelines. We ensure your brand identity is consistent, memorable, and resonates with your target audience, setting you apart from the competition."
                    }
                />
                <ServiceCard
                    icon={uxIcon}
                    title={'UX/UI Design'}
                    body={
                        'We design intuitive and user-friendly interfaces for websites and apps that prioritise usability and engagement. Starting with collaborative brainstorming sessions, we create wireframes, prototypes, and visually stunning designs to ensure a seamless and enjoyable user experience.'
                    }
                />
            </div>
            <div
                className={
                    'z-10 flex w-full flex-row justify-center gap-16 pt-16'
                }
            >
                <ServiceCard
                    isLeft
                    icon={solutionsIcon}
                    title={'Custom Solutions'}
                    body={
                        'If your business needs a specific system that can’t be achieved with off-the-shelf plugins or software, we’re here to help. Whether it’s a bespoke booking system with advanced features, or any other functionality essential to your operations, we’ll design, develop, and integrate a solution that fits perfectly with your business goals and workflows. Whether creatively or logically—for your app or website, our team is also ready to provide expert guidance and innovative ideas to bring your vision to life.'
                    }
                />
                <ServiceCard
                    icon={commerceIcon}
                    title={'E&M-Commerce Solutions'}
                    body={
                        "We build seamless e-commerce and mobile commerce platforms designed to enhance your customers' shopping experience. From intuitive product catalogs to secure payment systems, we develop scalable solutions to help your business thrive in the digital marketplace. Whether you're launching an online store or enhancing an existing one, we’ve got you covered."
                    }
                />
            </div>
        </div>
    );
};
