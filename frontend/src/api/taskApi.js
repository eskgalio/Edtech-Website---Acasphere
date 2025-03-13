import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/tasks';

export const fetchTasks = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    console.error('Error fetching tasks:', err.response ? err.response.data : err.message);
    throw err;
  }
};

export const createTask = async (task) => {
  try {
    console.log('Task to create (API):', task);
    const response = await axios.post(BASE_URL, task);
    return response.data;
  } catch (err) {
    console.error('Error creating task:', err.response ? err.response.data : err.message);
    throw err;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${taskId}`);
    return response.data;
  } catch (err) {
    console.error('Error deleting task:', err.response ? err.response.data : err.message);
    throw err;
  }
};
