import { InfiniteScroll } from '@/features/infitine-scroll';
import averageJoesLogo from '@/routes/home/assets/average-joes-logo.png';
import elceLogo from '@/routes/home/assets/elce-logo.png';
import hakeLogo from '@/routes/home/assets/hake-logo.png';
import lappLogo from '@/routes/home/assets/lapp-logo.png';

import lcTransitLogo from '@/routes/home/assets/lc-transit-logo.png';
import replikaLogo from '@/routes/home/assets/replika-logo.png';
export const BrandsScroll = () => {
    return (
        <InfiniteScroll>
            <div className={'flex w-full flex-row'}>
                <a
                    href="https://lctransit.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={lcTransitLogo}
                        alt="lcTransitLogo"
                        className="opacity-30 hover:opacity-100 transition-opacity duraction-300"
                    />
                </a>
                <a
                    href="https://elceswim.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={elceLogo}
                        alt="elceLogo"
                        className="opacity-30 hover:opacity-100 transition-opacity duraction-300"
                    />
                </a>
                <a
                    href="https://www.hake.house/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={hakeLogo}
                        alt="hakeLogo"
                        className="opacity-30 hover:opacity-100 transition-opacity duraction-300"
                    />
                </a>
                <a
                    href="https://averagejoescoffee.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={averageJoesLogo}
                        alt="averageJoesLogo"
                        className="opacity-30 hover:opacity-100 transition-opacity duraction-300"
                    />
                </a>
                <a
                    href="https://replika.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={replikaLogo}
                        alt="replikaLogo"
                        className="opacity-30 hover:opacity-100 transition-opacity duraction-300"
                    />
                </a>
                <a
                    href="https://lappaustralia.com.au/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={lappLogo}
                        alt="lappLogo"
                        className="opacity-30 hover:opacity-100 transition-opacity duraction-300"
                    />
                </a>
            </div>
        </InfiniteScroll>
    );
};
