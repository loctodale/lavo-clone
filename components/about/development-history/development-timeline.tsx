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
        <Timeline className={"w-[20vw] ml-12 mt-8"}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <TimelineTitle>2012</TimelineTitle>
                    <TimelineDescription>Thành lập Công Ty TNHH TM CAO ĐẠT, bước đầu
                        tham gia thị trường nhập khẩu và phân phối mỹ phẩm tóc.</TimelineDescription>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <TimelineTitle>2015</TimelineTitle>
                    <TimelineDescription>Mở rộng hệ thống phân phối, hợp tác với nhiều
                        salon lớn trên cả nước.</TimelineDescription>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <TimelineTitle>2018</TimelineTitle>
                    <TimelineDescription>Trở thành nhà phân phối độc quyền của nhiều
                        thương hiệu danh tiếng từ châu Âu và châu Á.</TimelineDescription>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <TimelineTitle>2022</TimelineTitle>
                    <TimelineDescription>
                        Kỷ niệm 10 năm thành lập, đánh dấu sự phát triển
                        mạnh mẽ và mở rộng thị trường.
                    </TimelineDescription>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                    <TimelineTitle>2024</TimelineTitle>
                    <TimelineDescription>
                        Tái cơ cấu doanh nghiệp với định hướng phát triển
                        bền vững, lấy khách hàng làm trung tâm.
                    </TimelineDescription>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}
