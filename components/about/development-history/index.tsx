import React from 'react';
import {DevelopmentTimeline} from "@/components/about/development-history/development-timeline";
import Image from "next/image";
import HorizontalTimeline from "@/components/ui/horizontal-timeline";
import {useTranslation} from "react-i18next";

const DevelopmentHistory = () => {
    const {t} = useTranslation();
    return (
        <section className="w-full h-full mt-32 md:mt-12">
            <div className="w-full max-w-screen h-full">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full gap-4">
                    {/* Timeline & title section */}
                    <div className="w-full flex flex-col items-center lg:items-start px-4 justify-center">
                        <h2 className="uppercase w-full text-center font-semibold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] text-[#172345] mb-4 whitespace-nowrap">
                            {t("about.development.name")}
                        </h2>
                        <DevelopmentTimeline />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default DevelopmentHistory;