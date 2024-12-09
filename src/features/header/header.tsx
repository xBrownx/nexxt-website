import * as React from 'react';
import { NavLink } from 'react-router';

import { Link } from '@/components/ui/link';
import { paths } from '@/config/paths';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/utils/cn';

import websitelogo from '@/assets/images/websitelogo.png';

type NavigationItem = {
    name: string;
    to: string;
};

const Logo = () => {
    return (
        <Link to={paths.home.getHref()} className={`w-[500px]`}>
            <div>
                <span
                    className={`w-fit items-center  text-5xl font-normal text-navbar-logo `}
                >
                    <img
                        src={websitelogo}
                        alt="Logo"
                        style={{height: '100px', width: '100px'}}
                    />
                </span>
            </div>
        </Link>
    );
};

const NavigationLinks = () => {
    const navigation = [
        { name: 'Services', to: paths.services.getHref() },
        { name: 'Our Work', to: paths.ourWork.getHref() },
        { name: 'About Us', to: paths.aboutUs.getHref() },
    ].filter(Boolean) as NavigationItem[];

    return (
        <div className="box-border flex size-full flex-row items-center justify-end gap-12 overflow-hidden">
            {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.to}
                    end={item.name !== 'Enquire'}
                >
                    <span
                        className={
                            'inline-block bg-nav-gradient bg-nav-size bg-left-bottom bg-no-repeat pb-[2px] font-secondaryRegular text-lg font-normal text-navbar-link [transition:background-size_0.5s,_background-position_0s_0.5s] hover:bg-nav-size-hover hover:bg-right-bottom '
                        }
                    >
                        {item.name}
                    </span>
                </NavLink>
            ))}

            <NavLink
                to={paths.enquire.getHref()}
                className={cn(
                    `group m-0 flex self-end justify-end md:justify-center md:self-center items-end md:items-center p-0 relative w-fit overflow-hidden md:rounded-lg md:border md:border-navbar-button-hover bg-transparent md:px-6 md:py-2 shadow-none md:after:absolute md:after:inset-x-0 md:after:-top-full md:after:bottom-full md:after:z-[-1] md:after:block md:after:bg-navbar-button-hover md:after:px-2 md:after:py-4 md:after:transition-all md:after:duration-300 md:after:content-[''] md:hover:bg-transparent md:hover:after:inset-x-0 md:after:hover:bottom-0 md:hover:after:top-0`,
                )}
            >
                <span
                    className={`duration-[0.35s] z-50 m-0 w-full bg-transparent p-0 text-right font-secondaryRegular text-4xl text-navbar-button-hover transition-all md:text-lg md:font-normal md:group-hover:text-navbar-button-hover-secondary`}
                >
                    Enquire
                </span>
            </NavLink>
        </div>
    );
};

export function Header({ children }: { children: React.ReactNode }) {
    const { scrollDirection } = useScroll();

    return (
        <div className={'flex min-h-screen w-full flex-col'}>
            <aside
                className={cn(
                    'fixed z-40 flex w-screen flex-row items-center justify-center bg-primary-grey transition-all duration-500',
                    scrollDirection === 'up' ? 'h-20' : 'h-40',
                )}
            >
                <nav className="box-border flex w-[1440px] flex-row justify-between items-center overflow-hidden h20">
                    <Logo />
                    <NavigationLinks />
                </nav>
            </aside>
            <main>{children}</main>
        </div>
    );
}
