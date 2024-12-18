export const LearnVideo = () => {
    return (
        <div className="mt-32 flex size-full flex-col px-16 pb-[150px]">

            <div className="flex flex-row items-center gap-2 w-[480px]">
                <h1 className="font-subheading text-1xl  text-white tracking-custom uppercase">LEARN</h1>
                <div
                    className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white"
                    aria-hidden="true"
                ></div>
            </div>

            <div className="mt-8 flex w-full justify-center">
                <div className="w-full h-[700px] bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">Step by Step Animation Placeholder</span>
                </div>
            </div>
        </div>
    );
};
