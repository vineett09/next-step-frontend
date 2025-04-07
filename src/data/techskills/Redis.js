const redisDeveloperRoadmap = {
  name: "Redis Developer Roadmap for Beginners to Advanced 2025",
  children: [
    {
      name: "Redis Foundations",
      children: [
        {
          name: "Redis Basics",
          children: [
            {
              name: "What is Redis",
            },
            {
              name: "History",
            },
            {
              name: "Advantages",
            },
            {
              name: "Redis vs Others",
            },
            {
              name: "First Look",
            },
          ],
        },
        {
          name: "Setup",
          children: [
            {
              name: "Redis Installation",
            },
            {
              name: "Redis CLI",
            },
            {
              name: "First Command",
            },
            {
              name: "Configuration",
            },
            {
              name: "Client Libraries",
            },
          ],
        },
      ],
      dividerText: " Learn Redis basic data types.",
    },
    {
      name: "Basic Data Types",
      children: [
        {
          name: "Strings",
          children: [
            {
              name: "SET",
            },
            {
              name: "GET",
            },
            {
              name: "INCR",
            },
            {
              name: "DECR and more",
            },
          ],
        },
        {
          name: "Lists",
          children: [
            {
              name: "LPUSH",
            },
            {
              name: "RPUSH",
            },
            {
              name: "LPOP",
            },
            {
              name: "RPOP and more",
            },
          ],
        },
        {
          name: "Sets",
          children: [
            {
              name: "SADD",
            },
            {
              name: "SREM",
            },
            {
              name: "SMEMBERS",
            },
            {
              name: "SISMEMBER",
            },
            {
              name: "SUNION",
            },

            {
              name: "SINTER and more",
            },
          ],
        },
      ],
      dividerText: " Learn Redis advanced data types.",
    },
    {
      name: "Advanced Data Types",
      children: [
        {
          name: "Hashes",
          children: [
            {
              name: "HSET",
            },
            {
              name: "HGET",
            },
            {
              name: "HDEL",
            },
            {
              name: "HGETALL and more",
            },
          ],
        },
        {
          name: "Sorted Sets",
          children: [
            {
              name: "ZADD",
            },
            {
              name: "ZREM",
            },
            {
              name: "ZRANGE",
            },
            {
              name: "ZSCORE and more",
            },
          ],
        },
        {
          name: "Bitmaps",
          children: [
            {
              name: "SETBIT",
            },
            {
              name: "GETBIT",
            },
            {
              name: "BITCOUNT",
            },
            {
              name: "BITOP",
            },
          ],
        },
        {
          name: "HyperLogLog",
          children: [
            {
              name: "PFADD",
            },
            {
              name: "PFCOUNT",
            },
            {
              name: "PFMERGE",
            },
          ],
        },
      ],
      dividerText: " Execute Redis commands.",
    },
    {
      name: "Commands",
      children: [
        {
          name: "Basic Commands",
          children: [
            {
              name: "EXISTS",
            },
            {
              name: "KEYS",
            },
            {
              name: "DEL",
            },
          ],
        },
        {
          name: "Advanced Commands",
          children: [
            {
              name: "EXPIRE and TTL",
            },
            {
              name: "MULTI and EXEC",
            },
            {
              name: "FLUSHDB",
            },
          ],
        },
      ],
      dividerText: " Connect Redis with applications.",
    },
    {
      name: "Application Integration",
      children: [
        {
          name: "Client Libraries",
          children: [
            {
              name: "redis-py (Python)",
              preferred: true,
            },
            {
              name: "ioredis (Node.js)",
            },
            {
              name: "Jedis (Java)",
            },
          ],
        },
        {
          name: "Integration Features",
          children: [
            {
              name: "Caching",
            },
            {
              name: "Pub/Sub",
            },
          ],
        },
      ],
      dividerText: " Manage Redis persistence.",
    },
    {
      name: "Persistence",
      children: [
        {
          name: "Persistence Basics",
          children: [
            {
              name: "How RDB Works",
            },
            {
              name: "Useases",
            },
            {
              name: "RDB Snapshots",
            },
            {
              name: "AOF Logs",
            },
          ],
        },
        {
          name: "Persistence Configuration",
          children: [
            {
              name: "Hybrid Persistence",
            },
            {
              name: "Persistence Tuning",
            },
            {
              name: "Recovery",
            },
          ],
        },
      ],
      dividerText: " Scale Redis deployments.",
    },
    {
      name: "Scaling Redis",
      children: [
        {
          name: "Replication",
          children: [
            {
              name: "Master-Replica",
            },
            {
              name: "Failover",
            },
          ],
        },
        {
          name: "Clustering and Sharding",
          children: [
            {
              name: "Redis Cluster",
            },
            {
              name: "Sharding",
            },
            {
              name: "Cluster Management",
            },
          ],
        },
      ],
      dividerText: " Utilize Redis development tools.",
    },
    {
      name: "Development Tools",
      children: [
        {
          name: "CLI and Clients",
          children: [
            {
              name: "redis-cli",
              preferred: true,
            },
            {
              name: "redis-py",
              preferred: true,
            },
            { name: "ioredis" },
          ],
        },
        {
          name: "Monitoring and GUIs",
          children: [
            {
              name: "RedisInsight",
              preferred: true,
            },
            { name: "INFO Command" },
            {
              name: "MONITOR Command",
            },
          ],
        },
      ],
      dividerText: " Explore advanced Redis topics.",
    },
    {
      name: "Advanced Redis Topics",
      children: [
        {
          name: "Scripting and Transactions",
          children: [
            {
              name: "Lua Scripting",
            },
            {
              name: "Transactions",
            },
            {
              name: "Pipelines",
            },
          ],
        },
        {
          name: "Security and Optimization",
          children: [
            {
              name: "Authentication",
            },
            {
              name: "SSL/TLS",
            },
            {
              name: "Performance Tuning",
            },
          ],
        },
      ],
      dividerText: " Practice and learn with resources.",
    },
    {
      name: "Practice and Resources",
      children: [
        {
          name: "Projects",
          children: [
            {
              name: "Caching API",
            },
            { name: "Task Queue" },
            {
              name: "Leaderboard",
            },
          ],
        },
        {
          name: "Learning Resources",
          children: [
            {
              name: "Redis.io",
              preferred: true,
            },
            { name: "Redis University" },
            {
              name: "Redis Community",
            },
          ],
        },
      ],
    },
    {
      name: "Continuous Learning",
    },
  ],
};

export default redisDeveloperRoadmap;
