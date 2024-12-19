import React, { useRef } from 'react';

import { Project01Page } from './pages/project01';
import { Project02Page } from './pages/project02';
import { Project03Page } from './pages/project03';
import { Project04Page } from './pages/project04';
import { Project05Page } from './pages/project05';
import { Project06Page } from './pages/project06';
import { MeetTheTeam } from './pages/meet-the-team';
import { OurWorkLanding } from './pages/our-work-landing';
import { CbxFooter } from '../home/pages/cbx-footer';

const OurWorkRoute = () => {
    // references for each project section
    const project01Ref = useRef<HTMLDivElement>(null);
    const project02Ref = useRef<HTMLDivElement>(null);
    const project03Ref = useRef<HTMLDivElement>(null);
    const project04Ref = useRef<HTMLDivElement>(null);
    const project05Ref = useRef<HTMLDivElement>(null);
    const project06Ref = useRef<HTMLDivElement>(null);
    const meetTheTeamRef = useRef<HTMLDivElement>(null);

    // scorll handlers
    const scrollToProject01 = () =>
        project01Ref.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToProject02 = () =>
        project02Ref.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToProject03 = () =>
        project03Ref.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToProject04 = () =>
        project04Ref.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToProject05 = () =>
        project05Ref.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToProject06 = () =>
        project06Ref.current?.scrollIntoView({ behavior: 'smooth' });
    const scrollToMeetTheTeam = () =>
        meetTheTeamRef.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
            <OurWorkLanding
                onP1Click={scrollToProject01}
                onP2Click={scrollToProject02}
                onP3Click={scrollToProject03}
                onP4Click={scrollToProject04}
                onP5Click={scrollToProject05}
                onP6Click={scrollToProject06}
                onTeamClick={scrollToMeetTheTeam}
            />
            <div ref={project01Ref}>
                <Project01Page />
            </div>
            <div ref={project02Ref}>
                <Project02Page />
            </div>
            <div ref={project03Ref}>
                <Project03Page />
            </div>
            <div ref={project04Ref}>
                <Project04Page />
            </div>
            <div ref={project05Ref}>
                <Project05Page />
            </div>
            <div ref={project06Ref}>
                <Project06Page />
            </div>
            <div ref={meetTheTeamRef}>
                <MeetTheTeam />
            </div>
            <CbxFooter />
        </>
    );
};

export default OurWorkRoute;