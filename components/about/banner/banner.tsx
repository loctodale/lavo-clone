import React from 'react';
import Image from "next/image";
import {useTranslation} from "react-i18next";

const Banner = () => {
    const { t } = useTranslation();
    return (
        <div className="w-full bg-[#dde4e4]">
            <div className="px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl">
                <div className="flex flex-col lg:flex-row items-center gap-10 py-4">
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/assets/thongtin.jpg"
                            alt="about"
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 pt-6 lg:pt-20">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase leading-snug text-[#172345] mb-4">
                            {t("about.banner.name")}
                        </h3>
                        <p className="text-base md:text-lg font-normal">
                            {t("about.banner.description")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
