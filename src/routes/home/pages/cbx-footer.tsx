import whitelogo from '@/routes/home/assets/CBx_BWhite.png';

export const CbxFooter = () => {
    return (
        <footer className="flex flex-col items-center justify-center bg-y-grey-gradient text-white text-center px-6 py-4">
            {/* Logo */}
            <img
                src={whitelogo}
                alt="WhiteBrandmarkLogo"
                className="h-16 sm:h-24"
            />

            {/* Copyright Notice */}
            <div className="font-lato text-sm sm:text-base">
                <p>
                    © {new Date().getFullYear()} CBx Creative. All rights
                    reserved.
                </p>
                <p>
                    Built and powered by{' '}
                    <a
                        href="https://cbxcreative.com"
                        target="_blank"
                        className="underline hover:text-gray-300"
                    >
                        CBx Creative
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
};
