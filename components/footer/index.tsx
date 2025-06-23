import React from 'react';
import Image from "next/image";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Facebook, Instagram, Phone, Youtube} from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");

    const handleSubmit = () => {
        const to = "CAODAT.COSMETICS@GMAIL.COM"; // Thay bằng email nhận
        const subject = encodeURIComponent("Đăng ký từ khách hàng");
        const body = encodeURIComponent(
            `Họ và tên: ${name}\nSố điện thoại: ${phone}\nEmail: ${email}`
        );

        const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };
    return (
       <div className="py-16 bg-black opacity-95 text-white text-base">
          <div className="mx-[4vw] px-4 opacity-100">
            <div className="flex flex-col md:flex-row gap-8 justify-between">
              {/* Location */}
              <div className="flex flex-col gap-2 w-full lg:w-1/4">
                {/*<div className={"relative w-full h-full"}>*/}
                {/*  /!*<Image className={"relative md:absolute md:bottom-[-2rem] left-[-2rem]"} width={200} height={50} src="/assets/logo.png" alt="logo" />*!/*/}
                {/*</div>*/}
                <h3 className="uppercase font-bold text-[#fdc254] mb-4">
                  Thông tin
                </h3>
                <div className="space-y-2 text-[1rem] md:text-[1vw]">
                  <div className="flex">
                    <span className="min-w-24 font-bold">Địa chỉ:</span>
                      <div className={"font-normal"}>
                          <div className={"text-nowrap"}>
                              34 ĐÀO DUY ANH, PHƯỜNG 9
                          </div>
                          <div className={"text-nowrap"}>
                              QUẬN PHÚ NHUẬN, TPHCM
                          </div>
                      </div>
                  </div>
                  <div className="flex">
                    <span className="min-w-24  font-bold">Điện thoại:</span>
                    <span className="font-normal">02838424372</span>
                  </div>
                  <div className="flex">
                    <span className="min-w-24  font-bold">HOTLINE:</span>
                    <span className="font-normal">0919797414</span>
                  </div>
                  <div className="flex">
                    <span className="min-w-24 font-bold">Fax:</span>
                    <span className="font-normal">028-38424372</span>
                  </div>
                  <div className="flex">
                    <span className="min-w-24 font-bold">Email:</span>
                    <span className="font-normal">CAODAT.COSMETICS@GMAIL.COM</span>
                  </div>
                </div>

              </div>

              {/* Register Notification */}
              <div className="w-full md:w-1/4 mt-8 lg:mt-0">
                <h3 className="uppercase font-bold text-[#fdc254] mb-4">
                  Đăng ký liên hệ
                </h3>
                  <div className="w-full flex flex-col gap-4 text-black">
                      <Input
                          className="bg-white"
                          placeholder="Họ và Tên liên hệ"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                      />
                      <Input
                          className="bg-white"
                          placeholder="Số điện thoại"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                      />
                      <Input
                          className="bg-white"
                          placeholder="E-mail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                      <Button className="w-full hover:cursor-pointer hover:opacity-55" onClick={handleSubmit}>
                          Đăng ký
                      </Button>
                  </div>
              </div>
              {/* Social */}
              {/* Links */}
              {/*<div className="w-full lg:w-1/4">*/}
              {/*  <h3 className="uppercase font-bold text-[#fdc254] mt-8 mb-4 lg:mt-0">*/}
              {/*    Liên kết*/}
              {/*  </h3>*/}
              {/*  <div className="flex flex-col gap-1.5">*/}
              {/*    <Link href={"/"} className="font-bold">Trang chủ</Link>*/}
              {/*    <Link href={"/about"} className="font-bold">Giới thiệu</Link>*/}
              {/*    <Link href={"/video"} className="font-bold">Video sản phẩm</Link>*/}
              {/*  </div>*/}
              {/*</div>*/}
                <div className="w-full lg:w-1/4">
                    <h3 className="uppercase font-bold text-[#fdc254] mt-8 lg:mt-0">
                        Mạng xã hội
                    </h3>
                    <div className="flex gap-2 py-6">
                        {/*<Facebook size={40} />*/}
                        {/*<Instagram size={40} />*/}
                        {/*<Youtube size={40} />*/}
                        <div>
                            <Image width={40} height={40} src="https://img.icons8.com/?size=100&id=62225&format=png&color=ffffff" alt="facebook-icon" />
                        </div>
                        <div>
                            <Image width={40} height={40} src="https://img.icons8.com/?size=100&id=105876&format=png&color=ffffff" alt="zalo-icon" className={"hover:cursor-pointer"} onClick={x => {
                                x.preventDefault()
                                window.location.href = "https://zalo.me/0919797414"
                            }} />
                        </div>
                        <div>
                            <Image width={40} height={40} src="https://img.icons8.com/?size=100&id=84521&format=png&color=ffffff" alt="tiktok-icon" />
                        </div>
                    </div>

                </div>

            </div>

          </div>
       </div>
    );
};

export default Footer;