import React from 'react';

import { AboutUsLanding } from './pages/about-us-landing';
import { MeetTheTeam } from './pages/meet-the-team';
import { CbxFooter } from '../home/pages/cbx-footer';

const AboutUsRoute = () => {
    return (
        <>
            <AboutUsLanding />
            <MeetTheTeam />
            <CbxFooter/>
        </>
    );
};

export default AboutUsRoute;
