import React from 'react';
import teamphoto from '@/assets/images/winnyandy.jpg';
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
                        style={{ fontFamily: 'Evermore' }}
                    >
                        Embracing the dual-sided brilliance of creativity and
                        logic
                    </h1>

                    {/* tiles*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {philosophyData.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center w-full h-[100px] rounded-3xl hover:bg-black transition-all duration-300 animate-slideIn"
                            >
                                <img
                                    src={item.icon}
                                    alt={`${item.title} Icon`}
                                    className="w-16 object-cover m-3 animate-wiggle"
                                />
                                <div className="flex flex-col justify-between">
                                    <h2 className="text-xl font-arial font-bold leading-tight mb-1">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-primary-white font-arial leading-none mr-3 mb-1">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* meet the team bounce animate*/}
            <section className="relative my-12 overflow-hidden h-32 flex items-center pt-10">
                <div className="absolute whitespace-nowrap animate-bounce-horizontal">
                    <span
                        className="text-5xl font-bold mx-4"
                        style={{ fontFamily: 'Evermore' }}
                    >
                        meet the team
                    </span>
                </div>
            </section>

            {/* team photos */}
            <section className="flex flex-col md:flex-row justify-center items-center gap-8 px-10 w-full">
                {/* browny photo */}
                <div className="relative w-full md:w-[25%] group">
                    <img
                        src={teamphoto}
                        alt="Andrew Brown"
                        className="w-full h-auto object-cover"
                    />
                    {/* hover with info */}
                    <div className="absolute top-1/2 left-0 w-full h-1/3 bg-white text-black opacity-0 group-hover:opacity-70 transform group-hover:translate-y-0 translate-y-1/2 transition-all duration-300 flex items-center justify-center px-8">
                        <p className="text-sm font-arial">
                            With a Bachelor’s degree in Computer Science and
                            unmatched expertise in web and app development, Andy
                            is the backbone of our technical operations. A
                            master of clean, efficient code, he ensures every
                            platform runs smoothly, reliably, and at peak
                            performance. From tackling complex functionality to
                            optimizing back-end processes, Andy’s meticulous
                            attention to detail and problem-solving skills
                            guarantee that every project not only works
                            seamlessly but exceeds expectations.
                        </p>
                    </div>
                    {/* name and job title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                        <h3 className="text-2xl font-bold mb-1">
                            Andrew Brown
                        </h3>
                        <p className="text-lg text-primary-white">
                            Co-Founder | Lead Web and App Developer
                        </p>
                    </div>
                </div>

                {/* winny photo */}
                <div className="relative w-full md:w-[25%] group">
                    <img
                        src={teamphoto}
                        alt="Winny Clayton"
                        className="w-full h-auto object-cover"
                    />
                    {/* hover with info */}
                    <div className="absolute top-1/2 left-0 w-full h-1/3 bg-white text-black opacity-0 group-hover:opacity-70 transform group-hover:translate-y-0 translate-y-1/2 transition-all duration-300 flex items-center justify-center px-8">
                        <p className="text-sm font-arial">
                            With a Bachelor’s degree in IT and a strong
                            background in graphic design, Winny is the creative
                            and technical force behind beautifully crafted
                            digital experiences. As both a designer and
                            developer, she bridges the gap between aesthetics
                            and functionality, specialising in web and app
                            development, UI/UX design, and branding. Winny’s
                            unique ability to envision and build user-friendly,
                            visually stunning platforms ensures every project
                            stands out and delivers results.
                        </p>
                    </div>
                    {/* name and title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                        <h3 className="text-2xl font-bold mb-1">
                            Winny Clayton
                        </h3>
                        <p className="text-lg text-primary-white">
                            Co-Founder | Digital Product Developer & Designer
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
