import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { Link } from 'react-router-dom';

const Database = () => {
  // Mock dataset for questions
  const questionsData = [
    {
        "id": 1,
        "question": "What does the acronym DBMS stand for?",
        "options": ["Data Binary Management System", "Database Management System", "Data Backup Management System", "Database Backup Management System"],
        "correctAnswer": "Database Management System"
    },
    {
        "id": 2,
        "question": "Which of the following is not a type of database model?",
        "options": ["Hierarchical", "Relational", "Network", "Virtual"],
        "correctAnswer": "Virtual"
    },
    {
        "id": 3,
        "question": "Which language is used to query a database?",
        "options": ["SQL", "HTML", "CSS", "XML"],
        "correctAnswer": "SQL"
    },
    {
        "id": 4,
        "question": "What is the main purpose of a primary key in a table?",
        "options": ["To allow null values", "To ensure uniqueness", "To store binary data", "To act as a foreign key"],
        "correctAnswer": "To ensure uniqueness"
    },
    {
        "id": 5,
        "question": "Which command is used to retrieve data from a database?",
        "options": ["INSERT", "SELECT", "UPDATE", "DELETE"],
        "correctAnswer": "SELECT"
    },
    {
        "id": 6,
        "question": "What is a foreign key in a database?",
        "options": ["A key to encrypt data", "A unique identifier for a table", "A reference to a primary key in another table", "A special column used for indexing"],
        "correctAnswer": "A reference to a primary key in another table"
    },
    {
        "id": 7,
        "question": "What does normalization in a database aim to achieve?",
        "options": ["Increasing redundancy", "Decreasing redundancy", "Improving indexing", "Creating foreign keys"],
        "correctAnswer": "Decreasing redundancy"
    },
    {
        "id": 8,
        "question": "What is the full form of ACID in database transactions?",
        "options": ["Atomicity, Consistency, Isolation, Durability", "Accessibility, Consistency, Integrity, Dependability", "Atomicity, Communication, Isolation, Durability", "Availability, Connectivity, Integrity, Data"],
        "correctAnswer": "Atomicity, Consistency, Isolation, Durability"
    },
    {
        "id": 9,
        "question": "Which SQL statement is used to create a table?",
        "options": ["ALTER TABLE", "CREATE TABLE", "UPDATE TABLE", "INSERT INTO"],
        "correctAnswer": "CREATE TABLE"
    },
    {
        "id": 10,
        "question": "Which clause is used to filter records in SQL?",
        "options": ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
        "correctAnswer": "WHERE"
    },
    {
        "id": 11,
        "question": "Which type of join returns all rows when there is a match in one of the tables?",
        "options": ["INNER JOIN", "LEFT JOIN", "FULL OUTER JOIN", "RIGHT JOIN"],
        "correctAnswer": "FULL OUTER JOIN"
    },
    {
        "id": 12,
        "question": "What is a view in a database?",
        "options": ["A physical copy of data", "A virtual table based on a SQL query", "An index for searching data", "A schema of the database"],
        "correctAnswer": "A virtual table based on a SQL query"
    },
    {
        "id": 13,
        "question": "Which constraint enforces a column to accept unique values only?",
        "options": ["CHECK", "NOT NULL", "UNIQUE", "DEFAULT"],
        "correctAnswer": "UNIQUE"
    },
    {
        "id": 14,
        "question": "What is the purpose of the DELETE command in SQL?",
        "options": ["To remove specific rows from a table", "To delete the entire database", "To clear all data in a table", "To update rows in a table"],
        "correctAnswer": "To remove specific rows from a table"
    },
    {
        "id": 15,
        "question": "Which SQL function is used to count the number of rows in a table?",
        "options": ["SUM()", "COUNT()", "AVG()", "ROW()"],
        "correctAnswer": "COUNT()"
    },
    {
        "id": 16,
        "question": "What is a schema in a database?",
        "options": ["A collection of data types", "The overall structure of the database", "A query optimizer", "A command-line tool"],
        "correctAnswer": "The overall structure of the database"
    },
    {
        "id": 17,
        "question": "What is the default port number for MySQL?",
        "options": ["3306", "1521", "5432", "1433"],
        "correctAnswer": "3306"
    },
    {
        "id": 18,
        "question": "What is the difference between DELETE and TRUNCATE in SQL?",
        "options": ["DELETE removes data, TRUNCATE removes structure", "DELETE is slower and can be rolled back, TRUNCATE is faster and cannot be rolled back", "DELETE is for rows, TRUNCATE is for databases", "DELETE renames columns, TRUNCATE removes duplicates"],
        "correctAnswer": "DELETE is slower and can be rolled back, TRUNCATE is faster and cannot be rolled back"
    },
    {
        "id": 19,
        "question": "Which normalization form eliminates duplicate columns from the same table?",
        "options": ["1NF", "2NF", "3NF", "BCNF"],
        "correctAnswer": "1NF"
    },
    {
        "id": 20,
        "question": "Which SQL statement is used to modify an existing table?",
        "options": ["ALTER TABLE", "UPDATE TABLE", "MODIFY TABLE", "CREATE TABLE"],
        "correctAnswer": "ALTER TABLE"
    },
    {
        "id": 21,
        "question": "What is an index in a database?",
        "options": ["A schema object", "A data structure to improve query performance", "A set of constraints", "A key for joins"],
        "correctAnswer": "A data structure to improve query performance"
    },
    {
        "id": 22,
        "question": "Which command is used to permanently save changes in a database?",
        "options": ["ROLLBACK", "COMMIT", "SAVEPOINT", "TRANSACTION"],
        "correctAnswer": "COMMIT"
    },
    {
        "id": 23,
        "question": "What is the function of a surrogate key in a database?",
        "options": ["To replace foreign keys", "To act as a primary key for uniqueness", "To improve indexing", "To store null values"],
        "correctAnswer": "To act as a primary key for uniqueness"
    },
    {
        "id": 24,
        "question": "What does DDL stand for in the context of SQL?",
        "options": ["Data Definition Language", "Data Description Language", "Database Definition Language", "Database Deployment Language"],
        "correctAnswer": "Data Definition Language"
    },
    {
        "id": 25,
        "question": "Which clause is used to sort the result set in SQL?",
        "options": ["GROUP BY", "SORT BY", "ORDER BY", "HAVING"],
        "correctAnswer": "ORDER BY"
    },
    {
            "id": 26,
            "question": "What is the purpose of the UNIQUE constraint in a database?",
            "options": ["To ensure all values are different in a column", "To limit the number of rows in a table", "To avoid null values", "To link tables together"],
            "correctAnswer": "To ensure all values are different in a column"
        },
        {
            "id": 27,
            "question": "What is the primary purpose of the HAVING clause in SQL?",
            "options": ["To filter rows after aggregation", "To define table relationships", "To group data", "To join tables"],
            "correctAnswer": "To filter rows after aggregation"
        },
        {
            "id": 28,
            "question": "Which type of join includes unmatched rows from the left table?",
            "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
            "correctAnswer": "LEFT JOIN"
        },
        {
            "id": 29,
            "question": "What is the maximum number of primary keys a table can have?",
            "options": ["1", "2", "Unlimited", "Depends on the database"],
            "correctAnswer": "1"
        },
        {
            "id": 30,
            "question": "Which of the following is not a SQL aggregate function?",
            "options": ["SUM()", "AVG()", "GROUP()", "COUNT()"],
            "correctAnswer": "GROUP()"
        },
        {
            "id": 31,
            "question": "What is the purpose of the CHECK constraint in SQL?",
            "options": ["To enforce a condition on a column", "To enforce primary keys", "To allow null values", "To specify foreign key relationships"],
            "correctAnswer": "To enforce a condition on a column"
        },
        {
            "id": 32,
            "question": "Which type of database stores data in key-value pairs?",
            "options": ["Relational Database", "Document Database", "Key-Value Database", "Graph Database"],
            "correctAnswer": "Key-Value Database"
        },
        {
            "id": 33,
            "question": "What is a transaction in a DBMS?",
            "options": ["A single operation on a database", "A collection of operations that form a single logical unit of work", "A type of index", "A schema constraint"],
            "correctAnswer": "A collection of operations that form a single logical unit of work"
        },
        {
            "id": 34,
            "question": "Which command is used to revoke privileges from a user in SQL?",
            "options": ["GRANT", "REVOKE", "DENY", "REMOVE"],
            "correctAnswer": "REVOKE"
        },
        {
            "id": 35,
            "question": "What does the term ‘cardinality’ refer to in a database?",
            "options": ["The number of rows in a table", "The uniqueness of data values in a column", "The relationships between tables", "The indexing structure"],
            "correctAnswer": "The uniqueness of data values in a column"
        },
        {
            "id": 36,
            "question": "Which file type is commonly used to store relational database data?",
            "options": [".txt", ".csv", ".exe", ".doc"],
            "correctAnswer": ".csv"
        },
        {
            "id": 37,
            "question": "What is the purpose of the ROLLBACK command?",
            "options": ["To undo changes made in a transaction", "To delete a table", "To update data in a table", "To drop a database"],
            "correctAnswer": "To undo changes made in a transaction"
        },
        {
            "id": 38,
            "question": "Which normal form eliminates transitive dependency?",
            "options": ["1NF", "2NF", "3NF", "BCNF"],
            "correctAnswer": "3NF"
        },
        {
            "id": 39,
            "question": "What is a composite key?",
            "options": ["A primary key made of multiple columns", "A key that references another key", "A unique key with auto-increment", "A foreign key used in joins"],
            "correctAnswer": "A primary key made of multiple columns"
        },
        {
            "id": 40,
            "question": "What is a trigger in a database?",
            "options": ["A command for indexing", "A set of actions automatically executed when a specific event occurs", "A condition used in a query", "A function to encrypt data"],
            "correctAnswer": "A set of actions automatically executed when a specific event occurs"
        },
        {
            "id": 41,
            "question": "What is the role of the IN operator in SQL?",
            "options": ["To specify multiple values in a WHERE clause", "To create subqueries", "To perform inner joins", "To select rows from multiple tables"],
            "correctAnswer": "To specify multiple values in a WHERE clause"
        },
        {
            "id": 42,
            "question": "Which database object provides a name to a group of related queries?",
            "options": ["Schema", "Trigger", "Procedure", "View"],
            "correctAnswer": "Procedure"
        },
        {
            "id": 43,
            "question": "Which property of a database transaction ensures it completes fully or not at all?",
            "options": ["Atomicity", "Consistency", "Isolation", "Durability"],
            "correctAnswer": "Atomicity"
        },
        {
            "id": 44,
            "question": "What is a cursor in a database?",
            "options": ["A pointer to navigate through rows of a result set", "A command-line tool", "An index type", "A database constraint"],
            "correctAnswer": "A pointer to navigate through rows of a result set"
        },
        {
            "id": 45,
            "question": "What is the primary purpose of indexing in a database?",
            "options": ["To create primary keys", "To link tables", "To improve query performance", "To reduce redundancy"],
            "correctAnswer": "To improve query performance"
        },
        {
            "id": 46,
            "question": "Which type of SQL command is SELECT?",
            "options": ["DDL", "DML", "DCL", "TCL"],
            "correctAnswer": "DML"
        },
        {
            "id": 47,
            "question": "Which command is used to delete a database in SQL?",
            "options": ["DELETE DATABASE", "DROP DATABASE", "TRUNCATE DATABASE", "REMOVE DATABASE"],
            "correctAnswer": "DROP DATABASE"
        },
        {
            "id": 48,
            "question": "Which SQL keyword is used to create a relationship between tables?",
            "options": ["JOIN", "CONNECT", "RELATE", "ASSOCIATE"],
            "correctAnswer": "JOIN"
        },
        {
            "id": 49,
            "question": "What is the function of the DISTINCT keyword in SQL?",
            "options": ["To find duplicate values", "To sort data", "To remove duplicate values from results", "To group data"],
            "correctAnswer": "To remove duplicate values from results"
        },
        {
            "id": 50,
            "question": "Which type of key is used to establish and enforce a link between two tables?",
            "options": ["Primary Key", "Foreign Key", "Composite Key", "Candidate Key"],
            "correctAnswer": "Foreign Key"
        },    
        {
                "id": 51,
                "question": "What does the acronym SQL stand for?",
                "options": ["Standard Query Language", "Structured Query Language", "Simple Query Language", "Synchronized Query Language"],
                "correctAnswer": "Structured Query Language"
            },
            {
                "id": 52,
                "question": "What does the term ‘referential integrity’ refer to in a database?",
                "options": ["The accuracy of data types", "The consistency of the data when one table refers to another", "The speed of query execution", "The level of normalization"],
                "correctAnswer": "The consistency of the data when one table refers to another"
            },
            {
                "id": 53,
                "question": "Which type of index is automatically created when a primary key is defined?",
                "options": ["Unique Index", "Clustered Index", "Non-clustered Index", "Composite Index"],
                "correctAnswer": "Clustered Index"
            },
            {
                "id": 54,
                "question": "Which operation can be performed using SQL's GROUP BY clause?",
                "options": ["Summing data", "Joining tables", "Sorting rows", "Filtering data"],
                "correctAnswer": "Summing data"
            },
            {
                "id": 55,
                "question": "Which keyword is used to modify existing records in a database?",
                "options": ["UPDATE", "INSERT", "MODIFY", "CHANGE"],
                "correctAnswer": "UPDATE"
            },
            {
                "id": 56,
                "question": "What is the difference between a UNION and a JOIN in SQL?",
                "options": ["UNION merges rows, JOIN combines columns", "UNION combines columns, JOIN merges rows", "UNION merges data from the same column, JOIN merges data from different tables", "There is no difference"],
                "correctAnswer": "UNION merges rows, JOIN combines columns"
            },
            {
                "id": 57,
                "question": "What is an ER model in database design?",
                "options": ["Entity Relationship Model", "Entity Requirement Model", "Entity Record Model", "Entity Relationship Mapping"],
                "correctAnswer": "Entity Relationship Model"
            },
            {
                "id": 58,
                "question": "What type of relationship exists when one entity is related to multiple entities?",
                "options": ["One-to-One", "One-to-Many", "Many-to-One", "Many-to-Many"],
                "correctAnswer": "One-to-Many"
            },
            {
                "id": 59,
                "question": "Which term refers to a key that uniquely identifies a record in a table?",
                "options": ["Primary Key", "Foreign Key", "Composite Key", "Candidate Key"],
                "correctAnswer": "Primary Key"
            },
            {
                "id": 60,
                "question": "Which of the following is a non-relational database?",
                "options": ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
                "correctAnswer": "MongoDB"
            },
            {
                "id": 61,
                "question": "What is a 'natural join' in SQL?",
                "options": ["A join that automatically matches columns with the same name", "A join based on a custom condition", "A join that doesn't include matching columns", "A join that only works with inner queries"],
                "correctAnswer": "A join that automatically matches columns with the same name"
            },
            {
                "id": 62,
                "question": "What is the purpose of a database transaction?",
                "options": ["To increase security", "To group SQL operations into a single unit of work", "To optimize data retrieval", "To back up the database"],
                "correctAnswer": "To group SQL operations into a single unit of work"
            },
            {
                "id": 63,
                "question": "What is denormalization in database design?",
                "options": ["The process of reducing data redundancy", "The process of increasing data redundancy for performance", "The removal of primary keys", "The process of simplifying relationships between tables"],
                "correctAnswer": "The process of increasing data redundancy for performance"
            },
            {
                "id": 64,
                "question": "Which SQL clause is used to filter groups in a SELECT query?",
                "options": ["GROUP BY", "ORDER BY", "HAVING", "WHERE"],
                "correctAnswer": "HAVING"
            },
            {
                "id": 65,
                "question": "Which SQL statement is used to remove a table from a database?",
                "options": ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "TRUNCATE TABLE"],
                "correctAnswer": "DROP TABLE"
            },
            {
                "id": 66,
                "question": "Which SQL clause is used to group records with identical values?",
                "options": ["GROUP BY", "ORDER BY", "SELECT", "HAVING"],
                "correctAnswer": "GROUP BY"
            },
            {
                "id": 67,
                "question": "Which type of database is MongoDB?",
                "options": ["Relational Database", "Graph Database", "NoSQL Database", "Hierarchical Database"],
                "correctAnswer": "NoSQL Database"
            },
            {
                "id": 68,
                "question": "Which is a feature of an object-relational database?",
                "options": ["Combines features of object-oriented and relational databases", "Uses only tables for data storage", "Only stores text data", "Does not support transactions"],
                "correctAnswer": "Combines features of object-oriented and relational databases"
            },
            {
                "id": 69,
                "question": "What is a schema in a database?",
                "options": ["The physical storage of data", "The blueprint or design of a database", "The data within a table", "The software used to query the database"],
                "correctAnswer": "The blueprint or design of a database"
            },
            {
                "id": 70,
                "question": "Which SQL function is used to find the highest value in a column?",
                "options": ["MIN()", "MAX()", "AVG()", "SUM()"],
                "correctAnswer": "MAX()"
            },
            {
                "id": 71,
                "question": "What does the 'AND' operator do in an SQL WHERE clause?",
                "options": ["It combines multiple conditions that must all be true", "It combines multiple conditions, at least one must be true", "It checks for a null value", "It sorts the query results"],
                "correctAnswer": "It combines multiple conditions that must all be true"
            },
            {
                "id": 72,
                "question": "Which command is used to add new records to a database table?",
                "options": ["INSERT", "ADD", "CREATE", "MODIFY"],
                "correctAnswer": "INSERT"
            },
            {
                "id": 73,
                "question": "What is a stored procedure?",
                "options": ["A query executed by the database automatically", "A set of SQL commands saved in the database for reuse", "A record of changes made in a table", "A function used for indexing data"],
                "correctAnswer": "A set of SQL commands saved in the database for reuse"
            },
            {
                "id": 74,
                "question": "What is the term for a database that is designed to be flexible and capable of handling a variety of data types and structures?",
                "options": ["Relational Database", "NoSQL Database", "Object Database", "Flat File Database"],
                "correctAnswer": "NoSQL Database"
            },
            {
                "id": 75,
                "question": "Which SQL statement is used to modify a table's structure, such as adding a column?",
                "options": ["ALTER TABLE", "UPDATE TABLE", "CHANGE TABLE", "INSERT TABLE"],
                "correctAnswer": "ALTER TABLE"
            }, 
            {
                    "id": 76,
                    "question": "What does the term ‘atomicity’ refer to in the context of database transactions?",
                    "options": ["Each transaction is processed as a single unit, either fully completed or not executed at all", "The consistency of data in the database", "The isolation of transactions from each other", "The durability of changes made by transactions"],
                    "correctAnswer": "Each transaction is processed as a single unit, either fully completed or not executed at all"
                },
                {
                    "id": 77,
                    "question": "Which SQL keyword is used to combine rows from two or more tables based on a related column?",
                    "options": ["JOIN", "LINK", "MERGE", "COMBINE"],
                    "correctAnswer": "JOIN"
                },
                {
                    "id": 78,
                    "question": "What is a ‘deadlock’ in a database system?",
                    "options": ["A situation where two or more transactions are unable to proceed because each is waiting for the other to release resources", "A type of transaction that is rolled back", "A failure in database design", "A method of handling large amounts of data"],
                    "correctAnswer": "A situation where two or more transactions are unable to proceed because each is waiting for the other to release resources"
                },
                {
                    "id": 79,
                    "question": "What is the purpose of the normalization process in database design?",
                    "options": ["To remove redundancy and ensure data integrity", "To increase the size of tables", "To simplify queries", "To speed up transactions"],
                    "correctAnswer": "To remove redundancy and ensure data integrity"
                },
                {
                    "id": 80,
                    "question": "Which of the following is a characteristic of NoSQL databases?",
                    "options": ["Support for relational tables", "Fixed schema", "Scalability for large amounts of data", "Data must be structured in columns and rows"],
                    "correctAnswer": "Scalability for large amounts of data"
                },
                {
                    "id": 81,
                    "question": "Which SQL function is used to count the number of rows in a table?",
                    "options": ["COUNT()", "SUM()", "MAX()", "AVG()"],
                    "correctAnswer": "COUNT()"
                },
                {
                    "id": 82,
                    "question": "What is the purpose of the ‘DROP’ command in SQL?",
                    "options": ["To remove a table, view, or other object from the database", "To remove a specific row of data", "To modify the structure of a table", "To delete a column in a table"],
                    "correctAnswer": "To remove a table, view, or other object from the database"
                },
                {
                    "id": 83,
                    "question": "What is a ‘foreign key’ in a database?",
                    "options": ["A primary key from another table used to establish a relationship", "A unique identifier for each record", "A column used for sorting", "A key used to encrypt data"],
                    "correctAnswer": "A primary key from another table used to establish a relationship"
                },
                {
                    "id": 84,
                    "question": "What type of join returns all rows when there is a match in either left or right table?",
                    "options": ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
                    "correctAnswer": "FULL OUTER JOIN"
                },
                {
                    "id": 85,
                    "question": "Which type of database uses nodes, edges, and properties to represent and store data?",
                    "options": ["Relational Database", "Graph Database", "Document Database", "Columnar Database"],
                    "correctAnswer": "Graph Database"
                },
                {
                    "id": 86,
                    "question": "Which command is used to remove all records from a table but keep its structure?",
                    "options": ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
                    "correctAnswer": "TRUNCATE"
                },
                {
                    "id": 87,
                    "question": "Which of the following is a relational database management system (RDBMS)?",
                    "options": ["MongoDB", "Cassandra", "MySQL", "Redis"],
                    "correctAnswer": "MySQL"
                },
                {
                    "id": 88,
                    "question": "What is a surrogate key in a database?",
                    "options": ["A unique key generated by the system", "A key that uniquely identifies a foreign key", "A key used for encryption", "A key derived from a natural attribute"],
                    "correctAnswer": "A unique key generated by the system"
                },
                {
                    "id": 89,
                    "question": "What is an ‘index’ in a database?",
                    "options": ["A structure to speed up query retrieval", "A method for encrypting sensitive data", "A query optimizer", "A key used to connect tables"],
                    "correctAnswer": "A structure to speed up query retrieval"
                },
                {
                    "id": 90,
                    "question": "What does the acronym ACID stand for in database management?",
                    "options": ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability", "Atomicity, Consistency, Isolation, Design", "Analysis, Consistency, Integrity, Design"],
                    "correctAnswer": "Atomicity, Consistency, Isolation, Durability"
                },
                {
                    "id": 91,
                    "question": "What is a schema in a relational database?",
                    "options": ["A blueprint that defines the structure of the database", "A column of data", "A type of data", "A unique key for a table"],
                    "correctAnswer": "A blueprint that defines the structure of the database"
                },
                {
                    "id": 92,
                    "question": "Which of the following is NOT a type of SQL JOIN?",
                    "options": ["INNER JOIN", "LEFT JOIN", "OUTER JOIN", "CROSS JOIN"],
                    "correctAnswer": "OUTER JOIN"
                },
                {
                    "id": 93,
                    "question": "Which DBMS model organizes data in a tree-like structure?",
                    "options": ["Relational Model", "Hierarchical Model", "Network Model", "Object-Oriented Model"],
                    "correctAnswer": "Hierarchical Model"
                },
                {
                    "id": 94,
                    "question": "What is the main difference between DDL and DML?",
                    "options": ["DDL modifies data, while DML defines database structure", "DDL defines database structure, while DML modifies data", "Both DDL and DML define database structure", "Both DDL and DML modify data"],
                    "correctAnswer": "DDL defines database structure, while DML modifies data"
                },
                {
                    "id": 95,
                    "question": "What is normalization used for in a relational database?",
                    "options": ["To combine tables", "To reduce data redundancy", "To enhance query performance", "To index data for faster retrieval"],
                    "correctAnswer": "To reduce data redundancy"
                },
                {
                    "id": 96,
                    "question": "What is the purpose of the UNION operator in SQL?",
                    "options": ["To join tables based on a common column", "To combine rows from two or more SELECT queries", "To remove duplicate rows", "To update existing records"],
                    "correctAnswer": "To combine rows from two or more SELECT queries"
                },
                {
                    "id": 97,
                    "question": "Which of the following is a disadvantage of NoSQL databases?",
                    "options": ["Lack of flexibility", "Difficulty with scaling horizontally", "Limited support for complex queries", "Lack of support for structured data"],
                    "correctAnswer": "Limited support for complex queries"
                },
                {
                    "id": 98,
                    "question": "What is a foreign key used for in a relational database?",
                    "options": ["To uniquely identify each row", "To store references to rows in other tables", "To store metadata", "To define relationships between tables"],
                    "correctAnswer": "To store references to rows in other tables"
                },
                {
                    "id": 99,
                    "question": "What does a ‘self-join’ do in SQL?",
                    "options": ["Joins a table with itself", "Joins two tables based on a common column", "Joins tables with different schemas", "Joins a table with a subquery"],
                    "correctAnswer": "Joins a table with itself"
                },
                {
                    "id": 100,
                    "question": "What is the main purpose of using normalization in database design?",
                    "options": ["To improve query performance", "To remove data redundancy and ensure data integrity", "To speed up data retrieval", "To make the database more complex"],
                    "correctAnswer": "To remove data redundancy and ensure data integrity"
                }                   
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
        <Link to='/aptitude' className="mr-2 font-bold text-sm">Aptitude Dashboard</Link><p className="mr-2 font-bold text-sm">&gt;</p><Link to='/aptitude/database' className="font-bold text-sm">Database Management System</Link>
      </div>
      <div className="custom-container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-green-500">Database Management System</h1>
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

export default Database;
