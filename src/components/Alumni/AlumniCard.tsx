import React from 'react';
import AlumniPfp from './AlumniPfp';

interface AboutProps {
    Img_Url:string
    Name:string;
    Branch:string;
    PassOutYear:string;
    AboutMe:string;
}

const AlumniCard: React.FC<AboutProps> = ({ Img_Url, Name, Branch, PassOutYear, AboutMe, }) => {
    return(
        <>
            <div className=' flex flex-col  h-[100%] bg-[#252525] p-[2.6vw] rounded-[0.7vw] '>
        
                <div className='flex justify-center items-center'>
                    <AlumniPfp imgUrl={Img_Url}/>
                </div>
        
                <div className='flex justify-center text-center text-[3.1vw] sm:text-[1.8vw] font-semibold text-[#FFFFFF] pt-[2vw]'>
                    {Name}
                </div>
        
                <div className='flex justify-center text-center text-[2vw] sm:text-[0.9vw] text-[#BDBDBD]'>
                    {Branch},&nbsp;{PassOutYear}
                </div>
        
                <div className='flex justify-center text-center text-[2.4vw] sm:text-[1.2vw] text-[#BDBDBD] pt-[2vw]'>
                    {AboutMe}
                </div>
        
            </div>
            </>
        )
    }

    export default AlumniCard;