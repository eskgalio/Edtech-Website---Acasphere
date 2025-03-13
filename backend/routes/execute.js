const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const Log = require('../models/Log');

const router = express.Router();

const languageMap = {
  Python: 71,
  JavaScript: 63,
  'C++': 54,
  Java: 62,
  Ruby: 72,
};

router.post('/', async (req, res) => {
  const { code, language } = req.body;

  if (!languageMap[language]) {
    return res.status(400).json({ error: 'Unsupported language' });
  }

  let command;
  let fileName = '';


  if (language === 'JavaScript') {
    command = `node -e "${code}"`; 
  } else if (language === 'Python') {
    command = `python -c "${code}"`; 
  } else if (language === 'C++') {
    fileName = 'temp_code.cpp';
    fs.writeFileSync(fileName, code); 
    command = `g++ ${fileName} -o temp_code && ./temp_code`; 
  } else if (language === 'Java') {
    fileName = 'TempCode.java';
    fs.writeFileSync(fileName, code);
    command = `javac ${fileName} && java TempCode`; 
  } else if (language === 'Ruby') {
    command = `ruby -e "${code}"`;
  } else {
    return res.status(400).json({ error: 'Unsupported language' });
  }

  // Execute the command to run the code
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: stderr || error.message });
    }

    // Save execution log
    const output = stdout || stderr;
    const logEntry = new Log({ code, language, output });
    logEntry.save()
      .then(() => {
        res.json({ output });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: 'Failed to save log' });
      });
  });
});

module.exports = router;
