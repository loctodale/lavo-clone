import React from 'react';
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="py-16 bg-[#f3f3f4]">
            <div className="px-4 md:px-8 lg:px-16 xl:px-[16rem] flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                {/* Hình ảnh */}
                <Image
                    src="/assets/logo.png"
                    alt=""
                    width={800}
                    height={600}
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
                            Công Ty TNHH TM CAO ĐẠT được thành lập vào ngày 05/09/2012, với hơn 10 năm kinh nghiệm, là đơn vị nhập
                            khẩu và phân phối độc quyền các thương hiệu mỹ phẩm tóc chuyên nghiệp từ châu Âu và châu Á tại Việt Nam.
                            Chúng tôi không chỉ đơn thuần cung cấp sản phẩm, mà còn mang đến giải pháp chăm sóc tóc toàn diện, giúp
                            các salon, nhà tạo mẫu tóc và người tiêu dùng có trải nghiệm tốt nhất.
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
                                Công Ty TNHH TM CAO ĐẠT hướng đến trở thành
                                đơn vị hàng đầu trong lĩnh vực nhập khẩu và phân phối
                                mỹ phẩm tóc chuyên nghiệp tại Việt Nam, mang đến
                                những sản phẩm chất lượng cao, công nghệ tiên tiến
                                và an toàn, giúp ngành làm đẹp tại Việt Nam tiệm cận
                                với tiêu chuẩn quốc tế.
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
                                Với giá trị cốt lõi là sự bền vững và lâu dài, chúng tôi
                                không chỉ tập trung vào lợi nhuận mà còn đặt sự phát
                                triển của khách hàng và đối tác lên hàng đầu. Chúng
                                tôi tin rằng sự thành công của các salon, nhà tạo mẫu
                                tóc và người tiêu dùng cũng chính là sự thành công
                                của CAO ĐẠT.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;