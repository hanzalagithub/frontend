import React, { useState, useEffect } from 'react';
import { getReviews } from '../services/reviewService';
import ReviewList from '../components/ReviewList';

const ReviewPage = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await getReviews();
                setReviews(data);
            } catch (error) {
                console.error('Failed to fetch reviews', error);
            }
        };

        fetchReviews();
    }, []);

    return (
        <div className="container">
            <h1>Reviews</h1>
            <ReviewList reviews={reviews} />
        </div>
    );
};

export default ReviewPage;
