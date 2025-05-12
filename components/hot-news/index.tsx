'use client'
import React, {useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import CardWithImage from "@/components/ui/card-with-image";
import {mockDataNews} from "@/service/mock.data";

const HotNews = () => {

    const [displayedData, setDisplayedData] = useState(mockDataNews)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                // mobile: lấy 6 item
                setDisplayedData(mockDataNews.slice(0, 6))
            } else {
                // non-mobile: hiển thị toàn bộ
                setDisplayedData(mockDataNews)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:px-[16rem] py-[4rem]">
            {/* Tiêu đề */}
            <div className="flex flex-col items-center justify-center pb-10 bg-[url(/line.png)] bg-bottom bg-no-repeat text-center">
                <h2 className="text-[#172345] font-bold text-[28px] md:text-[36px] xl:text-[40px] uppercase mb-4">
                    Tin tức <span className="text-[#fdc254]">mới nhất</span>
                </h2>
            </div>

            {/* Nút lọc */}
            <div className="flex flex-wrap justify-center mt-10 gap-4">
                <Button className="bg-transparent uppercase text-[#172345] text-sm sm:text-base font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white transition-all duration-300" variant="outline">
                    Hoạt động
                </Button>
                <Button className="bg-transparent uppercase text-[#172345] text-sm sm:text-base font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white transition-all duration-300" variant="outline">
                    Kinh nghiệm hay
                </Button>
                <Button className="bg-transparent uppercase text-[#172345] text-sm sm:text-base font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white transition-all duration-300" variant="outline">
                    Xu hướng tóc
                </Button>
            </div>

            {/* Danh sách tin tức */}
            <div className="mt-16 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedData.map((data, index) => (
                    <CardWithImage
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

export default HotNews;