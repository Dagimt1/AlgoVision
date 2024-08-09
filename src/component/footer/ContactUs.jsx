import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ContactUs = () => {
  // Hook for navigation
  const navigate = useNavigate();

  // State to manage form field values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to manage form field errors
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  // State to manage form submission status
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  // Handle change in form field values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {
      name: !formValues.name.trim(),
      email: !formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email),
      message: !formValues.message.trim(),
    };
    setFormErrors(errors);
    return !Object.values(errors).includes(true);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Set submitting status and clear previous status
      setFormStatus({ submitting: true, success: false, error: false });

      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Update status on successful submission
        setFormStatus({ submitting: false, success: true, error: false });
        // Clear form values
        setFormValues({ name: "", email: "", message: "" });
      } catch (error) {
        // Update status on error
        setFormStatus({ submitting: false, success: false, error: true });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {/* Center Section with Form */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 8,
              p: 3,
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: 3,
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                "&:hover": { color: "primary.main" },
                width: "100%",
                textAlign: "center",
                mb: 3,
              }}
            >
              Contact Us
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: "100%" }}>
              {/* Success and Error Alerts */}
              {formStatus.success && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Your message has been sent successfully!
                </Alert>
              )}
              {formStatus.error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  Something went wrong. Please try again.
                </Alert>
              )}

              {/* Form Fields */}
              <TextField
                margin="normal"
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={formValues.name}
                onChange={handleChange}
                error={formErrors.name}
                helperText={formErrors.name ? "Name is required" : ""}
              />
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formValues.email}
                onChange={handleChange}
                error={formErrors.email}
                helperText={formErrors.email ? "Enter a valid email address" : ""}
              />
              <TextField
                margin="normal"
                fullWidth
                name="message"
                label="Message"
                id="message"
                multiline
                rows={4}
                value={formValues.message}
                onChange={handleChange}
                error={formErrors.message}
                helperText={formErrors.message ? "Message is required" : ""}
              />
              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? <CircularProgress size={24} /> : "Send"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;