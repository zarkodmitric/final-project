export const RAW_URl = 'https://api.advanziaeducation.com/api';
export const BASE_URL = 'https://api.advanziaeducation.com';
const API_KEY = '04ecb58d6b269028057b4d88965d0857c3a5cd6cdd5f62740546e174c6982fa3';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function apiRequest(endpoint, options = {}) {
    
    await sleep(500);
    const response = await fetch(`${RAW_URl}${endpoint}`, {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': API_KEY,
            ...options.headers
        },
        body: options.body ? JSON.stringify(options.body) : undefined
    });

    if (!response.ok) {
    const error = await response.text();

    console.log("STATUS:", response.status);
    console.log("SERVER ERROR:", error);

    throw new Error(`Request failed: ${response.status}`);
}

    return response.json();
}