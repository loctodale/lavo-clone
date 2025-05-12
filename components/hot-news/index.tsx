import React from 'react';
import {Button} from "@/components/ui/button";
import CardWithImage from "@/components/ui/card-with-image";
import {mockDataNews} from "@/service/mock.data";

const HotNews = () => {
    return (
        <div className={"px-[1rem] py-[4rem]"}>
            <div className={"flex flex-col items-center justify-center pb-[40px] bg-[url(/line.png)] bg-bottom bg-no-repeat"}>
                <h2 className={"text-[#172345] font-bold text-[40px] uppercase mb-[1rem]"}>Tin tức <span className={"text-[#fdc254]"}>mới nhất</span></h2>
            </div>
            <div className={"flex items-center justify-center mt-[2.5rem] gap-4 "}>
                <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>Hoạt động</Button>
                <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>Kinh nghiệm hay</Button>
                <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>Xu hướng tóc</Button>
            </div>
            <div className="mt-[4rem] mb-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-[16rem]">
                {mockDataNews.map((data, index) => (
                    <CardWithImage title={data.title} imageUrl={data.imageUrl} date={data.date} status={data.status} key={index}  />
                ))}
            </div>
        </div>
    );
};

export default HotNews;