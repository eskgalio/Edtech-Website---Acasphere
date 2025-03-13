import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupSection = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [location, setLocation] = useState('');
    const [educationLevel, setEducationLevel] = useState('');
    const [preferredStudyTime, setPreferredStudyTime] = useState('');
    const [learningGoals, setLearningGoals] = useState('');
    const [disabilityNeeds, setDisabilityNeeds] = useState('');
    const [notificationPreference, setNotificationPreference] = useState('None'); // Default preference
      const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('api/users/register', {
                username,
                email,
                password,
                phone,
                dateOfBirth,
                location,
                educationLevel,
                preferredStudyTime,
                learningGoals,
                disabilityNeeds,
                notificationPreference,
            });
            console.log('Response:', response.data);
            alert(response.data.message || 'Registration Successful');
        } catch (error) {
            console.error('Error:', error);
            alert(error.response?.data?.message || 'Registration failed');
        }
    };



    return (
        <section className="flex justify-center items-center h-auto bg-cover bg-center custom-container" style={{ backgroundImage: "url('public/signup.jpg')" }}>
            <div className="bg-gray-700 bg-opacity-90 p-8 shadow-lg max-w-3xl w-full text-center rounded-xl">
                <h2 className="text-3xl font-semibold mb-4">Join AcaSphere!</h2>
                <p className="mb-6">Create your account to get started !!!</p>
                <form className="space-y-4 grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" className="col-span-2 p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />

                    <input type="email" placeholder="Email" className="col-span-2 p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500" value={email}
                        onChange={(e) => setEmail(e.target.value)} required />
                        
                    <div className="col-span-2  relative" >
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        
                    </div>

                    <div className="col-span-2 md:col-span-1 flex items-stretch">
                        <select className="w-20 p-3 border rounded-l bg-gray-800 text-white focus:outline-none">
                            <option>+91</option>
                            <option>+44</option>
                            <option>+1</option>
                        </select>
                        <input type="tel" placeholder="Phone number" className="flex-grow p-3 border rounded-r bg-gray-800 text-white focus:outline-none focus:border-blue-500" value={phone}
                        onChange={(e) => setPhone(e.target.value)} required />
                    </div>
            <input
              type="date"
              id="dob"
              name="dob"
              className="col-span-2 md:col-span-1 p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              className="col-span-2 p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              value={location} onChange={(e) => setLocation(e.target.value)}
              required
            />

            <select
              id="educationLevel"
              name="educationLevel"
              placeholder="Education Level"
              className="col-span-2 md:col-span-1 p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)}
              required
            >
                <option value="" disabled selected hidden>Education Level</option>
              <option value="highSchool">High School</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
              <option value="doctorate">Doctorate</option>
            </select>

            <select
              id="preferredStudyTime"
              name="preferredStudyTime"
              className="col-span-2 md:col-span-1 p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              value={preferredStudyTime} onChange={(e) => setPreferredStudyTime(e.target.value)}
              required
            >
                <option value="" disabled selected hidden>Study Time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>

            <textarea
              id="learningGoals"
              name="learningGoals"
              placeholder="Describe your learning goals"
              className="col-span-2  w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              rows="4"
              onChange={(e) => setLearningGoals(e.target.value)}
              required
            ></textarea>
            <textarea
              id="disability"
              name="disability"
              placeholder="If you have any specific needs, please mention them"
              className="col-span-2  w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              rows="4"
              value={disabilityNeeds} onChange={(e) => setDisabilityNeeds(e.target.value)}
            ></textarea>
          <div className="col-span-2 flex items-center text-sm text-gray-300">
            <label
              htmlFor="notificationPreferences"
              className="text-sm font-medium text-gray-300 mr-8"
            >
              Notification Preferences
            </label>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="email"
                  name="notificationPreferences"
                  value="Email Only"
                            checked={notificationPreference === 'Email Only'}
                            onChange={(e) => setNotificationPreference(e.target.value)}
                  className="h-4 w-4 text-blue-500"
                  required
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
                            checked={notificationPreference === 'SMS Only'}
                            onChange={(e) => setNotificationPreference(e.target.value)}
                  className="h-4 w-4 text-blue-500"
                  required
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
                            checked={notificationPreference === 'Both Email and SMS'}
                            onChange={(e) => setNotificationPreference(e.target.value)}
                  className="h-4 w-4 text-blue-500"
                  required
                />
                <label htmlFor="sms" className="ml-2 text-sm text-gray-300">
                  Both Email and SMS
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="none"
                  name="notificationPreferences"
                  value="None"
                            checked={notificationPreference === 'None'}
                            onChange={(e) => setNotificationPreference(e.target.value)}
                  className="h-4 w-4 text-blue-500"
                  required
                />
                <label htmlFor="sms" className="ml-2 text-sm text-gray-300">
                  None
                </label>
              </div>
            </div>
            </div>
                    <div className="col-span-2 flex items-center text-sm text-gray-300">
                        <input type="checkbox" className="mr-2" required />
                        <span>I agree to the <Link to="/privacy-policy" className="text-blue-400 hover:underline">Terms and Conditions and Privacy Policy</Link>.</span>
                    </div>
                    <button type="submit" className="col-span-2 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition-transform transform hover:scale-105 hover:border-white">
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-sm">Need help? Visit our <Link to="/faq" className="text-blue-400 hover:underline">Support/FAQ</Link> page.</p>
                <p className="mt-4 text-sm">Already have an account? <Link to="/login" className="text-blue-400 hover:underline">Sign in here</Link>.</p>
            </div>
        </section>
    );
};

export default SignupSection;
