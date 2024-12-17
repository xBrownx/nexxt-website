import { HomeBrands } from '@/routes/home/pages/home-brands';
import { HomeChat } from '@/routes/home/pages/home-chat';
import { HomeLanding } from '@/routes/home/pages/home-landing';
import { HomeToolkit } from '@/routes/home/pages/home-toolkit';
import { CbxFooter } from '@/routes/home/pages/cbx-footer';

const HomeRoute = () => {
    return (
        <div>
            <HomeLanding />
            <HomeBrands />
            <HomeToolkit />
            <HomeChat />
            <CbxFooter />
        </div>
    );
};

export default HomeRoute;
