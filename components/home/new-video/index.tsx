'use client'
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {mockDataVideo} from "@/service/mock.data";
import CardWithImage from "@/components/ui/card-with-image";

const NewVideo = () => {
    const [displayedData, setDisplayedData] = useState(mockDataVideo);
    const buttonList = [
        "Hướng Dẫn Sử Dụng - Lavox Nano Complex",
        "Hướng Dẫn Sử Dụng - X.pros Fiber",
        "Hướng Dẫn Sử Dụng – Lavox Nano Complex Plus",
        "Hướng Dẫn Sử Dụng – Lavox Pro+",
        "Hướng Dẫn Sử Dụng – Sebas Silk",
        "Hướng Dẫn Sử Dụng – X.pros Fiber Plus",
        "Hướng Dẫn Sử Dụng – X.pros Pro+",
        "Kỹ Thuật",
        "Nhuộm - Tẩy Tóc",
        "Uốn Duỗi",
        "Video Sản Phẩm"
    ]
    useEffect(() => {
        const updateDataByScreen = () => {
            if (window.innerWidth < 640) {
                setDisplayedData(mockDataVideo.slice(0, 6));
            } else {
                setDisplayedData(mockDataVideo);
            }
        };

        updateDataByScreen(); // chạy khi render
        window.addEventListener('resize', updateDataByScreen);

        return () => window.removeEventListener('resize', updateDataByScreen);
    }, []);

    return (
        <div className={"py-[4rem] bg-[#f3f3f4]"}>
            <div className={"mx-[1rem] sm:mx-[16rem] flex flex-col items-center justify-center pb-16 md:mx-120 bg-[url(/line.png)] bg-contain bg-bottom bg-no-repeat"}>
                <h2 className={"text-[#172345] font-bold text-[40px] uppercase mb-[1rem]"}>Video <span className={""}>mới nhất</span></h2>
            </div>

            {/*<div className={"mx-[1rem] sm:mx-[16rem] flex justify-center items-center mt-[2.5rem] gap-4 max-w-screen flex-wrap"}>*/}
            {/*    {buttonList.map((label, index) => (*/}
            {/*        <Button*/}
            {/*            key={index}*/}
            {/*            className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"}*/}
            {/*            variant={"outline"}*/}
            {/*        >*/}
            {/*            {label}*/}
            {/*        </Button>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <div className="mt-[4rem] mb-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-[1rem] sm:mx-[16rem]">
                {displayedData.map((data, index) => (
                    <CardWithImage
                        slug={data.slug}
                        key={index}
                        title={data.title}
                        imageUrl={data.imageUrl}
                        date={data.date}
                        status={data.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewVideo;
