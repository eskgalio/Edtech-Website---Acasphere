import React from 'react';

const EventProgressionPage = () => {
  const participants = [
    { id: 1, name: 'John Doe', status: 'Attended', score: 85 },
    { id: 2, name: 'Jane Smith', status: 'Unattended', score: null },
    { id: 3, name: 'Alice Johnson', status: 'Attended', score: 92 },
    { id: 4, name: 'Robert Brown', status: 'Attended', score: 78 },
  ];

  const attendedCount = participants.filter((p) => p.status === 'Attended').length;
  const totalParticipants = participants.length;
  const progressPercentage = Math.round((attendedCount / totalParticipants) * 100);

  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-500">Event Progression</h1>
        <p className="text-lg text-purple-300 mt-2">
          Track participant attendance and performance in real-time.
        </p>
      </div>
      <div className="max-w-5xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold text-white mb-4">Event Progress</h2>
        <div className="relative w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            className="absolute top-0 left-0 bg-gradient-to-r from-purple-400 to-purple-600 h-6"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <p className="mt-2 text-white">
          {attendedCount} of {totalParticipants} participants have attended (
          <span className="font-semibold">{progressPercentage}%</span>).
        </p>
      </div>
      <div className="max-w-5xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Participants</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 p-4 font-medium text-gray-500">Participant</th>
              <th className="border-b-2 p-4 font-medium text-gray-500">Status</th>
              <th className="border-b-2 p-4 font-medium text-gray-500">Score</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p) => (
              <tr
                key={p.id}
                className="hover:bg-gray-800 transition duration-300"
              >
                <td className="border-b p-4 text-gray-500">{p.name}</td>
                <td
                  className={`border-b p-4 font-semibold ${
                    p.status === 'Attended'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {p.status}
                </td>
                <td className="border-b p-4 text-gray-500">
                  {p.score !== null ? p.score : <span className="text-gray-500">N/A</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventProgressionPage;
