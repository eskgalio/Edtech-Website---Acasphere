import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from "../api/userApi"; 
import SessionContext from '../context/SessionContext';

export default function ProfileHeader() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setSessionStatus } = useContext(SessionContext);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    location: "",
    educationLevel: "",
    preferredStudyTime: "",
    learningGoals: "",
    disabilityNeeds: "",
    notificationPreference: "",
  });

  const [editedData, setEditedData] = useState({});
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    fetchUserProfile()
      .then((response) => setUserData(response.data))
      .catch(() =>
        setMessage({ type: "error", text: "Failed to load profile data." })
      );
      console.log(userData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const toggleEdit = async () => {
    if (isEditing) {
      setLoading(true);
      try {
        await fetch("/api/users/profile", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editedData),
        });
        setUserData({ ...userData, ...editedData });
        setMessage({ type: "success", text: "Profile updated successfully." });
        window.location.reload(); // Reload the page after successful profile update
      } catch {
        setMessage({ type: "error", text: "Failed to update profile." });
      } finally {
        setLoading(false);
      }
    }
    setIsEditing(!isEditing);
  };

  const validatePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return false;
    }
    if (passwordData.newPassword.length < 8) {
      setMessage({ type: "error", text: "New password must be at least 8 characters long." });
      return false;
    }
    return true;
  };

  const handleSavePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/users/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(passwordData),
      });
      setMessage({ type: "success", text: "Password updated successfully." });
      setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setIsChangingPassword(false);
      window.location.reload(); // Reload the page after successful profile update
    } catch {
      setMessage({ type: "error", text: "Failed to update password." });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/logout', {
        method: 'POST',
        credentials: 'include', 
      });

      const data = await response.json();
      if (response.status === 200) {
        alert(data.message); 
        setSessionStatus('inactive'); 
        navigate('/login');
      } else {
        alert(data.message || 'Logout failed. Please try again.');
      }
    } catch (error) {
      console.error('Logout Error:', error);
      alert('An error occurred during logout.');
    }
  };

  return (
    <div className="profile-header max-w-6xl mx-auto bg-gray-900 text-white rounded-xl p-8 shadow-xl space-y-8 border">
      <header className="flex justify-between items-center border-b border-gray-600 pb-4">
        <h1 className="text-3xl font-bold tracking-wide">{userData.username}</h1>
        <div className="flex space-x-4">
          <button
            onClick={toggleEdit}
            disabled={loading}
            className={`px-4 py-2 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 duration-300 ${
              isEditing ? "bg-green-600 hover:bg-green-500" : "bg-indigo-600 hover:bg-indigo-500"
            }`}
          >
            {isEditing ? "Save Profile" : "Edit Profile"}
          </button>
          {!isEditing && (
            <button
              onClick={() => setIsChangingPassword(!isChangingPassword)}
              disabled={loading}
              className={`px-4 py-2 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 duration-300 ${
                isChangingPassword ? "bg-red-600 hover:bg-red-500" : "bg-blue-600 hover:bg-blue-500"
              }`}
            >
              {isChangingPassword ? "Cancel" : "Change Password"}
            </button>
          )}
          <button
              onClick={handleLogout}
              disabled={loading}
              className="px-4 py-2 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 duration-300 bg-red-600 hover:bg-red-500">Log Out
            </button>
        </div>
      </header>

      {message.text && (
        <p
          className={`p-4 rounded-lg ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message.text}
        </p>
      )}

      {loading && <div className="text-center text-gray-500">Loading...</div>}
      {!isEditing ? (
        <div className="bg-gray-800 rounded-lg shadow-md border">
          <h1 className="text-xl font-bold p-4">Profile Details : </h1>
          <div className="grid grid-cols-2 gap-4 p-4 ">
<div>
  <span className="font-medium text-gray-300">Username:</span>
  <div className="mt-1">
    <span className="text-gray-400">{userData.username}</span>
    <p className="text-sm text-gray-500">This is the username associated with your profile.</p>
  </div>
</div>

<div>
  <span className="font-medium text-gray-300">Email:</span>
  <div className="mt-1">
    <span className="text-gray-400">{userData.email}</span>
    <p className="text-sm text-gray-500">This is the email address associated with your account.</p>
  </div>
</div>

<div>
  <span className="font-medium text-gray-300">Phone:</span>
  <div className="mt-1">
    <span className="text-gray-400">{userData.phone}</span>
    <p className="text-sm text-gray-500">This is the phone number linked to your account.</p>
  </div>
</div>

<div>
  <span className="font-medium text-gray-300">Date of Birth:</span>
  <div className="mt-1">
    <span className="text-gray-400">{userData.dateOfBirth}</span>
    <p className="text-sm text-gray-500">Your date of birth helps us personalize your experience.</p>
  </div>
</div>

<div>
  <span className="font-medium text-gray-300">Location:</span>
  <div className="mt-1">
    <span className="text-gray-400">{userData.location}</span>
    <p className="text-sm text-gray-500">Your current location information.</p>
  </div>
</div>

<div>
  <span className="font-medium text-gray-300">Education Level:</span>
  <div className="mt-1">
    <span className="text-gray-400">{userData.educationLevel}</span>
    <p className="text-sm text-gray-500">Your current level of education.</p>
  </div>
</div>

<div>
  <span className="font-medium text-gray-300">Preferred Study Time:</span>
  <div className="mt-1">
    <span className="text-gray-400">{userData.preferredStudyTime}</span>
    <p className="text-sm text-gray-500">The time of day you prefer to study or learn.</p>
  </div>
</div>

<div>
  <span className="font-medium text-gray-300">Learning Goals:</span>
  <div className="mt-1">
    <span className="text-gray-400">{userData.learningGoals}</span>
    <p className="text-sm text-gray-500">Your learning objectives and aspirations.</p>
  </div>
</div>

<div>
  <span className="font-medium text-gray-300">Disability Needs:</span>
  <div className="mt-1">
    <span className="text-gray-400">{userData.disabilityNeeds}</span>
    <p className="text-sm text-gray-500">Any specific needs or accommodations you require.</p>
  </div>
</div>

<div>
  <span className="font-medium text-gray-300">Notification Preference:</span>
  <div className="mt-1">
    <span className="text-gray-400">{userData.notificationPreference}</span>
    <p className="text-sm text-gray-500">Your preference for receiving notifications.</p>
  </div>
</div>
      </div>
      </div>
      
      ) : (
        // Display edit form
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
  {Object.keys(userData)
    .filter((field) => field !== "_id" && field !== "__v") 
    .map((field) => {
      let inputElement;
      const fieldValue = userData[field];

      if (field === "email") {
        inputElement = (
          <input
            type="email"
            id={field}
            name={field}
            value={editedData[field] || fieldValue}
            onChange={handleInputChange}
            className="p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
          />
        );
      } else if (field === "phoneNumber") {
        inputElement = (
          <div className="flex items-stretch">
            <select className="w-20 p-3 border rounded-l bg-gray-800 text-white focus:outline-none">
              <option>+91</option>
              <option>+44</option>
              <option>+1</option>
            </select>
            <input
              type="tel"
              placeholder="Phone number"
              className="flex-grow p-3 border rounded-r bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              value={editedData[field] || fieldValue}
              onChange={handleInputChange}
              required
            />
          </div>
        );
      } else if (field === "dateOfBirth") {
        inputElement = (
          <input
            type="date" 
            id={field}
            name={field}
            value={editedData[field] || fieldValue}
            onChange={handleInputChange}
            className="p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            required
          />
        );
      } else if (field === "educationLevel" || field === "preferredStudyTime") {
        inputElement = (
          <select
            id={field}
            name={field}
            value={editedData[field] || fieldValue}
            onChange={handleInputChange}
            className="p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
          >
            {field === "educationLevel" ? (
              <>
                <option value="highSchool">High School</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
                <option value="doctorate">Doctorate</option>
              </>
            ) : (
              <>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
              </>
            )}
          </select>
        );
      } else if (field === "learningGoals") {
        inputElement = (
          <input
            type="text"
            id={field}
            name={field}
            placeholder="Describe your learning goals"
            className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            value={editedData[field] || fieldValue}
            onChange={handleInputChange}
          />
        );
      } else if (field === "disability") {
        inputElement = (
          <input
            type="text"
            id={field}
            name={field}
            placeholder="If you have any specific needs, please mention them"
            className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            value={editedData[field] || fieldValue}
            onChange={handleInputChange}
          />
        );
      } else if (field === "notificationPreference") {
        inputElement = (
          <div className="col-span-2 flex items-center space-x-4">
            {/* Radio buttons for notification preferences */}
            <div className="flex items-center">
              <input
                type="radio"
                id="email"
                name="notificationPreferences"
                value="Email Only"
                checked={editedData.notificationPreferences === "Email Only" || fieldValue === "Email Only"}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-500"
              />
              <label htmlFor="email" className="ml-2 text-sm text-gray-300">
                Email Only
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="sms"
                name="notificationPreferences"
                value="SMS Only"
                checked={editedData.notificationPreferences === "SMS Only" || fieldValue === "SMS Only"}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-500"
              />
              <label htmlFor="sms" className="ml-2 text-sm text-gray-300">
                SMS Only
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="both-email-sms"
                name="notificationPreferences"
                value="Both Email and SMS"
                checked={editedData.notificationPreferences === "Both Email and SMS" || fieldValue === "Both Email and SMS"}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-500"
              />
              <label htmlFor="both-email-sms" className="ml-2 text-sm text-gray-300">
                Both Email and SMS
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="none"
                name="notificationPreferences"
                value="None"
                checked={editedData.notificationPreferences === "None" || fieldValue === "None"}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-500"
              />
              <label htmlFor="none" className="ml-2 text-sm text-gray-300">
                None
              </label>
            </div>
          </div>
        );
      } else {
        inputElement = (
          <input
            type="text"
            id={field}
            name={field}
            value={editedData[field] || fieldValue}
            onChange={handleInputChange}
            className="p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
          />
        );
      }

      return (
        <div key={field} className="flex flex-col space-y-2">
          <label htmlFor={field} className="font-semibold capitalize">
            {field.replace(/([A-Z])/g, " $1")}
          </label>
          {inputElement}
        </div>
      );
    })}
</form>
      )}

      {isChangingPassword && (
        <form className="space-y-6 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white">Change Password</h2>
          <div>
            <label className="block text-sm font-medium">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="w-full mt-1 p-2 bg-gray-700 rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleSavePassword}
              type="button"
              disabled={loading}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105 duration-300"
            >
              {loading ? "Saving..." : "Save Password"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}