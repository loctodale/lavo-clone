import React from 'react';
import {Card, CardContent} from "@/components/ui/card";
function formatKebabToSentence(text: string) {
    if (!text) return "";
    const words = text.split("-");
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        })
        .join(" ");
}

const HoverCard = ({name, description, image, englishName} : {name: string, description: string, image: string, englishName: string}) => {
    return (
            <Card onClick={() => window.location.href = `/category?categories=${englishName}`} className="md:w-1/3 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl py-0 my-2">
                <CardContent className="p-0">
                    <div className="relative overflow-hidden group-hover:shadow-xl transition-shadow duration-300 h-[60vh] ">
                        <img
                            src={image}
                            alt="Card background"
                            className="w-3/4 h-full transition-transform duration-500 group-hover:scale-110 object-contain my-20 mx-auto "
                        />
                        {/*<div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />*/}
                        <div className="absolute top-0 mt-4 text-justify w-full">
                            <h3 className=" md:text-[1.5vw] text-center font-medium text-black transition-transform duration-300 group-hover:scale-115">
                                {name}
                            </h3>
                            <p className="text-black text-center w-full opacity-100 md:text-[1vw] drop-shadow-md transition-all duration-200 group-hover:translate-y-2 group-hover:opacity-0">
                                {formatKebabToSentence(description)}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
    )
};

export default HoverCard;