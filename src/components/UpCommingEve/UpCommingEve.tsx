import Title from "../Title/Title";
import Hover from "./Hover_anim";
import Image from "next/image"
import SubTitle from "../Title/SubTitle";


// const UpEve: React.FC<Props> = ({ Array_Image }) => {
const UpEve =()=>{
    return(
        <>
        <div className="flex h-fit w-full  flex-col bg-[#1E1E1E]">

            {/* <div className="mt-[40px] sm:mt-[50px]"> */}
                <Title Title_Content="Upcoming Events"/>
           {/* </div> */}
           <SubTitle>
                Mark Your Calendar for These Upcoming Events and Activities
           </SubTitle>
           
           <div className="flex justify-center gap-[3vw] mx-[11vw] 
           mt-[5.5vw]
           sm:mt-[7.5vw]">

                <div className="flex justify-center w-[50%]">
                    <Hover>                        
                        
                        <div className="flex justify-center">
                            <Image
                                src="/Image_2.webp"                              
                                width="0"
                                height="0"
                                sizes="100vw"
                                alt="Samavesh X Vassaunt logo"
                                
                                className="w-[12vw] h-auto"
                            />
                        </div>

                        <div className="text-[#FFFFFF] flex text-center justify-center font-semibold text-[1.5vw] mb-[6px]">
                               Samavesh X Vassaunt
                        </div>

                        <div className="flex text-center justify-center text-[0.9vw] text-[#BDBDBD] px-[2.5vw] pt-[1.5vw]">
  Join us this December for SAMAVESH x VASSANT, VSSUT&apos;s exciting techno-cultural event filled with innovation, competitions, and performances that celebrate creativity and technical excellence!
</div>

                    </Hover>
                </div>

                <div className="flex justify-center w-[50%]">                    
                    <Hover>   
                        <div className="flex flex-col justify-between gap-[10px] ">                  
                            <div className="">
                                <Image
                                src="/Image_1.webp"
                                width="0"
                                height="0"
                                sizes="90vw"
                                alt="IIC building"

                                className="w-[40vw] h-[auto] transition duration-[800ms] ease-in-out hover:scale-[104%]"                                
                                />
                            </div>
    
                            <div className="flex items-center text-center text-[#FFFFFF] font-semibold text-[1vw]">
                                IIC Club to showcase innovative projects, cutting-edge ideas, and creative solutions at the upcoming technical event this year.
                            </div>
                        </div>
                    </Hover>
                </div>
                
           </div>
           

        </div>
        </>
      )
    
}

export default UpEve;