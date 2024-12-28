import React from "react";
import {

  CardActions,
  CardContent,
  Typography,
  Card,
  IconButton,
  Box,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Middle() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column" },
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* First Card */}
      <Card
        sx={{
          width: { xs: "90%", sm: "400px" },
          height: { xs: "auto", sm: "200px" },
          background: "#1E1E1E",
          boxShadow: 10,
          position: "relative",
          transition: "background 0.3s",
          "&:hover": {
            background: "#252525",
          },
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              color: "white",
              fontSize: 14,
              background: "red",
              width: "50px",
              textAlign: "center",
              borderRadius: "4px",
            }}
          >
            New
          </Typography>
          <IconButton aria-label="person" sx={{ alignSelf: "center" }}>
            <PersonOutlineIcon sx={{ color: "white", fontSize: "30px" }} />
          </IconButton>
          <Typography
            sx={{
              color: "white",
              fontWeight: "600",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Alumni Assist
          </Typography>
          <Typography
            sx={{
              color: "#BDBDBD",
              fontWeight: "400",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Alumni Assist supports graduates with career guidance, mentorship,
            networking, and events.
          </Typography>
        </CardContent>
        <CardActions
          sx={{ position: "absolute", right: "10px", bottom: "-1px" }}
        >
          <Typography sx={{ fontSize: "10px" , color:"#4285F4" , fontWeight:"400" }}>Check Out</Typography>
        </CardActions>
      </Card>

      {/* Second Card */}
      <Card
        sx={{
          paddingTop: "20px",
          background: "#1E1E1E",
          width: { xs: "90%", sm: "400px" },
          height: { xs: "auto", sm: "180px" },
          boxShadow: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          transition: "background 0.3s",
          "&:hover": {
            background: "#252525",
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            textAlign: "center",
          }}
        >
          <IconButton sx={{ alignSelf: "center" }}>
            <NotificationsNoneIcon sx={{ color: "white", fontSize: "35px" }} />
          </IconButton>
          <Typography
            gutterBottom
            sx={{ color: "white", fontSize: "20px", paddingTop: "0px" }}
          >
            Notices, events, Recent News
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", marginTop: "auto" }}>
          <Typography
            sx={{
              background: "#4285F4",
              color: "white",
              padding: "6px 16px",
              marginBottom: "50px",
              "&:hover": {
                background: "#357AE8",
              },
            }}
          >
            Learn More →
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
}
