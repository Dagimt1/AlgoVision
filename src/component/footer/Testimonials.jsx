import React from "react";
import "./testimonials.css";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  // Dummy data for testimonials
  const testimonials = [
    { id: 1, user: "Gohan", rating: 4, comment: "Great service!", icon: "⭐⭐⭐⭐" },
    { id: 2, user: "Trunks", rating: 5, comment: "Excellent experience!", icon: "⭐⭐⭐⭐⭐" },
    { id: 3, user: "Vegeta", rating: 4, comment: "Good product!", icon: "⭐⭐⭐⭐" },
    { id: 4, user: "Goku", rating: 5, comment: "Good product!", icon: "⭐⭐⭐⭐⭐" },

  ];

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="testimonialsContainter">
      <h2 className="testimonialsH2" onClick={navigateHome}>
        Testimonials
      </h2>
      <div className="testimonials">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <div className="user">{testimonial.user}</div>
            <div className="rating">{testimonial.icon}</div>
            <div className="comment">{testimonial.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
