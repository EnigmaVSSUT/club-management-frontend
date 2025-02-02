import axios from "axios";
import { Card, Typography, TextField, Button, Box } from "@mui/material";
import { useState } from "react";

export default function EventForm() {
  const [formData, setFormData] = useState({
    header: "",
    description: "",
    clubId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/achievements/create",
        {
          header: formData.header,
          description: formData.description,
          clubId: formData.clubId,
        },
        {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzdjMjMxYzBhNWZhYmU3YzQ4OTNmZTUiLCJpYXQiOjE3MzY1NzE0OTIsImV4cCI6MTczNjU3NTA5Mn0.-vHMoOrHElf-WAuFaA06rAmNNy_pZsrDGxcvThDk2zg",
            "Content-Type": "application/json",
          },
          withCredentials: true, 
        }
      );

      console.log("Response:", response.data);
      alert("Achievement created successfully!");
      setFormData({ header: "", description: "", clubId: "" }); // Reset form after success
    } catch (error) {
      console.error("Error creating achievement:", error);
      alert("Failed to create achievement.");
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: "#1E1E1E",
        color: "#ffffff",
        borderRadius: "4px",
        marginTop: "18px",
        padding: "24px",
        width: { sm: "75%", md: "40%", xl: "40%", xs: "90%", lg: "40%" },
        border: "1px solid #2A2A2A",
      }}
    >
      <Typography
        sx={{ textAlign: "center", marginBottom: "16px" }}
        variant="h5"
      >
        Add A New Achievement
      </Typography>

      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#2A2A2A",
              },
              "&:hover fieldset": {
                borderColor: "#0360BC",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#0360BC",
              },
            },
          }}
          fullWidth
          label="Enter Header"
          variant="outlined"
          name="header"
          value={formData.header}
          onChange={handleChange}
        />
        <TextField
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#2A2A2A",
              },
              "&:hover fieldset": {
                borderColor: "#0360BC",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#0360BC",
              },
            },
          }}
          fullWidth
          label="Enter Club Id"
          variant="outlined"
          name="clubId"
          value={formData.clubId}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Add Description"
          multiline
          variant="filled"
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleChange}
          sx={{
            "& .MuiInputBase-input": { color: "white" },
            "& .MuiInputLabel-root": { color: "white" },
            "& .MuiFilledInput-root": {
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#444" },
              "&.Mui-focused": { backgroundColor: "#333" },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#28A745",
            color: "#ffffff",
            "&:hover": { backgroundColor: "#56D16C" },
            marginTop: "16px",
          }}
        >
          Submit
        </Button>
      </Box>
    </Card>
  );
}
