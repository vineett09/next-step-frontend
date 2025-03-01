const linuxDeveloperRoadmap = {
  name: "Linux Developer Roadmap for Beginners 2025",
  description:
    "This roadmap is designed for beginners to master Linux essentials by 2025, guiding you from zero knowledge to practical skills. It covers everything you need to know, including operating system fundamentals, file system navigation, command-line mastery, process management, user administration, networking basics, package installation, shell scripting, and advanced topics like security, performance tuning, backups, and community involvement. By following this roadmap, you'll gain hands-on experience and be ready to thrive in the 2025 Linux ecosystem.",
  children: [
    {
      name: " Introduction to Linux",
      description:
        "Start your Linux journey by learning what an operating system does and exploring different Linux distributions. This step walks you through the basics of how an OS functions and introduces you to the variety of Linux flavors available. You'll get hands-on experience by installing Ubuntu, a beginner-friendly distribution, on your computer or in a virtual machine. The process involves downloading the Ubuntu ISO file from the official website, creating a bootable USB drive or setting up a virtual machine with software like VirtualBox, booting from the USB or ISO, and following the graphical installer to set up the system with a username and password.",
      children: [
        {
          name: "Operating System Basics",
          description:
            "Understand the core components that make up an operating system. This includes learning how the kernel manages hardware, how user space allows you to interact with the system, and how drivers enable communication between software and hardware. You'll explore these concepts by running simple commands in the Terminal to gather system information and identify your user account.",
          children: [
            {
              name: "OS Types",
              description:
                "Learn about the different categories of an operating system, such as the kernel, which is the core of Linux managing hardware resources, user space, where applications run, and drivers, which connect hardware to the OS. Use commands to see this in action by checking system details.",
            },
            {
              name: "Components",
              description:
                "Dive into the key parts of an OS, like the shell, which is Bash in most Linux systems and lets you type commands, the file system, which organizes data, and processes, which are running programs. Experiment with commands to display system info and your current user.",
            },
            {
              name: "Commands",
              description:
                "Get familiar with basic tools to explore the OS. The `uname` command shows system information like the kernel version, while `whoami` tells you the username you're logged in as. Open a Terminal and type these commands to see the output.",
            },
          ],
        },
        {
          name: "Linux Distributions",
          description:
            "Discover the variety of Linux systems, known as distributions or distros. Each distro packages the Linux kernel with different software and tools. You'll focus on installing Ubuntu, but you'll also learn about other popular options. Check your distro details using specific commands after installation.",
          children: [
            {
              name: "Ubuntu",
              preferred: true,
              description:
                "Ubuntu is a beginner-friendly distro with a graphical interface and extensive documentation. Download the latest version from the official website, create a bootable USB drive, and install it on your computer or in a virtual machine. Follow the setup steps to create a user account and password.",
            },
            {
              name: "Mint",
              description:
                "Mint is a Linux distribution with a focus on simplicity and ease of use. Download the latest version from the official website, create a bootable USB drive, and install it on your computer or in a virtual machine. Follow the setup steps to create a user account and password.",
            },
            {
              name: "Pop!_OS",
              description:
                "Pop!_OS is a Linux distribution with a focus on performance and minimalism. Download the latest version from the official website, create a bootable USB drive, and install it on your computer or in a virtual machine. Follow the setup steps to create a user account and password.",
            },
            {
              name: "Debian",
              description:
                "Debian is a Linux distribution with a focus on stability and ease of use. Download the latest version from the official website, create a bootable USB drive, and install it on your computer or in a virtual machine. Follow the setup steps to create a user account and password.",
            },
            {
              name: "Arch Linux",
              description:
                "Arch Linux is a rolling distribution built from the latest sources, with a focus on stability and freedom. Download the latest version from the official website, create a bootable USB drive, and install it on your computer or in a virtual machine. Follow the setup steps to create a user account and password.",
            },
            {
              name: "Fedora",

              description:
                "Fedora is a Linux distribution with a focus on stability and freedom. Download the latest version from the official website, create a bootable USB drive, and install it on your computer or in a virtual machine. Follow the setup steps to create a user account and password.",
            },
          ],
        },
      ],
      dividerText: "navigate the filesystem.",
    },
    {
      name: " Navigating the Filesystem",
      description:
        "Learn how Linux organizes its files and directories and practice moving around the system. This step teaches you the structure of the Linux filesystem and how to use the Terminal to explore it. You’ll try navigating by using the `cd` command to change directories, starting from your home directory and moving to places like /etc or /bin, getting a feel for how everything is laid out.",
      children: [
        {
          name: "Filesystem Hierarchy",
          description:
            "Understand the structure of directories in Linux, which starts at the root and branches out into various folders with specific purposes. You’ll explore this hierarchy by listing directory contents and visualizing the layout where possible.",
          children: [
            {
              name: "Root",
              description:
                "The root directory, represented by a single slash /, is the top level of the filesystem where everything begins. Use commands to list its contents and see what’s stored there.",
            },
            {
              name: "Key Directories",
              description:
                "Learn about important folders like /bin, which holds essential binary programs, /etc, where configuration files live, and /home, your personal directory. List their contents to understand their roles.",
            },
            {
              name: "Commands",
              description:
                "Use tools to explore the filesystem. The `ls` command lists files and directories (though it’s `dir` on some systems, `ls` is standard in Linux), and `tree` displays a directory tree if installed. Try these from the root or your home directory.",
            },
          ],
        },
        {
          name: "Navigation Tools",
          description:
            "Master commands to move through the filesystem. You’ll change directories, check your location, and list contents, practicing with examples like moving from /home to /etc and back.",
          children: [
            {
              name: "Change Commands",
              description:
                "Learn to switch directories using `cd`, such as moving to /etc with `cd /etc`, or going up one level with `cd ..` from any subdirectory. Practice these movements in the Terminal.",
            },
            {
              name: "Path Commands",
              description:
                "Find out where you are with `pwd`, which prints your current directory path, and see your command search path with `echo $PATH`, showing where the system looks for programs. Run these to track your location.",
            },
            {
              name: "Listing Commands",
              description:
                "List directory contents with `ls`, which shows files and folders in your current location, or use `dir` if available (though `ls` is typical). Try listing /bin to see executable files.",
            },
          ],
        },
      ],
      dividerText: "manage files and directories.",
    },
    {
      name: " File and Directory Management",
      description:
        "Gain skills in managing files and folders on Linux. This step covers creating, copying, moving, and deleting items, as well as controlling who can access them. You’ll practice by copying a file using the `cp` command, such as duplicating a text file in your home directory, and explore permissions to secure your files.",
      children: [
        {
          name: "File Operations",
          description:
            "Learn the basic actions for handling files, like copying them to new locations, moving them between directories, and removing unwanted ones. You’ll try these operations in the Terminal with simple examples.",
          children: [
            {
              name: "Copying",
              description:
                "Duplicate files using the `cp` command. For example, to copy a file named example.txt to a new file called backup.txt, you’d run `cp example.txt backup.txt` in your home directory. Try this with any text file.",
            },
            {
              name: "Moving",
              description:
                "Relocate files with the `mv` command. To move example.txt to a subdirectory called docs, use `mv example.txt docs/example.txt`. Create a docs folder first with `mkdir docs` if needed, then move the file.",
            },
            {
              name: "Removing",
              description:
                "Delete files using the `rm` command. To remove backup.txt, run `rm backup.txt` from the directory it’s in. Be careful, as this is permanent—try it with a test file first.",
            },
          ],
        },
        {
          name: "Permission Management",
          description:
            "Control access to files and directories by setting permissions and ownership. You’ll adjust who can read, write, or execute files, and check permissions to understand current settings.",
          children: [
            {
              name: "Permission Commands",
              description:
                "Modify file permissions with `chmod`, like making a script executable by running `chmod +x script.sh`, or change ownership with `chown`, such as `chown user1 file.txt` to assign it to user1. Test these on a sample file.",
            },
            {
              name: "Group Commands",
              description:
                "Change a file’s group ownership with `chgrp`. For instance, `chgrp users file.txt` assigns file.txt to the users group. Create a test file and experiment with group changes.",
            },
            {
              name: "View Commands",
              description:
                "Check permissions with `ls -l`, which lists files in long format showing read (r), write (w), and execute (x) rights for owner, group, and others. Run this in your home directory to see file details.",
            },
          ],
        },
      ],
      dividerText: "master the command line interface.",
    },
    {
      name: " Mastering the Command Line Interface (CLI)",
      description:
        "Become proficient with the Bash shell and text editing in the Terminal. This step helps you get comfortable typing commands and modifying files. You’ll practice by editing a file using the `nano` editor, creating a simple text file, adding some notes, and saving it.",
      children: [
        {
          name: "Bash Shell Basics",
          description:
            "Learn the essentials of the Bash shell, the default command-line interface in most Linux distros. You’ll explore how to run commands and review your command history to repeat or modify past actions.",
          children: [
            {
              name: "Shell Types",
              description:
                "Understand that Bash is one of many shells, alongside alternatives like Zsh or Fish. Stick with Bash for now and use simple commands to interact with it.",
            },
            {
              name: "Syntax Elements",
              description:
                "Get to know commands, options, and arguments in Bash. For example, `echo` prints text, and `history` shows past commands. Try these to see how they work.",
            },
            {
              name: "Commands",
              description:
                "Use `echo` to display text, like `echo Hello World`, and `history` to list all commands you’ve typed in this session. Run these in the Terminal to observe the output.",
            },
          ],
        },
        {
          name: "Text Editors",
          description:
            "Learn to edit files using command-line editors. You’ll use `nano`, a simple editor, to create and modify a file, saving your changes with Ctrl+O and exiting with Ctrl+X.",
          children: [
            {
              name: "Editor Types",
              description:
                "Explore editors like `vim`, which is powerful but complex, and `nano`, which is straightforward. Start with `nano` by opening a new file with `nano test.txt`.",
            },
            {
              name: "Modes",
              description:
                "Understand that editors have modes, though `nano` is mode-free and easy to use. In contrast, `vim` has insert and command modes. Stick to `nano` for simplicity and edit a file.",
            },
            {
              name: "Commands",
              description:
                "Open a file with `nano file.txt`, type some text, save with Ctrl+O, and exit with Ctrl+X. Alternatively, try `vim file.txt`, press i to insert, type, then Esc and :wq to save and quit.",
            },
          ],
        },
      ],
      dividerText: "manage system processes.",
    },
    {
      name: " Process Management",
      description:
        "Learn to monitor and control programs running on your system. This step teaches you how to view active processes and stop them if needed. You’ll practice by using the `top` command to see real-time process activity, identifying resource usage like CPU and memory.",
      children: [
        {
          name: "Process Types",
          description:
            "Understand the different kinds of processes running on Linux, from interactive tasks to background services. You’ll observe these using process-monitoring tools.",
          children: [
            {
              name: "Foreground",
              description:
                "These are interactive tasks you start, like running a command in the Terminal. Use `top` to see them while they’re active.",
            },
            {
              name: "Background",
              description:
                "Background jobs, like services, run without your direct input. Check them with `ps` or `top` to see what’s running silently.",
            },
            {
              name: "System",
              description:
                "System processes, or daemons like cron or sshd, keep Linux running. View them with `ps` to identify system-level activity.",
            },
          ],
        },
        {
          name: "Process Tools",
          description:
            "Use utilities to manage processes, from listing what’s running to stopping unwanted programs or adjusting their priority.",
          children: [
            {
              name: "Monitoring Commands",
              description:
                "List processes with `ps`, showing a snapshot of current activity, or use `top` for a live view of CPU and memory usage. Run these to monitor your system.",
            },
            {
              name: "Control Commands",
              description:
                "Stop processes with `kill`, using a process ID (PID) from `ps` like `kill 1234`, or `killall` to stop all instances of a program, such as `killall firefox`. Test with a safe process.",
            },
            {
              name: "Priority Commands",
              description:
                "Adjust process priority with `nice` when starting a program, like `nice -n 10 command`, or `renice` for running processes, such as `renice 10 1234`. Experiment with a test command.",
            },
          ],
        },
      ],
      dividerText: "handle users and groups.",
    },
    {
      name: " User and Group Management",
      description:
        "Learn to create and manage users and their permissions. This step covers adding users and assigning them to groups for access control. You’ll practice by adding a new user with the `useradd` command, setting up a password, and verifying the addition.",
      children: [
        {
          name: "User Entities",
          description:
            "Explore the types of users and groups in Linux, which control who can do what. You’ll add a user and group to see this in action.",
          children: [
            {
              name: "User Types",
              description:
                "Learn about system users, who run services, and regular users, like yourself. Create a new regular user with `useradd` and set a password with `passwd`.",
            },
            {
              name: "Group Types",
              description:
                "Groups like sudo or users bundle permissions. Add a group with `groupadd` and assign a user to it later with `usermod`.",
            },
            {
              name: "Commands",
              description:
                "Add a user with `useradd newuser`, then create a group with `groupadd newgroup`. Set the user’s password with `passwd newuser` and test logging in.",
            },
          ],
        },
        {
          name: "Access Controls",
          description:
            "Manage permissions by modifying users, groups, and file access. You’ll tweak settings and verify changes.",
          children: [
            {
              name: "User Commands",
              description:
                "Modify a user with `usermod`, like adding them to a group with `usermod -aG newgroup newuser`, or delete them with `userdel newuser`. Try this with your test user.",
            },
            {
              name: "Group Commands",
              description:
                "Change a group with `groupmod`, such as renaming it with `groupmod -n newname oldname`, or delete it with `groupdel newgroup`. Test with your created group.",
            },
            {
              name: "Permission Commands",
              description:
                "Set file permissions with `chmod`, like `chmod 644 file.txt` for owner read/write, others read-only, or change ownership with `chown newuser file.txt`. Apply to a test file.",
            },
          ],
        },
      ],
      dividerText: "connect with networking basics.",
    },
    {
      name: " Networking Fundamentals",
      description:
        "Set up and troubleshoot network connections in Linux. This step teaches you how to check connectivity and configure basic networking. You’ll practice by using the `ping` command to test if you can reach a website like google.com, ensuring your system is online.",
      children: [
        {
          name: "Network Components",
          description:
            "Learn the parts of Linux networking, like interfaces and addresses, by checking your system’s network status.",
          children: [
            {
              name: "Interfaces",
              description:
                "Network interfaces like eth0 for wired or wlan0 for wireless connect your system. Use commands to list them and see their status.",
            },
            {
              name: "Addresses",
              description:
                "IP addresses identify your machine, and MAC addresses are hardware-specific. Check these details with network tools.",
            },
            {
              name: "Protocols",
              description:
                "Protocols like TCP and UDP handle data transfer. Use `ping` to test TCP connectivity to a remote server.",
            },
          ],
        },
        {
          name: "Network Tools",
          description:
            "Use utilities to configure, troubleshoot, and monitor your network. Test connectivity and view active connections.",
          children: [
            {
              name: "Config Commands",
              description:
                "View network settings with `ifconfig` for older systems or `ip` for modern ones, like `ip addr` to see IP addresses. Run these to check your setup.",
            },
            {
              name: "Troubleshooting Commands",
              description:
                "Test connectivity with `ping`, like `ping google.com`, or trace a route with `traceroute google.com`. Use these to diagnose network issues.",
            },
            {
              name: "Monitoring Commands",
              description:
                "Check active connections with `netstat` or `ss`, such as `ss -tuln` to list listening ports. Run these to monitor network activity.",
            },
          ],
        },
      ],
      dividerText: "install software with package managers.",
    },
    {
      name: " Package Management",
      description:
        "Install and update software using package managers. This step focuses on Ubuntu’s `apt` system, teaching you to add new programs. You’ll practice by installing a package, like the `htop` process viewer, with `apt install htop`, after updating your package list.",
      children: [
        {
          name: "Package Manager Types",
          description:
            "Learn about tools that manage software, focusing on Ubuntu’s `apt` while noting alternatives for other distros.",
          children: [
            {
              name: "Debian-Based",
              description:
                "Use `apt` to manage packages on Ubuntu or Debian, or `dpkg` for low-level package handling. Install something with `apt` to see it work.",
            },
            {
              name: "Red Hat-Based",
              description:
                "Tools like `yum` or `dnf` work on Fedora or CentOS, but stick with `apt` for Ubuntu. Update and install with `apt` commands.",
            },
            {
              name: "Arch-Based",
              description:
                "Arch uses `pacman`, but for Ubuntu, use `apt`. Practice installing a package with `apt` on your system.",
            },
          ],
        },
        {
          name: "Package Features",
          description:
            "Understand how package managers fetch and install software from repositories, using `apt` commands to manage your system.",
          children: [
            {
              name: "Repositories",
              description:
                "Software comes from repositories, like Ubuntu’s official ones. Update your list with `apt update` to get the latest package info.",
            },
            {
              name: "Package Types",
              description:
                "Ubuntu uses `.deb` files. Install one with `apt install package_name` after updating your repository list.",
            },
            {
              name: "Commands",
              description:
                "Update package lists with `apt update`, then install a tool like `htop` with `apt install htop`. Run these in sequence to add software.",
            },
          ],
        },
      ],
      dividerText: "automate with shell scripting.",
    },
    {
      name: " Shell Scripting and Automation",
      description:
        "Write scripts to automate tasks in Linux. This step teaches you Bash scripting basics, and you’ll practice by creating a simple script in the Terminal, saving it, and running it to perform a task like listing files.",
      children: [
        {
          name: "Script Elements",
          description:
            "Learn the building blocks of a shell script, like the shebang line and variables, and create a basic script to test them.",
          children: [
            {
              name: "Shebangs",
              description:
                "Start your script with `#!/bin/bash` to tell the system to use Bash. Create a file with `nano script.sh`, add this line, and add a command like `echo Hello`.",
            },
            {
              name: "Variables",
              description:
                "Store values with variables, like `name='Linux'` in your script, then print it with `echo $name`. Add this to your script and test it.",
            },
            {
              name: "Commands",
              description:
                "Include commands like `echo` to print text or `ls` to list files in your script. Build a script with `nano`, add `echo Files:` and `ls`, then save it.",
            },
          ],
        },
        {
          name: "Automation Features",
          description:
            "Add logic and scheduling to your scripts for automation, making them executable and running them automatically.",
          children: [
            {
              name: "Control Structures",
              description:
                "Use `if` to add conditions or `for` to loop in your script. Edit your script with `nano`, add `if [ true ]; then echo Yes; fi`, and test it.",
            },
            {
              name: "Scheduling",
              description:
                "Schedule scripts with `cron`. Open `crontab -e`, add `* * * * * /path/to/script.sh` to run every minute, and save it.",
            },
            {
              name: "Execution Commands",
              description:
                "Make your script executable with `chmod +x script.sh`, then run it with `./script.sh`. Test your script after saving it with `nano`.",
            },
          ],
        },
      ],
      dividerText: "secure your system.",
    },
    {
      name: " Advanced Topics - System Security",
      description:
        "Secure your Linux system by setting up basic protections. This step teaches you to configure a firewall, and you’ll practice by enabling `ufw`, allowing SSH access, and activating it to block unwanted traffic.",
      children: [
        {
          name: "Security Components",
          description:
            "Learn the tools and methods to secure your system, focusing on firewall setup and secure access.",
          children: [
            {
              name: "Firewall Types",
              description:
                "Use `ufw`, a simple firewall tool, or `iptables` for more control. Set up `ufw` by enabling it and adding rules.",
            },
            {
              name: "Access Methods",
              description:
                "Secure logins with SSH. Generate a key pair with `ssh-keygen`, save it, and use it to connect securely later.",
            },
            {
              name: "Commands",
              description:
                "Allow SSH with `ufw allow ssh`, enable the firewall with `ufw enable`, and create SSH keys with `ssh-keygen`. Run these to secure your system.",
            },
          ],
        },
        {
          name: "Security Features",
          description:
            "Implement rules and hardening techniques to protect your system, testing them with `ufw` and SSH setup.",
          children: [
            {
              name: "Rules",
              description:
                "Set firewall rules with `ufw`, like `ufw allow 22` for SSH or `ufw deny 23` to block telnet. Apply these and check with `ufw status`.",
            },
            {
              name: "Hardening",
              description:
                "Enhance security by generating an SSH key with `ssh-keygen` and disabling root login later via SSH config. Start with the key setup.",
            },
            {
              name: "Monitoring",
              description:
                "Install `fail2ban` with `apt install fail2ban` to block brute-force attacks, then check logs with `cat /var/log/auth.log`. Set this up and test.",
            },
          ],
        },
      ],
      dividerText: "monitor and tune performance.",
    },
    {
      name: " Advanced Topics - System Monitoring and Performance Tuning",
      description:
        "Monitor and optimize your system’s performance. This step teaches you to check resource usage, and you’ll practice by using the `free` command to view memory stats, ensuring your system runs efficiently.",
      children: [
        {
          name: "Monitoring Areas",
          description:
            "Track system resources like CPU, memory, and disk space to understand performance, using basic tools.",
          children: [
            {
              name: "Resource Types",
              description:
                "Monitor CPU, memory, and disk usage. Use `top` for CPU, `free` for memory, and `df` for disk space to see current stats.",
            },
            {
              name: "Performance Metrics",
              description:
                "Check metrics like load average or disk I/O with `top` for real-time data or `df` for space usage. Run these to assess your system.",
            },
            {
              name: "Commands",
              description:
                "Use `top` for a live view, `free` to check memory in megabytes, and `df` to see disk usage. Try these in the Terminal to monitor resources.",
            },
          ],
        },
        {
          name: "Tuning Features",
          description:
            "Optimize performance by adjusting priorities and limits, testing with monitoring tools to see improvements.",
          children: [
            {
              name: "Priority Settings",
              description:
                "Lower a process’s priority with `nice -n 10 command` or adjust a running one with `renice 10 1234`. Test with a sample process.",
            },
            {
              name: "Resource Limits",
              description:
                "Set limits with `ulimit`, like `ulimit -u 100` to cap processes per user. Check current limits with `ulimit -a` and adjust.",
            },
            {
              name: "Monitoring Tools",
              description:
                "Install `htop` with `apt install htop` for a better `top`, or `iotop` with `apt install iotop` for I/O monitoring. Run them to observe.",
            },
          ],
        },
      ],
      dividerText: "backup and recover data.",
    },
    {
      name: " Advanced Topics - Backup and Recovery",
      description:
        "Protect your data with backups and learn to restore it. This step guides you through creating a backup using `tar`, compressing files into an archive, and extracting them later to recover data.",
      children: [
        {
          name: "Backup Types",
          description:
            "Learn backup methods and create archives of your files to safeguard them, testing with `tar` and `rsync`.",
          children: [
            {
              name: "Full Backups",
              description:
                "Create a complete backup with `tar`, like `tar -cvf backup.tar /home/user/docs` to archive your docs folder. Run this to save everything.",
            },
            {
              name: "Incremental Backups",
              description:
                "Back up changes with `rsync`, such as `rsync -av /home/user/docs /backup/` to sync only new or modified files. Try this after a full backup.",
            },
            {
              name: "Commands",
              description:
                "Use `tar -cvf backup.tar /path` for full backups or `rsync -av source dest` for incremental ones. Test these with a small directory.",
            },
          ],
        },
        {
          name: "Recovery Features",
          description:
            "Restore your data from backups, extracting archives or syncing files back to their original locations.",
          children: [
            {
              name: "Archive Formats",
              description:
                "Extract a `.tar` file with `tar -xvf backup.tar` or a compressed `.tar.gz` with `tar -xzvf backup.tar.gz`. Test extraction with your backup.",
            },
            {
              name: "Restore Methods",
              description:
                "Recover files with `tar -xvf backup.tar -C /path` to a specific directory or `rsync -av /backup/ /home/user/docs` to sync back. Practice this.",
            },
            {
              name: "Storage Options",
              description:
                "Save backups to an external drive by specifying the path in `tar` or `rsync`, like `tar -cvf /mnt/drive/backup.tar /home`. Test with a USB if available.",
            },
          ],
        },
      ],
      dividerText: "grow and connect.",
    },
    {
      name: " Growing and Connecting",
      description:
        "Expand your Linux skills and connect with the community. This step encourages you to explore advanced topics and resources, practicing with beginner-friendly ideas like setting up a small project or joining a forum.",
      children: [
        {
          name: "Growth Areas",
          description:
            "Build on your knowledge by tackling new challenges and experimenting with different distros or projects.",
          children: [
            {
              name: "Advanced Topics",
              description:
                "Dive into kernel modules or containers later, but start with a project using commands you know, like `ls` or `echo` in a script.",
            },
            {
              name: "Projects",
              description:
                "Set up a home server or script with `nano` and `chmod +x`. Create a script to automate a task, like listing files daily.",
            },
            {
              name: "Distros",
              description:
                "Try Arch or CentOS later, but for now, explore Ubuntu further with `apt install` to add new tools like `htop`.",
            },
          ],
        },
        {
          name: "Community Resources",
          description:
            "Connect with others and find help using online forums, documentation, or events, starting with basic exploration.",
          children: [
            {
              name: "Forums",
              description:
                "Visit LinuxQuestions or Reddit later, but for now, use `man` commands like `man ls` to learn more about tools locally.",
            },
            {
              name: "Docs",
              description:
                "Read the Arch Wiki online or use `man` pages, like `man chmod`, to deepen your understanding of commands.",
            },
            {
              name: "Events",
              description:
                "Look for LinuxCon or meetups later, but start by practicing skills with `ls` or `cd` to build confidence.",
            },
          ],
        },
      ],
    },
  ],
};

export default linuxDeveloperRoadmap;
