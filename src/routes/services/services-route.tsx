import React from 'react';

import { ServicesLanding } from '@/routes/services/pages/services-landing';
import { CbxFooter } from '../home/pages/cbx-footer';

export const ServicesRoute = () => {
    return (
        <>
            <ServicesLanding />
            <CbxFooter />
        </>
    );
};

export default ServicesRoute;
