import React from 'react';

interface HoverProps {
    children: React.ReactNode; // Define the type for children
}

const Hover: React.FC<HoverProps> = (props) => {
    const { children } = props;

    return (
        <>
            <div className='border-2 border-[#252525] rounded-[0.5vw] transition duration-[800ms] ease-in-out hover:scale-105 hover:bg-[#252525] min-h-fit w-[100%] p-[1.5vw] shadow-[0px_0px_0.5vw_0px_black]' >
                {children}

            </div>
        </>
    )
}

export default Hover