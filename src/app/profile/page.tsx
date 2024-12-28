"use client";
import { Container, Typography, TextField, Button, Box, Stack, Link} from "@mui/material";
import Image from "next/image";
import Avatar from '@mui/material/Avatar';
import { useRouter } from 'next/navigation';
import "../globals.css";
import '@fontsource/poppins/400.css'; 
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css'; 


const Profile_Page = ()=>{

  const router = useRouter()
  return(
    
      <Container
      disableGutters maxWidth={false}
      sx={{
            backgroundColor:"#2A2A2A",
            color:"#FFFFFF",
            
          }}>

        <Box 
        sx={{
              display:"flex",
              justifyContent:"center",
              gap:{xs:"0px",
                md:"10vw"},

              flexDirection:{xs:"column",md:"row"}
              
          }}>

          <Box 
          sx={{
                
                mt:"clamp(40px,4vw,100px)",
                mb:{xs:"0px",
                  md:"clamp(40px,4vw,100px)"}
              }}>

            <Box 
            sx={{
                  display:"flex",
                  justifyContent:"center",           //border:"3px red solid"
                  
                  px:"30px",
                }}>

              <Avatar
                alt="Jason Hughes"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                sx={{
                      bgcolor: 'secondary.main',  
                      width: "clamp(100px, 14vw, 400px)",                  
                      height: "auto",
                  }}/>
            </Box>

            <Box sx={{textAlign: "center", mt:"clamp(24px,2vw,50px)", fontSize:"clamp(24px, 2.1vw, 70px)", fontWeight:"medium"}}>
              Name : Olivera Jhones
            </Box>

            <Box sx={{textAlign: "center", mt:"10px", fontSize:"clamp(20px, 1.7vw, 63px)", fontWeight:"medium", color:"#757575"}}>
              Role : Member
            </Box>

            <Box sx={{ textAlign: "center", fontSize:"clamp(20px, 1.7vw, 63px)", fontWeight:"medium", color:"#757575"}}>
              Year of graduation : 2027
            </Box>


          </Box>

          <Box sx={{  mt:{xs:"25px",
                          md:"clamp(24px, 6.4vw, 150px)"},
                          mb:"50px" }}>            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                
            <Box sx={{mt:"10px", fontSize:"clamp(27px, 2.4vw, 75px)", fontWeight:"medium",
                      textAlign:{xs:"center", md:"left"}
                      }}>
              Club name : Enigma
            </Box>

            <Box sx={{mt:"10px", fontSize:"clamp(27px, 2.4vw, 75px)", fontWeight:"medium",
                      textAlign:{xs:"center", md:"left"}
                      }}>
             Domain : Web Development
            </Box>

            <Box sx={{display:"flex", mt:"clamp(20px,1.4vw,43px)",
                      textAlign:{xs:"center", md:"left"},
                      justifyContent:{xs:"center", md:"flex-start"}
                      }}>
              <Stack direction="row" sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Button variant="outlined" sx={{mr:{xs:"5px",

                                                    md:"20px"}, 
                                                    ml:{xs:"5px"},
                                                    border:"2px rgba(66,133,244,0.3) solid",borderRadius:"74.39px", py:{xs:"3px",md:"5px"}, px:"clamp(10px,1.8vw,50px)", color:"#FFFFFF", textTransform:"capitalize", fontFamily:"poppins", fontWeight:"medium", fontSize:"clamp(10px,1.1vw,40px)", backgroundColor:"rgba(30,30,30,0.5)"}}>java</Button>
                <Button variant="outlined" sx={{mr:{xs:"5px",

                                                    md:"20px"},
                                                    ml:{xs:"5px"}, 
                                                    border:"2px rgba(234,67,53,0.5) solid",borderRadius:"74.39px", py:{xs:"3px",md:"5px"}, px:"clamp(10px,1.8vw,50px)", color:"#FFFFFF", textTransform:"capitalize", fontFamily:"poppins", fontWeight:"medium", fontSize:"clamp(10px,1.1vw,40px)", backgroundColor:"rgba(30,30,30,0.5)"}}>html</Button>
                <Button variant="outlined" sx={{mr:{xs:"5px",

                                                    md:"20px"}, 
                                                    ml:{xs:"5px"},
                                                    border:"2px rgba(251,188,4,0.3) solid",borderRadius:"74.39px", py:{xs:"3px",md:"5px"}, px:"clamp(10px,1.8vw,50px)", color:"#FFFFFF", textTransform:"capitalize", fontFamily:"poppins", fontWeight:"medium", fontSize:"clamp(10px,1.1vw,40px)", backgroundColor:"rgba(30,30,30,0.5)"}}>css</Button>
              </Stack>

            </Box>

          <Box sx={{display:"flex", mt:"clamp(20px,1.9vw,50px)" 
                    , justifyContent:{xs:"center", md:"flex-start"}
                    }}>
            <Box sx={{ mr:"15px"}}>
              <Link
                target="_blank" 
                href="" >
                  <Image
                                          src="/github.svg"
                                          width="0"
                                          height="100"
                                          sizes="900px"
                                          alt="Github_icon"

                                          className="w-[clamp(30px,2.5vw,74.7px)] h-[auto]"
                                      />             
              </Link>
                  
            </Box>

            <Box sx={{}}>
              <Link
                  target="_blank" 
                  href="" >
                     <Image
                                            src="/linkedin.svg"
                                            width="0"
                                            height="0"
                                            sizes="90vw"
                                            alt="Linkedin_icon"

                                            className="w-[clamp(30px,2.5vw,74.7px)] h-[auto]"
                                        />              
              </Link> 

            </Box>
          </Box>
          <Box sx={{ mt:"clamp(20px,1.4vw,43px)",display:"flex",
                    justifyContent:{xs:"center", md:"flex-start"}
                    }}>
            <Link
              href="/EditProfile" >
                <Button variant="outlined" sx={{border:"2.7px #4285F4 solid", fontSize:"clamp(10px,1.4vw,50px)", borderRadius:"clamp(10px,1.1vw,45px)", px:"20px", textTransform:"capitalize", fontFamily:"poppins", fontWeight:"medium",color:"#FFFFFF", backgroundColor:"rgba(30,30,30,0.5)", ":hover":{backgroundColor:"rgba(66,133,244,0.15)"} }} onClick={()=>{router.push("/EditProfile")}}>Edit Profile</Button>              
            </Link>
          
          </Box>
          </Box>
         
        </Box>
       

      </Container>
)
}

export default Profile_Page;

