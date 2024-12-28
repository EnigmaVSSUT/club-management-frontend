import {Container,  Link} from "@mui/material"

interface AboutProps {
    Section_Url:string,
    Link_Name:string    
}

const Navigation: React.FC<AboutProps> = ({ Section_Url, Link_Name}) => {

    return(
        <Container disableGutters maxWidth={false}>
            <Link 
                href={Section_Url}
                
                sx={{
                    color:"#BDBDBD",
                    textDecoration:"none",
                    textTransform:"capitalize",
                    fontWeight:500,
                    ":hover":{color:"#616161"}
                }}
            >
                {Link_Name}
            </Link>
        </Container>
    )
}
export default Navigation;
