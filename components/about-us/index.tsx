import React from 'react';
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className={"py-[4rem] bg-[#f3f3f4]"}>
            <div className={"mx-[16rem] flex gap-20"}>
                <Image src={"/tong-giam-doc.png"} alt={""} width={535} height={505} />
                <div className={"mt-12"}>
                    <div className={"flex flex-col items-center justify-center pb-[40px] bg-[url(/line.png)] bg-bottom bg-no-repeat"}>
                        <h2 className={"text-[#172345] font-bold text-[40px] uppercase mb-[1rem]"}>Về <span className={"text-[#fdc254]"}>Chúng tôi</span></h2>
                        <p className={"font-[400] text-[#172345] text-center"}>
                            Được thành lập vào ngày 20/10/2002, xuất phát từ lĩnh vực thương mại với niềm đam mê kinh doanh, sự nghiêm túc phát triển <br/>
                            thêm ngành nghề, Công ty cổ phần LAVO đã từng bước vượt qua những khó khăn thử thách, trở thành một trong những nhà sản <br/>
                            xuất – phân phối mỹ phẩm làm đẹp (Tóc – Da – Trang điểm – Nail) có tên tuổi tại thị trường trong và ngoài nước. <br/>
                        </p>
                    </div>
                    <div className={"flex mt-[1.5rem] gap-10"}>
                        <div className={"flex flex-col items-center"}>
                            <Image width={70} height={70} src={"/icon-home-01.png"} alt={"icon-01"} className={"pb-[1rem]"} />
                            <p className={"font-[400] text-[#172345] text-center"}>
                                Tâm-Tài-Tín” là yếu tố trọng tâm để hình thành nguồn nhân <br/>lực, tạo nên giá trị và sự phát triển của công ty.
                            </p>
                        </div>
                        <div className={"flex flex-col items-center"}>
                            <Image width={70} height={70} src={"/icon-home-02.png"} alt={"icon-02"} className={"pb-[1rem]"}  />
                            <p className={"font-[400] text-[#172345] text-center"}>
                                Trở thành nhà SẢN XUẤT & PHÂN PHỐI sản phẩm làm đẹp <br/>luôn đi đầu xu hướng mới với tiêu chuẩn quốc tế.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;