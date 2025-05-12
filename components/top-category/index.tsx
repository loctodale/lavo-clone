import React from 'react';
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";

const TopCategory = () => {
    return (
        <div className={"w-full h-full py-[6.25rem] bg-[url(/background-category.jpg)] bg-no-repeat bg-cover"}>
            {/*<div className={"mx-[16rem] w-full h-full"}></div>*/}
            <div className={"h-full mx-[16rem]"}>
                <div className={"flex flex-col items-center justify-center pb-[40px] bg-[url(/line.png)] bg-bottom bg-no-repeat"}>
                    <h2 className={"text-[#172345] font-bold text-[40px] uppercase mb-[1rem]"}>Dòng sản phẩm <span className={"text-[#fdc254]"}> nổi bật</span></h2>
                    <p className={"font-[400] text-[#172345]"}>Giải pháp của chúng tôi được thiết kế riêng cho từng cá nhân hiểu từng nhu cầu cụ thể</p>
                </div>

                <div className={"flex items-center justify-center gap-4 mt-[4rem]"}>
                    <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/mpros.jpg"} alt={"image-holder"} />
                    <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/mpros.jpg"} alt={"image-holder"} />
                    <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/mpros.jpg"} alt={"image-holder"} />
                    <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/mpros.jpg"} alt={"image-holder"} />
                </div>
            </div>
        </div>
    );
};

export default TopCategory;