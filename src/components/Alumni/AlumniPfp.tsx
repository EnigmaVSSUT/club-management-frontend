import React from 'react';
import Image from 'next/image';

interface AboutProps {
    imgUrl: string;
}

const AlumniPfp: React.FC<AboutProps> = ({ imgUrl }) => {
    return(
        <>
        <div>

            <Image src={imgUrl}
            className="w-[4vw] h-autorounded-[50%] "
            width="0"
            height="0"
            sizes="100vw"
            alt="Samavesh X Vassaunt logo"/>
        </div>
        </>
    )
}
export default AlumniPfp;