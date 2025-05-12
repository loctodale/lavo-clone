import React from 'react';
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="py-16 bg-[#f3f3f4]">
            <div className="px-4 md:px-8 lg:px-16 xl:px-[16rem] flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                {/* Hình ảnh */}
                <Image
                    src="/tong-giam-doc.png"
                    alt=""
                    width={535}
                    height={505}
                    className="w-full max-w-[500px] h-auto"
                />

                {/* Nội dung bên phải */}
                <div className="mt-6 lg:mt-12 w-full">
                    {/* Tiêu đề */}
                    <div className="flex flex-col items-center justify-center pb-10 bg-[url(/line.png)] bg-bottom bg-no-repeat text-center">
                        <h2 className="text-[#172345] font-bold text-[28px] md:text-[36px] xl:text-[40px] uppercase mb-4">
                            Về <span className="text-[#fdc254]">Chúng tôi</span>
                        </h2>
                        <p className="font-[400] text-[#172345] text-center leading-relaxed">
                            Được thành lập vào ngày 20/10/2002, xuất phát từ lĩnh vực thương mại với niềm đam mê kinh doanh,
                            sự nghiêm túc phát triển thêm ngành nghề, Công ty cổ phần LAVO đã từng bước vượt qua những khó khăn thử thách,
                            trở thành một trong những nhà sản xuất – phân phối mỹ phẩm làm đẹp (Tóc – Da – Trang điểm – Nail) có tên tuổi
                            tại thị trường trong và ngoài nước.
                        </p>
                    </div>

                    {/* Icon mô tả */}
                    <div className="flex flex-col sm:flex-row mt-6 gap-10 items-center justify-center">
                        <div className="flex flex-col items-center max-w-xs text-center">
                            <Image
                                width={70}
                                height={70}
                                src="/icon-home-01.png"
                                alt="icon-01"
                                className="pb-4"
                            />
                            <p className="font-[400] text-[#172345]">
                                “Tâm - Tài - Tín” là yếu tố trọng tâm để hình thành nguồn nhân lực,
                                tạo nên giá trị và sự phát triển của công ty.
                            </p>
                        </div>
                        <div className="flex flex-col items-center max-w-xs text-center">
                            <Image
                                width={70}
                                height={70}
                                src="/icon-home-02.png"
                                alt="icon-02"
                                className="pb-4"
                            />
                            <p className="font-[400] text-[#172345]">
                                Trở thành nhà SẢN XUẤT & PHÂN PHỐI sản phẩm làm đẹp
                                luôn đi đầu xu hướng mới với tiêu chuẩn quốc tế.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;