import React from 'react';
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";

interface TopCategoryType{
    img: string
    url: string
}
const topCategory : TopCategoryType[] = [
        {
            img: "/assets/top-category/28.png",
            url: "/brand?brand=aurane"
        },
        {
            img: "/assets/top-category/6.png",
            url: "/brand?brand=ZDNB"
        },
        {
            img: "/assets/top-category/3.png",
            url: "/brand?brand=KARSILK"
        },
        {
            img: "/assets/top-category/5.png",
            url: "/brand?brand=SLIDER"
        },
        {
            img: "/assets/top-category/39.png",
            url: "/brand?brand=COLORTOUR"
        },
    ]

const TopCategory = () => {
    return (
        <div className="w-full h-full py-[6.25rem] bg-[url(/background-category.jpg)] bg-no-repeat bg-cover">
            <div className="h-full px-4 md:px-16 xl:px-[16rem]">
                <div className="flex flex-col items-center justify-center pb-18 bg-[url(/line.png)] bg-contain md:mx-60 bg-bottom bg-no-repeat text-center">
                    <h2 className="text-[#172345] font-bold text-[28px] md:text-[36px] xl:text-[40px] uppercase mb-4">
                        Dòng sản phẩm <span className="">nổi bật</span>
                    </h2>
                    <p className="font-[400] text-[#172345] max-w-2xl">
                        Giải pháp của chúng tôi được thiết kế riêng cho từng cá nhân hiểu từng nhu cầu cụ thể
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mt-12">
                    {topCategory.map((item, i) => (
                        <div key={i} className={"min-h-[40vh] sm:w-[45%] md:w-[15%] max-w-[320px] bg-white items-center flex justify-center"}>
                            <Image
                                onClick={() => {
                                    window.location.href = item.url
                                }}
                                key={i}
                                className="scale-100 hover:scale-105 ease-in duration-200 w-full h-auto hover:cursor-pointer"
                                width={320}
                                height={450}
                                src={item.img}
                                alt={`image-holder-${i}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCategory;