import React, { useEffect, useState } from 'react';
import { getPosts, getComments } from '../services/api';

const TrendingPosts = () => {
    const [trendingPosts, setTrendingPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const posts = await getPosts();
                const postsWithComments = await Promise.all(posts.map(async post => {
                    const comments = await getComments(post.id);
                    return { ...post, commentCount: comments.length };
                }));

                const maxComments = Math.max(...postsWithComments.map(p => p.commentCount));
                const trending = postsWithComments.filter(p => p.commentCount === maxComments);

                setTrendingPosts(trending);
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
            <h2>Trending Posts</h2>
            <ul>
                {trendingPosts.map(post => (
                    <li key={post.id}>{post.content} - {post.commentCount} comments</li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingPosts;