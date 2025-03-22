import React, { useEffect, useState } from 'react';
import { getUsers, getPosts } from '../services/api';

const TopUsers = () => {
    const [topUsers, setTopUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const users = await getUsers();
                const posts = await getPosts();

                const userPostCount = {};
                posts.forEach(post => {
                    userPostCount[post.userid] = (userPostCount[post.userid] || 0) + 1;
                });

                const sortedUsers = Object.keys(userPostCount)
                    .sort((a, b) => userPostCount[b] - userPostCount[a])
                    .slice(0, 5)
                    .map(userId => ({
                        id: userId,
                        name: users.users[userId],
                        postCount: userPostCount[userId]
                    }));

                setTopUsers(sortedUsers);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Top Users</h2>
            <ul>
                {topUsers.map(user => (
                    <li key={user.id}>{user.name} - {user.postCount} posts</li>
                ))}
            </ul>
        </div>
    );
};

export default TopUsers;