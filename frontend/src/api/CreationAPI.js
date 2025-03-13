import axios from 'axios';
const API_URL = 'http://localhost:5000/api/events';

export const createEvent = async (eventData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error || 'Failed to create event');
    }

    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

