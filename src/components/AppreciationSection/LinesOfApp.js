import React from "react";
import Header from "./components/header";
import Testimonials from "./components/reviews";

const ReviewSection = () => {
  return (
    <div className="p-10 relative bg-gray-700">
      {/* Header */}
      <Header />
      {/* Testimonials  */}
      <Testimonials />
    </div>
  );
};

export default ReviewSection;
