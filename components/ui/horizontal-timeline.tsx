/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cJpyO5TdGmk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import {useTranslation} from "react-i18next";

export default function HorizontalTimeline() {
    const {t} = useTranslation()
    return (
        <div className="relative w-full ">
            <div className="flex flex-col md:flex-row gap-4 overflow-x-auto scroll-smooth scrollbar-hide justify-center">
                {
                    [
                        {
                            year: "2012",
                            text: "Thành lập Công Ty TNHH TM CAO ĐẠT, bước đầu tham gia thị trường nhập khẩu và phân phối mỹ phẩm tóc."
                        },
                        {
                            year: "2015",
                            text: "Mở rộng hệ thống phân phối, hợp tác với nhiều salon lớn trên cả nước."
                        },
                        {
                            year: "2018",
                            text: "Trở thành nhà phân phối độc quyền của nhiều thương hiệu danh tiếng từ châu Âu và châu Á."
                        },
                        {
                            year: "2022",
                            text: "Kỷ niệm 10 năm thành lập, đánh dấu sự phát triển mạnh mẽ và mở rộng thị trường."
                        },
                        {
                            year: "2024",
                            text: "Tái cơ cấu doanh nghiệp với định hướng phát triển bền vững, lấy khách hàng làm trung tâm."
                        }
                    ].map((item, i) => (
                        <div key={i} className="flex-shrink-0 w-full md:w-[18vw] p-4 rounded-lg bg-card">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="relative w-6 h-6 md:w-8 md:h-8">
                                    <div className="absolute inset-0 rounded-full bg-primary opacity-75 animate-ping"></div>
                                    <div className="relative w-full h-full rounded-full bg-primary border-2 border-white shadow" />
                                </div>
                                <div className="text-sm font-medium pl-2">{item.year}</div>
                            </div>
                            <h3 className="text-lg font-semibold">{t(`about.development.${item.year}`)}</h3>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

function ChevronLeftIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}


function ChevronRightIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}