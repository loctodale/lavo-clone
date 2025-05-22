import React from 'react';
import {DevelopmentTimeline} from "@/components/about/development-history/development-timeline";
import Image from "next/image";

const DevelopmentHistory = () => {
    return (
        <section className="w-full h-full mt-32 md:mt-0">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 h-full">
                <div className="bg-[url(/assets/development-history.png)] bg-no-repeat bg-contain bg-center w-full h-[70vh] relative flex items-center justify-center">
                    <div className="absolute right-4 sm:right-10 md:right-[5vw] lg:right-[7vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <h2 className="uppercase font-semibold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] text-[#172345] mb-4 text-center whitespace-nowrap">
                            Lịch sử phát triển
                        </h2>
                        <DevelopmentTimeline />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default DevelopmentHistory;