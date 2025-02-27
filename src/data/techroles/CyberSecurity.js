const cybersecurityITRoadmap = {
  name: "Cybersecurity & IT Skills Roadmap 2025",
  description:
    "This comprehensive roadmap equips learners with essential IT fundamentals, networking, cybersecurity, and cloud skills for 2025, progressing from beginner to advanced levels with hands-on examples and cutting-edge tools. It covers system administration, threat detection, cloud security, and certifications, ensuring practical mastery to secure systems, mitigate vulnerabilities, and excel in the dynamic cybersecurity landscape with expertise and confidence.",
  children: [
    {
      name: "Fundamentals of IT Skills",
      description:
        "Kick off your cybersecurity journey by building a solid foundation in IT skills, taught with hands-on examples like setting up a Raspberry Pi or scripting with Bash. This step covers hardware, software, file systems, and virtualization basics—crucial in 2025 for understanding and securing digital environments, preparing you for advanced cybersecurity concepts with a strong technical base.",
      children: [
        {
          name: "Hardware & Software Basics",
          description:
            "Dive into the essentials of computer hardware and software interactions, taught with practical examples like assembling a PC or installing Ubuntu. This section explores CPUs, RAM, storage, OS layers, and drivers—key 2025 skills for grasping system architecture, troubleshooting issues, and laying the groundwork for securing IT systems effectively.",
          children: [
            {
              name: "Computer Components",
              description:
                "Learn core components—CPU, GPU, RAM—taught with examples like upgrading a desktop. A 2025 skill to understand system performance and security dependencies.",
            },
            {
              name: "Operating System Layers",
              description:
                "Explore OS layers—kernel, drivers—taught with Windows Task Manager or Linux `lsmod`. A 2025 skill for system interaction and security basics.",
            },
            {
              name: "Troubleshooting Hardware",
              description:
                "Master diagnosing hardware issues with tools like HWMonitor, taught with examples. Key in 2025 for maintaining secure system integrity.",
            },
          ],
        },
        {
          name: "Command Line & Shell Scripting",
          description:
            "Master command-line interfaces and scripting for Linux (Bash) and Windows (PowerShell), taught with examples like automating backups or network scans using `cron` or `Task Scheduler`. A 2025 must-have skill, it empowers cybersecurity tasks—log analysis, system automation—enhancing efficiency and control in securing IT environments.",
          children: [
            {
              name: "Linux CLI",
              description:
                "Use Bash commands like `ls`, `grep`, taught with terminal examples for file searches. A 2025 skill for system management and log parsing.",
            },
            {
              name: "Windows PowerShell",
              description:
                "Learn PowerShell cmdlets like `Get-Process`, taught with examples for system checks. Key in 2025 for Windows administration and automation.",
            },
            {
              name: "Scripting Basics",
              description:
                "Write basic scripts with Bash or PowerShell, taught with automation examples like user creation. A 2025 skill for repetitive task efficiency.",
            },
          ],
        },
        {
          name: "File Systems & Permissions",
          description:
            "Understand file system structures and access controls, taught with Linux `chmod` and Windows NTFS examples for securing data. This section builds 2025 skills to manage permissions, protect sensitive files, and audit access—foundational for cybersecurity professionals to enforce system security and prevent unauthorized breaches.",
          children: [
            {
              name: "Linux File Systems",
              description:
                "Explore ext4 and permissions with `ls -l`, taught with examples setting read/write access. A 2025 skill for Linux security.",
            },
            {
              name: "Windows NTFS",
              description:
                "Manage NTFS permissions with `icacls`, taught with examples securing folders. Key in 2025 for Windows file protection.",
            },
            {
              name: "Access Control Lists (ACLs)",
              description:
                "Learn ACLs with `setfacl`, taught with examples for granular access. A 2025 skill for advanced permission management.",
            },
          ],
        },
        {
          name: "Virtualization & Cloud Basics",
          description:
            "Get hands-on with virtualization and cloud concepts, taught with VirtualBox VM setups and AWS Free Tier examples for basic cloud access. A 2025 skill bridging traditional IT to modern cloud security, this section prepares you to understand scalable environments and their cybersecurity implications with practical tools.",
          children: [
            {
              name: "VirtualBox",
              description:
                "Set up VMs with VirtualBox, taught with Ubuntu VM examples. A 2025 skill for local virtualization and testing.",
            },
            {
              name: "VMware Workstation",
              description:
                "Use VMware Workstation for VMs, taught with Windows VM setups. Key in 2025 for enterprise virtualization basics.",
            },
            {
              name: "Cloud Intro (AWS Free Tier)",
              description:
                "Explore AWS Free Tier for cloud basics, taught with EC2 instance examples. A 2025 skill for cloud entry.",
            },
          ],
        },
      ],
      dividerText:
        "IT basics down—explore operating systems and networking next.",
    },
    {
      name: "Operating Systems & Networking",
      description:
        "Build expertise in OS administration and networking fundamentals, taught with Linux `systemctl` and Cisco packet tracer examples for real-world scenarios. This step equips you with 2025 skills to configure systems, secure networks, and troubleshoot connectivity—critical for cybersecurity professionals to protect IT infrastructure and understand network interactions effectively.",
      children: [
        {
          name: "Operating System Administration",
          description:
            "Learn to configure and secure Windows, Linux, and macOS, taught with practical tasks like user management (`useradd`) and registry edits via PowerShell. A 2025 skill for system hardening and administration, this section ensures you can protect diverse OS environments against threats with hands-on expertise.",
          children: [
            {
              name: "Linux",
              preferred: true,
              description:
                "Master Linux administration—file structures, `chmod`, `apt`—taught with Ubuntu examples for securing systems. Preferred in 2025 for its open-source dominance and cybersecurity relevance.",
            },
            {
              name: "Windows",
              description:
                "Administer Windows—Registry, Active Directory—taught with PowerShell examples like `Set-ItemProperty` for security tweaks. A 2025 skill for securing enterprise systems prevalent in corporate IT.",
            },
            {
              name: "macOS",
              description:
                "Secure macOS with Unix commands like `chmod`, taught with Terminal examples for file protection. A 2025 skill for managing Apple systems in mixed IT environments.",
            },
          ],
        },
        {
          name: "Networking Fundamentals",
          description:
            "Understand networking—IP addressing, subnetting—taught with Cisco Packet Tracer and Wireshark examples for real-world setups and analysis. A 2025 skill to design and troubleshoot secure networks, this section lays the groundwork for cybersecurity by mastering how data flows and connects across IT systems.",
          children: [
            {
              name: "OSI & TCP/IP Model",
              description:
                "Learn OSI and TCP/IP layers—application to physical—taught with examples tracing packets in Wireshark. A 2025 skill for understanding network protocols and securing traffic.",
            },
            {
              name: "Subnetting & VLANs",
              description:
                "Master subnetting and VLANs, taught with Packet Tracer examples creating subnets and VLANs with `vlan` commands. A 2025 skill for isolating and securing network segments.",
            },
            {
              name: "Routing & Switching",
              description:
                "Configure routing and switching with Cisco IOS, taught with RIP/OSPF examples in Packet Tracer and GNS3. A 2025 skill for secure data flow and troubleshooting.",
            },
          ],
        },
        {
          name: "Network Security Basics",
          description:
            "Protect networks from attacks with tools like pfSense and Wireshark, taught with examples setting firewalls and monitoring traffic. A 2025 skill for securing perimeters and detecting threats, this section builds foundational network defense capabilities critical for cybersecurity professionals.",
          children: [
            {
              name: "Firewalls",
              description:
                "Set up firewalls with pfSense, taught with rules blocking traffic. A 2025 skill for network perimeter security.",
            },
            {
              name: "IDS/IPS",
              description:
                "Deploy IDS/IPS with Snort, taught with examples detecting intrusions. A 2025 skill for monitoring and blocking threats.",
            },
            {
              name: "NAT & VPNs",
              description:
                "Secure connections with NAT and VPNs like OpenVPN, taught with examples masking IPs and encrypting tunnels. A 2025 skill for safe remote access.",
            },
            {
              name: "Wireless Security",
              description:
                "Secure Wi-Fi with WPA3 and tools like Aircrack-ng, taught with examples preventing breaches. A 2025 skill for wireless network protection.",
            },
          ],
        },
      ],
      dividerText:
        "Systems and networks secured—build core cybersecurity skills.",
    },
    {
      name: "Security Skills & Knowledge",
      description:
        "Develop essential cybersecurity skills with tools like Kali Linux and Wireshark, taught through penetration testing labs and threat analysis examples. This step equips you for 2025 to protect systems, detect threats, and respond to incidents—critical competencies for safeguarding IT environments against evolving risks with practical, hands-on expertise.",
      children: [
        {
          name: "Cryptography & Encryption",
          description:
            "Secure data and communications with cryptography, taught with OpenSSL and GPG examples like encrypting files or emails. A 2025 skill for confidentiality and integrity, this section covers encryption techniques and PKI—vital for protecting sensitive information and thwarting cyber threats across networks and systems.",
          children: [
            {
              name: "Symmetric Encryption",
              description:
                "Learn AES encryption with OpenSSL, taught with examples encrypting files. A 2025 skill for fast, secure data protection.",
            },
            {
              name: "Asymmetric Encryption",
              description:
                "Master RSA with GPG, taught with key pair examples for secure exchanges. A 2025 skill for key distribution and signatures.",
            },
            {
              name: "Hashing Algorithms",
              description:
                "Ensure integrity with SHA-256 and bcrypt, taught with hash examples in Python or OpenSSL. A 2025 skill for verifying data authenticity.",
            },
            {
              name: "PKI & Certificates",
              description:
                "Manage PKI with OpenSSL and Let’s Encrypt, taught with SSL/TLS cert examples for web security. A 2025 skill for authentication and encryption.",
            },
          ],
        },
        {
          name: "Cyber Threats & Attacks",
          description:
            "Identify and mitigate cyber threats like malware and phishing, taught with examples analyzing WannaCry or crafting phishing emails in a lab. A 2025 skill to defend against diverse attacks, this section equips you to proactively protect systems with tools like VirusTotal and knowledge of attack vectors.",
          children: [
            {
              name: "Malware Analysis",
              description:
                "Analyze malware with sandboxes and IDA Pro, taught with examples dissecting ransomware like WannaCry. A 2025 skill for neutralizing threats using dynamic and static analysis techniques.",
            },
            {
              name: "Phishing & Social Engineering",
              description:
                "Counter phishing with SET examples, taught with mock campaigns and defenses like email filters. A 2025 skill to protect users from human-targeted attacks using tools like Gophish.",
            },
            {
              name: "Denial of Service (DoS/DDoS)",
              description:
                "Mitigate DoS/DDoS with Cloudflare, taught with examples countering attacks like SYN floods. A 2025 skill for maintaining system availability using tools like hping3 for testing.",
            },
            {
              name: "SQL Injection",
              description:
                "Prevent SQL injection with Burp Suite, taught with examples exploiting and fixing vulnerabilities. A 2025 skill for securing web apps against database attacks.",
            },
          ],
        },
        {
          name: "Security Tools & Techniques",
          description:
            "Use tools like Kali Linux and Nessus, taught with labs penetrating networks and analyzing logs via Splunk. A 2025 skill for defending and testing systems, this section provides hands-on expertise for threat hunting, vuln assessment, and incident response in cybersecurity operations.",
          children: [
            {
              name: "Penetration Testing",
              description:
                "Conduct pen tests with Metasploit and Nmap, taught with labs exploiting vulnerabilities like SMB or SQLi. A 2025 skill for proactively securing systems by simulating real-world attacks.",
            },
            {
              name: "SIEM & Log Analysis",
              description:
                "Analyze logs with Splunk and ELK Stack, taught with setups detecting brute-force attacks or anomalies. A 2025 skill for real-time threat monitoring and forensic analysis in cybersecurity.",
            },
            {
              name: "Incident Response",
              description:
                "Respond to incidents with TheHive and GRR, taught with examples containing breaches like ransomware. A 2025 skill for managing and recovering from cybersecurity incidents effectively.",
            },
            {
              name: "Vulnerability Scanning",
              description:
                "Scan with Nessus and OpenVAS, taught with examples finding CVEs like Heartbleed. A 2025 skill for assessing system weaknesses proactively.",
            },
          ],
        },
      ],
      dividerText:
        "Core security skills honed—secure cloud and advanced environments.",
    },
    {
      name: "Cloud Security & Advanced Topics",
      description:
        "Master cloud security and cutting-edge topics like zero trust and AI, taught with AWS Security Hub and Darktrace examples for protecting modern IT systems. A 2025 skill set to secure cloud platforms, implement advanced defenses, and leverage AI for threat detection—preparing you for the evolving cybersecurity landscape with expertise.",
      children: [
        {
          name: "Cloud Computing & Security",
          description:
            "Secure cloud platforms like AWS and Azure, taught with examples configuring IAM and Sentinel for protection against cloud-specific threats. A 2025 skill aligning with the shift to cloud-centric IT, this section ensures you can safeguard virtual environments with tools like GCP Security Command Center.",
          children: [
            {
              name: "AWS Security",
              preferred: true,
              description:
                "Secure AWS with IAM, VPC, and Security Hub, taught with examples like locking down S3 buckets. Preferred in 2025 for AWS’s dominance and comprehensive security tools.",
            },
            {
              name: "Azure Security",
              description:
                "Protect Azure with Sentinel and Azure AD, taught with examples detecting threats via logs. A 2025 skill for Microsoft cloud security.",
            },
            {
              name: "Google Cloud Security",
              description:
                "Secure GCP with Security Command Center, taught with examples like proxy setups. A 2025 skill for Google Cloud protection.",
            },
          ],
        },
        {
          name: "Zero Trust Security",
          description:
            "Implement zero trust with tools like Zscaler, taught with examples enforcing ‘never trust, always verify’ across networks. A 2025 skill for robust cybersecurity, this section ensures all access is validated, protecting untrusted environments with advanced techniques and policies.",
          children: [
            {
              name: "Microsegmentation",
              description:
                "Restrict access with microsegmentation, taught with VMware NSX examples isolating workloads. A 2025 skill for zero trust granularity.",
            },
            {
              name: "Identity and Access Management (IAM)",
              description:
                "Control access with Okta and BeyondCorp, taught with examples enforcing zero trust IAM. A 2025 skill for secure authentication.",
            },
            {
              name: "Device Trust",
              description:
                "Verify devices with CrowdStrike, taught with examples checking endpoints. A 2025 skill for zero trust enforcement.",
            },
          ],
        },
        {
          name: "Threat Intelligence & AI",
          description:
            "Enhance cybersecurity with threat intelligence and AI tools like Darktrace, taught with examples detecting anomalies or analyzing malware with ML. A 2025 skill for proactive defense, this section leverages data-driven insights and automation to stay ahead of threats in complex IT environments.",
          children: [
            {
              name: "AI-Based Threat Detection",
              description:
                "Detect threats with Darktrace and TensorFlow, taught with examples spotting anomalies in logs. A 2025 skill for ML-driven cybersecurity.",
            },
            {
              name: "Malware Analysis with AI",
              description:
                "Analyze malware with Cylance and AI, taught with examples using ML models for detection. A 2025 skill for advanced threat analysis.",
            },
            {
              name: "Cyber Threat Intelligence",
              description:
                "Gather intelligence with ThreatConnect, taught with examples analyzing IOCs. A 2025 skill for informed cybersecurity strategies.",
            },
          ],
        },
      ],
      dividerText:
        "Cloud and advanced security in place—earn certifications next.",
    },
    {
      name: "Cybersecurity Certifications",
      description:
        "Validate your cybersecurity expertise with industry-recognized certifications like CISSP and CCSP, taught with preparation strategies using resources like Cybrary and ExamCompass. A 2025 skill to boost credibility and career prospects, this step ensures you’re equipped for roles in IT security with practical, certifiable knowledge and skills.",
      children: [
        {
          name: "CompTIA Security+",
          description:
            "Earn CompTIA Security+, an entry-level cert, taught with prep via Cybrary and practice tests on ExamCompass. This section covers cybersecurity basics—threats, cryptography—ideal for 2025 beginners starting IT security careers with a widely accepted credential.",
        },
        {
          name: "Certified Ethical Hacker (CEH)",
          description:
            "Master CEH for ethical hacking, taught with labs via EC-Council and Kali Linux examples like Metasploit exploits. A 2025 skill for penetration testing, it prepares you to identify vulnerabilities proactively with a respected cert in offensive security.",
        },
        {
          name: "Certified Information Systems Security Professional (CISSP)",
          preferred: true,
          description:
            "Achieve CISSP, an advanced cert, taught with (ISC)² domains via Pluralsight and examples in risk management. Preferred in 2025 for its prestige and comprehensive coverage, it’s ideal for experienced pros aiming for leadership roles in cybersecurity.",
        },
        {
          name: "Certified Cloud Security Professional (CCSP)",
          description:
            "Gain CCSP for cloud security expertise, taught with prep via Pluralsight and AWS examples securing S3. A 2025 skill aligning with cloud trends, it certifies advanced knowledge for protecting cloud environments in a growing digital landscape.",
        },
      ],
    },

    {
      name: "Step 7: Continuous Learning & Research",
      description:
        "Keep your cybersecurity skills cutting-edge with CTFs, bug bounties, and industry updates, taught with resources like Hack The Box and SANS blogs. A 2025 lifelong skill, this step ensures adaptability to new threats and technologies, keeping you competitive and informed in the fast-evolving cybersecurity field.",
      children: [
        {
          name: "Capture The Flag (CTF) Challenges",
          description:
            "Sharpen skills with CTFs on Hack The Box and TryHackMe, taught with challenges like privilege escalation or SQLi exploits. A 2025 skill for competitive, practical expertise, it hones your ability to tackle real-world vulnerabilities creatively and effectively.",
          children: [
            {
              name: "Hack The Box",
              preferred: true,
              description:
                "Solve HTB challenges, taught with examples like box pwns. Preferred in 2025 for depth.",
            },
            {
              name: "TryHackMe",
              description:
                "Use TryHackMe, taught with beginner-friendly rooms. A 2025 skill for learning pace.",
            },
          ],
        },
        {
          name: "Bug Bounty Programs",
          description:
            "Participate in bug bounties on HackerOne and Bugcrowd, taught with examples reporting XSS or SSRF vulns. A 2025 skill for real-world security contributions, it enhances expertise and earns recognition while improving system defenses globally.",
          children: [
            {
              name: "HackerOne",
              preferred: true,
              description:
                "Report on HackerOne, taught with XSS examples. Preferred in 2025 for its reach.",
            },
            {
              name: "Bugcrowd",
              description:
                "Use Bugcrowd, taught with SSRF examples. A 2025 skill for bounty variety.",
            },
          ],
        },
        {
          name: "Cybersecurity Blogs & Conferences",
          description:
            "Stay updated with blogs (SANS, Krebs) and cons (Black Hat), taught with examples tracking ransomware trends. A 2025 skill for industry knowledge, it keeps you informed via resources like DEF CON talks and Threatpost articles.",
          children: [
            {
              name: "SANS Blogs",
              description:
                "Read SANS, taught with threat examples. A 2025 skill for expert insights.",
            },
            {
              name: "Black Hat",
              description:
                "Attend Black Hat, taught with session examples. Key in 2025 for cutting-edge updates.",
            },
            {
              name: "Threatpost",
              description:
                "Follow Threatpost, taught with news examples. A 2025 skill for real-time info.",
            },
          ],
        },
      ],
    },
  ],
};

export default cybersecurityITRoadmap;
