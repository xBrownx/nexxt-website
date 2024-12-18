import { HomeBrands } from '@/routes/home/pages/home-brands';
import { HomeChat } from '@/routes/home/pages/home-chat';
import { HomeLanding } from '@/routes/home/pages/home-landing';
import { HomeToolkit } from '@/routes/home/pages/home-toolkit';
import { CbxFooter } from '@/routes/home/pages/cbx-footer';
import CustomCursor from '@/routes/home/components/cursor';


const HomeRoute = () => {
    return (
        <div>
            <CustomCursor />
            <HomeLanding />
            <HomeBrands />
            <HomeToolkit />
            <HomeChat />
            <CbxFooter />
        </div>
    );
};

export default HomeRoute;
