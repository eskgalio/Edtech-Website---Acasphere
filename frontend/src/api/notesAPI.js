import axios from 'axios';
const API_URL = 'http://localhost:5000/api/notes';

export const fetchNotes = async () => {
  return await axios.get(API_URL);
};

export const createNote = async (noteData) => {
  console.log(noteData);
  return await axios.post(API_URL, noteData);
};
