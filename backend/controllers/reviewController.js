const Review = require('../models/Review');

exports.addReview = async (req, res) => {
    const { title, author, reviewText, rating } = req.body;

    try {
        const review = new Review({
            title,
            author,
            reviewText,
            rating,
            user: req.user.id,
        });
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user', 'username email');
        res.json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



exports.updateReview = async (req, res) => {
    const { id } = req.params;
    const { title, author, reviewText, rating } = req.body;

    try {
        const review = await Review.findById(id);

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        if (review.user.toString() !== req.user.id) {
            return res.status(401).json({ error: 'Not authorized' });
        }

        review.title = title || review.title;
        review.author = author || review.author;
        review.reviewText = reviewText || review.reviewText;
        review.rating = rating || review.rating;

        await review.save();
        res.json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteReview = async (req, res) => {
    const { id } = req.params;

    try {
        const review = await Review.findById(id);

        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }

        if (review.user.toString() !== req.user.id) {
            return res.status(401).json({ error: 'Not authorized' });
        }

        await review.remove();
        res.json({ message: 'Review removed' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

