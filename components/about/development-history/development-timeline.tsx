import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDescription,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/ui/timeline"

export function DevelopmentTimeline() {
    return (
        <Timeline className="w-full sm:w-[7 0vw] md:w-[60%] lg:w-[20vw] ml-0 md:ml-4 mt-4 space-y-4">
            {[
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
            ].map(({ year, text }, index) => (
                <TimelineItem key={year}>
                    <TimelineSeparator>
                        <TimelineDot />
                        {index < 4 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        <TimelineTitle>{year}</TimelineTitle>
                        <TimelineDescription>{text}</TimelineDescription>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

