import React from 'react';
import HoverCard from "@/components/ui/hover-card";
import {mockCoverCategory} from "@/service/mock.cover-category";

const HomeCategory = () => {
    return (
       <div className={"md:flex md:justify-between w-full gap-2 px-2 mb-8"}>
           {
               mockCoverCategory.map((category, index) => (
                   <HoverCard englishName={category.englishName} key={index} name={category.name} description={category.englishName} image={category.image} />
               ))
           }
       </div>
    );
};

export default HomeCategory;