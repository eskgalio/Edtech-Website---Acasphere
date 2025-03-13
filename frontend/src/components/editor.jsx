import React, { useState } from 'react';
import { executeCode, saveSnippet, loadSnippets, fetchLogs } from '../api/codeEditor'

function Editor() {
  const [language, setLanguage] = useState('Python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRun = async () => {
    try {
      const result = await executeCode(code, language);
      setOutput(result.output || 'No output received.');
    } catch (error) {
      setOutput(error.error || 'Error executing code.');
    }
  };

  const handleSaveSnippet = async () => {
    try {
      await saveSnippet(code, language);
      alert('Snippet saved successfully!');
    } catch (error) {
      alert(error.error || 'Failed to save snippet.');
    }
  };

  const handleLoadSnippets = async () => {
    try {
      const snippets = await loadSnippets();
      console.log('Snippets:', snippets);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchLogs = async () => {
    try {
      const logs = await fetchLogs();
      console.log('Logs:', logs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <label className="text-gray-300">Select Language :</label>
        <select
          className="bg-gray-700 text-white p-2 rounded ml-4"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>Python</option>
          <option>JavaScript</option>
          <option>C++</option>
          <option>Java</option>
          <option>Ruby</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleRun}
        >
          Run
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleSaveSnippet}
        >
          Save Snippet
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded"
          onClick={handleLoadSnippets}
        >
          Load Snippet
        </button>
        <button
          className="bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={handleFetchLogs}
        >
          View Logs
        </button>
      </div>
      <div className="mt-4">
        <textarea
          className="w-full h-48 bg-gray-900 text-white p-4 rounded"
          placeholder="Write your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
      </div>
      <div className="mt-4 bg-gray-900 text-white p-4 rounded h-44">
        {output || '[Output will appear here]'}
      </div>
    </div>
  );
}

export default Editor;
