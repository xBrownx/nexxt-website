import { GlitchHover } from '@/features/glitch-text';
export function OurWorkLanding({
    onP1Click,
    onP2Click,
    onP3Click,
    onP4Click,
    onP5Click,
    onP6Click,
    onTeamClick,
}: {
    onP1Click: () => void;
    onP2Click: () => void;
    onP3Click: () => void;
    onP4Click: () => void;
    onP5Click: () => void;
    onP6Click: () => void;
    onTeamClick: () => void;
}) {
    return (
        <section className="flex h-screen items-center justify-between bg-y-grey-gradient px-[calc((100%-1440px)/2)]">
            <div className="flex justify-start">
                <h1 className="font-title text-5xl font-bold text-primary-white">
                    Team Projects
                </h1>
            </div>

            <div className="grid w-2/3 grid-cols-3 gap-y-6 gap-x-10">
                <div className="col-span-1 text-left font-subheading text-sm tracking-custom text-white/50 flex items-center justify-between">
                    PROJECT /01
                    <div
                        className="ml-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white"
                        aria-hidden="true"
                    ></div>
                </div>

                <div
                    className="col-span-1 text-left font-bodycopy text-2xl text-white"
                    onClick={onP1Click}
                >
                    <GlitchHover>Hake House of Art</GlitchHover>
                </div>
                <div className="col-span-1 text-right font-subheading text-sm tracking-custom text-white/50">
                    APP DEVELOPMENT
                </div>

                <div className="col-span-1 text-left font-subheading text-sm tracking-custom text-white/50 flex items-center justify-between">
                    PROJECT /02
                    <div
                        className="ml-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white"
                        aria-hidden="true"
                    ></div>
                </div>
                <div
                    className="col-span-1 text-left font-bodycopy text-2xl text-white"
                    onClick={onP2Click}
                >
                    <GlitchHover>Replika</GlitchHover>
                </div>
                <div className="col-span-1 text-right font-subheading text-sm tracking-custom text-white/50">
                    UI/UX DESIGN
                </div>
                <div className="col-span-1 text-left font-subheading text-sm tracking-custom text-white/50 flex items-center justify-between">
                    PROJECT /03
                    <div
                        className="ml-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white"
                        aria-hidden="true"
                    ></div>
                </div>
                <div
                    className="col-span-1 text-left font-bodycopy text-2xl text-white"
                    onClick={onP3Click}
                >
                    <GlitchHover>Average Joe's</GlitchHover>
                </div>
                <div className="col-span-1 text-right font-subheading text-sm tracking-custom text-white/50">
                    APP DEVELOPMENT
                </div>

                <div className="col-span-1 text-left font-subheading text-sm tracking-custom text-white/50 flex items-center justify-between">
                    PROJECT /04
                    <div
                        className="ml-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white"
                        aria-hidden="true"
                    ></div>
                </div>
                <div
                    className="col-span-1 text-left font-bodycopy text-2xl text-white"
                    onClick={onP4Click}
                >
                    <GlitchHover>140 Williams</GlitchHover>
                </div>
                <div className="col-span-1 text-right font-subheading text-sm tracking-custom text-white/50">
                    WEB DEVELOPMENT
                </div>

                <div className="col-span-1 text-left font-subheading text-sm tracking-custom text-white/50 flex items-center justify-between">
                    PROJECT /05
                    <div
                        className="ml-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white"
                        aria-hidden="true"
                    ></div>
                </div>
                <div
                    className="col-span-1 text-left font-bodycopy text-2xl text-white"
                    onClick={onP5Click}
                >
                    <GlitchHover>My Dog Walker</GlitchHover>
                </div>
                <div className="col-span-1 text-right font-subheading text-sm tracking-custom text-white/50">
                    APP DEVELOPMENT
                </div>

                <div className="col-span-1 text-left font-subheading text-sm tracking-custom text-white/50 flex items-center justify-between">
                    PROJECT /06
                    <div
                        className="ml-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white"
                        aria-hidden="true"
                    ></div>
                </div>
                <div
                    className="col-span-1 text-left font-bodycopy text-2xl text-white"
                    onClick={onP6Click}
                >
                    <GlitchHover>NEXT </GlitchHover>
                </div>
                <div className="col-span-1 text-right font-subheading text-sm tracking-custom text-white/50">
                    UI/UX Design
                </div>
            </div>
        </section>
    );
}
