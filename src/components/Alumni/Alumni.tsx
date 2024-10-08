import Title from "../Title/Title";
import SubTitle from "../Title/SubTitle";
import AlumniCard from "./AlumniCard";

const Alumni = ()=>{
    return(
        <>
        <div className="flex h-fit w-screen  flex-col bg-[#1E1E1E]">


            <Title Title_Content="Alumni Speaks"/>

                
            <SubTitle>
            Insights and Experiences from Our Esteemed Alumni Community
           </SubTitle>




           <div className="px-[10vw] 
           mt-[5.5vw]
           sm:mt-[7.5vw]">
                <div className="flex items-center justify-center w-[100%] h-[30vw] gap-[3.5vw]">
                    <AlumniCard 
                        Img_Url="/Alumn_1.webp" 
                        Name="Rahul Das" 
                        Branch="Computer Science and Engineering" 
                        PassOutYear="2019" 
                        AboutMe="“ Being part of ENIGMA gave me a strong foundation in web development and coding. The collaborative environment and hands-on projects helped me develop skills that have been invaluable in my career. ”"
                    />

                    <AlumniCard 
                        Img_Url="/Alumn_2.webp" 
                        Name="Priya Sinha" 
                        Branch="Electrical Engineering" 
                        PassOutYear="2018" 
                        AboutMe="“ IIC provided an amazing platform to nurture innovative thinking. The exposure to industry-related projects and creative problem-solving initiatives truly shaped my journey as an engineer. ”"
                    />

                    <AlumniCard 
                        Img_Url="/Alumn_3.webp" 
                        Name="Ananya Mishra" 
                        Branch="Civil Engineering" 
                        PassOutYear="2017" 
                        AboutMe="” The Literary Society was my creative outlet during college. The writing workshops, debates, and magazine publications helped me hone my communication skills, which are vital in my professional life today. ”"
                    />
                </div>
            </div>

            <div className="w-full flex justify-center mt-[5.5vw]">
                <button className="py-[1.5vw] px-[1.5vw] font-semibold text-[1.2vw] bg-[#4285F4] text-[#FFFFFF] ease-in-out duration-500  hover:shadow-[0px_0px_0.6vw_0.25vw_white]">
                    Know More About VSSUT Alumni 
                </button>
            </div>
        </div>
        </>
    )
}

export default Alumni;