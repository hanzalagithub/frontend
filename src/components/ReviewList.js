import React from 'react';
import { Link } from 'react-router-dom';

const ReviewList = ({ reviews }) => {
    return (
        <div>
            {reviews.map(review => (
                <div key={review._id} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{review.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{review.author}</h6>
                        <p className="card-text">{review.reviewText}</p>
                        <p className="card-text"><small className="text-muted">Rating: {review.rating}</small></p>
                        <Link to={`/edit-review/${review._id}`} className="btn btn-primary">Edit</Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
