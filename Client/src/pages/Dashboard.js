import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [newReview, setNewReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we're just resetting the form.
    setNewReview('');
    // You can later add code here to handle the submitted review.
  };

  return (
    <div className="dashboard-container">
      {/* You can add other dashboard sections here if needed */}
      <div className="main-content">
        <div className="header">
          <h2>Enter Your Review</h2>
          <p>Please share your thoughts about the neighborhood.</p>
        </div>

        {/* Review Form */}
        <div className="reviews-section">
          <form className="review-form" onSubmit={handleSubmit}>
            <textarea
              className="review-input"
              placeholder="Enter your review..."
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <button type="submit" className="submit-button">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
