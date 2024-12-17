import React from 'react';

import { HakePage } from './pages/hake';
import { NextAppPage } from './pages/next';
import { OurWorkLanding } from './pages/our-work-landing';
import { ReplikaPage } from './pages/replika';
import { SpotterPage } from './pages/spotter';
import { CbxFooter } from '../home/pages/cbx-footer';

const OurWorkRoute = () => {
    return (
        <>
            <OurWorkLanding />
            <HakePage />
            <ReplikaPage />
            <SpotterPage />
            <NextAppPage />
            <CbxFooter/>
        </>
    );
};

export default OurWorkRoute;
