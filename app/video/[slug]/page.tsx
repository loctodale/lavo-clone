'use client'
import React from 'react';
import {useParams} from "next/navigation";
import {mockDataVideo} from "@/service/mock.data";
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
const Page = () => {
    const [videoItem, setVideoItem] = React.useState<CardWithImageType | null>(null)
    const {slug} = useParams();
    React.useEffect(() => {
        const data = mockDataVideo.find(x => x.slug == slug);
        data ? setVideoItem(data) : null;
    }, [slug])
    const posterUrl = videoItem?.imageUrl
        .replace("/upload/", "/upload/so_2/")
        .replace(/\.(mp4|webm|mov)$/, ".jpg");
    return videoItem && (
        <section className={"pt-[10vh]"}>
            <div className={"py-[4rem]"}>
                <h2 className={"uppercase text-nowrap font-semibold text-[40px] text-center mb-[1rem] text-[#172345]"}>{videoItem?.title}</h2>
                <div className={"px-[2rem] py-8"}>
                    <MediaPlayer title="Sprite Fight" src={videoItem?.imageUrl}>
                        <MediaProvider />
                        <DefaultVideoLayout thumbnails={posterUrl ?? ""} icons={defaultLayoutIcons} />
                    </MediaPlayer>
                </div>
            </div>
        </section>
    );
};

export default Page;