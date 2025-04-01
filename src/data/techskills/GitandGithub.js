const gitAndGitHubDeveloperRoadmap = {
  name: "Git and GitHub Developer Roadmap 2025",
  description:
    "This comprehensive roadmap offers a detailed guide to mastering Git and GitHub by 2025, from version control basics to advanced collaboration and deployment. Covering core Git commands, GitHub features, branching, project management, and more, it’s enriched with nested subtopics and practical examples—taught with tools like Git, GitHub CLI, and VS Code—for hands-on learners aiming to excel in the 2025 development ecosystem.",
  children: [
    {
      name: "Step 1: Introduction to Version Control",
      description:
        "Understand the fundamentals of version control and how Git and GitHub fit into the ecosystem, taught with a simple project overview.",
      children: [
        {
          name: "Version Control Basics",
          description:
            "Learn the core concepts of version control, taught with basic examples.",
          children: [
            {
              name: "What is VCS?",
              description:
                "Understand tracking changes, taught with a file edit history example.",
            },
            {
              name: "Centralized vs Distributed",
              description: "Compare VCS types, taught with SVN vs Git example.",
            },
            {
              name: "Benefits",
              description:
                "Explore backup and collaboration, taught with a team scenario.",
            },
          ],
        },
        {
          name: "Git Overview",
          description:
            "Dive into Git as a distributed VCS, taught with a repository concept.",
          children: [
            {
              name: "Git History",
              description:
                "Learn Git’s origin, taught with a brief history overview.",
            },
            {
              name: "Distributed Nature",
              description:
                "Understand local repos, taught with a clone example.",
            },
            {
              name: "Key Features",
              description: "Explore snapshots, taught with a commit concept.",
            },
          ],
        },
        {
          name: "GitHub Overview",
          description:
            "Explore GitHub as a hosting platform, taught with a repo example.",
          children: [
            {
              name: "GitHub Purpose",
              description:
                "Learn hosting and collaboration, taught with a repo creation.",
            },
            {
              name: "Key Components",
              description:
                "Understand PRs and issues, taught with a feature overview.",
            },
            {
              name: "Community Impact",
              description:
                "Explore open source, taught with a popular repo example.",
            },
          ],
        },
      ],
      dividerText: "set up your environment.",
    },
    {
      name: "Step 2: Environment Setup",
      description:
        "Install and configure Git and GitHub tools, taught with a basic setup in VS Code.",
      children: [
        {
          name: "Git Installation",
          description:
            "Set up Git on your system, taught with installation steps.",
          children: [
            {
              name: "Download Git",
              description: "Get Git, taught with a download link example.",
            },
            {
              name: "Install on OS",
              description:
                "Install on Windows/macOS/Linux, taught with OS-specific steps.",
            },
            {
              name: "Verify Installation",
              description:
                "Check with git --version, taught with terminal output.",
            },
          ],
        },
        {
          name: "GitHub Account Setup",
          description:
            "Create and configure a GitHub account, taught with account steps.",
          children: [
            {
              name: "Sign Up",
              description:
                "Create account, taught with GitHub signup walkthrough.",
            },
            {
              name: "Profile Setup",
              description: "Add bio, taught with profile edit example.",
            },
            {
              name: "Explore Dashboard",
              description: "Navigate UI, taught with dashboard tour.",
            },
          ],
        },
        {
          name: "Git Configuration",
          description: "Configure Git settings, taught with config commands.",
          children: [
            {
              name: "Set User Info",
              description:
                "Use git config user.name/email, taught with config example.",
            },
            {
              name: "Check Config",
              description:
                "Verify with git config --list, taught with list output.",
            },
            {
              name: "Set Editor",
              description:
                "Set VS Code as editor, taught with git config core.editor.",
            },
          ],
        },
      ],
      dividerText: "learn basic Git commands.",
    },
    {
      name: "Step 3: Basic Git Commands",
      description:
        "Master essential Git commands for local version control, taught with a simple project in VS Code.",
      children: [
        {
          name: "Initialize and Stage",
          description:
            "Start and prepare a repository, taught with basic commands.",
          children: [
            {
              name: "git init",
              description: "Initialize repo, taught with a new folder example.",
            },
            {
              name: "git add",
              description: "Stage files, taught with adding README.md example.",
            },
            {
              name: "git status",
              description: "Check state, taught with status output example.",
            },
          ],
        },
        {
          name: "Commit and History",
          description: "Save and review changes, taught with commit examples.",
          children: [
            {
              name: "git commit",
              description:
                "Commit with git commit -m, taught with 'Initial commit' example.",
            },
            {
              name: "git log",
              description: "View history, taught with log output example.",
            },
            {
              name: "git diff",
              description: "See changes, taught with diff output example.",
            },
          ],
        },
      ],
      dividerText: "manage changes locally.",
    },
    {
      name: "Step 4: Managing Local Changes",
      description:
        "Handle and revert changes in your Git repository, taught with a change management example.",
      children: [
        {
          name: "Undoing Changes",
          description: "Revert staging and commits, taught with undo examples.",
          children: [
            {
              name: "git reset",
              description: "Unstage files, taught with git reset example.",
            },
            {
              name: "git revert",
              description:
                "Undo commits, taught with git revert <hash> example.",
            },
            {
              name: "git checkout",
              description:
                "Discard changes, taught with git checkout -- file example.",
            },
          ],
        },
        {
          name: "Temporary Storage",
          description: "Manage temporary changes, taught with stash examples.",
          children: [
            {
              name: "git stash",
              description: "Save changes, taught with git stash push example.",
            },
            {
              name: "git stash apply",
              description: "Apply stash, taught with git stash apply example.",
            },
            {
              name: "git stash list",
              description: "List stashes, taught with git stash list example.",
            },
          ],
        },
      ],
      dividerText: "work with remote repositories.",
    },
    {
      name: "Step 5: Remote Repositories",
      description:
        "Connect and manage GitHub remote repositories, taught with a repo sync example.",
      children: [
        {
          name: "Repository Creation",
          description: "Set up GitHub repos, taught with creation steps.",
          children: [
            {
              name: "Create on GitHub",
              description: "Make repo, taught with GitHub UI example.",
            },
            {
              name: "Clone Repo",
              description:
                "Download with git clone, taught with clone URL example.",
            },
            {
              name: "Verify Clone",
              description: "Check files, taught with dir/ls example.",
            },
          ],
        },
        {
          name: "Syncing with Remote",
          description: "Push and pull changes, taught with sync examples.",
          children: [
            {
              name: "git remote add",
              description:
                "Link remote, taught with git remote add origin example.",
            },
            {
              name: "git push",
              description:
                "Upload changes, taught with git push origin main example.",
            },
            {
              name: "git pull",
              description:
                "Download updates, taught with git pull origin main example.",
            },
          ],
        },
      ],
      dividerText: "master branching.",
    },
    {
      name: "Step 6: Branching and Merging",
      description:
        "Use branches to manage code versions, taught with a feature branch example.",
      children: [
        {
          name: "Branch Management",
          description:
            "Create and switch branches, taught with branch commands.",
          children: [
            {
              name: "git branch",
              description:
                "List/create branches, taught with git branch feature example.",
            },
            {
              name: "git checkout",
              description:
                "Switch branches, taught with git checkout feature example.",
            },
            {
              name: "git switch",
              description:
                "Modern switch, taught with git switch feature example.",
            },
          ],
        },
        {
          name: "Merging and Conflicts",
          description:
            "Combine branches and resolve issues, taught with merge examples.",
          children: [
            {
              name: "git merge",
              description:
                "Merge branches, taught with git merge feature example.",
            },
            {
              name: "Resolve Conflicts",
              description:
                "Fix conflicts, taught with a manual resolution example.",
            },
            {
              name: "git merge --abort",
              description: "Abort merge, taught with abort example.",
            },
          ],
        },
      ],
      dividerText: "collaborate on GitHub.",
    },
    {
      name: "Step 7: Collaboration on GitHub",
      description:
        "Collaborate using GitHub features, taught with a team project example.",
      children: [
        {
          name: "Team Collaboration",
          description: "Work with others, taught with collaborator examples.",
          children: [
            {
              name: "Add Collaborators",
              description: "Invite team, taught with GitHub settings example.",
            },
            {
              name: "Fork Repository",
              description: "Copy repo, taught with fork button example.",
            },
            {
              name: "Clone Fork",
              description:
                "Clone forked repo, taught with git clone fork example.",
            },
          ],
        },
        {
          name: "Pull Requests",
          description: "Manage code reviews, taught with PR examples.",
          children: [
            {
              name: "Create PR",
              description:
                "Submit PR, taught with PR creation from branch example.",
            },
            {
              name: "Review PR",
              description: "Comment on PR, taught with review comment example.",
            },
            {
              name: "Merge PR",
              description: "Merge PR, taught with merge button example.",
            },
          ],
        },
      ],
      dividerText: "explore advanced Git features.",
    },
    {
      name: "Step 8: Advanced Git Features",
      description:
        "Leverage advanced Git capabilities, taught with a complex project example.",
      children: [
        {
          name: "Commit Management",
          description: "Fine-tune commits, taught with advanced commands.",
          children: [
            {
              name: "git cherry-pick",
              description:
                "Apply specific commits, taught with cherry-pick example.",
            },
            {
              name: "git rebase",
              description: "Reorganize history, taught with rebase example.",
            },
            {
              name: "git commit --amend",
              description: "Edit last commit, taught with amend example.",
            },
          ],
        },
        {
          name: "Tagging and Stashing",
          description:
            "Mark releases and manage changes, taught with examples.",
          children: [
            {
              name: "git tag",
              description: "Tag versions, taught with git tag v1.0 example.",
            },
            {
              name: "git stash",
              description: "Stash changes, taught with stash push/pop example.",
            },
            {
              name: "git stash drop",
              description: "Remove stash, taught with drop example.",
            },
          ],
        },
      ],
      dividerText: "manage projects on GitHub.",
    },
    {
      name: "Step 9: GitHub Project Management",
      description:
        "Use GitHub for project organization, taught with a project board example.",
      children: [
        {
          name: "Issue Tracking",
          description: "Track tasks and bugs, taught with issue examples.",
          children: [
            {
              name: "Create Issue",
              description: "Add issue, taught with issue creation example.",
            },
            {
              name: "Assign Issues",
              description: "Assign to team, taught with assignee example.",
            },
            {
              name: "Close Issues",
              description: "Close issue, taught with close button example.",
            },
          ],
        },
        {
          name: "Project Organization",
          description: "Organize work, taught with project tools examples.",
          children: [
            {
              name: "Milestones",
              description: "Set goals, taught with milestone creation example.",
            },
            {
              name: "Labels",
              description: "Categorize, taught with label addition example.",
            },
            {
              name: "Projects",
              description: "Use boards, taught with Kanban setup example.",
            },
          ],
        },
      ],
      dividerText: "secure your GitHub usage.",
    },
    {
      name: "Step 10: Security and Permissions",
      description:
        "Ensure secure GitHub practices, taught with a secure repo example.",
      children: [
        {
          name: "Access Control",
          description: "Manage repo access, taught with permission examples.",
          children: [
            {
              name: "Set Permissions",
              description: "Adjust access, taught with repo settings example.",
            },
            {
              name: "Invite Collaborators",
              description:
                "Add users, taught with collaborator invite example.",
            },
            {
              name: "Remove Access",
              description: "Revoke access, taught with remove user example.",
            },
          ],
        },
        {
          name: "Security Practices",
          description:
            "Secure your account and repos, taught with security examples.",
          children: [
            {
              name: "Enable 2FA",
              description: "Add 2FA, taught with GitHub 2FA setup steps.",
            },
            {
              name: "SSH Keys",
              description:
                "Use SSH, taught with ssh-keygen and GitHub key example.",
            },
            {
              name: "Security Alerts",
              description: "Enable alerts, taught with alert settings example.",
            },
          ],
        },
      ],
      dividerText: "deploy with GitHub.",
    },
    {
      name: "Step 11: Deployment with GitHub",
      description:
        "Deploy projects using GitHub features, taught with a CI/CD example.",
      children: [
        {
          name: "Static Hosting",
          description: "Host static content, taught with Pages examples.",
          children: [
            {
              name: "GitHub Pages Setup",
              description: "Enable Pages, taught with Pages settings example.",
            },
            {
              name: "Deploy Site",
              description:
                "Push static files, taught with git push for Pages example.",
            },
            {
              name: "Custom Domain",
              description: "Add domain, taught with DNS setup example.",
            },
          ],
        },
        {
          name: "CI/CD Automation",
          description:
            "Automate builds and deployments, taught with Actions examples.",
          children: [
            {
              name: "Create Workflow",
              description:
                "Write workflow.yml, taught with GitHub Actions example.",
            },
            {
              name: "Test in CI",
              description: "Run tests, taught with a test step example.",
            },
            {
              name: "Deploy",
              description: "Deploy app, taught with a deploy step example.",
            },
          ],
        },
      ],
      dividerText: "integrate with tools.",
    },
    {
      name: "Step 12: Tool Integration",
      description:
        "Extend GitHub with integrations, taught with API and Slack examples.",
      children: [
        {
          name: "GitHub API",
          description: "Automate tasks with API, taught with API examples.",
          children: [
            {
              name: "Fetch Data",
              description: "Get repo info, taught with curl API example.",
            },
            {
              name: "Create Resources",
              description: "Add issue, taught with POST API example.",
            },
            {
              name: "Authenticate",
              description: "Use token, taught with OAuth token example.",
            },
          ],
        },
        {
          name: "Third-Party Tools",
          description:
            "Integrate external tools, taught with integration examples.",
          children: [
            {
              name: "Slack",
              description:
                "Add notifications, taught with Slack webhook example.",
            },
            {
              name: "VS Code",
              description:
                "Use Git extension, taught with VS Code Git example.",
            },
            {
              name: "GitHub CLI",
              description:
                "Use gh commands, taught with gh repo create example.",
            },
          ],
        },
      ],
      dividerText: "engage with the community.",
    },
    {
      name: "Step 13: Community Engagement",
      description:
        "Participate in the Git and GitHub community, taught with an open-source contribution.",
      children: [
        {
          name: "Open Source Contribution",
          description: "Contribute to projects, taught with OSS examples.",
          children: [
            {
              name: "Fork Repo",
              description: "Fork project, taught with GitHub fork example.",
            },
            {
              name: "Submit PR",
              description: "Create PR, taught with PR submission example.",
            },
            {
              name: "Review Feedback",
              description:
                "Respond to feedback, taught with PR comment example.",
            },
          ],
        },
        {
          name: "Community Activities",
          description:
            "Engage with events and forums, taught with participation examples.",
          children: [
            {
              name: "Hackathons",
              description:
                "Join events, taught with GitHub hackathon signup example.",
            },
            {
              name: "Forums",
              description: "Ask on Reddit, taught with r/git example.",
            },
            {
              name: "Trending Repos",
              description:
                "Follow trends, taught with GitHub trending example.",
            },
          ],
        },
      ],
      dividerText: "master advanced workflows.",
    },
    {
      name: "Step 14: Advanced Git Workflows",
      description:
        "Explore advanced Git workflows, taught with a multi-project example.",
      children: [
        {
          name: "Dependency Management",
          description: "Handle dependencies, taught with submodule examples.",
          children: [
            {
              name: "Git Submodules",
              description:
                "Add submodules, taught with git submodule add example.",
            },
            {
              name: "Update Submodules",
              description: "Update, taught with git submodule update example.",
            },
            {
              name: "Remove Submodules",
              description: "Remove, taught with submodule removal example.",
            },
          ],
        },
        {
          name: "Specialized Workflows",
          description:
            "Use advanced techniques, taught with workflow examples.",
          children: [
            {
              name: "Git LFS",
              description:
                "Track large files, taught with git lfs track example.",
            },
            {
              name: "Worktrees",
              description:
                "Manage branches, taught with git worktree add example.",
            },
            {
              name: "Bisect",
              description: "Debug with git bisect, taught with bisect example.",
            },
          ],
        },
      ],
      dividerText: "stay updated and refine skills.",
    },
    {
      name: "Step 15: Continuous Improvement",
      description:
        "Keep skills sharp with ongoing learning, taught with resource exploration.",
      children: [
        {
          name: "Learning Resources",
          description:
            "Explore documentation and updates, taught with resource examples.",
          children: [
            {
              name: "Git Docs",
              description:
                "Read git-scm.com, taught with command reference example.",
            },
            {
              name: "GitHub Blog",
              description: "Follow updates, taught with blog post example.",
            },
            {
              name: "Release Notes",
              description:
                "Check Git releases, taught with Git 2.45 notes example.",
            },
          ],
        },
        {
          name: "Community Engagement",
          description:
            "Stay active in communities, taught with participation examples.",
          children: [
            {
              name: "Reddit",
              description: "Join r/git, taught with a post example.",
            },
            {
              name: "Twitter/X",
              description: "Follow GitHub, taught with trending topic example.",
            },
            {
              name: "Local Meetups",
              description: "Attend events, taught with meetup signup example.",
            },
          ],
        },
      ],
    },
  ],
};

export default gitAndGitHubDeveloperRoadmap;
