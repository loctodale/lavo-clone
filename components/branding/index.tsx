import React from 'react';
import Image from "next/image";

const Branding = () => {
    return (
        <div className={"py-[4rem]"}>
            <div className={"mx-[16rem] px-[1rem] grid grid-cols-5 gap-4"}>
                <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/branding-logo.png"} alt={"image-holder"} />
                <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/branding-logo.png"} alt={"image-holder"} />
                <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/branding-logo.png"} alt={"image-holder"} />
                <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/branding-logo.png"} alt={"image-holder"} />
                <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/branding-logo.png"} alt={"image-holder"} />
                <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/branding-logo.png"} alt={"image-holder"} />
                <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/branding-logo.png"} alt={"image-holder"} />
                <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/branding-logo.png"} alt={"image-holder"} />
                <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/branding-logo.png"} alt={"image-holder"} />
                <Image className={"scale-100 hover:scale-110 ease-in duration-200"} width={320} height={450} src={"/branding-logo.png"} alt={"image-holder"} />
            </div>
        </div>
    );
};

export default Branding;