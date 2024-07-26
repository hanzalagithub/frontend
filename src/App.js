import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ReviewPage from './pages/ReviewPage';
// import AddReviewPage from './pages/AddReviewPage';
// import EditReviewPage from './pages/EditReviewPage';
import Header from './components/Header';

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={HomePage} exact />
                <Route path="/login" element={LoginPage} />
                <Route path="/register" element={RegisterPage} />
                <Route path="/profile" element={ProfilePage} />
                <Route path="/reviews"element={ReviewPage} />
                {/* <Route path="/add-review" component={AddReviewPage} />
                <Route path="/edit-review/:id" component={EditReviewPage} /> */}
            </Routes>
        </div>
    );
};

export default App;
