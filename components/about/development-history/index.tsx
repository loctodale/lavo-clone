import React from 'react';
import {DevelopmentTimeline} from "@/components/about/development-history/development-timeline";
import Image from "next/image";

const DevelopmentHistory = () => {
    return (
        <section className={"w-full h-full"}>
            <div className={"w-screen px-[14rem] h-full"}>
                {/*<div className={"bg-[url(/assets/development-history.png)] bg-no-repeat bg-contain w-full h-[70vh] relative flex items-center justify-center mx-[14rem] max-w-screen overflow-hidden"}>*/}
                <div className={"bg-[url(/assets/development-history.png)] bg-no-repeat bg-contain w-full h-[70vh] relative flex items-center justify-center max-w-screen overflow-hidden"}>
                    <div className={"absolute right-[7vw]"}>
                        <h2 className={"uppercase text-nowrap font-semibold text-[40px] text-center mb-[1rem] text-[#172345]"}>Lịch sử phát triển</h2>
                        <DevelopmentTimeline />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentHistory;