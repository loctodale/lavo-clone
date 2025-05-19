export default function CoreValue() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#172345] uppercase">Giá trị cốt lõi</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            "Chất Lượng Tạo Nên Thương Hiệu – Bền Vững Dẫn Lối Thành Công"
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out group hover:-translate-y-2 hover:shadow-xl">
                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                            <RocketIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">Phát triển bền vững</h3>
                        <p className="text-muted-foreground text-center min-h-[4.5rem]">
                            Xây dựng doanh nghiệp không chỉ vì
                            lợi nhuận mà còn vì giá trị lâu dài cho ngành tóc Việt Nam.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out group hover:-translate-y-2 hover:shadow-xl">
                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                            <HandshakeIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">Hợp tác & Đồng hành</h3>
                        <p className="text-muted-foreground text-center min-h-[4.5rem]">
                            Coi trọng sự hợp tác chặt chẽ với
                            các đối tác, salon và khách hàng để tạo nên giá trị chung.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out group hover:-translate-y-2 hover:shadow-xl">
                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                            <BoltIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">Slogan</h3>
                        <p className="text-muted-foreground text-center min-h-[4.5rem]">
                            "Chất Lượng Tạo Nên Thương Hiệu – Bền Vững Dẫn Lối Thành
                            Công"
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out group hover:-translate-y-2 hover:shadow-xl">
                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                            <LightbulbIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">Sáng tạo & Đổi mới</h3>
                        <p className="text-muted-foreground text-center min-h-[4.5rem]">
                            Không ngừng cải tiến, ứng dụng công
                            nghệ hiện đại để đáp ứng nhu cầu ngày càng cao của thị
                            trường.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out group hover:-translate-y-2 hover:shadow-xl">
                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                            <ShieldIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">Chất lượng & Uy tín</h3>
                        <p className="text-muted-foreground text-center min-h-[4.5rem]">
                            Cam kết sản phẩm chính hãng, an
                            toàn và hiệu quả.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out group hover:-translate-y-2 hover:shadow-xl">
                        <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                            <UsersIcon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold">Khách hàng là trung tâm</h3>
                        <p className="text-muted-foreground text-center min-h-[4.5rem]">
                            Đặt lợi ích của khách hàng lên
                            hàng đầu, đồng hành cùng sự phát triển của salon và nhà
                            tạo mẫu tóc.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function BoltIcon(props: any) {
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
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <circle cx="12" cy="12" r="4" />
        </svg>
    )
}


function HandshakeIcon(props: any) {
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
            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
            <path d="m21 3 1 11h-2" />
            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
            <path d="M3 4h8" />
        </svg>
    )
}


function LightbulbIcon(props: any) {
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
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
        </svg>
    )
}


function RocketIcon(props: any) {
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
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    )
}


function ShieldIcon(props: any) {
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
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
    )
}


function UsersIcon(props: any) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
//
// {
//      name: string, //
//      fullName: string
//      description: string,
//      advantage: string[],
//      howToUse: string[],
//      price: string,
//      note: string // use for warning
//      size: int //(ml)
// }