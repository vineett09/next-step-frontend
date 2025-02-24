const cybersecurityITRoadmap = {
  name: "Cybersecurity & IT Skills Roadmap 2025",
  description:
    "This comprehensive guide equips learners with IT fundamentals, networking, cybersecurity, and cloud skills for 2025, progressing from beginner to advanced levels. It covers essential tools, threats, and certifications. Designed for practical mastery, it ensures readiness to secure systems, detect vulnerabilities, and advance in the dynamic cybersecurity landscape with confidence and expertise.",
  children: [
    {
      name: "Fundamentals of IT Skills",
      description:
        "This section builds foundational IT knowledge for cybersecurity, taught with hands-on examples. Learners master hardware, software, and system basics. It’s the essential starting point in 2025, providing the technical groundwork to understand and secure digital environments effectively, setting the stage for advanced cybersecurity skills.",
      children: [
        {
          name: "Hardware & Software Basics",
          description:
            "Hardware & Software Basics explore computer components and OS interactions, taught with practical setups. This section covers CPUs, RAM, storage, and software layers. It’s a core skill in 2025, enabling cybersecurity pros to grasp system architecture and troubleshoot foundational issues efficiently.",
        },
        {
          name: "Command Line & Shell Scripting",
          description:
            "Command Line & Shell Scripting teach CLI for Linux (Bash) and Windows (PowerShell), with script examples. This section automates tasks and manages systems. It’s an essential skill in 2025, empowering cybersecurity tasks like log analysis and system monitoring with precision.",
        },
        {
          name: "File Systems & Permissions",
          description:
            "File Systems & Permissions manage structures and access, taught with Linux and Windows examples. This section secures data through user controls. It’s a key skill in 2025, ensuring analysts understand system security foundations critical for protecting sensitive information.",
        },
        {
          name: "Virtualization & Cloud Basics",
          description:
            "Virtualization & Cloud Basics introduce VMs and cloud concepts, taught with VirtualBox setups. This section explores scalable IT environments. It’s a vital skill in 2025, bridging traditional IT with cloud security, foundational for modern cybersecurity practices.",
        },
      ],
      dividerText:
        "Learn how operating systems function and interact with networks.",
    },
    {
      name: "Operating Systems & Networking",
      description:
        "This section masters OS administration and networking, taught with Linux and TCP/IP examples. Learners manage systems and secure networks effectively. It’s a critical skill in 2025, providing the expertise to protect infrastructure and understand network interactions in cybersecurity contexts.",
      children: [
        {
          name: "Operating System Administration",
          description:
            "Operating System Administration configures Windows and Linux, taught with practical tasks. This section manages OS settings and security. It’s an essential skill in 2025, enabling cybersecurity pros to secure diverse systems against threats and vulnerabilities efficiently.",
          children: [
            {
              name: "Linux",
              description:
                "Linux covers file structures and security, taught with commands like chmod. This section manages packages and permissions. It’s a core skill in 2025, vital for securing widely-used open-source systems in cybersecurity environments.",
            },
            {
              name: "Windows",
              description:
                "Windows manages Registry and AD, taught with PowerShell examples. This section secures enterprise systems. It’s a key skill in 2025, critical for protecting Windows-based networks prevalent in corporate cybersecurity settings.",
            },
            {
              name: "macOS",
              description:
                "macOS explores Unix commands, taught with terminal examples. This section secures Apple systems. It’s a practical skill in 2025, ensuring analysts can handle macOS security in diverse IT ecosystems effectively.",
            },
          ],
        },
        {
          name: "Networking Fundamentals",
          description:
            "Networking Fundamentals teach IP addressing and configurations, with subnetting examples. This section builds network understanding. It’s a foundational skill in 2025, enabling cybersecurity pros to design and troubleshoot secure network infrastructures with confidence.",
          children: [
            {
              name: "OSI & TCP/IP Model",
              description:
                "OSI & TCP/IP Model explain communication, taught with layers. This section covers network protocols. It’s an essential skill in 2025, providing the framework for securing network traffic in cybersecurity.",
            },
            {
              name: "Subnetting & VLANs",
              description:
                "Subnetting & VLANs segment networks, taught with calculations. This section enhances security and efficiency. It’s a key skill in 2025, critical for isolating and protecting network segments in cybersecurity.",
            },
            {
              name: "Routing & Switching",
              description:
                "Routing & Switching configure networks, taught with Cisco examples. This section troubleshoots connectivity. It’s a practical skill in 2025, ensuring secure data flow in cybersecurity infrastructures.",
            },
          ],
        },
        {
          name: "Network Security Basics",
          description:
            "Network Security Basics protect against attacks, taught with firewall setups. This section secures network perimeters. It’s a vital skill in 2025, foundational for defending IT systems from unauthorized access and threats effectively.",
          children: [
            {
              name: "Firewalls & IDS/IPS",
              description:
                "Firewalls & IDS/IPS filter traffic, taught with pfSense. This section monitors threats. It’s a core skill in 2025, blocking and detecting network intrusions efficiently.",
            },
            {
              name: "NAT & VPNs",
              description:
                "NAT & VPNs secure connections, taught with OpenVPN. This section hides IPs and encrypts traffic. It’s an essential skill in 2025, ensuring safe remote access in cybersecurity.",
            },
            {
              name: "Wireless Security",
              description:
                "Wireless Security secures Wi-Fi, taught with WPA3. This section prevents breaches. It’s a key skill in 2025, protecting wireless networks from exploitation.",
            },
            {
              name: "Intrusion Detection Systems (IDS)",
              description:
                "IDS monitors activity, taught with Snort. This section alerts on threats. It’s a practical skill in 2025, enhancing network threat detection in cybersecurity.",
            },
          ],
        },
      ],
      dividerText: "Learn how to secure systems and detect vulnerabilities.",
    },
    {
      name: "Security Skills & Knowledge",
      description:
        "This section builds core cybersecurity skills, taught with penetration testing tools. Learners protect systems and data from threats. It’s a high-demand skill in 2025, ensuring analysts can safeguard IT environments and respond to incidents effectively with expertise.",
      children: [
        {
          name: "Cryptography & Encryption",
          description:
            "Cryptography & Encryption secure communication, taught with OpenSSL examples. This section covers encryption techniques for data protection. It’s an essential skill in 2025, critical for maintaining confidentiality and integrity in cybersecurity systems.",
          children: [
            {
              name: "Symmetric & Asymmetric Encryption",
              description:
                "Symmetric & Asymmetric Encryption uses AES and RSA, taught with examples. This section secures data transfers. It’s a core skill in 2025, foundational for encrypting sensitive information effectively.",
            },
            {
              name: "Hashing Algorithms",
              description:
                "Hashing Algorithms like SHA-256, taught with examples. This section ensures data integrity. It’s a key skill in 2025, verifying data authenticity in cybersecurity applications.",
            },
            {
              name: "PKI & Certificates",
              description:
                "PKI & Certificates use SSL/TLS, taught with setups. This section authenticates and encrypts. It’s a practical skill in 2025, securing web and network communications.",
            },
          ],
        },
        {
          name: "Cyber Threats & Attacks",
          description:
            "Cyber Threats & Attacks teach mitigation, with malware examples. This section identifies and counters risks. It’s a critical skill in 2025, enabling analysts to defend against diverse cyber threats proactively.",
          children: [
            {
              name: "Malware Analysis",
              description:
                "Malware Analysis detects viruses, taught with sandboxing. This section removes threats. It’s an essential skill in 2025, crucial for dissecting and neutralizing malicious software.",
            },
            {
              name: "Phishing & Social Engineering",
              description:
                "Phishing defenses counter scams, taught with examples. This section prevents trickery. It’s a key skill in 2025, protecting users from human-targeted attacks.",
            },
            {
              name: "Denial of Service (DoS/DDoS)",
              description:
                "DoS/DDoS mitigation, taught with examples. This section counters service attacks. It’s a practical skill in 2025, maintaining system availability under threat.",
            },
          ],
        },
        {
          name: "Security Tools & Techniques",
          description:
            "Security Tools & Techniques use Kali Linux, taught with hands-on examples. This section defends and tests systems. It’s a vital skill in 2025, providing practical expertise for cybersecurity operations and threat hunting.",
          children: [
            {
              name: "Penetration Testing",
              description:
                "Penetration Testing uses Metasploit, taught with labs. This section finds vulnerabilities. It’s a core skill in 2025, proactively securing systems by simulating attacks.",
            },
            {
              name: "SIEM & Log Analysis",
              description:
                "SIEM analyzes logs with Splunk, taught with setups. This section monitors security events. It’s a key skill in 2025, detecting threats in real-time.",
            },
            {
              name: "Incident Response",
              description:
                "Incident Response contains attacks, taught with steps. This section recovers systems. It’s a practical skill in 2025, managing cybersecurity incidents effectively.",
            },
          ],
        },
      ],
      dividerText: "Learn how security works in cloud environments.",
    },
    {
      name: "Cloud Security & Advanced Topics",
      description:
        "This section masters cloud security and advanced tech, taught with AWS examples. Learners secure modern IT and explore AI. It’s a high-value skill in 2025, preparing analysts for cloud-centric and future-focused cybersecurity challenges with expertise.",
      children: [
        {
          name: "Cloud Computing & Security",
          description:
            "Cloud Computing & Security secures cloud platforms, taught with Azure setups. This section protects virtual environments. It’s an essential skill in 2025, aligning with the shift to cloud-based IT and cybersecurity practices.",
          children: [
            {
              name: "AWS Security",
              description:
                "AWS Security uses IAM and VPC, taught with configs. This section secures AWS resources. It’s a core skill in 2025, vital for cloud cybersecurity dominance.",
            },
            {
              name: "Azure Security",
              description:
                "Azure Security leverages Sentinel, taught with setups. This section protects Azure environments. It’s a key skill in 2025, critical for enterprise cloud security.",
            },
            {
              name: "Google Cloud Security",
              description:
                "Google Cloud Security uses proxies, taught with examples. This section secures GCP. It’s a practical skill in 2025, enhancing cloud protection.",
            },
          ],
        },
        {
          name: "Zero Trust Security",
          description:
            "Zero Trust Security implements ‘never trust’, taught with examples. This section verifies all access. It’s a critical skill in 2025, ensuring robust cybersecurity in untrusted networks.",
          children: [
            {
              name: "Microsegmentation",
              description:
                "Microsegmentation restricts access, taught with setups. This section isolates network parts. It’s an essential skill in 2025, enhancing zero trust security.",
            },
            {
              name: "Identity and Access Management (IAM)",
              description:
                "IAM controls access, taught with configs. This section secures resources. It’s a key skill in 2025, foundational for zero trust models.",
            },
          ],
        },
        {
          name: "Threat Intelligence & AI",
          description:
            "Threat Intelligence & AI use analytics, taught with AI examples. This section enhances cybersecurity with data. It’s an advanced skill in 2025, leveraging AI for proactive defense.",
          children: [
            {
              name: "AI-Based Threat Detection",
              description:
                "AI detects anomalies, taught with setups. This section identifies cyber threats. It’s a core skill in 2025, improving security with machine learning.",
            },
            {
              name: "Malware Analysis with AI",
              description:
                "AI analyzes malware, taught with tools. This section removes threats. It’s a key skill in 2025, enhancing malware detection capabilities.",
            },
            {
              name: "Cyber Threat Intelligence",
              description:
                "Threat Intelligence gathers data, taught with examples. This section analyzes risks. It’s a practical skill in 2025, informing cybersecurity strategies.",
            },
          ],
        },
      ],
      dividerText:
        "Prepare for cybersecurity certifications and career growth.",
    },
    {
      name: "Cybersecurity Certifications",
      description:
        "This section validates skills with certifications like CISSP, taught with prep strategies. Learners earn industry-recognized credentials. It’s a strategic skill in 2025, boosting credibility and career prospects in the competitive cybersecurity field effectively.",
      children: [
        {
          name: "CompTIA Security+",
          description:
            "CompTIA Security+ offers entry-level certification, taught with prep. This section covers cybersecurity basics. It’s an essential skill in 2025, a stepping stone for beginners in IT security careers.",
        },
        {
          name: "Certified Ethical Hacker (CEH)",
          description:
            "CEH teaches ethical hacking, taught with labs. This section focuses on penetration testing. It’s a key skill in 2025, preparing analysts to identify vulnerabilities proactively.",
        },
        {
          name: "Certified Information Systems Security Professional (CISSP)",
          description:
            "CISSP is advanced certification, taught with domains. This section covers comprehensive security. It’s a high-value skill in 2025, for experienced cybersecurity professionals.",
        },
        {
          name: "Certified Cloud Security Professional (CCSP)",
          description:
            "CCSP secures cloud, taught with prep. This section focuses on cloud cybersecurity. It’s a practical skill in 2025, aligning with cloud adoption trends.",
        },
      ],
    },
    {
      name: "Soft Skills & Career Growth",
      description:
        "This section develops communication and leadership, taught with scenarios. Learners enhance non-technical skills for cybersecurity careers. It’s a vital skill in 2025, ensuring success in team-based and strategic IT security roles effectively.",
      children: [
        {
          name: "Communication & Presentation",
          description:
            "Communication explains cybersecurity clearly, taught with examples. This section bridges technical gaps. It’s an essential skill in 2025, vital for stakeholder engagement.",
        },
        {
          name: "Problem-Solving & Critical Thinking",
          description:
            "Problem-Solving analyzes incidents, taught with cases. This section resolves security issues. It’s a key skill in 2025, critical for effective cybersecurity responses.",
        },
        {
          name: "Team Collaboration & Project Management",
          description:
            "Collaboration works in SOCs, taught with examples. This section manages security projects. It’s a practical skill in 2025, enhancing team efficiency.",
        },
      ],
    },
    {
      name: "Continuous Learning & Research",
      description:
        "This section keeps skills current with CTFs, taught with resources. Learners stay ahead in cybersecurity trends. It’s a lifelong skill in 2025, ensuring adaptability to evolving threats and technologies in the field.",
      children: [
        {
          name: "Capture The Flag (CTF) Challenges",
          description:
            "CTFs practice hacking, taught with challenges. This section hones cybersecurity skills. It’s an essential skill in 2025, building practical expertise competitively.",
        },
        {
          name: "Bug Bounty Programs",
          description:
            "Bug Bounties report vulnerabilities, taught with platforms. This section improves security. It’s a key skill in 2025, contributing to real-world protection.",
        },
        {
          name: "Cybersecurity Blogs & Conferences",
          description:
            "Blogs & Conferences update trends, taught with resources. This section keeps knowledge fresh. It’s a practical skill in 2025, staying informed.",
        },
      ],
    },
  ],
};

export default cybersecurityITRoadmap;
