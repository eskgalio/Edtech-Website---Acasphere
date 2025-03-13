import React, { useState, useEffect } from 'react';
import { createTask, fetchTasks, deleteTask } from '../api/taskApi';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    location: '',
    educationLevel: '',
    preferredStudyTime: '',
    learningGoals: '',
    disabilityNeeds: '',
    notificationPreference: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const sessionResponse = await fetch('/api/users/check-session');
        const sessionData = await sessionResponse.json();
        if (sessionResponse.status === 200 && sessionData.message === 'Session is active') {
          const profileResponse = await fetch('/api/users/profile');
          const profileData = await profileResponse.json();
          setUserData(profileData);
        } else {
          console.error('User not authenticated. Session is inactive.');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserData();

    const loadTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks.filter(task => task.useremail === userData.email));
      } catch (err) {
        console.error('Error loading tasks:', err);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, [userData.email]);

  // Function to handle adding a new task
  const addTask = async (e) => {
    e.preventDefault();
    const newTask = {
      title: e.target.title.value,
      due: e.target.dueDate.value,
      priority: e.target.priority.value,
      category: e.target.category.value,
      useremail: userData.email,
    };

    try {
      const createdTask = await createTask(newTask);
      setTasks([...tasks, createdTask]);
      e.target.reset();
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <section className="pb-12 pt-4">
      <div className="bg-gray-900 p-8 rounded-lg hover:shadow-xl border">
      <h2 className="text-4xl font-bold text-center text-blue-500 mb-8">Task Management</h2>
        <form
          onSubmit={addTask}
          className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl border"
        >
          <h3 className="text-2xl mb-4 text-blue-400">Add New Task</h3>
          <div className="flex flex-wrap gap-4">
            <input
              name="title"
              type="text"
              placeholder="Task Title"
              required
              className="w-full md:w-1/2 border border-gray-600 rounded-lg p-3 bg-gray-700 text-gray-200 focus:border-blue-400"
            />
            <input
              name="dueDate"
              type="date"
              required
              className="w-full md:w-1/4 border border-gray-600 rounded-lg p-3 bg-gray-700 text-gray-200 focus:border-blue-400"
            />
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <select
              name="priority"
              className="w-full md:w-1/4 border border-gray-600 rounded-lg p-3 bg-gray-700 text-gray-200 focus:border-blue-400"
            >
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
            <select
              name="category"
              className="w-full md:w-1/4 border border-gray-600 rounded-lg p-3 bg-gray-700 text-gray-200 focus:border-blue-400"
            >
              <option value="Study">Study</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white font-semibold rounded-lg py-2 px-4 hover:bg-blue-600 transition-transform duration-300"
          >
            Add Task
          </button>
        </form>

        <div className="mt-10">
          <h3 className="text-2xl mb-6 text-blue-400">Your Tasks</h3>
          {loading ? (
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
          ) : tasks.length === 0 ? (
            <p className="text-gray-400 text-center">No tasks available</p>
          ) : (
            <ul className="space-y-4">
              {tasks.map((task) => (
                <li
                  key={task._id}
                  className="bg-gray-700 p-5 border rounded-lg shadow-md transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-lg text-blue-300">{task.title}</h4>
                      <p className="text-gray-400">
                        Due: {task.due} | Priority: {task.priority}
                      </p>
                      <p className="text-gray-400">Category: {task.category}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteTask(task._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg py-2 px-3 transition-transform transform hover:scale-105"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskManager;
