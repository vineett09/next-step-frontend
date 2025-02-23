const embeddedIotDeveloperRoadmap = {
  name: "Embedded IoT Developer Roadmap 2025",
  children: [
    {
      name: "Foundational Knowledge",
      children: [
        {
          name: "Understanding IoT Ecosystem",
          description:
            "Learn the device-level components of IoT, focusing on hardware architecture and connectivity.",
          children: [
            {
              name: "IoT Device Architecture",
              description:
                "Understand sensors, actuators, and microcontroller roles.",
            },
            {
              name: "Embedded Standards",
              description:
                "Familiarize with IEEE 802.15.4 and low-power protocols.",
            },
          ],
        },
        {
          name: "Electronics and Hardware Basics",
          description:
            "Master the essentials of designing and interfacing hardware for IoT devices.",
          children: [
            {
              name: "Circuit Design",
              description: "Design circuits using schematics and breadboards.",
            },
            {
              name: "Power Management",
              description: "Optimize battery life and energy harvesting.",
            },
            {
              name: "Analog vs Digital Signals",
              description: "Process sensor signals effectively.",
            },
            {
              name: "PCB Design",
              description:
                "Create custom printed circuit boards for IoT devices.",
            },
          ],
        },
      ],
    },
    {
      name: "Programming Skills",
      children: [
        {
          name: "C/C++",
          description:
            "Core languages for programming microcontrollers and embedded systems.",
          children: [
            {
              name: "Embedded C",
              description: "Write efficient code for hardware control.",
            },
            {
              name: "Real-Time Operating Systems (RTOS)",
              description: "Implement FreeRTOS or Zephyr for multitasking.",
            },
            {
              name: "Memory Management",
              description:
                "Optimize stack and heap in constrained environments.",
            },
            {
              name: "Interrupt Handling",
              description: "Manage hardware interrupts for real-time response.",
            },
          ],
        },
        {
          name: "Rust",
          description:
            "Use for safe and high-performance embedded IoT applications.",
          children: [
            {
              name: "Memory Safety",
              description: "Prevent bugs in resource-constrained systems.",
            },
            {
              name: "Embedded Rust",
              description: "Program bare-metal IoT hardware.",
            },
          ],
        },
        {
          name: "Python (MicroPython)",
          description: "Leverage for rapid prototyping on microcontrollers.",
          children: [
            {
              name: "MicroPython",
              description: "Run Python on devices like ESP32.",
            },
            {
              name: "Device Scripting",
              description: "Automate basic IoT device tasks.",
            },
          ],
        },
      ],
    },
    {
      name: "Hardware Platforms",
      children: [
        {
          name: "Microcontrollers and Development Boards",
          description: "Master platforms for embedded IoT development.",
          children: [
            { name: "Arduino", description: "Prototype simple IoT devices." },
            {
              name: "ESP8266/ESP32",
              description: "Develop low-cost, Wi-Fi-enabled IoT solutions.",
            },
            {
              name: "STM32",
              description: "Use for advanced industrial IoT applications.",
            },
            {
              name: "nRF52832",
              description: "Implement Bluetooth Low Energy (BLE) solutions.",
            },
          ],
        },
        {
          name: "Sensor and Actuator Integration",
          description:
            "Interface hardware components for real-world functionality.",
          children: [
            {
              name: "Environmental Sensors",
              description:
                "Integrate temperature, humidity, and pressure sensors.",
            },
            {
              name: "Motion Sensors",
              description: "Use accelerometers and gyroscopes.",
            },
            {
              name: "Actuators",
              description: "Control motors, relays, and valves.",
            },
            {
              name: "ADC/DAC",
              description: "Convert analog signals for digital processing.",
            },
          ],
        },
      ],
    },
    {
      name: "Networking and Communication Protocols",
      children: [
        {
          name: "Wireless Communication",
          description: "Implement connectivity for embedded IoT devices.",
          children: [
            {
              name: "Bluetooth 5.x",
              description: "Low-energy short-range communication.",
            },
            {
              name: "Zigbee",
              description: "Mesh networking for device clusters.",
            },
            {
              name: "LoRaWAN",
              description: "Long-range, low-power connectivity.",
            },
            {
              name: "Wi-Fi (Low-Power)",
              description: "Optimize Wi-Fi for embedded use.",
            },
          ],
        },
        {
          name: "IoT-Specific Protocols",
          description: "Use lightweight protocols for device communication.",
          children: [
            {
              name: "MQTT",
              description: "Implement publish-subscribe messaging.",
            },
            { name: "CoAP", description: "Use for constrained devices." },
            {
              name: "UART/SPI/I2C",
              description: "Handle low-level hardware communication.",
            },
          ],
        },
      ],
    },
    {
      name: "Edge Computing",
      children: [
        {
          name: "Local Data Processing",
          description:
            "Process data on-device to reduce latency and bandwidth.",
          children: [
            {
              name: "Real-Time Processing",
              description: "Handle time-sensitive tasks locally.",
            },
            {
              name: "Edge Firmware",
              description: "Develop lightweight firmware for edge logic.",
            },
            {
              name: "TinyML",
              description:
                "Run small-scale machine learning models on devices.",
            },
          ],
        },
      ],
    },
    {
      name: "Security",
      children: [
        {
          name: "Embedded IoT Security",
          description: "Secure IoT devices at the hardware and firmware level.",
          children: [
            { name: "Encryption", description: "Use AES for data protection." },
            {
              name: "Secure Boot",
              description: "Ensure trusted firmware execution.",
            },
            {
              name: "OTA Updates",
              description: "Deploy secure firmware updates.",
            },
            {
              name: "Hardware Security Modules",
              description: "Leverage TPMs for key storage.",
            },
          ],
        },
      ],
    },
    {
      name: "Emerging Trends in 2025",
      children: [
        {
          name: "Sustainability in Embedded IoT",
          description: "Design energy-efficient IoT devices.",
          children: [
            {
              name: "Energy Harvesting",
              description: "Power devices with solar or kinetic energy.",
            },
            {
              name: "Low-Power Design",
              description: "Optimize hardware for minimal energy use.",
            },
          ],
        },
        {
          name: "Advanced Embedded AI",
          description: "Integrate AI into resource-constrained devices.",
          children: [
            {
              name: "TinyML",
              description: "Deploy ML models on microcontrollers.",
            },
            {
              name: "Embedded Neural Networks",
              description: "Optimize neural nets for edge use.",
            },
          ],
        },
      ],
    },
    {
      name: "Soft Skills",
      children: [
        {
          name: "Problem-Solving",
          description: "Troubleshoot hardware and firmware issues.",
        },
        {
          name: "Collaboration",
          description: "Work with hardware and software teams.",
        },
      ],
    },
  ],
};

export default embeddedIotDeveloperRoadmap;
