import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; 

export const sendContactMessage = async (contactData) => {
    try {
      console.log('Sending contact data:', contactData); 
      const response = await axios.post(`${API_BASE_URL}/contact`, contactData);
      console.log('Server response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error sending contact message:', error.response ? error.response.data : error.message);
      throw error;
    }
  };
  

