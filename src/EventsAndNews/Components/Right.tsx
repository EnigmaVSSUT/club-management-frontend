import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export default function Right() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        sx={{
          height: { xs: "auto", sm: "400px" },
          width: { xs: "90%", sm: "400px" },
          borderRadius: "8px",
          background: "#1E1E1E",
          padding: "10px",
          boxShadow: 20,
          position: "relative",
          transition: "background 0.3s",
          "&:hover": {
            background: "#252525",
          },
        }}
      >
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
          <Button
            size="small"
            sx={{
              color: "#4285F4",
              borderColor: "white",
              position: "absolute",
              bottom: "5px",
              right: "0px",
            }}
            component="a" // 📍 Changed to anchor tag to fix hydration error 
          >
            <span>23-12-2024 →</span>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
