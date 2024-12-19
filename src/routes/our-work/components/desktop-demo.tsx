import React from 'react';
import desktopFrame from '@/assets/desktop-frame.png';
import { cn } from '@/utils/cn';

export const DesktopDemo = ({
    mediaSrc,
    className,
}: {
    mediaSrc: string;
    className?: string;
}) => {
    const isVideo = mediaSrc.endsWith('.mp4');

    return (
        <div
            className={cn(
                `relative aspect-[16/9] flex items-center justify-center`,
                className,
            )}
        >
            {/* desktop */}
            <div
                className={
                    'absolute z-10 aspect-[16/9] size-full bg-contain bg-no-repeat'
                }
                style={{ backgroundImage: `url(${desktopFrame})` }}
            />
            {/* media content */}
            <div
                className={
                    'box-border flex size-full flex-col items-center justify-center overflow-hidden rounded-lg px-[4%] py-[4%]'
                }
            >
                {isVideo ? (
                    <video
                        src={mediaSrc}
                        className="size-full rounded-md object-cover"
                        autoPlay
                        loop
                        muted
                        controls
                    />
                ) : (
                    <img
                        src={mediaSrc}
                        alt="Media Content"
                        className="size-full rounded-md object-cover object-center"
                    />
                )}
            </div>
        </div>
    );
};
