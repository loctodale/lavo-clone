export default function CardWithImage({
                                          imageUrl,
                                          title,
                                          date,
                                          status,
                                            slug
                                      }: {
    imageUrl: string;
    title: string;
    date: Date;
    status: string;
    slug: string;
}) {
    // Generate poster from video Cloudinary URL
    const posterUrl = imageUrl
        .replace("/upload/", "/upload/so_2/")
        .replace(/\.(mp4|webm|mov)$/, ".jpg");
    return (
        <div onClick={() => {
            window.location.href = `video/${slug}`;
        }} className="w-full max-w-md mx-auto my-4 text-[#172345] hover:cursor-pointer">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-950">
                <video
                    width={100}
                    height={100}
                    className="w-full h-64 object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                    poster={posterUrl}
                    controls={false}
                    muted
                />

                <div className="p-4 space-y-2">
                    <h3 className="text-[1rem] font-bold truncate w-full">{title}</h3>
                    <div className="mt-10 flex items-center justify-between">
                        <div>{date.toLocaleDateString("en-GB")}</div>
                        <div>{status}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
