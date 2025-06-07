'use client'
import React, {useEffect, useState} from 'react';
import CardWithImage from "@/components/ui/card-with-image";
import {mockDataVideo} from "@/service/mock.data";
import {useRouter} from "next/navigation";

const Page = () => {
    const [displayedData, setDisplayedData] = useState(mockDataVideo);
    const router = useRouter();
    useEffect(() => {
        const updateDataByScreen = () => {
            if (window.innerWidth < 640) {
                setDisplayedData(mockDataVideo.slice(0, 6));
            } else {
                setDisplayedData(mockDataVideo);
            }
        };

        updateDataByScreen();
        window.addEventListener('resize', updateDataByScreen);

        return () => window.removeEventListener('resize', updateDataByScreen);
    }, []);
    return (
        <section className={"pt-[10vh]"}>
            <div className={"py-[4rem]"}>
                <h2 className={"uppercase text-nowrap font-semibold text-[40px] text-center mb-[1rem] text-[#172345]"}>Video</h2>
                <div className="mt-[4rem] mb-[2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mx-[1rem] sm:mx-[16rem]">
                    {displayedData.map((data, index) => (
                        <CardWithImage
                            slug={data.slug}
                            key={index}
                            title={data.title}
                            imageUrl={data.imageUrl}
                            date={data.date}
                            status={data.status}

                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Page;