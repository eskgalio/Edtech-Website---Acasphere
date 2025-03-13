import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const Unix = () => {
  // Mock dataset for questions
  const questionsData = [
    { "id": 1, "question": "Which command is used to list files in a directory in Unix?", "options": ["list", "ls", "dir", "show"], "correctAnswer": "ls" },
    { "id": 2, "question": "How do you change the current directory in Unix?", "options": ["chdir", "cd", "dirchange", "move"], "correctAnswer": "cd" },
    { "id": 3, "question": "Which command is used to create a new directory in Unix?", "options": ["mkdir", "newdir", "createdir", "makedir"], "correctAnswer": "mkdir" },
    { "id": 4, "question": "How do you remove a file in Unix?", "options": ["rm", "delete", "remove", "del"], "correctAnswer": "rm" },
    { "id": 5, "question": "What command is used to display the current working directory in Unix?", "options": ["pwd", "dir", "showdir", "current"], "correctAnswer": "pwd" },
    { "id": 6, "question": "Which command shows the manual page for a command in Unix?", "options": ["man", "help", "info", "doc"], "correctAnswer": "man" },
    { "id": 7, "question": "What does the 'chmod' command do in Unix?", "options": ["Change file permissions", "Change file owner", "Create directories", "Display file contents"], "correctAnswer": "Change file permissions" },
    { "id": 8, "question": "How do you view the contents of a file in Unix?", "options": ["cat", "view", "display", "see"], "correctAnswer": "cat" },
    { "id": 9, "question": "Which command is used to copy a file in Unix?", "options": ["copy", "cp", "duplicate", "clone"], "correctAnswer": "cp" },
    { "id": 10, "question": "What does the 'mv' command do in Unix?", "options": ["Move or rename files", "View files", "Delete files", "Create files"], "correctAnswer": "Move or rename files" },
    { "id": 11, "question": "How do you view the contents of a directory in Unix?", "options": ["ls", "dir", "list", "showdir"], "correctAnswer": "ls" },
    { "id": 12, "question": "What is the default permissions for a newly created file in Unix?", "options": ["644", "755", "777", "7777"], "correctAnswer": "644" },
    { "id": 13, "question": "Which command is used to display the current system date and time in Unix?", "options": ["date", "datetime", "time", "now"], "correctAnswer": "date" },
    { "id": 14, "question": "How do you search for a specific pattern in a file in Unix?", "options": ["grep", "search", "find", "locate"], "correctAnswer": "grep" },
    { "id": 15, "question": "Which command shows the contents of a file one page at a time in Unix?", "options": ["more", "cat", "less", "view"], "correctAnswer": "more" },
    { "id": 16, "question": "Which command is used to create a symbolic link in Unix?", "options": ["ln -s", "link", "symlink", "ln -l"], "correctAnswer": "ln -s" },
    { "id": 17, "question": "What does the 'ps' command do in Unix?", "options": ["Displays process information", "Shows system resources", "List directories", "View files"], "correctAnswer": "Displays process information" },
    { "id": 18, "question": "How do you terminate a running process in Unix?", "options": ["kill", "end", "terminate", "stop"], "correctAnswer": "kill" },
    { "id": 19, "question": "Which command is used to check the disk usage in Unix?", "options": ["df", "du", "disk", "usage"], "correctAnswer": "du" },
    { "id": 20, "question": "What is the purpose of the 'top' command in Unix?", "options": ["Displays running processes", "Shows system logs", "Reboots the system", "Displays system resource usage"], "correctAnswer": "Displays running processes" },
    { "id": 21, "question": "How do you display a specific line from a file in Unix?", "options": ["sed", "awk", "head", "tail"], "correctAnswer": "sed" },
    { "id": 22, "question": "What is the purpose of the 'find' command in Unix?", "options": ["Search files and directories", "List all files", "Display the current directory", "Delete files"], "correctAnswer": "Search files and directories" },
    { "id": 23, "question": "Which command is used to compress files in Unix?", "options": ["compress", "gzip", "tar", "zip"], "correctAnswer": "gzip" },
    { "id": 24, "question": "What does the 'tar' command do in Unix?", "options": ["Compress and archive files", "Delete files", "Move files", "List files"], "correctAnswer": "Compress and archive files" },
    { "id": 25, "question": "Which command is used to change the owner of a file in Unix?", "options": ["chown", "chmod", "chuser", "owner"], "correctAnswer": "chown" },
    { "id": 26, "question": "What command is used to display the last few lines of a file in Unix?", "options": ["tail", "head", "cat", "last"], "correctAnswer": "tail" },
    { "id": 27, "question": "Which command is used to display the user who is currently logged in to the system?", "options": ["who", "whoami", "users", "logname"], "correctAnswer": "whoami" },
    { "id": 28, "question": "How do you view the system's manual page for a command in Unix?", "options": ["man", "help", "info", "docs"], "correctAnswer": "man" },
    { "id": 29, "question": "What is the purpose of the 'grep' command in Unix?", "options": ["Search for patterns in files", "Find files", "Change file permissions", "List files"], "correctAnswer": "Search for patterns in files" },
    { "id": 30, "question": "Which command is used to display network configuration in Unix?", "options": ["ifconfig", "netstat", "network", "showip"], "correctAnswer": "ifconfig" },
    { "id": 31, "question": "How do you display the first N lines of a file in Unix?", "options": ["head", "top", "begin", "first"], "correctAnswer": "head" },
    { "id": 32, "question": "What command is used to display disk space usage in Unix?", "options": ["df", "du", "space", "disk"], "correctAnswer": "df" },
    { "id": 33, "question": "What is the default shell in most Unix systems?", "options": ["Bash", "Zsh", "Csh", "Fish"], "correctAnswer": "Bash" },
    { "id": 34, "question": "How do you view the environment variables in Unix?", "options": ["env", "set", "printenv", "variables"], "correctAnswer": "env" },
    { "id": 35, "question": "Which command is used to print the system hostname in Unix?", "options": ["hostname", "sysname", "computer", "host"], "correctAnswer": "hostname" },
    { "id": 36, "question": "What is the purpose of the 'chmod 755' command in Unix?", "options": ["Set file permissions to rwxr-xr-x", "Set file permissions to rwxrw-r--", "Change file ownership", "Remove file permissions"], "correctAnswer": "Set file permissions to rwxr-xr-x" },
    { "id": 37, "question": "How do you view a file's permissions in Unix?", "options": ["ls -l", "ls -a", "chmod -r", "file -p"], "correctAnswer": "ls -l" },
    { "id": 38, "question": "What does the 'alias' command do in Unix?", "options": ["Creates a shortcut for commands", "Displays file contents", "Changes user permissions", "Creates a new file"], "correctAnswer": "Creates a shortcut for commands" },
    { "id": 39, "question": "Which command is used to schedule a command to run at a later time in Unix?", "options": ["at", "cron", "schedule", "time"], "correctAnswer": "at" },
    { "id": 40, "question": "Which file stores user information in Unix?", "options": ["/etc/passwd", "/etc/userinfo", "/etc/users", "/home/users"], "correctAnswer": "/etc/passwd" },
    { "id": 41, "question": "How do you change the owner of a file in Unix?", "options": ["chown", "chmod", "setowner", "changeowner"], "correctAnswer": "chown" },
    { "id": 42, "question": "Which command is used to check the network connections in Unix?", "options": ["netstat", "ifconfig", "ipconfig", "netconnect"], "correctAnswer": "netstat" },
    { "id": 43, "question": "What does the 'grep -r' command do in Unix?", "options": ["Search files recursively", "Search files with regular expressions", "Search files in a specific directory", "Search for a pattern in a file"], "correctAnswer": "Search files recursively" },
    { "id": 44, "question": "How do you find out which processes are running in Unix?", "options": ["ps", "process", "top", "status"], "correctAnswer": "ps" },
    { "id": 45, "question": "What does the 'chmod +x file' command do?", "options": ["Makes the file executable", "Changes the file owner", "Displays file contents", "Deletes the file"], "correctAnswer": "Makes the file executable" },
    { "id": 46, "question": "What does the 'uptime' command do in Unix?", "options": ["Displays system uptime", "Displays current date and time", "Lists all users", "Shows system logs"], "correctAnswer": "Displays system uptime" },
    { "id": 47, "question": "Which command is used to concatenate files in Unix?", "options": ["cat", "concatenate", "join", "combine"], "correctAnswer": "cat" },
    { "id": 48, "question": "What is the purpose of the 'df' command in Unix?", "options": ["Display disk space usage", "List files in a directory", "Change file permissions", "Display file contents"], "correctAnswer": "Display disk space usage" },
    { "id": 49, "question": "How do you create a symbolic link in Unix?", "options": ["ln -s", "link -s", "symlink", "create -s"], "correctAnswer": "ln -s" },
    { "id": 50, "question": "How do you check the available memory in Unix?", "options": ["free", "memory", "ram", "memcheck"], "correctAnswer": "free" },
    { "id": 51, "question": "How do you compare two files in Unix?", "options": ["diff", "cmp", "compare", "check"], "correctAnswer": "diff" },
    { "id": 52, "question": "What is the use of the 'echo' command in Unix?", "options": ["Display text or variables", "Create files", "Move files", "Search for files"], "correctAnswer": "Display text or variables" },
    { "id": 53, "question": "Which command shows the system's kernel version in Unix?", "options": ["uname -r", "kernel -v", "version", "sysinfo"], "correctAnswer": "uname -r" },
    { "id": 54, "question": "What does the 'kill' command do in Unix?", "options": ["Terminate processes", "List processes", "Create files", "Change file permissions"], "correctAnswer": "Terminate processes" },
    { "id": 55, "question": "What does the 'ln' command do in Unix?", "options": ["Create hard links", "Create symbolic links", "List files", "Change file permissions"], "correctAnswer": "Create hard links" },
    { "id": 56, "question": "Which command is used to display the first N lines of a file in Unix?", "options": ["head", "tail", "top", "begin"], "correctAnswer": "head" },
    { "id": 57, "question": "What does the 'who' command do in Unix?", "options": ["Displays users currently logged in", "Displays system uptime", "Displays running processes", "Displays disk usage"], "correctAnswer": "Displays users currently logged in" },
    { "id": 58, "question": "Which of the following is the correct syntax to schedule a job using cron?", "options": ["crontab -e", "cron job", "schedule -e", "cronschedule"], "correctAnswer": "crontab -e" },
    { "id": 59, "question": "What does the 'sort' command do in Unix?", "options": ["Sort lines of text in a file", "Display file contents", "Search files", "Create directories"], "correctAnswer": "Sort lines of text in a file" },
    { "id": 60, "question": "How do you kill a process by its PID in Unix?", "options": ["kill PID", "terminate PID", "stop PID", "kill -9 PID"], "correctAnswer": "kill PID" },
    { "id": 61, "question": "What does the 'tar -czf' command do in Unix?", "options": ["Compress and archive files", "Extract files from an archive", "Create a directory", "Delete files"], "correctAnswer": "Compress and archive files" },
    { "id": 62, "question": "What is the syntax for removing a directory in Unix?", "options": ["rmdir directory", "rm directory", "rmdir -r directory", "remove directory"], "correctAnswer": "rmdir directory" },
    { "id": 63, "question": "How do you search for files in a directory in Unix?", "options": ["find", "locate", "search", "grep"], "correctAnswer": "find" },
    { "id": 64, "question": "What does the 'ifconfig' command do in Unix?", "options": ["Display network configuration", "Display system status", "List processes", "Show memory usage"], "correctAnswer": "Display network configuration" },
    { "id": 65, "question": "What command is used to display the contents of a compressed tar file in Unix?", "options": ["tar -tf", "tar -czf", "tar -xv", "tar -cvf"], "correctAnswer": "tar -tf" },
    { "id": 66, "question": "Which command is used to check the version of a command in Unix?", "options": ["command --version", "version command", "command -v", "version"], "correctAnswer": "command --version" },
    { "id": 67, "question": "What is the syntax for creating a hard link in Unix?", "options": ["ln source target", "link source target", "ln -s source target", "hardlink source target"], "correctAnswer": "ln source target" },
    { "id": 68, "question": "Which command shows system uptime in Unix?", "options": ["uptime", "time", "date", "who"], "correctAnswer": "uptime" },
    { "id": 69, "question": "How do you append data to a file in Unix?", "options": ["echo data >> file", "append data file", "write data >> file", "data >> file"], "correctAnswer": "echo data >> file" },
    { "id": 70, "question": "Which command is used to change the password of a user in Unix?", "options": ["passwd", "password", "changepwd", "userpass"], "correctAnswer": "passwd" },
    { "id": 71, "question": "What command is used to display a list of all users in Unix?", "options": ["cat /etc/passwd", "users", "who", "listusers"], "correctAnswer": "cat /etc/passwd" },
    { "id": 72, "question": "How do you remove a directory and its contents in Unix?", "options": ["rm -r", "rmdir -r", "rm -rf", "delete -r"], "correctAnswer": "rm -r" },
    { "id": 73, "question": "What does the 'hostname' command do?", "options": ["Display the system's hostname", "Display network details", "Change the hostname", "Display memory usage"], "correctAnswer": "Display the system's hostname" },
    { "id": 74, "question": "How do you kill a process by name in Unix?", "options": ["killall processname", "kill processname", "terminate processname", "stop processname"], "correctAnswer": "killall processname" },
    { "id": 75, "question": "What does the 'tar -xvf' command do?", "options": ["Extract files from an archive", "Create an archive", "Display a tar file", "List files in an archive"], "correctAnswer": "Extract files from an archive" },
    { "id": 76, "question": "What is the command to show the active network connections in Unix?", "options": ["netstat", "ifconfig", "top", "ps"], "correctAnswer": "netstat" },
    { "id": 77, "question": "How do you rename a file in Unix?", "options": ["mv oldname newname", "rename oldname newname", "renamefile", "mv rename"], "correctAnswer": "mv oldname newname" },
    { "id": 78, "question": "Which command shows the total disk usage in Unix?", "options": ["du", "df", "disk", "usage"], "correctAnswer": "du" },
    { "id": 79, "question": "What does the 'whoami' command do in Unix?", "options": ["Displays the current logged-in user", "Displays system status", "Lists active processes", "Changes user"], "correctAnswer": "Displays the current logged-in user" },
    { "id": 80, "question": "Which command is used to search for text patterns in files?", "options": ["grep", "search", "locate", "find"], "correctAnswer": "grep" },
    { "id": 81, "question": "How do you display a list of all commands in Unix?", "options": ["compgen -c", "list", "commands", "help"], "correctAnswer": "compgen -c" },
    { "id": 82, "question": "How do you schedule a recurring job using cron in Unix?", "options": ["crontab -e", "cron -r", "schedule -e", "setcron"], "correctAnswer": "crontab -e" },
    { "id": 83, "question": "What does the 'fg' command do in Unix?", "options": ["Bring a background job to the foreground", "Run a command", "Pause a job", "List all jobs"], "correctAnswer": "Bring a background job to the foreground" },
    { "id": 84, "question": "Which command is used to check the available disk space in Unix?", "options": ["df", "du", "disk", "space"], "correctAnswer": "df" },
    { "id": 85, "question": "What does the 'cron' daemon do in Unix?", "options": ["Schedules and executes jobs", "Manages user permissions", "Starts and stops processes", "Monitor system logs"], "correctAnswer": "Schedules and executes jobs" },
    { "id": 86, "question": "What is the command to view the current environment variables in Unix?", "options": ["env", "set", "variables", "printenv"], "correctAnswer": "env" },
    { "id": 87, "question": "Which command is used to change the group ownership of a file?", "options": ["chgrp", "chown", "chmod", "setgroup"], "correctAnswer": "chgrp" },
    { "id": 88, "question": "How do you change a file's permissions to read-only for all users?", "options": ["chmod 444", "chmod 555", "chmod 644", "chmod 777"], "correctAnswer": "chmod 444" },
    { "id": 89, "question": "Which command is used to check the system's kernel version?", "options": ["uname -r", "kernel -v", "sysinfo", "version"], "correctAnswer": "uname -r" },
    { "id": 90, "question": "What is the command to kill all processes related to a specific program?", "options": ["killall programname", "kill programname", "terminate programname", "stop programname"], "correctAnswer": "killall programname" },
    { "id": 91, "question": "What does the 'nohup' command do?", "options": ["Runs a command without hang-up", "Changes user permissions", "Displays a file's content", "Starts a background process"], "correctAnswer": "Runs a command without hang-up" },
    { "id": 92, "question": "What does the 'umask' command do in Unix?", "options": ["Sets default file permissions", "Changes file owner", "Displays file permissions", "Sets system time"], "correctAnswer": "Sets default file permissions" },
    { "id": 93, "question": "What does the 'chown' command do?", "options": ["Changes file owner", "Changes file permissions", "Creates a new file", "Deletes a file"], "correctAnswer": "Changes file owner" },
    { "id": 94, "question": "Which command is used to display the system's kernel information?", "options": ["uname", "sysinfo", "kernel", "version"], "correctAnswer": "uname" },
    { "id": 95, "question": "How do you list all open files in Unix?", "options": ["lsof", "fopen", "files", "listopen"], "correctAnswer": "lsof" },
    { "id": 96, "question": "What does the 'alias' command do?", "options": ["Creates shortcuts for commands", "Displays a list of files", "Changes file permissions", "Creates directories"], "correctAnswer": "Creates shortcuts for commands" },
    { "id": 97, "question": "What does the 'exit' command do in Unix?", "options": ["Exit the terminal session", "End a process", "Exit a script", "Shutdown the system"], "correctAnswer": "Exit the terminal session" },
    { "id": 98, "question": "What is the command to find the location of a command in Unix?", "options": ["which", "where", "locate", "find"], "correctAnswer": "which" },
    { "id": 99, "question": "How do you display the contents of a compressed zip file?", "options": ["unzip -l", "zip -t", "tar -xzvf", "unzip"], "correctAnswer": "unzip -l" },
    { "id": 100, "question": "How do you display the last lines of a file in Unix?", "options": ["tail", "last", "end", "show"], "correctAnswer": "tail" }
];

  // Helper function to shuffle and select 10 questions
  const getRandomQuestions = (data) => {
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 20);
  };

  // Initialize state
  const [questions, setQuestions] = useState(getRandomQuestions(questionsData));
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  // Timer functionality
  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !submitted) {
      handleSubmit();
    }
  }, [timeLeft, submitted]);

  // Handle answer selection
  const handleAnswerChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  // Handle quiz submission
  const handleSubmit = () => {
    setSubmitted(true);
  };

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

    // Calculate score
    const calculateScore = () => {
      return questions.reduce((score, question) => {
        return score + (answers[question.id] === question.correctAnswer ? 1 : 0);
      }, 0);
    };

  return (
    <div className="bg-gray-800 text-white transition duration-500">
      <Header />
      <div className="flex mt-8">
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/unix' className="font-bold text-sm">Unix Programming</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Unix Programming</h1>
          <div className="text-lg text-red-500 font-semibold">
            Time Left: {formatTime(timeLeft)}
          </div>
        </div>
        <form>
          {questions.map((question, index) => (
            <div
              key={question.id}
              className={`mb-6 p-4 border bg-gray-700 ${
                submitted &&
                (answers[question.id] === question.correctAnswer
                  ? "border-green-500"
                  : "border-red-500")
              } rounded-lg`}
            >
              <h2 className="font-semibold text-white mb-2">
                {index + 1}. {question.question}
              </h2>
              <div className="space-y-2">
                {question.options.map((option, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-3"
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      disabled={submitted}
                      onChange={() =>
                        handleAnswerChange(question.id, option)
                      }
                      className="h-4 w-4 text-green-500 cursor-pointer"
                    />
                    <span
                      className={`${
                        submitted &&
                        option === question.correctAnswer &&
                        "text-green-600 font-bold"
                      } ${
                        submitted &&
                        answers[question.id] === option &&
                        answers[question.id] !== question.correctAnswer &&
                        "text-red-500"
                      }`}
                    >
                      {option}
                    </span>
                  </label>
                ))}
              </div>
              {submitted && (
                <div className="mt-2 text-sm text-gray-500">
                  Correct Answer:{" "}
                  <span className="text-green-600 font-medium">
                    {question.correctAnswer}
                  </span>
                </div>
              )}
            </div>
          ))}
        </form>
        {!submitted && (
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
          >
            Submit Quiz
          </button>
        )}
        {submitted && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-green-600">Quiz Submitted!</h2>
            <p className="text-gray-400">
              You scored{" "}
              <span className="text-yellow-400 text-xl font-semibold">
                {calculateScore()}
              </span>{" "}
              out of 20.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Unix;
