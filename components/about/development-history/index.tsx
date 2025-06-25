import React from 'react';
import {DevelopmentTimeline} from "@/components/about/development-history/development-timeline";
import Image from "next/image";

const DevelopmentHistory = () => {
    return (
        <section className="w-full h-full mt-32 md:mt-12">
            <div className="w-full max-w-screen-xl mx-auto sm:px-6 lg:px-20 h-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full gap-4">
                    {/* Timeline & title section */}
                    <div className="w-full flex flex-col items-center lg:items-start px-4">
                        <h2 className="uppercase font-semibold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] text-[#172345] mb-4 text-center lg:text-left whitespace-nowrap">
                            Lịch sử phát triển
                        </h2>
                        <DevelopmentTimeline />
                    </div>

                    {/* Image section */}
                    <div className="w-full h-1/3 flex justify-center my-8 ">
                        <Image
                            src="/assets/development.jpg"
                            alt="bg-dev-history"
                            width={400}
                            height={300}
                            className="max-w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default DevelopmentHistory;