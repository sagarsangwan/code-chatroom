export default async function PostData(data, method) {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseURL}/api/coderoom/`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return (
        result
    )
}