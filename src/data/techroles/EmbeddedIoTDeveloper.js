const embeddedIotDeveloperRoadmap = {
  name: "Embedded IoT Developer Roadmap 2025",
  description:
    "This comprehensive guide equips aspiring embedded IoT developers with essential skills for 2025, from foundational concepts to advanced techniques. It covers hardware, programming, networking, edge computing, security, and emerging trends like TinyML. Designed for all levels, it ensures practical mastery to build robust, secure, and efficient IoT devices, preparing you for a thriving career in this dynamic field.",
  children: [
    {
      name: "Foundational Knowledge",
      description:
        "Build a solid base in IoT ecosystems and hardware fundamentals, taught with examples like breadboarding a sensor circuit or exploring MQTT basics. This section provides the core concepts and components critical for 2025 embedded IoT development, enabling you to design and implement efficient solutions from the ground up with confidence.",
      children: [
        {
          name: "Understanding IoT Ecosystem",
          description:
            "Learn the components and architecture of IoT systems, taught with examples like connecting an ESP32 to a cloud via Wi-Fi. A 2025 skill for designing effective solutions, this section covers device roles and connectivity standards essential for interoperable IoT ecosystems.",
          children: [
            {
              name: "IoT Device Architecture",
              description:
                "Understand sensors, actuators, and MCUs with examples like wiring a DHT11 sensor. A 2025 skill for device design.",
            },
            {
              name: "Embedded Standards",
              description:
                "Explore IEEE 802.15.4 and LPWAN with examples like Zigbee setups. Key in 2025 for interoperability.",
            },
            {
              name: "IoT Connectivity Basics",
              description:
                "Learn connectivity with examples like Bluetooth pairing. A 2025 skill for device networking.",
            },
          ],
        },
        {
          name: "Electronics and Hardware Basics",
          description:
            "Master electronics and hardware interfacing, taught with examples like designing a simple LED circuit or powering an ESP32. A 2025 skill for reliable IoT devices, this section ensures you can prototype and optimize hardware effectively for embedded solutions.",
          children: [
            {
              name: "Circuit Design",
              description:
                "Design circuits with breadboards, taught with LED examples. A 2025 skill for prototyping.",
            },
            {
              name: "Power Management",
              description:
                "Optimize with battery examples, taught with low-power modes. Key in 2025 for efficiency.",
            },
            {
              name: "Analog vs Digital Signals",
              description:
                "Process signals with ADC examples, taught with sensors. A 2025 skill for data capture.",
            },
            {
              name: "PCB Design",
              description:
                "Create PCBs with KiCad, taught with examples. A 2025 skill for custom hardware.",
            },
            {
              name: "Microcontroller Basics",
              description:
                "Learn MCU pinouts with Arduino examples, taught with GPIO. A 2025 skill for control.",
            },
          ],
        },
      ],
      dividerText: "Foundation laid—develop programming skills.",
    },
    {
      name: "Programming Skills",
      description:
        "Gain expertise in programming embedded IoT devices, taught with examples like C code for STM32 or MicroPython on ESP32. A 2025 skill for efficient firmware, this section ensures you can control hardware, manage resources, and build reliable IoT solutions with modern languages.",
      children: [
        {
          name: "C/C++",
          description:
            "Program microcontrollers with C/C++, taught with examples like LED blinking on Arduino or RTOS on STM32. A 2025 cornerstone skill, this section provides the efficiency and control needed for embedded software in resource-constrained IoT environments.",
          children: [
            {
              name: "Embedded C",
              preferred: true,
              description:
                "Write C for hardware with examples on ESP32. Preferred in 2025 for efficiency and adoption.",
            },
            {
              name: "Real-Time Operating Systems (RTOS)",
              description:
                "Use FreeRTOS for multitasking, taught with examples. A 2025 skill for real-time tasks.",
            },
            {
              name: "Memory Management",
              description:
                "Optimize with malloc examples, taught with STM32. A 2025 skill for constrained systems.",
            },
            {
              name: "Interrupt Handling",
              description:
                "Handle IRQs with Arduino examples, taught with timers. A 2025 skill for responsiveness.",
            },
            {
              name: "Bit Manipulation",
              description:
                "Manipulate bits with C, taught with register examples. A 2025 skill for low-level control.",
            },
          ],
        },
        {
          name: "Rust",
          description:
            "Leverage Rust for safe, high-performance IoT apps, taught with examples like bare-metal nRF52832 code. A 2025 skill for memory safety, this section offers an alternative to C/C++ with robust safety features for embedded development.",
          children: [
            {
              name: "Memory Safety",
              description:
                "Prevent bugs with Rust ownership, taught with examples. A 2025 skill for reliability.",
            },
            {
              name: "Embedded Rust",
              description:
                "Code bare-metal with Rust, taught with nRF examples. A 2025 skill for safe control.",
            },
            {
              name: "Rust Toolchain",
              description:
                "Use Cargo for Rust builds, taught with examples. A 2025 skill for development ease.",
            },
          ],
        },
        {
          name: "Python (MicroPython)",
          description:
            "Prototype with MicroPython on MCUs, taught with examples like ESP32 sensor scripts. A 2025 skill for rapid development, this section simplifies IoT programming with high-level Python constructs for quick iteration and testing.",
          children: [
            {
              name: "MicroPython",
              preferred: true,
              description:
                "Run MicroPython on ESP32, taught with examples. Preferred in 2025 for prototyping speed.",
            },
            {
              name: "Device Scripting",
              description:
                "Script tasks with Python, taught with LED examples. A 2025 skill for automation.",
            },
            {
              name: "Libraries for IoT",
              description:
                "Use MicroPython libs, taught with sensor examples. A 2025 skill for extensibility.",
            },
          ],
        },
      ],
      dividerText: "Programming honed—explore hardware platforms.",
    },
    {
      name: "Hardware Platforms",
      description:
        "Master MCU platforms and hardware integration, taught with examples like Arduino sensor setups or STM32 projects. A 2025 skill for diverse IoT solutions, this section ensures you can prototype and deploy on popular boards and integrate real-world components effectively.",
      children: [
        {
          name: "Microcontrollers and Development Boards",
          description:
            "Work with platforms like ESP32 and nRF52832, taught with examples programming Arduino or STM32 boards. A 2025 skill for versatile development, this section provides hands-on experience with MCUs critical for IoT prototyping and production.",
          children: [
            {
              name: "Arduino",
              description:
                "Prototype with Arduino, taught with LED examples. A 2025 skill for beginners.",
            },
            {
              name: "ESP8266/ESP32",
              preferred: true,
              description:
                "Use ESP32 for Wi-Fi, taught with examples. Preferred in 2025 for cost and connectivity.",
            },
            {
              name: "STM32",
              description:
                "Develop with STM32, taught with industrial examples. A 2025 skill for advanced apps.",
            },
            {
              name: "nRF52832",
              description:
                "Implement BLE with nRF52832, taught with examples. A 2025 skill for low-power wireless.",
            },
            {
              name: "Raspberry Pi Pico",
              description:
                "Use Pico for small projects, taught with examples. A 2025 skill for versatile MCUs.",
            },
          ],
        },
        {
          name: "Sensor and Actuator Integration",
          description:
            "Integrate sensors and actuators with MCUs, taught with examples like connecting a PIR sensor or motor to Arduino. A 2025 skill for real-world interaction, this section enables IoT devices to sense and actuate effectively in physical environments.",
          children: [
            {
              name: "Environmental Sensors",
              description:
                "Use temp sensors like DHT22, taught with examples. A 2025 skill for monitoring.",
            },
            {
              name: "Motion Sensors",
              description:
                "Integrate accelerometers, taught with examples. A 2025 skill for motion detection.",
            },
            {
              name: "Actuators",
              description:
                "Control motors with PWM, taught with examples. A 2025 skill for actuation.",
            },
            {
              name: "ADC/DAC",
              description:
                "Convert signals with ADC, taught with examples. A 2025 skill for analog interfacing.",
            },
            {
              name: "GPIO Control",
              description:
                "Manage GPIO pins, taught with LED examples. A 2025 skill for hardware control.",
            },
          ],
        },
      ],
      dividerText: "Hardware mastered—connect with networking protocols.",
    },
    {
      name: "Networking and Communication Protocols",
      description:
        "Implement connectivity with protocols like MQTT and LoRaWAN, taught with examples connecting ESP32 via Wi-Fi or nRF52832 via BLE. A 2025 skill for distributed IoT systems, this section ensures devices communicate efficiently and reliably in varied environments.",
      children: [
        {
          name: "Wireless Communication",
          description:
            "Enable wireless connectivity with Bluetooth and Zigbee, taught with examples like pairing nRF52832 or meshing with Zigbee. A 2025 skill for IoT networking, this section connects devices without physical constraints, supporting scalable, flexible systems.",
          children: [
            {
              name: "Bluetooth 5.x",
              description:
                "Use BLE with nRF52832, taught with examples. A 2025 skill for short-range comms.",
            },
            {
              name: "Zigbee",
              description:
                "Implement Zigbee meshes, taught with examples. A 2025 skill for device clusters.",
            },
            {
              name: "LoRaWAN",
              description:
                "Connect with LoRaWAN, taught with long-range examples. A 2025 skill for low-power.",
            },
            {
              name: "Wi-Fi (Low-Power)",
              preferred: true,
              description:
                "Optimize Wi-Fi with ESP32, taught with examples. Preferred in 2025 for speed and ubiquity.",
            },
            {
              name: "Thread",
              description:
                "Use Thread for mesh, taught with examples. A 2025 skill for smart homes.",
            },
          ],
        },
        {
          name: "IoT-Specific Protocols",
          description:
            "Use lightweight protocols like CoAP, taught with examples like MQTT on ESP32 or UART on STM32. A 2025 skill for efficient comms, this section ensures reliable device interaction in resource-constrained IoT setups.",
          children: [
            {
              name: "MQTT",
              preferred: true,
              description:
                "Implement MQTT pub-sub, taught with examples. Preferred in 2025 for lightweight messaging.",
            },
            {
              name: "CoAP",
              description:
                "Use CoAP for constrained devices, taught with examples. A 2025 skill for efficiency.",
            },
            {
              name: "UART/SPI/I2C",
              description:
                "Handle UART with STM32, taught with examples. A 2025 skill for low-level comms.",
            },
            {
              name: "HTTP/REST",
              description:
                "Use REST on ESP32, taught with examples. A 2025 skill for web integration.",
            },
          ],
        },
      ],
      dividerText: "Networking connected—process data at the edge.",
    },
    {
      name: "Edge Computing",
      description:
        "Process data locally with TinyML and firmware, taught with examples like real-time sensor analysis on ESP32. A 2025 skill for low-latency IoT, this section reduces bandwidth and enables real-time decisions at the edge of the network effectively.",
      children: [
        {
          name: "Local Data Processing",
          description:
            "Handle data on-device with examples like filtering sensor data on STM32 or running ML on nRF52832. A 2025 skill for real-time processing, this section minimizes latency and network use in IoT applications requiring immediate responses.",
          children: [
            {
              name: "Real-Time Processing",
              description:
                "Process with RTOS on ESP32, taught with examples. A 2025 skill for timely responses.",
            },
            {
              name: "Edge Firmware",
              description:
                "Develop firmware with C, taught with STM32 examples. A 2025 skill for edge logic.",
            },
            {
              name: "TinyML",
              preferred: true,
              description:
                "Run ML with TensorFlow Lite, taught with examples. Preferred in 2025 for edge AI.",
            },
            {
              name: "Data Filtering",
              description:
                "Filter with algorithms on nRF52832, taught with examples. A 2025 skill for efficiency.",
            },
          ],
        },
      ],
      dividerText: "Edge computing optimized—secure your IoT devices.",
    },
    {
      name: "Security",
      description:
        "Secure IoT devices with AES and secure boot, taught with examples like encrypting MQTT data or OTA updates on ESP32. A 2025 skill for protection, this section ensures devices and data remain safe from threats in connected IoT environments.",
      children: [
        {
          name: "Embedded IoT Security",
          description:
            "Implement security at hardware and firmware levels, taught with examples like TPM on STM32 or SSL on ESP32. A 2025 skill for safeguarding IoT, this section protects against unauthorized access and ensures data integrity effectively.",
          children: [
            {
              name: "Encryption",
              description:
                "Use AES with OpenSSL, taught with examples. A 2025 skill for data protection.",
            },
            {
              name: "Secure Boot",
              description:
                "Ensure boot with STM32, taught with examples. A 2025 skill for trusted firmware.",
            },
            {
              name: "OTA Updates",
              description:
                "Deploy OTA with ESP32, taught with examples. A 2025 skill for secure updates.",
            },
            {
              name: "Hardware Security Modules",
              description:
                "Use TPMs on nRF52832, taught with examples. A 2025 skill for key security.",
            },
            {
              name: "Authentication",
              description:
                "Implement with JWT, taught with examples. A 2025 skill for device trust.",
            },
          ],
        },
      ],
      dividerText: "Security enforced—explore emerging trends.",
    },
    {
      name: "Emerging Trends in 2025",
      description:
        "Stay ahead with trends like TinyML and sustainable IoT, taught with examples like solar-powered ESP32 or embedded AI on nRF52832. A 2025 skill for innovation, this section keeps your expertise cutting-edge in the evolving embedded IoT landscape.",
      children: [
        {
          name: "Sustainability in Embedded IoT",
          description:
            "Design energy-efficient IoT with examples like kinetic harvesting on STM32 or low-power ESP32 modes. A 2025 skill for green tech, this section minimizes environmental impact while maintaining functionality in IoT devices.",
          children: [
            {
              name: "Energy Harvesting",
              description:
                "Harvest solar with examples on ESP32. A 2025 skill for self-sustaining devices.",
            },
            {
              name: "Low-Power Design",
              description:
                "Optimize with sleep modes, taught with nRF52832 examples. A 2025 skill for efficiency.",
            },
            {
              name: "Eco-Friendly Materials",
              description:
                "Use sustainable PCBs, taught with examples. A 2025 skill for green IoT.",
            },
          ],
        },
        {
          name: "Advanced Embedded AI",
          description:
            "Integrate AI with TinyML and neural nets, taught with examples like gesture recognition on ESP32. A 2025 skill for intelligent devices, this section enhances IoT with data-driven capabilities in constrained environments.",
          children: [
            {
              name: "TinyML",
              preferred: true,
              description:
                "Deploy TinyML with TensorFlow Lite, taught with examples. Preferred in 2025 for edge AI.",
            },
            {
              name: "Embedded Neural Networks",
              description:
                "Optimize nets with STM32, taught with examples. A 2025 skill for advanced AI.",
            },
            {
              name: "Edge AI Optimization",
              description:
                "Optimize with pruning, taught with nRF52832 examples. A 2025 skill for performance.",
            },
          ],
        },
      ],
      dividerText: "Trends embraced—enhance with soft skills.",
    },
    {
      name: "Soft Skills",
      description:
        "Develop collaboration and problem-solving skills, taught with scenarios like debugging a team-built IoT device or coordinating firmware updates. A 2025 skill for success, this section ensures effective teamwork and issue resolution in multidisciplinary embedded IoT projects.",
    },
  ],
};

export default embeddedIotDeveloperRoadmap;
