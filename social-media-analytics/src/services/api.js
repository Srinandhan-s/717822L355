const API_BASE_URL = "http://20.244.56.144/test";
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI0MjY3LCJpYXQiOjE3NDI2MjM5NjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjM4YjAwNjNmLTEwZjgtNDYzMy1iNTdlLTk2ODg5M2M3ZDYxYSIsInN1YiI6IjcxNzgyMmwzNTVAa2NlLmFjLmluIn0sImNvbXBhbnlOYW1lIjoia2FycGFnYW1fY29sbGVnZV9vZl9lbmdpbmVlcmluZyIsImNsaWVudElEIjoiMzhiMDA2M2YtMTBmOC00NjMzLWI1N2UtOTY4ODkzYzdkNjFhIiwiY2xpZW50U2VjcmV0IjoiS2V4eGdNbnpiUERYVEZyVCIsIm93bmVyTmFtZSI6InNyaV9uYW5kaGFuIiwib3duZXJFbWFpbCI6IjcxNzgyMmwzNTVAa2NlLmFjLmluIiwicm9sbE5vIjoiNzE3ODIyTDM1NSJ9._JJ1SjoseD-lVl12fV1iURdGQBu0UuEarkFxmIWpFCs"

// Fetch all users with authentication
export const getUsers = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`, {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

// Fetch all posts with authentication
export const getPosts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/posts`, {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

// Fetch comments for a specific post with authentication
export const getComments = async (postId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`, {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch comments");
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
    }
};