const cybersecurityITRoadmap = {
  name: "Cybersecurity & IT Skills Roadmap 2025",
  description:
    "A comprehensive guide to mastering IT fundamentals, networking, cybersecurity, and cloud technologies, progressing from foundational to advanced skills.",
  children: [
    {
      name: "Fundamentals of IT Skills",
      description:
        "Basic computer skills and IT knowledge necessary for a cybersecurity career.",
      children: [
        {
          name: "Hardware & Software Basics",
          description:
            "Understanding computer components, storage, and OS interaction.",
        },
        {
          name: "Command Line & Shell Scripting",
          description:
            "Familiarity with CLI for Linux (Bash) and Windows (PowerShell).",
        },
        {
          name: "File Systems & Permissions",
          description:
            "Managing file structures, access control, and permissions.",
        },
        {
          name: "Virtualization & Cloud Basics",
          description:
            "Introduction to virtual machines and cloud computing concepts.",
        },
      ],
      dividerText:
        "Learn how operating systems function and interact with networks.",
    },
    {
      name: "Operating Systems & Networking",
      description:
        "Mastering OS administration and network infrastructure fundamentals.",
      children: [
        {
          name: "Operating System Administration",
          description: "Configuring and managing Windows, Linux, and macOS.",
          children: [
            {
              name: "Linux",
              description: "File structure, package management, and security.",
            },
            {
              name: "Windows",
              description: "Registry, Group Policy, and Active Directory.",
            },
            {
              name: "macOS",
              description: "System preferences and Unix-based commands.",
            },
          ],
        },
        {
          name: "Networking Fundamentals",
          description:
            "Understanding network types, IP addressing, and configurations.",
          children: [
            {
              name: "OSI & TCP/IP Model",
              description: "How network communication works.",
            },
            {
              name: "Subnetting & VLANs",
              description: "IP addressing and network segmentation.",
            },
            {
              name: "Routing & Switching",
              description: "Configuring and troubleshooting networks.",
            },
          ],
        },
        {
          name: "Network Security Basics",
          description:
            "Protecting networks from unauthorized access and attacks.",
          children: [
            {
              name: "Firewalls & IDS/IPS",
              description: "Monitoring and filtering network traffic.",
            },
            { name: "NAT & VPNs", description: "Secure remote connections." },
            {
              name: "Wireless Security",
              description: "Securing Wi-Fi networks.",
            },
            {
              name: "Intrusion Detection Systems (IDS)",
              description: "Monitoring and alerting on suspicious activity.",
            },
          ],
        },
      ],
      dividerText: "Learn how to secure systems and detect vulnerabilities.",
    },
    {
      name: "Security Skills & Knowledge",
      description:
        "Core cybersecurity skills required to protect systems and data.",
      children: [
        {
          name: "Cryptography & Encryption",
          description:
            "Understanding encryption techniques and secure communication.",
          children: [
            {
              name: "Symmetric & Asymmetric Encryption",
              description: "AES, RSA, and ECC encryption.",
            },
            {
              name: "Hashing Algorithms",
              description: "MD5, SHA-256, and bcrypt.",
            },
            {
              name: "PKI & Certificates",
              description: "SSL/TLS and digital signatures.",
            },
          ],
        },
        {
          name: "Cyber Threats & Attacks",
          description:
            "Recognizing and mitigating different types of cyber attacks.",
          children: [
            {
              name: "Malware Analysis",
              description:
                "Detecting and removing viruses, worms, and Trojans.",
            },
            {
              name: "Phishing & Social Engineering",
              description: "Defensive strategies against scams.",
            },
            {
              name: "Denial of Service (DoS/DDoS)",
              description: "Mitigating volumetric and protocol attacks.",
            },
          ],
        },
        {
          name: "Security Tools & Techniques",
          description:
            "Hands-on experience with security tools for defense and offense.",
          children: [
            {
              name: "Penetration Testing",
              description: "Using Kali Linux, Metasploit, and Burp Suite.",
            },
            {
              name: "SIEM & Log Analysis",
              description: "Security monitoring and event correlation.",
            },
            {
              name: "Incident Response",
              description:
                "Steps to contain, eradicate, and recover from attacks.",
            },
          ],
        },
      ],
      dividerText: "Learn how security works in cloud environments.",
    },
    {
      name: "Cloud Security & Advanced Topics",
      description:
        "Mastering security in cloud environments and emerging technologies.",
      children: [
        {
          name: "Cloud Computing & Security",
          description:
            "Securing cloud environments and understanding cloud-based security models.",
          children: [
            {
              name: "AWS Security",
              description: "IAM, VPC, and encryption services.",
            },
            {
              name: "Azure Security",
              description: "Azure Sentinel, AD, and compliance.",
            },
            {
              name: "Google Cloud Security",
              description: "Identity-aware proxy and secure network layers.",
            },
          ],
        },
        {
          name: "Zero Trust Security",
          description: "Implementing a ‘never trust, always verify’ model.",
          children: [
            {
              name: "Microsegmentation",
              description: "Restricting access within the network.",
            },
            {
              name: "Identity and Access Management (IAM)",
              description: "Controlling access to resources.",
            },
          ],
        },
        {
          name: "Threat Intelligence & AI",
          description:
            "Leveraging AI and data analytics for cybersecurity defense.",
          children: [
            {
              name: "AI-Based Threat Detection",
              description: "Using AI to detect anomalies and cyber threats.",
            },
            {
              name: "Malware Analysis with AI",
              description: "Using AI to detect and remove malware.",
            },

            {
              name: "Cyber Threat Intelligence",
              description: "Gathering and analyzing security threats.",
            },
          ],
        },
      ],
      dividerText:
        "Prepare for cybersecurity certifications and career growth.",
    },
    {
      name: "Cybersecurity Certifications",
      description: "Validating skills with industry-recognized certifications.",
      children: [
        {
          name: "CompTIA Security+",
          description: "Entry-level cybersecurity certification.",
        },
        {
          name: "Certified Ethical Hacker (CEH)",
          description: "Ethical hacking and penetration testing.",
        },
        {
          name: "Certified Information Systems Security Professional (CISSP)",
          description: "Advanced security certification for professionals.",
        },
        {
          name: "Certified Cloud Security Professional (CCSP)",
          description: "Cloud security certification.",
        },
      ],
    },
    {
      name: "Soft Skills & Career Growth",
      description:
        "Developing communication, leadership, and problem-solving skills.",
      children: [
        {
          name: "Communication & Presentation",
          description: "Explaining cybersecurity concepts clearly.",
        },
        {
          name: "Problem-Solving & Critical Thinking",
          description: "Analyzing security incidents effectively.",
        },
        {
          name: "Team Collaboration & Project Management",
          description: "Working in SOC teams and security operations.",
        },
      ],
    },
    {
      name: "Continuous Learning & Research",
      description:
        "Keeping up with the latest cybersecurity threats and innovations.",
      children: [
        {
          name: "Capture The Flag (CTF) Challenges",
          description: "Practicing ethical hacking in competitions.",
        },
        {
          name: "Bug Bounty Programs",
          description: "Finding and reporting security vulnerabilities.",
        },
        {
          name: "Cybersecurity Blogs & Conferences",
          description: "Staying updated with industry trends.",
        },
      ],
    },
  ],
};

export default cybersecurityITRoadmap;
