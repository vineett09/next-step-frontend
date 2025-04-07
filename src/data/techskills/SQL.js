const sqlDeveloperRoadmap = {
  name: "SQL Developer Roadmap 2025",
  children: [
    {
      name: " Prerequisites & Setup",
      children: [
        {
          name: "Database Fundamentals",
          children: [
            {
              name: "What is a Database?",
            },
            {
              name: "Relational vs. Non-Relational",
            },
            {
              name: "SQL Overview",
            },
          ],
        },
        {
          name: "Tools Setup",
          children: [
            {
              name: "MySQL Installation",
            },
            {
              name: "PostgreSQL Installation",
            },
            {
              name: "VS Code with SQL Extension",
            },
            {
              name: "Practice Database",
            },
          ],
        },
      ],
      dividerText: "begin SQL basics.",
    },
    {
      name: " SQL Core Basics",
      children: [
        {
          name: "Database and Table Creation",
          children: [
            {
              name: "CREATE DATABASE",
            },
            {
              name: "CREATE TABLE",
            },
            {
              name: "Data Types",
            },
          ],
        },
        {
          name: "Basic Queries",
          children: [
            {
              name: "INSERT",
            },
            {
              name: "SELECT",
            },
            {
              name: "WHERE Clause",
            },
          ],
        },
        {
          name: "Data Modification",
          children: [
            {
              name: "UPDATE",
            },
            {
              name: "DELETE",
            },
            {
              name: "DROP",
            },
          ],
        },
      ],
      dividerText: "explore database design.",
    },
    {
      name: " Database Design",
      children: [
        {
          name: "Tables and Relationships",
          children: [
            {
              name: "Primary Keys",
            },
            {
              name: "Foreign Keys",
            },
            {
              name: "One-to-Many",
            },
            {
              name: "Many-to-Many",
            },
            {
              name: "One-to-One",
            },
            {
              name: "Many-to-One",
            },
          ],
        },
        {
          name: "Normalization",
          children: [
            {
              name: "1NF",
            },
            {
              name: "2NF",
            },
            {
              name: "3NF",
            },
          ],
        },
      ],
      dividerText: "master querying data.",
    },
    {
      name: " Querying Data",
      children: [
        {
          name: "Filtering and Sorting",
          children: [
            {
              name: "WHERE Conditions",
            },
            {
              name: "ORDER BY",
            },
            {
              name: "LIMIT and OFFSET",
            },
          ],
        },
        {
          name: "Aggregations",
          children: [
            {
              name: "COUNT",
            },
            {
              name: "SUM and AVG",
            },
            {
              name: "GROUP BY",
            },
            {
              name: "HAVING",
            },
            {
              name: "MIN and MAX",
            },
          ],
        },
      ],
      dividerText: "learn joins and subqueries.",
    },
    {
      name: " Joins and Subqueries",
      children: [
        {
          name: "Joins",
          children: [
            {
              name: "INNER JOIN",
            },
            {
              name: "LEFT/RIGHT JOIN",
            },
            {
              name: "FULL JOIN",
            },
          ],
        },
        {
          name: "Subqueries",
          children: [
            {
              name: "Scalar Subquery",
            },
            {
              name: "IN Subquery",
            },
            {
              name: "Correlated Subquery",
            },
          ],
        },
      ],
      dividerText: "optimize with indexes.",
    },
    {
      name: " Indexing and Performance",
      children: [
        {
          name: "Indexes",
          children: [
            {
              name: "CREATE INDEX",
            },
            {
              name: "Unique Indexes",
            },
            {
              name: "Drop Index",
            },
          ],
        },
        {
          name: "Query Optimization",
          children: [
            {
              name: "EXPLAIN",
            },
            {
              name: "Avoid SELECT *",
            },
            {
              name: "Index Usage",
            },
          ],
        },
      ],
      dividerText: "manage transactions.",
    },
    {
      name: " Transactions and Data Integrity",
      children: [
        {
          name: "Transactions",
          children: [
            {
              name: "BEGIN",
            },
            {
              name: "COMMIT",
            },
            {
              name: "ROLLBACK",
            },
            {
              name: "SAVEPOINT",
            },
          ],
        },
        {
          name: "Constraints",
          children: [
            {
              name: "NOT NULL",
            },
            {
              name: "CHECK",
            },
            {
              name: "UNIQUE",
            },
          ],
        },
      ],
      dividerText: "explore advanced SQL.",
    },
    {
      name: " Advanced SQL",
      children: [
        {
          name: "Views",
          children: [
            {
              name: "CREATE VIEW",
            },
            {
              name: "Query View",
            },
            {
              name: "Drop View",
            },
          ],
        },
        {
          name: "Stored Procedures",
          children: [
            {
              name: "Define Procedure",
            },
            {
              name: "Call Procedure",
            },
            {
              name: "Parameters",
            },
          ],
        },
        {
          name: "Triggers",
          children: [
            {
              name: "CREATE TRIGGER",
            },
            {
              name: "Trigger Events",
            },
            {
              name: "Drop Trigger",
            },
          ],
        },
      ],
      dividerText: "integrate SQL with apps.",
    },
    {
      name: " SQL Integration with Applications",
      children: [
        {
          name: "Node.js with MySQL",
          children: [
            {
              name: "mysql2 Setup",
            },
            {
              name: "Connection",
            },
            {
              name: "Query Execution",
            },
          ],
        },
        {
          name: "Python with SQLite",
          children: [
            {
              name: "sqlite3 Setup",
            },
            {
              name: "Execute Queries",
            },
            {
              name: "Fetch Results",
            },
          ],
        },
      ],
      dividerText: "manage databases.",
    },
    {
      name: " Database Administration",
      children: [
        {
          name: "Users and Permissions",
          children: [
            {
              name: "CREATE USER",
            },
            {
              name: "GRANT",
            },
            {
              name: "REVOKE",
            },
          ],
        },
        {
          name: "Backup and Restore",
          children: [
            {
              name: "Backup",
            },
            {
              name: "Restore",
            },
            {
              name: "pg_dump",
            },
          ],
        },
      ],
      dividerText: "optimize and scale.",
    },
    {
      name: " Optimization and Scaling",
      children: [
        {
          name: "Advanced Indexing",
          children: [
            {
              name: "Composite Index",
            },
            {
              name: "Covering Index",
            },
            {
              name: "Index Maintenance",
            },
          ],
        },
        {
          name: "Partitioning",
          children: [
            {
              name: "Range Partitioning",
            },
            {
              name: "List Partitioning",
            },
            {
              name: "Query Partitions",
            },
          ],
        },
      ],
      dividerText: "specialize and contribute.",
    },
    {
      name: " Specialization and Contribution",
      children: [
        {
          name: "Specialization",
          children: [
            {
              name: "Data Warehousing",
            },
            {
              name: "Analytics",
            },
            {
              name: "NoSQL Integration",
            },
          ],
        },
        {
          name: "Contribute to Open Source",
          children: [
            {
              name: "Find Projects",
            },
            {
              name: "Fork & Clone",
            },
            {
              name: "Submit PR",
            },
          ],
        },
      ],
      dividerText: "commit to continuous learning.",
    },
    {
      name: " Continuous Learning",
      children: [
        {
          name: "Documentation",
        },
        {
          name: "Communities",
        },
        {
          name: "Trends",
        },
      ],
    },
  ],
};

export default sqlDeveloperRoadmap;
