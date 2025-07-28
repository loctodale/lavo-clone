/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cJpyO5TdGmk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function HorizontalTimeline() {
    return (
        <div className="relative w-full ">
            {/*<div className="flex items-center justify-between mb-4 md:mx-16">*/}
            {/*    <Button variant="ghost" size="icon" className="rounded-full">*/}
            {/*        <ChevronLeftIcon className="w-5 h-5" />*/}
            {/*        <span className="sr-only">Previous</span>*/}
            {/*    </Button>*/}
            {/*    <Button variant="ghost" size="icon" className="rounded-full">*/}
            {/*        <ChevronRightIcon className="w-5 h-5" />*/}
            {/*        <span className="sr-only">Next</span>*/}
            {/*    </Button>*/}
            {/*</div>*/}
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
                            <h3 className="text-lg font-semibold">{item.text}</h3>

                        </div>
                    ))
                }
                {/*<div className="flex-shrink-0 w-64 p-4 rounded-lg bg-card">*/}
                {/*    <div className="flex items-center gap-2 mb-2">*/}
                {/*        <div className="aspect-square w-8 bg-primary rounded-full" />*/}
                {/*        <div className="text-sm font-medium">June 1, 2023</div>*/}
                {/*    </div>*/}
                {/*    <h3 className="text-lg font-semibold">Launch of New Product</h3>*/}
                {/*    <p className="text-sm text-muted-foreground">*/}
                {/*        We're excited to announce the launch of our latest product, designed to revolutionize the industry.*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*<div className="flex-shrink-0 w-64 p-4 rounded-lg bg-card">*/}
                {/*    <div className="flex items-center gap-2 mb-2">*/}
                {/*        <div className="aspect-square w-8 bg-primary rounded-full" />*/}
                {/*        <div className="text-sm font-medium">June 15, 2023</div>*/}
                {/*    </div>*/}
                {/*    <h3 className="text-lg font-semibold">Company Expansion</h3>*/}
                {/*    <p className="text-sm text-muted-foreground">*/}
                {/*        We're thrilled to announce the opening of our new office in the heart of the city, expanding our reach and*/}
                {/*        capabilities.*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*<div className="flex-shrink-0 w-64 p-4 rounded-lg bg-card border border-primary">*/}
                {/*    <div className="flex items-center gap-2 mb-2">*/}
                {/*        <div className="aspect-square w-8 bg-primary rounded-full" />*/}
                {/*        <div className="text-sm font-medium">June 30, 2023</div>*/}
                {/*    </div>*/}
                {/*    <h3 className="text-lg font-semibold">Quarterly Earnings Report</h3>*/}
                {/*    <p className="text-sm text-muted-foreground">*/}
                {/*        Join us as we share our latest financial results and discuss the company's performance over the past*/}
                {/*        quarter.*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*<div className="flex-shrink-0 w-64 p-4 rounded-lg bg-card">*/}
                {/*    <div className="flex items-center gap-2 mb-2">*/}
                {/*        <div className="aspect-square w-8 bg-primary rounded-full" />*/}
                {/*        <div className="text-sm font-medium">July 15, 2023</div>*/}
                {/*    </div>*/}
                {/*    <h3 className="text-lg font-semibold">New Partnership Announced</h3>*/}
                {/*    <p className="text-sm text-muted-foreground">*/}
                {/*        We're excited to share that we've partnered with a leading industry player to bring new opportunities to our*/}
                {/*        customers.*/}
                {/*    </p>*/}
                {/*</div>*/}
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