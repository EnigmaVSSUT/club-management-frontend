import React from 'react';

interface HoverProps {
    children: React.ReactNode; // Define the type for children
}

const SubTitle: React.FC<HoverProps> = (props) => {
    const { children } = props;

    return (
        <>
        <div className="flex justify-center font-semibold text-[#757575] text-[1.5vw] mt-[5px]">
            {children}
                {/* Mark Your Calendar for These Upcoming Events and Activities */}
           </div>
        </>
    )
    }

    export default SubTitle;