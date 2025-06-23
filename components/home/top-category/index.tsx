import React from 'react';
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";

interface TopCategoryType{
    img: string
    url: string
}
const topCategory : string[] = ["/assets/top-category/aurane.jpg", "/assets/top-category/aurane-2.jpg", "/assets/top-category/aurane-3.jpg", "/assets/top-category/aurane-4.jpg"]

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
                        <Image
                            onClick={() => {
                                window.location.href = "/brand?brand=aurane"
                            }}
                            key={i}
                            className="scale-100 hover:scale-105 ease-in duration-200 w-full sm:w-[45%] md:w-[22%] max-w-[320px] h-auto hover:cursor-pointer"
                            width={320}
                            height={450}
                            src={item}
                            alt={`image-holder-${i}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCategory;