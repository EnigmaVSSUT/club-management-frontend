import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import data from "../data.json";

export default function Left() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            sx={{
              background: "#1E1E1E",
              height: "90px",
              width: { xs: "90%", sm: "400px" },
              display: "flex",
              alignItems: "center",
              padding: "10px",
              boxShadow: 10,
              borderRadius: "8px",
              position: "relative",
              transition: "background 0.3s",
              "&:hover": {
                background: "#252525",
              },
            }}
          >
            <CardMedia
              component="img"
              image={item.imageUrl}
              alt="logo"
              sx={{
                height: "50px",
                width: "50px",
                marginRight: "10px",
                borderRadius: "8px",
              }}
            />
            {/* Remove CardActionArea if it's acting as a button */}
            <CardContent sx={{ padding: 0, flexGrow: 1 }}>
              <Typography
                variant="body2"
                sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "400" }}
              >
                {item.content}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                position: "absolute",
                right: "0px",
                bottom: "-12px",
              }}
            >
              <Button size="small" color="primary" component="a">
                23-12-2024 →
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
}
