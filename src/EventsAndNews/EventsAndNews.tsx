import { Box, Typography, Grid } from "@mui/material";
import Left from "./Components/Left";
import Right from "./Components/Right";
import Middle from "./Components/Middle";

export default function EventsAndNews() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "auto",
        paddingBottom:"10px",
        paddingTop:"10px",
        backgroundColor: "#1E1E1E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap:"60px"
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: {
              xs: "24px", 
              md: "36px",
            },
            lineHeight: "54px",
            paddingTop: "10px",
          }}
        >
          Events and News
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: {
              xs: "16px",
              md: "20px",
            },
            lineHeight: "30px",
            color: "#757575",
            textAlign: "center",
            paddingBottom: "11px",
          }}
        >
          Stay Updated with the Latest Events and News
        </Typography>
      </Box>
      <Box>
        <Grid container direction="row" justifyContent="center" alignItems="center" gap="20px">
          <Grid item>
            <Left />
          </Grid>
          <Grid item>
            <Middle />
          </Grid>
          <Grid item>
            <Right />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
