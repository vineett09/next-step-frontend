const cybersecurityITRoadmap = {
  name: "Cybersecurity & IT Skills Roadmap 2025",
  description:
    "This detailed roadmap guides learners through a step-by-step journey to master cybersecurity and IT skills by 2025, from foundational IT concepts to advanced cloud security, emerging threats, and continuous learning. With hands-on tools like Kali Linux, Wireshark, and AWS, it emphasizes practical skills, certifications, and staying ahead of threats—equipping you to secure systems and excel in the evolving cybersecurity landscape.",
  children: [
    {
      name: "IT Fundamentals",
      description:
        "Start your cybersecurity journey with core IT skills, taught with practical examples like configuring a Raspberry Pi or troubleshooting with Task Manager. A 2025 essential for understanding system mechanics, this step lays the groundwork for securing digital environments.",
      children: [
        {
          name: "Hardware Basics",
          description:
            "Learn computer components like CPU, RAM, and storage, taught with examples assembling a PC. Key in 2025 for system performance and security.",
          children: [
            {
              name: "Component Identification",
              description:
                "Identify CPU, GPU, and SSDs, taught with hardware upgrade examples. A 2025 skill for system understanding.",
            },
            {
              name: "Troubleshooting",
              description:
                "Diagnose issues with HWMonitor, taught with overheating examples. Essential in 2025 for system integrity.",
            },
            {
              name: "BIOS/UEFI Configuration", // New
              description:
                "Configure BIOS/UEFI settings, taught with secure boot examples. A 2025 skill for hardware-level security.",
            },
          ],
        },
        {
          name: "Software & OS Basics",
          description:
            "Understand OS layers and software, taught with examples installing Ubuntu or exploring Windows drivers. A 2025 skill for system interaction.",
          children: [
            {
              name: "Operating System Layers",
              description:
                "Explore kernel and drivers with `lsmod`, taught with Linux examples. Key in 2025 for OS security.",
            },
            {
              name: "Software Installation",
              description:
                "Install apps with `apt` or MSI files, taught with examples. A 2025 skill for setup and maintenance.",
            },
            {
              name: "Patch Management", // New
              description:
                "Apply updates with `apt-get` or Windows Update, taught with examples. A 2025 skill for vulnerability mitigation.",
            },
          ],
        },
        {
          name: "Virtualization Basics",
          description:
            "Set up VMs with VirtualBox, taught with Ubuntu VM examples. A 2025 skill for testing and isolating environments.",
          children: [
            {
              name: "VirtualBox Setup",

              description:
                "Create VMs with VirtualBox, taught with examples. Preferred in 2025 for ease of use.",
            },
            {
              name: "VMware Intro",
              description:
                "Use VMware Workstation, taught with Windows VM examples. A 2025 skill for enterprise tools.",
            },
            {
              name: "Hyper-V Basics", // New
              description:
                "Set up Hyper-V on Windows, taught with examples. A 2025 skill for Microsoft environments.",
            },
          ],
        },
      ],
      dividerText: "IT fundamentals mastered—move to command-line skills.",
    },
    {
      name: "Command Line & Scripting",
      description:
        "Gain proficiency in command-line tools and scripting, taught with Bash and PowerShell examples like automating tasks or parsing logs. A 2025 must-have for system management and automation in cybersecurity workflows.",
      children: [
        {
          name: "Linux Command Line",
          description:
            "Master Bash with `grep` and `find`, taught with file search examples. Key in 2025 for Linux administration.",
          children: [
            {
              name: "File Operations",
              description:
                "Use `ls`, `cp`, taught with examples moving files. A 2025 skill for data handling.",
            },
            {
              name: "System Monitoring",
              description:
                "Monitor with `top`, taught with process examples. Essential in 2025 for system checks.",
            },
            {
              name: "Network Commands", // New
              description:
                "Use `netstat` and `ss`, taught with examples. A 2025 skill for network troubleshooting.",
            },
          ],
        },
        {
          name: "Windows PowerShell",
          description:
            "Learn PowerShell with `Get-Process`, taught with system check examples. A 2025 skill for Windows automation.",
          children: [
            {
              name: "Cmdlets Basics",
              description:
                "Run `Get-Service`, taught with examples. Key in 2025 for Windows tasks.",
            },
            {
              name: "Scripting",
              description:
                "Write scripts with PowerShell, taught with automation examples. A 2025 skill for efficiency.",
            },
            {
              name: "Event Log Analysis", // New
              description:
                "Query logs with `Get-EventLog`, taught with examples. A 2025 skill for security auditing.",
            },
          ],
        },
        {
          name: "Scripting Fundamentals",
          description:
            "Automate with Bash and PowerShell scripts, taught with backup examples using `cron`. A 2025 skill for repetitive tasks.",
          children: [
            {
              name: "Bash Scripting",

              description:
                "Script with Bash, taught with cron examples. Preferred in 2025 for Linux automation.",
            },
            {
              name: "PowerShell Scripting",
              description:
                "Script with PowerShell, taught with Task Scheduler examples. A 2025 skill for Windows automation.",
            },
            {
              name: "Python Scripting for Security", // New
              description:
                "Write Python scripts for tasks like log parsing, taught with examples. A 2025 skill for versatile automation.",
            },
          ],
        },
      ],
      dividerText: "Command line conquered—learn operating systems.",
    },
    {
      name: "Operating System Administration",
      description:
        "Administer and secure OSes like Linux and Windows, taught with examples using `useradd` or Active Directory. A 2025 skill for system hardening and management across diverse IT environments.",
      children: [
        {
          name: "Linux Administration",

          description:
            "Secure Linux with `chmod` and `iptables`, taught with Ubuntu examples. Preferred in 2025 for its cybersecurity relevance.",
          children: [
            {
              name: "User Management",
              description:
                "Add users with `useradd`, taught with examples. A 2025 skill for access control.",
            },
            {
              name: "Service Management",
              description:
                "Control with `systemctl`, taught with service examples. Key in 2025 for system uptime.",
            },
            {
              name: "Log Analysis", // New
              description:
                "Analyze logs with `journalctl`, taught with examples. A 2025 skill for auditing and troubleshooting.",
            },
          ],
        },
        {
          name: "Windows Administration",
          description:
            "Manage Windows with Registry edits and PowerShell, taught with examples securing systems. A 2025 skill for enterprise IT.",
          children: [
            {
              name: "Active Directory",
              description:
                "Set up AD with PowerShell, taught with user examples. A 2025 skill for domain management.",
            },
            {
              name: "Group Policy",
              description:
                "Apply GPOs, taught with security examples. Key in 2025 for policy enforcement.",
            },
            {
              name: "Windows Defender Configuration", // New
              description:
                "Configure Defender with PowerShell, taught with examples. A 2025 skill for endpoint security.",
            },
          ],
        },
        {
          name: "macOS Basics",
          description:
            "Secure macOS with `chmod`, taught with Terminal examples. A 2025 skill for mixed environments.",
          children: [
            {
              name: "File Permissions",
              description:
                "Set permissions with `chmod`, taught with examples. A 2025 skill for macOS security.",
            },
            {
              name: "System Preferences",
              description:
                "Secure via GUI and CLI, taught with examples. Key in 2025 for macOS hardening.",
            },
            {
              name: "Gatekeeper & XProtect", // New
              description:
                "Configure macOS security tools, taught with examples. A 2025 skill for built-in protection.",
            },
          ],
        },
      ],
      dividerText: "OS administration secured—dive into networking.",
    },
    {
      name: "Networking Fundamentals",
      description:
        "Master networking concepts like IP addressing and routing, taught with Packet Tracer and Wireshark examples. A 2025 skill for designing and securing network infrastructure.",
      children: [
        {
          name: "Network Models",
          description:
            "Learn OSI and TCP/IP, taught with Wireshark packet examples. Key in 2025 for protocol understanding.",
          children: [
            {
              name: "OSI Layers",
              description:
                "Study layers with examples, taught with Wireshark. A 2025 skill for network theory.",
            },
            {
              name: "TCP/IP Basics",
              description:
                "Understand TCP/IP with examples, taught with `ping`. Key in 2025 for connectivity.",
            },
            {
              name: "Protocol Analysis", // New
              description:
                "Analyze HTTP/HTTPS with Wireshark, taught with examples. A 2025 skill for traffic understanding.",
            },
          ],
        },
        {
          name: "Subnetting & VLANs",
          description:
            "Configure subnets and VLANs with Packet Tracer, taught with examples. A 2025 skill for network segmentation.",
          children: [
            {
              name: "Subnet Calculations",
              description:
                "Calculate subnets, taught with examples. A 2025 skill for IP planning.",
            },
            {
              name: "VLAN Setup",
              description:
                "Set VLANs with `vlan`, taught with examples. Key in 2025 for isolation.",
            },
            {
              name: "Inter-VLAN Routing", // New
              description:
                "Configure routing between VLANs, taught with examples. A 2025 skill for network design.",
            },
          ],
        },
        {
          name: "Routing & Switching",
          description:
            "Set up routing with Cisco IOS, taught with OSPF examples in GNS3. A 2025 skill for network flow.",
          children: [
            {
              name: "Static Routing",
              description:
                "Configure static routes, taught with examples. A 2025 skill for basic routing.",
            },
            {
              name: "Dynamic Routing",

              description:
                "Use OSPF, taught with GNS3 examples. Preferred in 2025 for scalability.",
            },
            {
              name: "Switch Security", // New
              description:
                "Secure switches with port security, taught with examples. A 2025 skill for layer 2 protection.",
            },
          ],
        },
      ],
      dividerText: "Networking fundamentals down—secure the network.",
    },
    {
      name: "Network Security",
      description:
        "Secure networks with firewalls and VPNs, taught with pfSense and OpenVPN examples. A 2025 skill for protecting data in transit and perimeters.",
      children: [
        {
          name: "Firewalls & Filtering",
          description:
            "Set up firewalls with pfSense, taught with traffic blocking examples. Key in 2025 for perimeter defense.",
          children: [
            {
              name: "Rule Creation",
              description:
                "Create rules in pfSense, taught with examples. A 2025 skill for access control.",
            },
            {
              name: "Traffic Monitoring",
              description:
                "Monitor with Wireshark, taught with examples. Key in 2025 for visibility.",
            },
            {
              name: "Intrusion Detection Systems (IDS)", // New
              description:
                "Set up Snort, taught with examples. A 2025 skill for threat detection.",
            },
          ],
        },
        {
          name: "VPNs & Encryption",
          description:
            "Secure with OpenVPN, taught with tunnel examples. A 2025 skill for remote access.",
          children: [
            {
              name: "OpenVPN Setup",

              description:
                "Configure OpenVPN, taught with examples. Preferred in 2025 for ease and security.",
            },
            {
              name: "IPSec Basics",
              description:
                "Set up IPSec, taught with examples. A 2025 skill for advanced VPNs.",
            },
            {
              name: "WireGuard Intro", // New
              description:
                "Configure WireGuard, taught with examples. A 2025 skill for modern, lightweight VPNs.",
            },
          ],
        },
        {
          name: "Wireless Security",
          description:
            "Secure Wi-Fi with WPA3, taught with Aircrack-ng examples. A 2025 skill for wireless protection.",
          children: [
            {
              name: "WPA3 Configuration",
              description:
                "Set WPA3, taught with examples. A 2025 skill for modern Wi-Fi security.",
            },
            {
              name: "Cracking Prevention",
              description:
                "Test with Aircrack-ng, taught with examples. Key in 2025 for defense.",
            },
            {
              name: "Wireless Intrusion Prevention", // New
              description:
                "Set up WIPS with tools like Kismet, taught with examples. A 2025 skill for Wi-Fi monitoring.",
            },
          ],
        },
      ],
      dividerText: "Network secured—learn cryptography.",
    },
    {
      name: "Cryptography & Encryption",
      description:
        "Protect data with encryption, taught with OpenSSL and GPG examples like encrypting files. A 2025 skill for ensuring confidentiality and integrity.",
      children: [
        {
          name: "Symmetric Encryption",
          description:
            "Use AES with OpenSSL, taught with file encryption examples. Key in 2025 for fast protection.",
          children: [
            {
              name: "AES Basics",
              description:
                "Encrypt with AES, taught with examples. A 2025 skill for data security.",
            },
            {
              name: "Key Management",
              description:
                "Manage keys, taught with examples. Key in 2025 for encryption safety.",
            },
            {
              name: "Stream Ciphers", // New
              description:
                "Use ChaCha with OpenSSL, taught with examples. A 2025 skill for lightweight encryption.",
            },
          ],
        },
        {
          name: "Asymmetric Encryption",
          description:
            "Master RSA with GPG, taught with key pair examples. A 2025 skill for secure exchanges.",
          children: [
            {
              name: "RSA Setup",
              description:
                "Generate RSA keys, taught with GPG examples. A 2025 skill for key distribution.",
            },
            {
              name: "Digital Signatures",
              description:
                "Sign with RSA, taught with examples. Key in 2025 for authenticity.",
            },
            {
              name: "Elliptic Curve Cryptography (ECC)", // New
              description:
                "Use ECC with OpenSSL, taught with examples. A 2025 skill for efficient security.",
            },
          ],
        },
        {
          name: "Hashing & PKI",
          description:
            "Ensure integrity with SHA-256 and PKI, taught with OpenSSL cert examples. A 2025 skill for verification.",
          children: [
            {
              name: "Hashing Algorithms",

              description:
                "Use SHA-256, taught with examples. Preferred in 2025 for strength.",
            },
            {
              name: "Certificates",
              description:
                "Issue certs with OpenSSL, taught with examples. Key in 2025 for TLS.",
            },
            {
              name: "Certificate Revocation", // New
              description:
                "Manage CRLs with OpenSSL, taught with examples. A 2025 skill for PKI maintenance.",
            },
          ],
        },
      ],
      dividerText: "Cryptography mastered—study cyber threats.",
    },
    {
      name: "Cyber Threats & Attacks",
      description:
        "Understand and counter threats like malware and phishing, taught with VirusTotal and SET examples. A 2025 skill for proactive defense.",
      children: [
        {
          name: "Malware Analysis",
          description:
            "Analyze malware with IDA Pro, taught with ransomware examples. Key in 2025 for threat neutralization.",
          children: [
            {
              name: "Static Analysis",
              description:
                "Dissect with IDA, taught with examples. A 2025 skill for code review.",
            },
            {
              name: "Dynamic Analysis",
              description:
                "Run in sandboxes, taught with examples. Key in 2025 for behavior study.",
            },
            {
              name: "Reverse Engineering", // New
              description:
                "Reverse malware with Ghidra, taught with examples. A 2025 skill for deep analysis.",
            },
          ],
        },
        {
          name: "Phishing & Social Engineering",
          description:
            "Counter phishing with SET, taught with mock campaign examples. A 2025 skill for user protection.",
          children: [
            {
              name: "Phishing Campaigns",
              description:
                "Craft with SET, taught with examples. A 2025 skill for testing defenses.",
            },
            {
              name: "Email Filtering",
              description:
                "Set filters, taught with examples. Key in 2025 for prevention.",
            },
            {
              name: "Spear Phishing Defense", // New
              description:
                "Detect with Barracuda, taught with examples. A 2025 skill for targeted attack prevention.",
            },
          ],
        },
        {
          name: "Web-Based Attacks",
          description:
            "Prevent SQLi with Burp Suite, taught with exploit examples. A 2025 skill for web security.",
          children: [
            {
              name: "SQL Injection",

              description:
                "Exploit and fix SQLi, taught with Burp examples. Preferred in 2025 for prevalence.",
            },
            {
              name: "XSS Prevention",
              description:
                "Secure against XSS, taught with examples. Key in 2025 for web safety.",
            },
            {
              name: "CSRF Mitigation", // New
              description:
                "Prevent CSRF with tokens, taught with examples. A 2025 skill for session security.",
            },
          ],
        },
        {
          name: "DDoS Attacks", // New Parent
          description:
            "Understand and mitigate DDoS, taught with Cloudflare examples. A 2025 skill for availability protection.",
          children: [
            {
              name: "DDoS Basics",
              description:
                "Learn attack types, taught with examples. A 2025 skill for threat awareness.",
            },
            {
              name: "Mitigation Techniques",
              description:
                "Use Cloudflare rate limiting, taught with examples. Key in 2025 for defense.",
            },
          ],
        },
      ],
      dividerText: "Threats understood—use security tools.",
    },
    {
      name: "Security Tools & Techniques",
      description:
        "Leverage tools like Kali Linux and Nessus, taught with pen testing and log analysis examples. A 2025 skill for threat hunting and defense.",
      children: [
        {
          name: "Penetration Testing",
          description:
            "Test with Metasploit, taught with exploit labs. Key in 2025 for proactive security.",
          children: [
            {
              name: "Nmap Scanning",
              description:
                "Scan with Nmap, taught with examples. A 2025 skill for recon.",
            },
            {
              name: "Metasploit Exploits",

              description:
                "Exploit with Metasploit, taught with SMB examples. Preferred in 2025 for versatility.",
            },
            {
              name: "Privilege Escalation", // New
              description:
                "Escalate with Metasploit, taught with examples. A 2025 skill for attack simulation.",
            },
          ],
        },
        {
          name: "SIEM & Monitoring",
          description:
            "Monitor with Splunk, taught with brute-force detection examples. A 2025 skill for real-time defense.",
          children: [
            {
              name: "Splunk Setup",

              description:
                "Configure Splunk, taught with log examples. Preferred in 2025 for power.",
            },
            {
              name: "ELK Stack",
              description:
                "Use ELK, taught with examples. A 2025 skill for open-source monitoring.",
            },
            {
              name: "Alert Configuration", // New
              description:
                "Set alerts in Splunk, taught with examples. A 2025 skill for proactive response.",
            },
          ],
        },
        {
          name: "Vulnerability Management",
          description:
            "Scan with Nessus, taught with CVE examples. A 2025 skill for risk assessment.",
          children: [
            {
              name: "Nessus Scans",
              description:
                "Run Nessus, taught with examples. A 2025 skill for vuln detection.",
            },
            {
              name: "OpenVAS",
              description:
                "Scan with OpenVAS, taught with examples. Key in 2025 for free tools.",
            },
            {
              name: "Patch Prioritization", // New
              description:
                "Prioritize fixes with Nessus reports, taught with examples. A 2025 skill for risk management.",
            },
          ],
        },
        {
          name: "Forensic Tools", // New Parent
          description:
            "Investigate incidents with Autopsy, taught with disk image examples. A 2025 skill for post-breach analysis.",
          children: [
            {
              name: "Autopsy Basics",
              description:
                "Analyze with Autopsy, taught with examples. A 2025 skill for digital forensics.",
            },
            {
              name: "Memory Forensics",
              description:
                "Use Volatility, taught with examples. Key in 2025 for RAM analysis.",
            },
          ],
        },
      ],
      dividerText: "Tools mastered—secure the cloud.",
    },
    {
      name: "Cloud Security",
      description:
        "Secure cloud platforms like AWS, taught with IAM and Security Hub examples. A 2025 skill for protecting modern IT infrastructure.",
      children: [
        {
          name: "AWS Security",

          description:
            "Secure AWS with IAM and VPC, taught with S3 lockdown examples. Preferred in 2025 for market dominance.",
          children: [
            {
              name: "Identity Access Management (IAM)",
              description:
                "Configure IAM, taught with role examples. A 2025 skill for access control.",
            },
            {
              name: "Virtual Private Cloud (VPC)",
              description:
                "Set up VPC, taught with subnet examples. Key in 2025 for network isolation.",
            },
            {
              name: "AWS Security Hub", // New
              description:
                "Monitor with Security Hub, taught with examples. A 2025 skill for compliance.",
            },
          ],
        },
        {
          name: "Azure Security",
          description:
            "Protect Azure with Sentinel, taught with log examples. A 2025 skill for Microsoft cloud.",
          children: [
            {
              name: "Azure Sentinel",
              description:
                "Monitor with Sentinel, taught with examples. A 2025 skill for threat detection.",
            },
            {
              name: "Azure AD",
              description:
                "Secure with Azure AD, taught with examples. Key in 2025 for identity.",
            },
            {
              name: "Azure Key Vault", // New
              description:
                "Manage secrets with Key Vault, taught with examples. A 2025 skill for encryption.",
            },
          ],
        },
        {
          name: "GCP Security",
          description:
            "Secure GCP with Security Command Center, taught with examples. A 2025 skill for Google Cloud.",
          children: [
            {
              name: "Security Command Center",
              description:
                "Use SCC, taught with proxy examples. A 2025 skill for GCP protection.",
            },
            {
              name: "Cloud Armor",
              description:
                "Protect with Cloud Armor, taught with examples. Key in 2025 for DDoS defense.",
            },
            {
              name: "Cloud IAM", // New
              description:
                "Configure IAM in GCP, taught with examples. A 2025 skill for access control.",
            },
          ],
        },
        {
          name: "Multi-Cloud Security", // New Parent
          description:
            "Secure hybrid clouds with Prisma, taught with examples. A 2025 skill for diverse environments.",
          children: [
            {
              name: "Prisma Cloud",
              description:
                "Use Prisma, taught with examples. A 2025 skill for unified security.",
            },
            {
              name: "Container Security",
              description:
                "Secure Docker with Twistlock, taught with examples. Key in 2025 for cloud-native apps.",
            },
          ],
        },
      ],
      dividerText: "Cloud secured—explore advanced topics.",
    },
    {
      name: "Advanced Cybersecurity Topics",
      description:
        "Learn zero trust, AI security, and more, taught with Zscaler and Darktrace examples. A 2025 skill for cutting-edge defense.",
      children: [
        {
          name: "Zero Trust Security",
          description:
            "Implement zero trust with Zscaler, taught with verification examples. Key in 2025 for modern security.",
          children: [
            {
              name: "Microsegmentation",
              description:
                "Isolate with NSX, taught with examples. A 2025 skill for granularity.",
            },
            {
              name: "IAM in Zero Trust",
              description:
                "Use Okta, taught with examples. Key in 2025 for access.",
            },
            {
              name: "Zero Trust Network Access (ZTNA)", // New
              description:
                "Implement ZTNA with Zscaler, taught with examples. A 2025 skill for secure access.",
            },
          ],
        },
        {
          name: "AI in Cybersecurity",
          description:
            "Detect threats with Darktrace, taught with anomaly examples. A 2025 skill for smart defense.",
          children: [
            {
              name: "AI Threat Detection",

              description:
                "Use Darktrace, taught with examples. Preferred in 2025 for innovation.",
            },
            {
              name: "ML Malware Analysis",
              description:
                "Analyze with Cylance, taught with examples. Key in 2025 for automation.",
            },
            {
              name: "Adversarial AI Defense", // New
              description:
                "Counter AI attacks with TensorFlow, taught with examples. A 2025 skill for future threats.",
            },
          ],
        },
        {
          name: "Threat Intelligence",
          description:
            "Gather intel with ThreatConnect, taught with IOC examples. A 2025 skill for strategy.",
          children: [
            {
              name: "IOC Analysis",
              description:
                "Analyze IOCs, taught with examples. A 2025 skill for intel.",
            },
            {
              name: "Threat Feeds",
              description:
                "Use feeds, taught with examples. Key in 2025 for updates.",
            },
            {
              name: "Dark Web Monitoring", // New
              description:
                "Monitor with Flashpoint, taught with examples. A 2025 skill for hidden threats.",
            },
          ],
        },
        {
          name: "IoT Security", // New Parent
          description:
            "Secure IoT devices with Armis, taught with examples. A 2025 skill for connected systems.",
          children: [
            {
              name: "Device Discovery",
              description:
                "Identify IoT with Armis, taught with examples. A 2025 skill for visibility.",
            },
            {
              name: "IoT Encryption",
              description:
                "Secure with MQTT TLS, taught with examples. Key in 2025 for data protection.",
            },
          ],
        },
      ],
      dividerText: "Advanced topics learned—earn certifications.",
    },
    {
      name: "Cybersecurity Certifications",
      description:
        "Validate skills with certs like CISSP, taught with Cybrary and ExamCompass prep. A 2025 skill for career growth.",
      children: [
        {
          name: "CompTIA Security+",
          description:
            "Earn Security+, taught with Cybrary examples. Key in 2025 for beginners.",
        },
        {
          name: "Certified Ethical Hacker (CEH)",
          description:
            "Master CEH with Kali labs, taught with exploit examples. A 2025 skill for pen testing.",
        },
        {
          name: "CISSP",

          description:
            "Achieve CISSP with Pluralsight, taught with risk examples. Preferred in 2025 for prestige.",
        },
        {
          name: "OSCP", // New
          description:
            "Earn OSCP with PWK labs, taught with pen testing examples. A 2025 skill for hands-on expertise.",
        },
        {
          name: "AWS Certified Security – Specialty", // New
          description:
            "Master AWS security with Udemy, taught with cloud examples. A 2025 skill for cloud careers.",
        },
      ],
      dividerText: "Certified—stay current with continuous learning.",
    },
    {
      name: "Continuous Learning & Research",
      description:
        "Keep skills sharp with CTFs and blogs, taught with Hack The Box and SANS examples. A 2025 skill for adaptability.",
      children: [
        {
          name: "CTF Challenges",
          description:
            "Solve CTFs with Hack The Box, taught with pwn examples. Key in 2025 for practice.",
          children: [
            {
              name: "Hack The Box",

              description:
                "Use HTB, taught with examples. Preferred in 2025 for depth.",
            },
            {
              name: "TryHackMe",
              description:
                "Learn with TryHackMe, taught with examples. A 2025 skill for pace.",
            },
            {
              name: "OverTheWire", // New
              description:
                "Practice wargames with OverTheWire, taught with examples. A 2025 skill for fundamentals.",
            },
          ],
        },
        {
          name: "Bug Bounties",
          description:
            "Hunt bugs with HackerOne, taught with XSS examples. A 2025 skill for real-world impact.",
          children: [
            {
              name: "HackerOne",

              description:
                "Report on HackerOne, taught with examples. Preferred in 2025 for reach.",
            },
            {
              name: "Bugcrowd",
              description:
                "Use Bugcrowd, taught with examples. Key in 2025 for variety.",
            },
            {
              name: "Synack", // New
              description:
                "Engage with Synack, taught with examples. A 2025 skill for elite hunting.",
            },
          ],
        },
        {
          name: "Industry Updates",
          description:
            "Follow SANS and Black Hat, taught with trend examples. A 2025 skill for knowledge.",
          children: [
            {
              name: "SANS Blogs",
              description:
                "Read SANS, taught with examples. A 2025 skill for insights.",
            },
            {
              name: "Black Hat",
              description:
                "Attend Black Hat, taught with examples. Key in 2025 for updates.",
            },
            {
              name: "DEF CON", // New
              description:
                "Explore DEF CON talks, taught with examples. A 2025 skill for cutting-edge trends.",
            },
          ],
        },
        {
          name: "Open-Source Contributions", // New Parent
          description:
            "Contribute to tools like Metasploit, taught with GitHub examples. A 2025 skill for community impact.",
          children: [
            {
              name: "GitHub Basics",
              description:
                "Use GitHub for projects, taught with examples. A 2025 skill for collaboration.",
            },
            {
              name: "Tool Enhancement",
              description:
                "Improve tools like Nmap, taught with examples. Key in 2025 for skill growth.",
            },
          ],
        },
      ],
      dividerText: "Learning ongoing—start your cybersecurity career!",
    },
  ],
};

export default cybersecurityITRoadmap;
