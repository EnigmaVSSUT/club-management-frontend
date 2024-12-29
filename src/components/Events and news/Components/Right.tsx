import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,

} from "@mui/material";

export default function Right() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        sx={{
          height: { xs: "auto", sm: "385px" },
          width: { xs: "90%", sm: "400px" , md:"330px",lg:"400px" },
          borderRadius: "8px",
          background: "#1E1E1E",
          padding: "10px ",
          boxShadow: 20,
          transition: "background 0.3s",
          "&:hover": {
            background: "#252525",
          },
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="233px"
            image="https://th.bing.com/th/id/OIP.Uh2-uSlphB20rCLLiIkQ9gHaEL?rs=1&pid=ImgDetMain"
            alt="E-Summit 2024"
            sx={{
              borderRadius: "8px",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: "18px",
                textAlign: "left",
              }}
              gutterBottom
            >
              E-Summit 2024
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#c4c4c4", fontSize: "14px" }}
            >
              VSSUT’s E-Cell organized a successful E-Summit with keynotes,
              startup pitches, and workshops on entrepreneurship.
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Typography component="a" href="/" sx={{color:"#BDBDBD", fontSize:"10px", fontWeight:"400"}} >
              29-10-2004 →
            </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </Box>
  );
}
