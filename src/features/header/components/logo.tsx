import * as React from 'react';import headerLogo from '@/assets/header-logo.svg';import { Link } from '@/components/ui/link';import { useNavigationContext } from '@/context/navigation-context';export const Logo = () => {    const { navigateToPage } = useNavigationContext();    return (        <div className={`w-[190px] md:w-auto`}>            <Link onClick={() => navigateToPage('landing')}>                <img src={headerLogo} alt="business-logo" />            </Link>        </div>    );};