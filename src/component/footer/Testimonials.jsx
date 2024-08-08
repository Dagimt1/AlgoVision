import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { testimonials } from "./testimonials";

// Functional component to render a star rating
const StarRating = ({ rating }) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
    {Array(5)
      .fill()
      .map((_, index) =>
        index < rating ? (
          <StarIcon key={index} sx={{ color: "primary.main", fontSize: 16 }} />
        ) : (
          <StarBorderIcon
            key={index}
            sx={{ color: "primary.main", fontSize: 16 }}
          />
        )
      )}
  </Box>
);

const Testimonials = () => {
  const navigate = useNavigate();
  const [sortCriteria, setSortCriteria] = useState("date");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  
  // Callback function for navigating to the home page
  const navigateHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  // Function to filter testimonials based on search and rating
  const filteredTestimonials = testimonials
    .filter((testimonial) =>
      testimonial.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      testimonial.comment.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((testimonial) =>
      selectedRating ? testimonial.rating === Number(selectedRating) : true
    );

  // Function to sort testimonials based on the selected criteria
  const sortedTestimonials = [...filteredTestimonials].sort((a, b) => {
    if (sortCriteria === "rating") {
      return b.rating - a.rating; // Sort by rating in descending order
    }
    if (sortCriteria === "date") {
      return new Date(b.date) - new Date(a.date); // Sort by date in descending order
    }
    return 0;
  });

  return (
    <Container sx={{ py: 4, background: 'linear-gradient(to right, #f5f7f9, #e3e4e8)', minHeight: '100vh', p: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          cursor: "pointer",
          mb: 4,
          color: "primary.main",
          fontWeight: "bold",
          transition: "color 0.3s",
          "&:hover": {
            color: "primary.dark",
          },
        }}
        onClick={navigateHome}
      >
        Testimonials
      </Typography>

      {/* Search bar */}
      <TextField
        fullWidth
        label="Search User or Comment"
        variant="outlined"
        sx={{ mb: 4, bgcolor: "#fff", borderRadius: 1, boxShadow: 1 }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Filter by rating */}
      <FormControl sx={{ mb: 4, minWidth: 120 }}>
        <InputLabel>Rating</InputLabel>
        <Select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          label="Rating"
          sx={{ bgcolor: "#fff", borderRadius: 1, boxShadow: 1 }}
        >
          <MenuItem value="">All Ratings</MenuItem>
          {[1, 2, 3, 4, 5].map((rating) => (
            <MenuItem key={rating} value={rating}>
              {rating} Star{rating > 1 ? 's' : ''}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Sort dropdown menu */}
      <FormControl sx={{ mb: 4, minWidth: 120 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
          label="Sort By"
          sx={{ bgcolor: "#fff", borderRadius: 1, boxShadow: 1 }}
        >
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="rating">Rating</MenuItem>
        </Select>
      </FormControl>

      {/* Grid layout to display sorted testimonials */}
      <Grid container spacing={2}>
        {sortedTestimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              {/* Display user info and rating */}
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      color: "#fff",
                      fontWeight: "bold",
                      width: 40,
                      height: 40,
                      fontSize: "2rem",
                    }}
                  >
                    {testimonial.user.charAt(0)} {/* Display the initial of the user */}
                  </Avatar>
                </Grid>
                <Grid item xs>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: "bold", fontSize: "1rem" }}
                  >
                    {testimonial.user}
                  </Typography>
                  <StarRating rating={testimonial.rating} /> {/* Render star rating */}
                </Grid>
              </Grid>
              <Divider sx={{ my: 1 }} />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: "1rem" }}
              >
                {testimonial.comment} {/* Display the comment */}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
