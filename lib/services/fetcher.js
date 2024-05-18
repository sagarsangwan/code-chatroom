// lib/fetcher.js
const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchWithToken(endpoint, options = {}) {
    const token = localStorage.getItem('access_token');

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    // Make the fetch request with the provided URL, headers, and options
    const response = await fetch(`${API_BASE_URL}/api/${endpoint}`, {
        ...options,
        headers,
    });

    // Handle the response
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}
