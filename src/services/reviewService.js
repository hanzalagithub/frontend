import axios from './axios';

export const addReview = async (reviewData, token) => {
    const response = await axios.post('/reviews', reviewData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const getReviews = async () => {
    const response = await axios.get('/reviews');
    return response.data;
};

export const updateReview = async (id, reviewData, token) => {
    const response = await axios.put(`/reviews/${id}`, reviewData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

export const deleteReview = async (id, token) => {
    const response = await axios.delete(`/reviews/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};
