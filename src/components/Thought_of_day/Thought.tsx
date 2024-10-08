import Title from "../Title/Title"

const Thought = ()=>{
    return(
        <>
        <div className="flex flex-col justify-center bg-[#1E1E1E] pb-[4.5vw]">
            <Title Title_Content="Thought of the Day"/>
            
            <div className="w-full flex justify-center "> 
                <div className=" flex flex-col items-end text-center font-semibold text-[#BDBDBD] w-fit text-[1.5vw] pt-[1.4vw]">
                "The harder you work for something, the greater you’ll feel when you achieve it."
                    <div className="text-[1.3vw]  text-right text-[#BDBDBD] w-fit pt-[0.4vw]">
                    — Unknown
                    </div>
                </div>
            </div>

        </div>
        </>
)
}

export default Thought;