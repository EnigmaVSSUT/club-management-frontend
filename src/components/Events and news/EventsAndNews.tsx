import { Box, Typography, Grid} from "@mui/material";
import Left from "./Components/Left";
import Right from "./Components/Right";
import Middle from "./Components/Middle";

export default function EventsAndNews() {
  return (
    <Box
      sx={{
        // minHeight: "100vh",
        width: "100%",
        paddingBottom: "10px",
        paddingTop: "10px",
        backgroundColor: "#1E1E1E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "60px",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: "24px",
            md: "36px",
            lineHeight: "54px",
            paddingTop: "10px",
          }}
        >
          Events and News
        </Typography>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "30px",
            color: "#757575",
            textAlign: "center",
            paddingBottom: "11px",
          }}
        >
          Stay Updated with the Latest Events and News
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, padding: 2 }} >
        <Grid container spacing={2} justifyContent="center" sx={{flexWrap: "wrap"}}>
          <Grid item xs={12} sm={10}  md={5}>
            <Left />
          </Grid>
          <Grid item xs={12} sm={10}  md={5}>
            <Middle />
          </Grid>
          <Grid item xs={12} sm={10}  md={5}>
            <Right />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
