import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/api';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const posts = await getPosts();
                setPosts(posts.reverse()); // Newest posts first
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
            <h2>Feed</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default Feed;