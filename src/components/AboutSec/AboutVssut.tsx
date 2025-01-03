import Title from "../Title/Title";

const About = ()=>{
    return (
    <>
      <div id="About_section" className="flex h-fit w-full  flex-col bg-[#1E1E1E] font-[Poppins]">
      
        <Title Title_Content="About VSSUT, Burla"/>
      
        <div className="mt-[20px] sm:mt-[30px] text-[2.5vw] sm:text-[1vw] flex items-center justify-center text-[#BDBDBD]  font-semibold pb-[1.2vw] px-[19.4vw] px-30 text-center font-[Poppins] "> 
          Veer Surendra Sai University of Technology (VSSUT), Burla, is a premier engineering institution in Odisha, offering a dynamic student life enriched by various technical and non-technical clubs. Among the prominent technical clubs are Robotics Club, known for its cutting-edge projects in robotics and automation; Veer Racers VSSUT, which focuses on automotive engineering and vehicle design; IEEE Club, dedicated to electronics and embedded systems; and IIC Club, which fosters an interest in space science. ENIGMA, the official web and coding club of VSSUT, is a hub for programming enthusiasts, offering coding competitions, hackathons, and workshops that sharpen students&apos;<br/> skills in software development.<br/>
          On the non-technical side, VSSUT boasts clubs like the Literary Club, which nurtures talents in writing and public speaking; the Emotica Club, providing a platform for theatrical expression; the Souls Club, catering to both vocalists and instrumentalists; and the AVC Club, which focuses on visual storytelling through photography. The Entrepreneurship Cell (E-Cell) is another key techno-management club, encouraging students to explore business and innovation. These clubs collectively contribute to the holistic development of students, fostering a vibrant campus culture.
        </div>
      
      </div>    
    </>
    )
}

export default About;