const blockchainDeveloperRoadmap = {
  name: "Blockchain Developer Roadmap 2025",
  children: [
    {
      name: "Blockchain Basics",
      children: [
        {
          name: "What is Blockchain?",
          children: [
            { name: "Core Definition" },
            { name: "Comparison to Databases" },
            { name: "Key Features (Immutability, Transparency)" },
          ],
        },
        {
          name: "Decentralization",
          children: [
            { name: "Purpose and Benefits" },
            { name: "Security Enhancements" },
          ],
        },
        {
          name: "Cryptography",
          children: [
            { name: "Hash Functions" },
            { name: "Public-Key Cryptography" },
            { name: "Digital Signatures" },
          ],
        },
      ],
      dividerText: "Basics understood—explore how blockchain operates.",
    },
    {
      name: "Blockchain Operations",
      children: [
        {
          name: "Transactions",
          children: [
            { name: "Transaction Creation" },
            { name: "Validation Process" },
            { name: "Block Addition" },
          ],
        },
        {
          name: "Consensus Mechanisms",
          children: [
            { name: "Proof of Work (PoW)" },
            { name: "Proof of Stake (PoS)" },
            { name: "Delegated Proof of Stake (DPoS)" },
          ],
        },
        {
          name: "Wallets",
          children: [
            { name: "Hot Wallets" },
            { name: "Cold Wallets" },
            { name: "Key Management" },
          ],
        },
      ],
      dividerText: "Operations clear—learn about cryptocurrencies.",
    },
    {
      name: "Cryptocurrencies",
      children: [
        {
          name: "Bitcoin",
          children: [{ name: "Mechanics" }, { name: "UTXO Model" }],
        },
        {
          name: "Ethereum",
          children: [{ name: "Tokens (ERC-20)" }, { name: "Gas Fees" }],
        },
        {
          name: "Other Coins",
          children: [{ name: "Stablecoins" }, { name: "Altcoins" }],
        },
      ],
      dividerText: "Crypto grasped—explore blockchain platforms.",
    },
    {
      name: "Blockchain Platforms",
      children: [
        {
          name: "Ethereum",
          preferred: true,
          children: [
            { name: "Ethereum Virtual Machine (EVM)" },
            { name: "Node Deployment" },
            { name: "Ecosystem Tools (MetaMask, Infura)" },
          ],
        },
        {
          name: "Polkadot",
          children: [
            { name: "Relay Chain" },
            { name: "Parachains" },
            { name: "Substrate Framework" },
          ],
        },
        {
          name: "Binance Smart Chain (BSC)",
          children: [
            { name: "BSC Consensus" },
            { name: "Node Setup" },
            { name: "BSC Tools" },
          ],
        },
      ],
      dividerText: "Platforms known—set up your development tools.",
    },
    {
      name: "Development Tools",
      children: [
        {
          name: "Hardhat",
          preferred: true,
          children: [
            { name: "Setup" },
            { name: "Hardhat Network" },
            { name: "Debugging" },
          ],
        },
        {
          name: "Truffle",
          children: [
            { name: "Installation" },
            { name: "Project Creation" },
            { name: "Deployment" },
          ],
        },
        {
          name: "Remix",
          children: [
            { name: "Interface Navigation" },
            { name: "Coding Environment" },
            { name: "Deployment Options" },
          ],
        },
        {
          name: "Ganache",
          children: [
            { name: "CLI Installation" },
            { name: "GUI Configuration" },
            { name: "Transaction Simulation" },
          ],
        },
      ],
      dividerText: "Tools ready—start coding smart contracts.",
    },
    {
      name: "Smart Contract Development",
      children: [
        {
          name: "Languages",
          children: [
            { name: "Solidity", preferred: true },
            { name: "Rust" },
            { name: "Vyper" },
          ],
        },
        {
          name: "Contract Basics",
          children: [
            { name: "Syntax and Structure" },
            { name: "Events and Logs" },
            { name: "Modifiers" },
          ],
        },
        {
          name: "Testing",
          children: [
            { name: "Mocha and Chai" },
            { name: "Foundry" },
            { name: "Coverage Tools" },
          ],
        },
        {
          name: "Deployment",
          children: [
            { name: "Local Testing" },
            { name: "Testnet Deployment" },
            { name: "Mainnet Deployment" },
            { name: "Verification (Etherscan)" },
          ],
        },
      ],
      dividerText: "Contracts coded—integrate external data.",
    },
    {
      name: "Oracles & Data Integration",
      children: [
        {
          name: "Chainlink",
          preferred: true,
          children: [
            { name: "Installation" },
            { name: "Price Feeds" },
            { name: "Custom API Calls" },
          ],
        },
        {
          name: "Other Oracles",
          children: [{ name: "Band Protocol" }, { name: "API3" }],
        },
      ],
      dividerText: "Data connected—secure your contracts.",
    },
    {
      name: "Blockchain Security",
      children: [
        {
          name: "Best Practices",
          children: [
            { name: "OpenZeppelin Libraries" },
            { name: "Reentrancy Prevention" },
            { name: "Gas Optimization" },
          ],
        },
        {
          name: "Security Tools",
          children: [
            { name: "Slither", preferred: true },
            { name: "Mythril" },
            { name: "Manticore" },
          ],
        },
        {
          name: "Auditing",
          children: [
            { name: "Common Vulnerabilities" },
            { name: "Audit Process" },
          ],
        },
      ],
      dividerText: "Security locked—build decentralized apps.",
    },
    {
      name: "DApp Development",
      children: [
        {
          name: "Frontend Integration",
          children: [
            { name: "JavaScript", preferred: true },
            { name: "TypeScript" },
            { name: "React", preferred: true },
            { name: "Vue" },
          ],
        },
        {
          name: "Web3 Libraries",
          children: [
            { name: "ethers.js", preferred: true },
            { name: "web3.js" },
            { name: "Web3.py" },
          ],
        },
        {
          name: "Scaling Solutions",
          children: [
            { name: "Layer 2 Rollups" },
            { name: "Sidechains" },
            { name: "Sharding Basics" },
          ],
        },
      ],
      dividerText: "DApps created—deploy and manage them.",
    },
    {
      name: "Deployment & DevOps",
      children: [
        {
          name: "Version Control",
          children: [{ name: "Git Basics" }, { name: "GitHub Collaboration" }],
        },
        {
          name: "CI/CD",
          children: [{ name: "GitHub Actions" }, { name: "GitLab CI/CD" }],
        },
        {
          name: "Infrastructure",
          children: [{ name: "Docker" }, { name: "IPFS for Storage" }],
        },
      ],
      dividerText: "Apps deployed—test with practical projects.",
    },
    {
      name: "Practical Projects",
      children: [
        {
          name: "Token Contract",
          children: [
            { name: "ERC-20 Token" },
            { name: "Testing" },
            { name: "Deployment" },
          ],
        },
        {
          name: "NFT Marketplace",
          children: [
            { name: "ERC-721 Contract" },
            { name: "Frontend UI" },
            { name: "IPFS Integration" },
          ],
        },
        {
          name: "DeFi Application",
          children: [
            { name: "Lending Protocol" },
            { name: "Oracle Integration" },
            { name: "Testing & Deployment" },
          ],
        },
      ],
      dividerText: "Projects built—launch your career.",
    },
    {
      name: "Career Development",
      children: [
        {
          name: "Career Paths",
          children: [
            { name: "Smart Contract Developer" },
            { name: "Security Auditor" },
            { name: "Blockchain Architect" },
          ],
        },
        {
          name: "Certifications",
          children: [
            { name: "Certified Ethereum Developer" },
            { name: "Chainlink Developer" },
          ],
        },
        {
          name: "Networking",
          children: [
            { name: "Hackathons" },
            { name: "Community Forums (e.g., Discord)" },
            { name: "Conferences (e.g., Devcon)" },
          ],
        },
        {
          name: "Continuous Learning",
          children: [{ name: "Emerging Chains" }, { name: "Web3 Trends" }],
        },
      ],
    },
  ],
};

export default blockchainDeveloperRoadmap;
