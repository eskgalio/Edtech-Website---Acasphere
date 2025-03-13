import axios from 'axios';
const API_URL = 'http://localhost:5000/api/focus-tasks';

export const fetchFocusSettings = async (useremail) => {
  if (!useremail)
    { throw new Error("User email is required to fetch focus settings.");
    }
  const response = await axios.get('http://localhost:5000/api/focus-tasks/settings', {
    params: { useremail }, 
  });
  return response.data;
};

export const saveFocusSettings = async (settings) => {
  const response = await axios.post(`${API_URL}/settings`, settings);
  return response.data;
};
