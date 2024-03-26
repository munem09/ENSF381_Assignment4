import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import reviews from '../data/reviews';

const HomeMainSection = () => {
  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    pickRandomReviews();
  }, []);

  const pickRandomReviews = () => {
    const shuffled = [...reviews].sort(() => 0.5 - Math.random());
    setRandomReviews(shuffled.slice(0, 2));
  };

  return (
    <main>
        <section>
            <h1> About Us</h1>
            <p>Welcome to our online store!</p>
            <p>Our mission and vision is to provide good quality products to our customers and ensure 100% customer satisfaction</p>
            <Link to="/products">
              <button> Shop Now </button>
            </Link>
        </section>
        <section>
            <h2>Customer Reviews</h2>
            {randomReviews.map((review, index) => (
                <div key={index} className="review">
                    <h3>{review.customerName}</h3>
                    <p>"{review.reviewContent}"</p>
                    <div className="star-rating">
                    {'★'.repeat(review.stars)}
                    </div>
                </div>
            ))}
        </section>
    </main>
  );
}

export default HomeMainSection;
