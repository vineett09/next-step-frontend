const sqlDeveloperRoadmap = {
  name: "SQL Developer Roadmap 2025",
  description:
    "This detailed roadmap provides a progressive guide to mastering SQL by 2025, from basic database concepts to advanced querying and optimization. Covering core SQL syntax, database design, joins, indexing, transactions, and more, it’s enriched with nested subtopics and practical examples—taught with tools like MySQL, PostgreSQL, and VS Code—for hands-on learners aiming to excel in the 2025 SQL ecosystem.",
  children: [
    {
      name: " Prerequisites & Setup",
      description:
        "Establish the foundation for SQL development with basic concepts and tools, taught with a simple database setup in MySQL. This phase ensures readiness for database work in 2025.",
      children: [
        {
          name: "Database Fundamentals",
          description:
            "Understand key database concepts, taught with a relational DB example in MySQL Workbench.",
          children: [
            {
              name: "What is a Database?",
              description:
                "Learn DB definition, taught with a table diagram example.",
            },
            {
              name: "Relational vs. Non-Relational",
              description:
                "Compare RDBMS vs. NoSQL, taught with a MySQL vs. MongoDB example.",
            },
            {
              name: "SQL Overview",
              description:
                "Explore SQL purpose, taught with a SELECT query example.",
            },
          ],
        },
        {
          name: "Tools Setup",
          description:
            "Install and configure SQL tools, taught with a MySQL database creation.",
          children: [
            {
              name: "MySQL Installation",
              description: "Install MySQL, taught with mysql --version check.",
            },
            {
              name: "PostgreSQL Installation",
              description:
                "Install PostgreSQL, taught with psql --version check.",
            },
            {
              name: "VS Code with SQL Extension",
              description:
                "Set up VS Code, taught with SQLTools extension setup.",
            },
            {
              name: "Practice Database",
              description: "Create a DB, taught with CREATE DATABASE example.",
            },
          ],
        },
      ],
      dividerText: "begin SQL basics.",
    },
    {
      name: " SQL Core Basics",
      description:
        "Master foundational SQL syntax and operations, taught with a simple table in MySQL. This phase builds the essentials for 2025 database management.",
      children: [
        {
          name: "Database and Table Creation",
          description:
            "Create databases and tables, taught with a users table example.",
          children: [
            {
              name: "CREATE DATABASE",
              description:
                "Create a DB, taught with CREATE DATABASE mydb example.",
            },
            {
              name: "CREATE TABLE",
              description:
                "Define tables, taught with CREATE TABLE users example.",
            },
            {
              name: "Data Types",
              description:
                "Use INT, VARCHAR, taught with a column type example.",
            },
          ],
        },
        {
          name: "Basic Queries",
          description:
            "Perform basic operations, taught with a user INSERT and SELECT.",
          children: [
            {
              name: "INSERT",
              description: "Add data, taught with INSERT INTO users example.",
            },
            {
              name: "SELECT",
              description:
                "Fetch data, taught with SELECT * FROM users example.",
            },
            {
              name: "WHERE Clause",
              description: "Filter data, taught with WHERE id = 1 example.",
            },
          ],
        },
        {
          name: "Data Modification",
          description: "Modify data, taught with an UPDATE and DELETE example.",
          children: [
            {
              name: "UPDATE",
              description: "Change data, taught with UPDATE users SET example.",
            },
            {
              name: "DELETE",
              description:
                "Remove data, taught with DELETE FROM users example.",
            },
            {
              name: "DROP",
              description: "Delete tables, taught with DROP TABLE example.",
            },
          ],
        },
      ],
      dividerText: "explore database design.",
    },
    {
      name: " Database Design",
      description:
        "Learn to design relational databases, taught with a tasks schema in PostgreSQL. This phase sets up structured data for 2025.",
      children: [
        {
          name: "Tables and Relationships",
          description:
            "Design tables, taught with a users-tasks relationship example.",
          children: [
            {
              name: "Primary Keys",
              description:
                "Define PKs, taught with id SERIAL PRIMARY KEY example.",
            },
            {
              name: "Foreign Keys",
              description: "Link tables, taught with FOREIGN KEY example.",
            },
            {
              name: "One-to-Many",
              description: "Model 1:N, taught with users-tasks example.",
            },
            {
              name: "Many-to-Many",
              description: "Model N:N, taught with users-tags example.",
            },
            {
              name: "One-to-One",
              description: "Model 1:1, taught with users-profile example.",
            },
            {
              name: "Many-to-One",
              description: "Model N:1, taught with tasks-user example.",
            },
          ],
        },
        {
          name: "Normalization",
          description:
            "Normalize data, taught with a denormalized split example.",
          children: [
            {
              name: "1NF",
              description:
                "Eliminate duplicates, taught with a repeating data fix.",
            },
            {
              name: "2NF",
              description:
                "Remove partial dependency, taught with a split table example.",
            },
            {
              name: "3NF",
              description:
                "Remove transitive dependency, taught with a refinement example.",
            },
          ],
        },
      ],
      dividerText: "master querying data.",
    },
    {
      name: " Querying Data",
      description:
        "Master SQL querying, taught with a task tracker in MySQL. This phase enhances data retrieval for 2025.",
      children: [
        {
          name: "Filtering and Sorting",
          description:
            "Filter and sort data, taught with a task query example.",
          children: [
            {
              name: "WHERE Conditions",
              description:
                "Filter rows, taught with WHERE status = 'done' example.",
            },
            {
              name: "ORDER BY",
              description:
                "Sort results, taught with ORDER BY due_date example.",
            },
            {
              name: "LIMIT and OFFSET",
              description: "Paginate, taught with LIMIT 10 OFFSET 5 example.",
            },
          ],
        },
        {
          name: "Aggregations",
          description: "Aggregate data, taught with a task count example.",
          children: [
            {
              name: "COUNT",
              description: "Count rows, taught with COUNT(*) example.",
            },
            {
              name: "SUM and AVG",
              description: "Calculate sums, taught with SUM(priority) example.",
            },
            {
              name: "GROUP BY",
              description: "Group data, taught with GROUP BY user_id example.",
            },
            {
              name: "HAVING",
              description: "Filter groups, taught with HAVING example.",
            },
            {
              name: "MIN and MAX",
              description: "Find min/max, taught with MIN(due_date) example.",
            },
          ],
        },
      ],
      dividerText: "learn joins and subqueries.",
    },
    {
      name: " Joins and Subqueries",
      description:
        "Combine and nest queries, taught with a users-tasks join in PostgreSQL. This phase connects data for 2025.",
      children: [
        {
          name: "Joins",
          description: "Join tables, taught with a users-tasks query example.",
          children: [
            {
              name: "INNER JOIN",
              description: "Match rows, taught with INNER JOIN example.",
            },
            {
              name: "LEFT/RIGHT JOIN",
              description: "Include unmatched, taught with LEFT JOIN example.",
            },
            {
              name: "FULL JOIN",
              description: "Combine all, taught with FULL JOIN example.",
            },
          ],
        },
        {
          name: "Subqueries",
          description: "Nest queries, taught with a task subquery example.",
          children: [
            {
              name: "Scalar Subquery",
              description:
                "Single value, taught with a SELECT subquery example.",
            },
            {
              name: "IN Subquery",
              description: "Multiple values, taught with WHERE IN example.",
            },
            {
              name: "Correlated Subquery",
              description: "Row-by-row, taught with a correlated example.",
            },
          ],
        },
      ],
      dividerText: "optimize with indexes.",
    },
    {
      name: " Indexing and Performance",
      description:
        "Optimize queries with indexes, taught with a task table in MySQL. This phase improves 2025 performance.",
      children: [
        {
          name: "Indexes",
          description:
            "Create indexes, taught with an index on due_date example.",
          children: [
            {
              name: "CREATE INDEX",
              description: "Add index, taught with CREATE INDEX example.",
            },
            {
              name: "Unique Indexes",
              description:
                "Ensure uniqueness, taught with UNIQUE INDEX example.",
            },
            {
              name: "Drop Index",
              description: "Remove index, taught with DROP INDEX example.",
            },
          ],
        },
        {
          name: "Query Optimization",
          description: "Optimize queries, taught with an EXPLAIN example.",
          children: [
            {
              name: "EXPLAIN",
              description: "Analyze query, taught with EXPLAIN SELECT example.",
            },
            {
              name: "Avoid SELECT *",
              description:
                "Specify columns, taught with a column list example.",
            },
            {
              name: "Index Usage",
              description:
                "Use indexes, taught with a WHERE optimization example.",
            },
          ],
        },
      ],
      dividerText: "manage transactions.",
    },
    {
      name: " Transactions and Data Integrity",
      description:
        "Handle transactions and constraints, taught with a task update in PostgreSQL. This phase ensures 2025 data reliability.",
      children: [
        {
          name: "Transactions",
          description: "Use transactions, taught with a BEGIN/COMMIT example.",
          children: [
            {
              name: "BEGIN",
              description: "Start transaction, taught with BEGIN example.",
            },
            {
              name: "COMMIT",
              description: "Save changes, taught with COMMIT example.",
            },
            {
              name: "ROLLBACK",
              description: "Undo changes, taught with ROLLBACK example.",
            },
            {
              name: "SAVEPOINT",
              description: "Rollback to point, taught with SAVEPOINT example.",
            },
          ],
        },
        {
          name: "Constraints",
          description: "Enforce rules, taught with a NOT NULL example.",
          children: [
            {
              name: "NOT NULL",
              description: "Require values, taught with NOT NULL example.",
            },
            {
              name: "CHECK",
              description:
                "Restrict values, taught with CHECK priority > 0 example.",
            },
            {
              name: "UNIQUE",
              description:
                "Ensure uniqueness, taught with UNIQUE email example.",
            },
          ],
        },
      ],
      dividerText: "explore advanced SQL.",
    },
    {
      name: " Advanced SQL",
      description:
        "Master advanced SQL features, taught with a task analytics query in MySQL. This phase refines 2025 skills.",
      children: [
        {
          name: "Views",
          description: "Create views, taught with a task view example.",
          children: [
            {
              name: "CREATE VIEW",
              description: "Define view, taught with CREATE VIEW example.",
            },
            {
              name: "Query View",
              description: "Use view, taught with SELECT FROM view example.",
            },
            {
              name: "Drop View",
              description: "Remove view, taught with DROP VIEW example.",
            },
          ],
        },
        {
          name: "Stored Procedures",
          description:
            "Use procedures, taught with a task insert procedure example.",
          children: [
            {
              name: "Define Procedure",
              description: "Create procedure, taught with DELIMITER example.",
            },
            {
              name: "Call Procedure",
              description: "Run procedure, taught with CALL example.",
            },
            {
              name: "Parameters",
              description: "Pass params, taught with an IN param example.",
            },
          ],
        },
        {
          name: "Triggers",
          description:
            "Automate actions, taught with a task log trigger example.",
          children: [
            {
              name: "CREATE TRIGGER",
              description: "Define trigger, taught with AFTER INSERT example.",
            },
            {
              name: "Trigger Events",
              description: "Use events, taught with BEFORE UPDATE example.",
            },
            {
              name: "Drop Trigger",
              description: "Remove trigger, taught with DROP TRIGGER example.",
            },
          ],
        },
      ],
      dividerText: "integrate SQL with apps.",
    },
    {
      name: " SQL Integration with Applications",
      description:
        "Connect SQL to apps, taught with a Node.js task app in VS Code. This phase bridges databases and code for 2025.",
      children: [
        {
          name: "Node.js with MySQL",
          description: "Integrate MySQL, taught with a Node.js query example.",
          children: [
            {
              name: "mysql2 Setup",
              description: "Install mysql2, taught with npm install mysql2.",
            },
            {
              name: "Connection",
              description: "Connect DB, taught with a pool creation example.",
            },
            {
              name: "Query Execution",
              description: "Run queries, taught with a SELECT example.",
            },
          ],
        },
        {
          name: "Python with SQLite",
          description: "Use SQLite, taught with a Python query example.",
          children: [
            {
              name: "sqlite3 Setup",
              description: "Import sqlite3, taught with a connect example.",
            },
            {
              name: "Execute Queries",
              description: "Run SQL, taught with a cursor.execute example.",
            },
            {
              name: "Fetch Results",
              description: "Fetch data, taught with a fetchall example.",
            },
          ],
        },
      ],
      dividerText: "manage databases.",
    },
    {
      name: " Database Administration",
      description:
        "Administer databases, taught with a user management script in PostgreSQL. This phase prepares for 2025 DB ops.",
      children: [
        {
          name: "Users and Permissions",
          description: "Manage access, taught with a CREATE USER example.",
          children: [
            {
              name: "CREATE USER",
              description: "Add user, taught with CREATE USER example.",
            },
            {
              name: "GRANT",
              description: "Give perms, taught with GRANT SELECT example.",
            },
            {
              name: "REVOKE",
              description: "Remove perms, taught with REVOKE example.",
            },
          ],
        },
        {
          name: "Backup and Restore",
          description: "Backup DBs, taught with a mysqldump example.",
          children: [
            {
              name: "Backup",
              description: "Dump DB, taught with mysqldump command example.",
            },
            {
              name: "Restore",
              description: "Restore DB, taught with mysql < dump.sql example.",
            },
            {
              name: "pg_dump",
              description: "Use pg_dump, taught with a PostgreSQL example.",
            },
          ],
        },
      ],
      dividerText: "optimize and scale.",
    },
    {
      name: " Optimization and Scaling",
      description:
        "Optimize and scale SQL, taught with a task DB in MySQL. This phase ensures 2025 performance.",
      children: [
        {
          name: "Advanced Indexing",
          description:
            "Optimize with indexes, taught with a composite index example.",
          children: [
            {
              name: "Composite Index",
              description:
                "Multi-column index, taught with CREATE INDEX example.",
            },
            {
              name: "Covering Index",
              description: "Cover queries, taught with a covering example.",
            },
            {
              name: "Index Maintenance",
              description: "Maintain indexes, taught with an ANALYZE example.",
            },
          ],
        },
        {
          name: "Partitioning",
          description:
            "Scale with partitions, taught with a table partition example.",
          children: [
            {
              name: "Range Partitioning",
              description: "Partition by range, taught with a date example.",
            },
            {
              name: "List Partitioning",
              description: "Partition by list, taught with a status example.",
            },
            {
              name: "Query Partitions",
              description: "Query partitions, taught with a SELECT example.",
            },
          ],
        },
      ],
      dividerText: "specialize and contribute.",
    },
    {
      name: " Specialization and Contribution",
      description:
        "Specialize and contribute to SQL, taught with a data warehouse query and GitHub PR. This phase elevates 2025 expertise.",
      children: [
        {
          name: "Specialization",
          description:
            "Focus on SQL niches, taught with a data warehouse example.",
          children: [
            {
              name: "Data Warehousing",
              description: "Use SQL for DW, taught with a star schema example.",
            },
            {
              name: "Analytics",
              description:
                "Analyze data, taught with a window function example.",
            },
            {
              name: "NoSQL Integration",
              description:
                "Combine with NoSQL, taught with a JSON query example.",
            },
          ],
        },
        {
          name: "Contribute to Open Source",
          description:
            "Contribute to SQL projects, taught with a PR to PostgreSQL.",
          children: [
            {
              name: "Find Projects",
              description: "Search GitHub, taught with a repo find example.",
            },
            {
              name: "Fork & Clone",
              description: "Clone repo, taught with git steps.",
            },
            {
              name: "Submit PR",
              description: "Push change, taught with a PR example.",
            },
          ],
        },
      ],
      dividerText: "commit to continuous learning.",
    },
    {
      name: " Continuous Learning",
      description:
        "Stay updated in 2025, taught with resources like SQL docs and X posts.",
      children: [
        {
          name: "Documentation",
          description:
            "Use MySQL/PostgreSQL docs, taught with a feature dive example.",
        },
        {
          name: "Communities",
          description: "Join Stack Overflow, taught with a SQL tag example.",
        },
        {
          name: "Trends",
          description: "Follow X, taught with SQL trend tracking tips.",
        },
      ],
    },
  ],
};

export default sqlDeveloperRoadmap;
