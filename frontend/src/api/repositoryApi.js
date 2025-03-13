import axios from 'axios';
const BASE_URL = 'http://localhost:5000'; 

export const addComment = async (id, comment) => {
  try {
    const response = await axios.put(`${BASE_URL}/repositories/${id}/comment`, { comment });
    return response.data; 
  } catch (error) {
    console.error('Error adding comment:', error);
    throw new Error('Error adding comment');
  }
};

export const getRepositories = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/repositories'); 
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};
