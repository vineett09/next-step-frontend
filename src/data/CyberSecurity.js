const cybersecurityRoadmap = {
  name: "Cybersecurity Roadmap 2025",
  description:
    "A comprehensive guide to essential cybersecurity skills and technologies for 2025.",
  children: [
    {
      name: "Foundational Knowledge",
      description:
        "Core concepts and principles that form the basis of cybersecurity.",
      children: [
        {
          name: "Networking Fundamentals",
          description:
            "Understanding network protocols, architectures, and devices to identify and mitigate potential vulnerabilities.",
        },
        {
          name: "Operating Systems",
          description:
            "Proficiency in various operating systems, including Windows, Linux, and macOS, to secure and administer them effectively.",
        },
        {
          name: "Programming and Scripting",
          description:
            "Knowledge of programming languages like Python, JavaScript, or C++ to develop security tools and automate tasks.",
        },
      ],
    },
    {
      name: "Security Domains",
      description:
        "Specialized areas within cybersecurity focusing on different aspects of protection and defense.",
      children: [
        {
          name: "Network Security",
          description:
            "Implementing measures to protect data during transfer and prevent unauthorized access.",
        },
        {
          name: "Application Security",
          description:
            "Ensuring software applications are designed and coded securely to prevent breaches.",
        },
        {
          name: "Cloud Security",
          description:
            "Protecting data and resources stored in cloud environments from potential threats.",
        },
        {
          name: "Endpoint Security",
          description:
            "Securing individual devices like computers and mobile devices against malicious attacks.",
        },
        {
          name: "Identity and Access Management (IAM)",
          description:
            "Managing user identities and controlling access to critical resources.",
        },
      ],
    },
    {
      name: "Threat Management",
      description:
        "Identifying, analyzing, and responding to various cybersecurity threats.",
      children: [
        {
          name: "Threat Intelligence",
          description:
            "Gathering and analyzing information about current and emerging threats to inform defense strategies.",
        },
        {
          name: "Incident Response",
          description:
            "Developing and implementing plans to respond effectively to security breaches or attacks.",
        },
        {
          name: "Vulnerability Management",
          description:
            "Identifying, evaluating, and mitigating weaknesses in systems and applications.",
        },
        {
          name: "Penetration Testing",
          description:
            "Simulating attacks to identify and address security weaknesses before they can be exploited.",
        },
      ],
    },
    {
      name: "Compliance and Governance",
      description:
        "Ensuring adherence to laws, regulations, and standards governing cybersecurity practices.",
      children: [
        {
          name: "Regulatory Compliance",
          description:
            "Understanding and implementing measures to comply with laws like GDPR, HIPAA, and others.",
        },
        {
          name: "Security Frameworks",
          description:
            "Applying structured approaches like NIST, ISO/IEC 27001, or CIS Controls to manage and reduce cybersecurity risks.",
        },
        {
          name: "Policy Development",
          description:
            "Creating and enforcing organizational policies to guide secure practices and behaviors.",
        },
      ],
    },
    {
      name: "Emerging Technologies and Trends",
      description:
        "Staying abreast of new technologies and methodologies shaping the future of cybersecurity.",
      children: [
        {
          name: "Artificial Intelligence and Machine Learning",
          description:
            "Leveraging AI/ML to detect anomalies, predict threats, and automate security responses.",
        },
        {
          name: "Quantum Computing",
          description:
            "Understanding the implications of quantum computing on encryption and developing quantum-resistant algorithms.",
        },
        {
          name: "Zero Trust Architecture",
          description:
            "Implementing a security model that assumes no implicit trust, verifying every access request as though it originates from an open network.",
        },
        {
          name: "DevSecOps",
          description:
            "Integrating security practices into the DevOps process to ensure continuous and automated security assessments.",
        },
      ],
    },
    {
      name: "Soft Skills",
      description:
        "Non-technical skills essential for effective collaboration and problem-solving.",
      children: [
        {
          name: "Communication",
          description:
            "Ability to convey complex security concepts clearly to both technical and non-technical stakeholders.",
        },
        {
          name: "Problem-Solving",
          description:
            "Analytical skills to identify issues, interpret data, and develop actionable solutions.",
        },
        {
          name: "Time Management",
          description:
            "Prioritizing tasks and managing workload effectively to meet deadlines.",
        },
        {
          name: "Collaboration",
          description:
            "Working efficiently with teams, including IT staff, developers, and business stakeholders.",
        },
      ],
    },
    {
      name: "Continuous Learning",
      description:
        "Staying updated with evolving cybersecurity threats, technologies, and industry trends.",
      children: [
        {
          name: "Certifications",
          description:
            "Pursuing recognized certifications like CISSP, CEH, or CompTIA Security+ to validate expertise.",
        },
        {
          name: "Conferences and Workshops",
          description:
            "Participating in industry events to network and learn from peers and experts.",
        },
        {
          name: "Research and Development",
          description:
            "Engaging in ongoing research to discover new threats and develop innovative security solutions.",
        },
      ],
    },
  ],
};

export default cybersecurityRoadmap;
