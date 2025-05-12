import React from 'react';
import {Button} from "@/components/ui/button";
import {mockDataNews} from "@/service/mock.data";
import CardWithImage from "@/components/ui/card-with-image";

const NewVideo = () => {
    return (
        <div className={"py-[4rem] bg-[#f3f3f4]"}>
                <div className={"mx-[16rem] flex flex-col items-center justify-center pb-[40px] bg-[url(/line.png)] bg-bottom bg-no-repeat"}>
                    <h2 className={"text-[#172345] font-bold text-[40px] uppercase mb-[1rem]"}>Video <span className={"text-[#fdc254]"}>mới nhất</span></h2>
                </div>
                <div className={"mx-[16rem] flex  justify-center-safe items-center-safe mt-[2.5rem] gap-4 max-w-screen flex-wrap"}>
                    <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>Hướng Dẫn Sử Dụng - Lavox Nano Complex</Button>
                    <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>Hướng Dẫn Sử Dụng - X.pros Fiber</Button>
                    <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>
                        Hướng Dẫn Sử Dụng – Lavox Nano Complex Plus
                    </Button>
                    <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>
                        Hướng Dẫn Sử Dụng – Lavox Pro+
                    </Button>
                    <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>
                        Hướng Dẫn Sử Dụng – Sebas Silk
                    </Button>
                    <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>
                        Hướng Dẫn Sử Dụng – X.pros Fiber Plus
                    </Button>
                    <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>
                        Hướng Dẫn Sử Dụng – X.pros Pro+
                    </Button>
                    <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>
                        Kỹ Thuật
                    </Button>
                    <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>
                        Nhuộm - Tẩy Tóc
                    </Button>
                    <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>
                        Uốn Duỗi
                    </Button>
                    <Button className={"bg-transparent uppercase text-[#172345] text-[1rem] font-[400] border-[#172345] hover:bg-[#fdc254] hover:text-white ease-in duration-300"} variant={"outline"}>
                        Video Sản Phẩm
                    </Button>
                </div>
                <div className="mt-[4rem] mb-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-[16rem]">
                    {mockDataNews.map((data, index) => (
                        <CardWithImage title={data.title} imageUrl={data.imageUrl} date={data.date} status={data.status} key={index}  />
                    ))}
                </div>
        </div>
    );
};

export default NewVideo;