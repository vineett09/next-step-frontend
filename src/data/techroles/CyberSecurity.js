const cybersecurityITRoadmap = {
  name: "Cybersecurity & IT Skills Roadmap 2025",
  children: [
    {
      name: "IT Fundamentals",
      children: [
        {
          name: "Hardware Basics",
          children: [
            { name: "Component Identification" },
            { name: "Troubleshooting" },
            { name: "BIOS/UEFI Configuration" },
          ],
        },
        {
          name: "Software & OS Basics",
          children: [
            { name: "Operating System Layers" },
            { name: "Software Installation" },
            { name: "Patch Management" },
          ],
        },
        {
          name: "Virtualization Basics",
          children: [
            { name: "VirtualBox Setup" },
            { name: "VMware Intro" },
            { name: "Hyper-V Basics" },
          ],
        },
      ],
      dividerText: "IT fundamentals mastered—move to command-line skills.",
    },
    {
      name: "Command Line & Scripting",
      children: [
        {
          name: "Linux Command Line",
          children: [
            { name: "File Operations" },
            { name: "System Monitoring" },
            { name: "Network Commands" },
          ],
        },
        {
          name: "Windows PowerShell",
          children: [
            { name: "Cmdlets Basics" },
            { name: "Scripting" },
            { name: "Event Log Analysis" },
          ],
        },
        {
          name: "Scripting Fundamentals",
          children: [
            { name: "Bash Scripting" },
            { name: "PowerShell Scripting" },
            { name: "Python Scripting for Security" },
          ],
        },
      ],
      dividerText: "Command line conquered—learn operating systems.",
    },
    {
      name: "Operating System Administration",
      children: [
        {
          name: "Linux Administration",
          children: [
            { name: "User Management" },
            { name: "Service Management" },
            { name: "Log Analysis" },
          ],
        },
        {
          name: "Windows Administration",
          children: [
            { name: "Active Directory" },
            { name: "Group Policy" },
            { name: "Windows Defender Configuration" },
          ],
        },
        {
          name: "macOS Basics",
          children: [
            { name: "File Permissions" },
            { name: "System Preferences" },
            { name: "Gatekeeper & XProtect" },
          ],
        },
      ],
      dividerText: "OS administration secured—dive into networking.",
    },
    {
      name: "Networking Fundamentals",
      children: [
        {
          name: "Network Models",
          children: [
            { name: "OSI Layers" },
            { name: "TCP/IP Basics" },
            { name: "Protocol Analysis" },
          ],
        },
        {
          name: "Subnetting & VLANs",
          children: [
            { name: "Subnet Calculations" },
            { name: "VLAN Setup" },
            { name: "Inter-VLAN Routing" },
          ],
        },
        {
          name: "Routing & Switching",
          children: [
            { name: "Static Routing" },
            { name: "Dynamic Routing" },
            { name: "Switch Security" },
          ],
        },
      ],
      dividerText: "Networking fundamentals down—secure the network.",
    },
    {
      name: "Network Security",
      children: [
        {
          name: "Firewalls & Filtering",
          children: [
            { name: "Rule Creation" },
            { name: "Traffic Monitoring" },
            { name: "Intrusion Detection Systems (IDS)" },
          ],
        },
        {
          name: "VPNs & Encryption",
          children: [
            { name: "OpenVPN Setup" },
            { name: "IPSec Basics" },
            { name: "WireGuard Intro" },
          ],
        },
        {
          name: "Wireless Security",
          children: [
            { name: "WPA3 Configuration" },
            { name: "Cracking Prevention" },
            { name: "Wireless Intrusion Prevention" },
          ],
        },
      ],
      dividerText: "Network secured—learn cryptography.",
    },
    {
      name: "Cryptography & Encryption",
      children: [
        {
          name: "Symmetric Encryption",
          children: [
            { name: "AES Basics" },
            { name: "Key Management" },
            { name: "Stream Ciphers" },
          ],
        },
        {
          name: "Asymmetric Encryption",
          children: [
            { name: "RSA Setup" },
            { name: "Digital Signatures" },
            { name: "Elliptic Curve Cryptography (ECC)" },
          ],
        },
        {
          name: "Hashing & PKI",
          children: [
            { name: "Hashing Algorithms" },
            { name: "Certificates" },
            { name: "Certificate Revocation" },
          ],
        },
      ],
      dividerText: "Cryptography mastered—study cyber threats.",
    },
    {
      name: "Cyber Threats & Attacks",
      children: [
        {
          name: "Malware Analysis",
          children: [
            { name: "Static Analysis" },
            { name: "Dynamic Analysis" },
            { name: "Reverse Engineering" },
          ],
        },
        {
          name: "Phishing & Social Engineering",
          children: [
            { name: "Phishing Campaigns" },
            { name: "Email Filtering" },
            { name: "Spear Phishing Defense" },
          ],
        },
        {
          name: "Web-Based Attacks",
          children: [
            { name: "SQL Injection" },
            { name: "XSS Prevention" },
            { name: "CSRF Mitigation" },
          ],
        },
        {
          name: "DDoS Attacks",
          children: [
            { name: "DDoS Basics" },
            { name: "Mitigation Techniques" },
          ],
        },
      ],
      dividerText: "Threats understood—use security tools.",
    },
    {
      name: "Security Tools & Techniques",
      children: [
        {
          name: "Penetration Testing",
          children: [
            { name: "Nmap Scanning" },
            { name: "Metasploit Exploits" },
            { name: "Privilege Escalation" },
          ],
        },
        {
          name: "SIEM & Monitoring",
          children: [
            { name: "Splunk Setup" },
            { name: "ELK Stack" },
            { name: "Alert Configuration" },
          ],
        },
        {
          name: "Vulnerability Management",
          children: [
            { name: "Nessus Scans" },
            { name: "OpenVAS" },
            { name: "Patch Prioritization" },
          ],
        },
        {
          name: "Forensic Tools",
          children: [{ name: "Autopsy Basics" }, { name: "Memory Forensics" }],
        },
      ],
      dividerText: "Tools mastered—secure the cloud.",
    },
    {
      name: "Cloud Security",
      children: [
        {
          name: "AWS Security",
          children: [
            { name: "Identity Access Management (IAM)" },
            { name: "Virtual Private Cloud (VPC)" },
            { name: "AWS Security Hub" },
          ],
        },
        {
          name: "Azure Security",
          children: [
            { name: "Azure Sentinel" },
            { name: "Azure AD" },
            { name: "Azure Key Vault" },
          ],
        },
        {
          name: "GCP Security",
          children: [
            { name: "Security Command Center" },
            { name: "Cloud Armor" },
            { name: "Cloud IAM" },
          ],
        },
        {
          name: "Multi-Cloud Security",
          children: [{ name: "Prisma Cloud" }, { name: "Container Security" }],
        },
      ],
      dividerText: "Cloud secured—explore advanced topics.",
    },
    {
      name: "Advanced Cybersecurity Topics",
      children: [
        {
          name: "Zero Trust Security",
          children: [
            { name: "Microsegmentation" },
            { name: "IAM in Zero Trust" },
            { name: "Zero Trust Network Access (ZTNA)" },
          ],
        },
        {
          name: "AI in Cybersecurity",
          children: [
            { name: "AI Threat Detection" },
            { name: "ML Malware Analysis" },
            { name: "Adversarial AI Defense" },
          ],
        },
        {
          name: "Threat Intelligence",
          children: [
            { name: "IOC Analysis" },
            { name: "Threat Feeds" },
            { name: "Dark Web Monitoring" },
          ],
        },
        {
          name: "IoT Security",
          children: [{ name: "Device Discovery" }, { name: "IoT Encryption" }],
        },
      ],
      dividerText: "Advanced topics learned—earn certifications.",
    },
    {
      name: "Cybersecurity Certifications",
      children: [
        { name: "CompTIA Security+" },
        { name: "Certified Ethical Hacker (CEH)" },
        { name: "CISSP" },
        { name: "OSCP" },
        { name: "AWS Certified Security – Specialty" },
      ],
      dividerText: "Certified—stay current with continuous learning.",
    },
    {
      name: "Continuous Learning & Research",
      children: [
        {
          name: "CTF Challenges",
          children: [
            { name: "Hack The Box" },
            { name: "TryHackMe" },
            { name: "OverTheWire" },
          ],
        },
        {
          name: "Bug Bounties",
          children: [
            { name: "HackerOne" },
            { name: "Bugcrowd" },
            { name: "Synack" },
          ],
        },
        {
          name: "Industry Updates",
          children: [
            { name: "SANS Blogs" },
            { name: "Black Hat" },
            { name: "DEF CON" },
          ],
        },
        {
          name: "Open-Source Contributions",
          children: [{ name: "GitHub Basics" }, { name: "Tool Enhancement" }],
        },
      ],
      dividerText: "Learning ongoing—start your cybersecurity career!",
    },
  ],
};

export default cybersecurityITRoadmap;
