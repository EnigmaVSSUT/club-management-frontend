import {Container, Box, Link} from "@mui/material"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import Navigation from "./Navigation"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
const Footer = ()=>{
    return(
        <Container disableGutters maxWidth={false} sx={{width:"100%", px:"8vw",pb:"2vw",pt:"4vw", bgcolor:"#252525"}}>

            <Box >
                

                <Box sx={{display:"flex", justifyContent:"space-between"}}>

                    <Box sx={{display:"flex", flexDirection:"column"}}>

                        <Box sx={{fontWeight:"medium", color:"#FFFFFF",fontSize:"3vw",}}>
                            Hello There !!
                        </Box>

                        <Box sx={{fontWeight:"medium", color:"#FFFFFF",fontSize:"3vw"}}>
                            Visit to our official website.
                        </Box>

                        <Box sx={{display:"flex" }}>
                            <Box sx={{display:"flex",alignItems:"flex-start" }}>

                                {/* <Box sx={{display:"flex", alignItems:"flex-start" }}>
                                    <Link 
                                        target="_blank" 
                                        href="https://www.vssut.ac.in/"

                                        sx={{
                                            textDecoration:"none",
                                            color:"#BDBDBD", 
                                            fontSize:"1.3vw",
                                            ":hover":{color:"#C0C0C0"}

                                        }}
                                    >
                                            <u>registrar@vssut.ac.in</u>
                                    </Link>
                                </Box> */}

                                <Link                                 
                                    target="_blank" 
                                    href="https://www.vssut.ac.in/"

                                    sx={{
                                        textDecoration:"none",
                                        color:"#4285F4",
                                        fontWeight:500 ,
                                        fontSize:"2vw",                                        
                                        ":hover":{color:"#045DF7",                                        
                                        }
                                    }}
                                >
                                    <u>visit</u>
                                    
                                </Link>
                            </Box>

                            <Box sx={{display:"flex",alignItems:"flex-start" }}>
                                <Link 
                                    target="_blank" 
                                    href="https://www.vssut.ac.in/" 

                                    sx={{
                                        color:"#4285F4", 
                                        fontSize:"1.5vw",
                                        ":hover":{color:"#045DF7"                                            
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mt-[0.7vw] ml-[0.6vw]"/>                                    

                                </Link>
                            </Box>
                        </Box>
                        
                    </Box>

                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <Box sx={{h:"fit",display:"flex", flexDirection:"column"}}>
                            <Box sx={{display:"flex"}}>
                                <Box sx={{display:"flex", alignItems:"flex-start", mr:"1vw", mt:"0.2vw"}}>
                                    <Image
                                        src="/Location_icon.svg"
                                        width="0"
                                        height="0"
                                        sizes="90vw"
                                        alt="Location_icon"

                                        className="w-[1.5vw] h-[auto]"
                                    />
                                </Box>
                                <Box sx={{color:"#BDBDBD", fontSize:"1.3vw", fontWeight:"medium" }}> 
                                    Veer Surendra Sai University of<br/>
                                    Technology (VSSUT),<br/>
                                    Burla, Sambalpur, Odisha - 768018, India.
                                </Box>
                            </Box>
                            <Box sx={{display:"flex", mt:"1vw"}}>
                                <Box sx={{display:"flex", alignItems:"flex-start", mr:"1vw", mt:"0.5vw"}}>
                                    <Image
                                        src="/Email_icon.svg"
                                        width="0"
                                        height="0"
                                        sizes="90vw"
                                        alt="Email_icon"

                                        className="w-[1.5vw] h-[auto]"
                                        />
                                    </Box>
                                <Box sx={{display:"flex", alignItems:"flex-start" }}>
                                    <Link 
                                        target="_blank" 
                                        href="https://www.vssut.ac.in/"

                                        sx={{
                                            textDecoration:"none",
                                            color:"#BDBDBD", 
                                            fontSize:"1.3vw",
                                            ":hover":{color:"#C0C0C0"},
                                            fontWeight:"medium" 

                                        }}
                                    >
                                            <u>registrar@vssut.ac.in</u>
                                    </Link>
                                </Box>
                            </Box>                          
                        </Box>
                    </Box>

                </Box>
                <Box 
                    className="border-t-[0.1vw]"

                    sx={{
                        borderColor:"rgba(255,255,255,0.2)", 
                        flexDirection:"Column",
                        display:"flex", 
                        justifyContent:"space-between",
                        alignItems:"baseline",         
                        fontWeight:"bold", 
                        color:"#424242",
                        textTransform:"uppercase",
                        fontSize:"1vw",
                        mt:"4vw",
                        pt:"1.5vw"

                    }}>

                    {/* <Box sx={{
                            display:"flex",
                            gap:"1.5vw",
                            maxWidth:"400px",
                        }}>
                        <Box>
                            <Navigation Section_Url="/about" Link_Name="About"/>                           
                        </Box>

                        <Box>
                            <Navigation Section_Url="/clubs" Link_Name="Clubs"/>    
                        </Box>

                        <Box>
                            <Navigation Section_Url="#Top_section" Link_Name="Profile"/>     
                        </Box>

                    </Box> */}

                    <Box sx={{ width:"100%",display:"flex",alignItems:"flex-start",fontWeight:"regular",fontFamily:"Inter",fontSize:"1.7vw", pb:"10px",justifyContent:"center"}}>

                        <Box >MADE&nbsp;WITH</Box>
                        
                        <Box sx={{ color:"#34A853"}}>&nbsp;ENIGMA</Box>

                    </Box>

                    <Box sx={{width:"100%"}}>
                        <Box sx={{display:"flex", justifyContent:"center", mt:"4px"}}>
                            <Box sx={{mr:"0.5vw"}}>
                                <Image
                                    src="/Copyright.svg"
                                    width="0"
                                    height="0"
                                    sizes="90vw"
                                    alt="Copyright_icon"
                                    className="w-[1.5vw] h-[auto]"
                                />
                            </Box>
                            <Box sx={{color:"#BDBDBD",display:"flex",justifyContent:"center" }}>
                                Copyright 2024, All Rights Reserved
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Container>
    )
}

export default Footer;