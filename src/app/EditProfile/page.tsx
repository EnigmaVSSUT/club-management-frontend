"use client";
import {
  TextField,
  Button,
  Box,
  Container,
  Chip,
  IconButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Add as AddIcon } from "@mui/icons-material";
import dayjs from "dayjs";

const Edit_Profile = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    header: "",
    description: "",
    FullName: "",
    Role: "",
    GradYear: "",
    ClubName: "",
    Domain: "",
    Linkedin: "",
    Github: "",
  });

  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleYearChange = (date: dayjs.Dayjs | null) => {
    if (date) {
      setFormData({
        ...formData,
        GradYear: date.year().toString(),
      });
    }
  };

  const handleSkillInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillInput(e.target.value);
  };

  const handleAddSkill = () => {
    if (skillInput.trim() !== "" && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleDeleteSkill = (skillToDelete: string) => {
    setSkills(skills.filter((skill) => skill !== skillToDelete));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const textFieldStyles = {
    input: { color: "white" },
    label: { color: "white" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#2A2A2A",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& label.Mui-focused": {
     
      color: "white",
    },
    mt: "10px",
  };
  const datePickerStyles = {
    ...textFieldStyles,
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiIconButton-root": {
      color: "white",
    },
    "& .MuiPickersYear-yearButton": {
      color: "black",
    },
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundColor: "#1E1E1E",
        color: "#ffffff",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: "4vw",
          flexWrap: "wrap",
          alignItems: { xs: "center" },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 500, mx: "25px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              px: "30px",
              pt: "30px",
            }}
          >
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Image
                src="/No_Profile.webp"
                width="0"
                height="0"
                sizes="900px"
                alt="Github_icon"
                className="w-[clamp(150px,30vw,250px)] h-[auto] bg-slate-500 rounded-full"
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                mt: "20px",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <label htmlFor="select-image">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    sx={{
                      width: "100%",
                      border: "2.7px #4285F4 solid",
                      fontSize: "clamp(17px,1.4vw,30px)",
                      borderRadius: "clamp(10px,1.1vw,45px)",
                      px: "clamp(10px,5vw,30px)",
                      textTransform: "capitalize",
                      fontFamily: "poppins",
                      fontWeight: "medium",
                      color: "#FFFFFF",
                      backgroundColor: "rgba(30,30,30,0.5)",
                      ":hover": { backgroundColor: "rgba(66,133,244,0.15)" },
                    }}
                  >
                    Upload Image
                  </Button>
                </label>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: "10px" }}
              >
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none", width: "100px" }}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: "10px" }}>
            <TextField
              sx={textFieldStyles}
              fullWidth
              label="Enter Full Name"
              variant="outlined"
              name="FullName"
              value={formData.FullName}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ mt: "10px" }}>
            <TextField
              sx={textFieldStyles}
              fullWidth
              label="Enter Your Role"
              variant="outlined"
              name="Role"
              value={formData.Role}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ mt: "10px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                views={["year"]}
                label="Enter Year of Graduation"
                value={formData.GradYear ? dayjs(formData.GradYear) : null}
                onChange={handleYearChange}
                sx={datePickerStyles}
                minDate={dayjs("2000-01-01")}
                maxDate={dayjs("2050-12-31")}
                slotProps={{
                  textField: {
                    fullWidth: true,
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
        </Box>

        <Box sx={{ width: "100%", maxWidth: 500, mx: "25px" }}>
          <Box sx={{ mt: "10px" }}>
            <TextField
              sx={textFieldStyles}
              fullWidth
              label="Enter Club Name"
              variant="outlined"
              name="ClubName"
              value={formData.ClubName}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ mt: "10px" }}>
            <TextField
              sx={textFieldStyles}
              fullWidth
              label="Enter Domain"
              variant="outlined"
              name="Domain"
              value={formData.Domain}
              onChange={handleChange}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              maxWidth: 500,
              mt: "10px",
            }}
          >
            <Box sx={{ width: "100%", position: "relative" }}>
              <TextField
                sx={textFieldStyles}
                fullWidth
                label="Enter Skills"
                variant="outlined"
                value={skillInput}
                onChange={handleSkillInputChange}
                onKeyPress={handleKeyPress}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={handleAddSkill}
                      sx={{ color: "white" }}
                    >
                      <AddIcon />
                    </IconButton>
                  ),
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mt: 2,
                width: "100%",
              }}
            >
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  onDelete={() => handleDeleteSkill(skill)}
                  sx={{
                    backgroundColor: "rgba(66,133,244,0.15)",
                    color: "white",
                    borderRadius: "16px",
                    "& .MuiChip-deleteIcon": {
                      color: "white",
                      "&:hover": {
                        color: "#ff4444",
                      },
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: "10px" }}>
            <TextField
              sx={textFieldStyles}
              fullWidth
              label="Enter Github Link"
              variant="outlined"
              name="Github"
              value={formData.Github}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ mt: "10px" }}>
            <TextField
              sx={textFieldStyles}
              fullWidth
              label="Enter Linkedin id"
              variant="outlined"
              name="Linkedin"
              value={formData.Linkedin}
              onChange={handleChange}
            />
          </Box>

          <Box
            sx={{
              mt: "10px",
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              color="success"
              sx={{
                border: "2.7px #4285F4 solid",
                fontSize: "clamp(18px,1.4vw,30px)",
                borderRadius: "clamp(10px,1.1vw,45px)",
                px: "clamp(30px,5vw,50px)",
                textTransform: "capitalize",
                fontFamily: "poppins",
                fontWeight: "medium",
                color: "#FFFFFF",
                backgroundColor: "rgba(30,30,30,0.5)",
                ":hover": { backgroundColor: "rgba(66,133,244,0.15)" },
              }}
              onClick={() => {
                router.push("/profile");
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Edit_Profile;
