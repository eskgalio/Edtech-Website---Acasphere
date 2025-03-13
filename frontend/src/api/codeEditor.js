import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const executeCode = (code, language) => {
  return API.post('/execute', { code, language })
    .then(response => response.data)
    .catch(error => {
      console.error('Error executing code:', error);
      throw error.response?.data || { error: 'Failed to execute code' };
    });
};

export const saveSnippet = (code, language) => {
  return API.post('/snippets', { code, language })
    .then(response => response.data)
    .catch(error => {
      console.error('Error saving snippet:', error);
      throw error.response?.data || { error: 'Failed to save snippet' };
    });
};

export const loadSnippets = () => {
  return API.get('/snippets')
    .then(response => response.data)
    .catch(error => {
      console.error('Error loading snippets:', error);
      throw error.response?.data || { error: 'Failed to load snippets' };
    });
};

export const fetchLogs = () => {
  return API.get('/logs')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching logs:', error);
      throw error.response?.data || { error: 'Failed to fetch logs' };
    });
};
