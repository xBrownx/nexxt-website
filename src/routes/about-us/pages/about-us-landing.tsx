import React from 'react';import teamphoto from '@/assets/images/winnyandy.jpg';
import tackleIcon from '@/assets/images/philosophytiles/tackle.png';
import passionateIcon from '@/assets/images/philosophytiles/passionate.png';
import partnerIcon from '@/assets/images/philosophytiles/partner.png';
import createIcon from '@/assets/images/philosophytiles/create.png';
import craftIcon from '@/assets/images/philosophytiles/craft.png';

export function AboutUsLanding() {
    const philosophyData = [
        {
            title: 'WE CREATE',
            text: 'cutting-edge digital solutions that blend creativity and precision, delivering results that wow and perform.',
            icon: createIcon,
        },
        {
            title: 'WE TACKLE',
            text: 'every project with energy, care, and enthusiasm - because when we’re excited, amazing things happen.',
            icon: tackleIcon,
        },
        {
            title: "WE'RE PASSIONATE",
            text: 'about building real connections, keeping things authentic, transparent, and fun along the way.',
            icon: passionateIcon,
        },
        {
            title: 'WE PARTNER',
            text: 'with bold thinkers to turn big ideas into reality, whether it’s apps, websites, branding, or prototyping.',
            icon: partnerIcon,
        },
        {
            title: 'WE CRAFT SYSTEMS',
            text: 'that run seamlessly, helping your vision come to life with high-performance, flawless functionality.',
            icon: craftIcon,
        },
    ];

    return (
        <div className="bg-primary-grey text-primary-white">
            {/* photo, title and tiles div */}
            <section className="flex flex-col md:flex-row items-start mx-auto w-full max-w-screen-xl pt-10">
                {/* photo div */}
                <div className="flex md:w-[700px] mb-4 md:mb-0 md:mr-8 pt-0 md:pt-20">
                    <img
                        src={teamphoto}
                        alt="CBxTeamPhoto"
                        className="w-full md:w-[900px] h-auto object-cover scale-110 transition-all duration-300"
                    />
                </div>

                {/* title and tiles div */}
                <div className="flex flex-col items-start w-full p-5">
                    {/* title */}
                    <h1
                        className="text-2xl md:text-3xl pl-3 pt-10 mb-10"
                    >
                        Embracing the dual-sided brilliance of creativity and
                        logic
                    </h1>
                    </div>
            </section>
        </div>
    );
}
