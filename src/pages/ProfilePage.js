import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../services/authService';

const ProfilePage = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const data = await getUserProfile(token);
                setProfile(data);
            } catch (error) {
                console.error('Failed to fetch profile', error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="container">
            <h1>Profile</h1>
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Email:</strong> {profile.email}</p>
        </div>
    );
};

export default ProfilePage;
