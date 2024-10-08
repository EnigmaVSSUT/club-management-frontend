import React from 'react';

interface AboutProps {
    Title_Content: string;
}

const Title: React.FC<AboutProps> = ({ Title_Content }) => {
    return(
        <>

           <div className="text-[2.5vw] flex items-center justify-center text-[#FFFFFF] font-semibold mt-[6vw] font-mono text-center 
           sm:mt-[7vw] ">

           {Title_Content}

           </div>

        </>
      )
    
}
export default Title;