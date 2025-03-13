import React, { useState, useEffect } from "react";
import Timer from "../utils/timer";
import { fetchFocusSettings, saveFocusSettings } from "../api/focusTaskApi";

const Focus = () => {
  const [timer] = useState(new Timer());
  const [time, setTime] = useState("25:00");
  const [isRunning, setIsRunning] = useState(false);
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5); 
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const sessionResponse = await fetch('/api/users/check-session');
        const sessionData = await sessionResponse.json();

        if (sessionResponse.status === 200 && sessionData.message === 'Session is active') {
          const profileResponse = await fetch('/api/users/profile');
          const profileData = await profileResponse.json();
          setUserData(profileData);
          setEmail(profileData.email); 
        } else {
          console.error('User not authenticated. Session is inactive.');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    fetchUserData();

      const loadSettings = async () => {
        try {
          if (email) {
            const settings = await fetchFocusSettings(email);
            if (settings) {
              setFocusDuration(settings.duration / 60); 
              setBreakDuration(settings.breakDuration);
            }
          }
        } catch (err) {
          console.error("Error loading focus settings:", err);
        }
      };
    
      loadSettings();
    }, [email]);
    

  useEffect(() => {
    timer.onTick = (currentTime) => setTime(currentTime);
    timer.onComplete = () => {
      alert("Pomodoro session complete! Time for a break.");
      setIsRunning(false);
    };
    return () => timer.stop(); 
  }, [timer]);

  const startTimer = () => {
    if (!isRunning) {
      timer.start(
        focusDuration * 60, 
        (currentTime) => setTime(currentTime),
        () => {
          alert("Pomodoro session complete! Time for a break.");
          setIsRunning(false);
        }
      );
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    timer.pause();
    setIsRunning(false);
  };

  const resetTimer = () => {
    timer.reset();
    setTime("25:00");
    setIsRunning(false);
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    try {
      await saveFocusSettings({
        useremail:email,
        duration: focusDuration * 60, 
        breakDuration,
      });
      alert("Focus settings saved successfully!");
    } catch (err) {
      console.error("Error saving focus settings:", err);
    }
  };

  return (
    <div className="p-6 custom-container">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">Focus Tools</h2>
      <div className="bg-gray-900 p-6 rounded-lg shadow-md flex space-x-6 border">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-4">Pomodoro Timer</h3>
          <div className="flex items-center space-x-6">
            <div className="w-48 h-48 rounded-full border-8 border-blue-400 flex items-center justify-center text-4xl font-bold">
              {time}
            </div>
            <div className="space-y-3">
              <button
                onClick={startTimer}
                className="bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mr-2"
              >
                Start
              </button>
              <button
                onClick={pauseTimer}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mr-2"
              >
                Pause
              </button>
              <button
                onClick={resetTimer}
                className="bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-4">Custom Focus Mode</h3>
          <form onSubmit={handleSaveSettings}>
            <label htmlFor="focus-duration" className="block text-lg font-medium mb-2">
              Set Focus Duration (minutes):
            </label>
            <input
              type="number"
              id="focus-duration"
              value={focusDuration}
              onChange={(e) => setFocusDuration(Number(e.target.value))}
              className="form-input bg-gray-700 text-white p-3 mb-4 rounded-lg w-full"
              placeholder="e.g., 30"
              required
            />

            <label htmlFor="break-duration" className="block text-lg font-medium mb-2">
              Set Break Duration (minutes):
            </label>
            <input
              type="number"
              id="break-duration"
              value={breakDuration}
              onChange={(e) => setBreakDuration(Number(e.target.value))}
              className="form-input bg-gray-700 text-white p-3 mb-4 rounded-lg w-full"
              placeholder="e.g., 5"
              required
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mt-4"
            >
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Focus;
