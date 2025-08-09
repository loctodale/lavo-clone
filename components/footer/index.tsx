'use client'
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/navigation";

export default function Footer() {
    const router = useRouter();
    const { t } = useTranslation();
    return (
        <div className="py-16 bg-black opacity-95 text-white text-base uppercase">
            <div className="mx-4 px-4 opacity-100">
                <div className="flex flex-col md:flex-row gap-8 justify-between">
                    {/* Location */}
                    <div className="flex flex-col gap-2 w-full lg:w-1/4">
                        <h3 className="uppercase font-bold text-[#fdc254] mb-4">{t("footer.information.name")}</h3>
                        <div className="space-y-2 text-[1rem] md:text-[1vw]">
                            <div className="flex">
                                <span className="md:min-w-[6vw] min-w-24 font-bold">{t("footer.information.address.name")}</span>
                                <div className="font-normal">
                                    <div className="text-nowrap">{t("footer.information.address.1")}</div>
                                    <div className="text-nowrap">{t("footer.information.address.2")}</div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="md:min-w-[6vw] min-w-24 font-bold">{t("footer.information.phone.name")}</span>
                                <span className="font-normal">02838424372</span>
                            </div>
                            <div className="flex">
                                <span className="md:min-w-[6vw] min-w-24 font-bold">HOTLINE:</span>
                                <span className="font-normal">0919797414</span>
                            </div>
                            <div className="flex">
                                <span className="md:min-w-[6vw] min-w-24 font-bold">Fax:</span>
                                <span className="font-normal">028-38424372</span>
                            </div>
                            <div className="flex">
                                <span className="md:min-w-[6vw] min-w-24 font-bold">Email:</span>
                                <span className="font-normal">CAODAT.COSMETICS@GMAIL.COM</span>
                            </div>
                        </div>
                    </div>

                    {/* Register Notification */}
                    <div className="w-full md:w-1/4 mt-8 lg:mt-0">
                        <h3 className="uppercase font-bold text-[#fdc254] mb-4">{t("footer.support.name")}</h3>
                        <form
                            action="mailto:CAODAT.COSMETICS@GMAIL.COM"
                            method="POST"
                            encType="text/plain"
                            className="w-full flex flex-col gap-4 text-black"
                        >
                            <Input className="bg-white" name="Họ và tên" placeholder={t("footer.support.input.1")} />
                            <Input className="bg-white" name="Số điện thoại" placeholder={t("footer.support.input.2")} />
                            <Input className="bg-white" name="Email" placeholder="E-mail" />
                            <Button type="submit" className="w-full hover:cursor-pointer hover:opacity-55">
                                {t("footer.support.register")}
                            </Button>
                        </form>
                    </div>

                    {/* Social */}
                    <div className="w-full lg:w-1/4">
                        <h3 className="uppercase font-bold text-[#fdc254] mt-8 lg:mt-0">{t("footer.social")}</h3>
                        <div className="flex gap-2 py-6">
                            <div>
                                <Image width={40} height={40} src="https://img.icons8.com/?size=100&id=62225&format=png&color=ffffff" alt="facebook-icon" />
                            </div>
                            <div>
                                <a href="https://zalo.me/0919797414" target="_blank" rel="noopener noreferrer">
                                    <Image width={40} height={40} src="https://img.icons8.com/?size=100&id=105876&format=png&color=ffffff" alt="zalo-icon" />
                                </a>
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
}
