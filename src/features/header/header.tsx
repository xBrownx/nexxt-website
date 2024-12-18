import * as React from 'react';
import { NavLink, useLocation } from 'react-router';

import website from '@/assets/images/websitelogo.png';
import { Link } from '@/components/ui/link';
import { paths } from '@/config/paths';
import { GlitchHover } from '@/features/glitch-text';

import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/utils/cn';

type NavigationItem = {
    name: string;
    to: string;
};

const Logo = () => {
    const { scrollDirection } = useScroll();
    return (
        <Link to={paths.home.getHref()} className={`flex-1`}>
            <div className={'flex items-center justify-center'}>
                <span
                    className={`w-fit items-center  text-5xl font-normal text-navbar-logo `}
                >
                    <img
                        src={website}
                        alt="Logo"
                        className={cn(
                            'transition-all duration-500',
                            scrollDirection === 'up'
                                ? 'size-[50px]'
                                : 'size-[100px]',
                        )}
                    />
                </span>
            </div>
        </Link>
    );
};

const NavigationLink = ({ item }: { item: NavigationItem }) => {
    const location = useLocation();
    return (
        <NavLink
            key={item.name}
            to={item.to}
            end={item.name !== 'Enquire'}
            className={cn(
                'inline-block font-subheading text-sm font-bold tracking-custom uppercase',
                location.pathname === item.to
                    ? 'border-b-2 border-accent-purple'
                    : '',
            )}
            // className={
            //     location.pathname !== item.to
            //         ? 'bg-nav-link-gradient bg-nav-size bg-left-bottom bg-no-repeat pb-[2px] [transition:background-size_0.5s,_background-position_0s_0.5s] hover:bg-nav-size-hover hover:bg-right-bottom'
            //         : ''
            // }
        >
            {/*<span*/}
            {/*//     className={cn(*/}
            {/*//         'inline-block font-lato text-sm font-normal uppercase tracking-widest text-navbar-link ',*/}
            {/*//         location.pathname === item.to*/}
            {/*//             ? 'border-b-2 border-accent-purple'*/}
            {/*// /!*            : '',*!/*/}
            {/*    )}*/}
            {/*>*/}
            <GlitchHover
                className={'text-sm font-subheading tracking-custom uppercase'}
            >
                {item.name}
            </GlitchHover>
            {/*</span>*/}
        </NavLink>
    );
};

const EnquireButton = () => {
    return (
        <NavLink
            to={paths.enquire.getHref()}
            className={'flex-1'}
            // className={cn(
            //     'group m-0 p-0 bg-transparent flex self-end justify-end items-end relative w-fit overflow-hidden shadow-none',
            //     'md:self-center md:justify-center md:items-center',
            //     'md:rounded-lg md:px-6 md:py-2 md:after:absolute md:after:inset-x-0 ',
            //     "md:after:-top-full md:after:bottom-full md:after:z-[-1] md:after:block md:after:bg-navbar-button-hover md:after:px-2 md:after:py-4 md:after:transition-all md:after:duration-300 md:after:content-['']",
            //     'md:hover:bg-transparent md:hover:after:inset-x-0 md:after:hover:bottom-0 md:hover:after:top-0',
            //     'md:border md:border-navbar-button-hover',
            // )}
        >
            <div className={'relative inline-block'}>
                <span
                    className={cn(
                        'duration-[350ms] z-50 m-0 w-full bg-transparent p-0 transition-all',
                        'text-sm font-subheading tracking-custom uppercase text-transparent bg-link-gradient bg-clip-text underline',
                    )}
                >
                    Enquire
                </span>
                <span
                    className={
                        'absolute -bottom-px left-0 h-px w-full rounded-full bg-link-gradient '
                    }
                />
            </div>
        </NavLink>
    );
};

export function Header({ children }: { children: React.ReactNode }) {
    const { scrollDirection } = useScroll();
    const navigation = [
        { name: 'Services', to: paths.services.getHref() },
        { name: 'Our Work', to: paths.ourWork.getHref() },
    ].filter(Boolean) as NavigationItem[];
    return (
        <div className={'flex min-h-screen w-full flex-col'}>
            <aside
                className={cn(
                    'fixed z-40 flex w-screen flex-row items-center justify-center bg-nav-gradient transition-all duration-500',
                    scrollDirection === 'up' ? 'h-20' : 'h-40',
                )}
            >
                <nav className="box-border flex w-[1440px] flex-row items-center justify-between overflow-hidden">
                    <EnquireButton />
                    <Logo />
                    <div className="box-border flex h-full w-fit flex-1 flex-row items-center justify-end gap-12 overflow-hidden">
                        {navigation.map((item) => (
                            <NavigationLink key={item.name} item={item} />
                        ))}
                    </div>
                </nav>
            </aside>
            <main className="">{children}</main>
        </div>
    );
}
