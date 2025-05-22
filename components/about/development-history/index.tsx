import React from 'react';
import {DevelopmentTimeline} from "@/components/about/development-history/development-timeline";
import Image from "next/image";

const DevelopmentHistory = () => {
    return (
        <section className="w-full h-full mt-32 md:mt-0">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 h-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full lg:h-[70vh] gap-8">
                    {/* Timeline & title section */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                        <h2 className="uppercase font-semibold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] text-[#172345] mb-4 text-center lg:text-left whitespace-nowrap">
                            Lịch sử phát triển
                        </h2>
                        <DevelopmentTimeline />
                    </div>

                    {/* Image section */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image
                            src="/assets/development-history.png"
                            alt="bg-dev-history"
                            width={800}
                            height={500}
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default DevelopmentHistory;