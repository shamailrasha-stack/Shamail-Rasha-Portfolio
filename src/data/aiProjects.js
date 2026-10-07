export const aiProjects = [
  {
    id: "indoor-air",
    name: "AI-BASED SMART INDOOR AIR QUALITY",
    type: "AI + IoT + RESEARCH",
    description:
      "A predictive indoor air-quality system that monitors pollutants in real time, forecasts near-future conditions, and can automatically respond through ventilation control.",
    features: [
      "Real-time CO₂, CO and NO₂ monitoring",
      "Temperature and humidity monitoring",
      "Kalman Filter sensor-data denoising",
      "LSTM time-series prediction",
      "Automatic fan and vent control",
      "ThingSpeak cloud dashboard",
      "Telegram alert notifications",
      "Local LCD and LED status display",
    ],
    tech: [
      "Python",
      "LSTM",
      "Kalman Filter",
      "ESP32",
      "NDIR CO₂ Sensor",
      "MQ-2",
      "MQ-135",
      "DHT11",
      "ThingSpeak",
      "Telegram Bot",
      "Embedded C",
    ],
    research:
      "Published in IJARCCE, Volume 14, Issue 11, November 2025.",
    doi: "10.17148/IJARCCE.2025.1411148",
  },

  {
    id: "smart-stick",
    name: "AIoT SMART STICK",
    type: "AIoT + ASSISTIVE TECHNOLOGY",
    description:
      "A smart assistive device designed to help visually impaired users detect obstacles and provide location and emergency assistance.",
    features: [
      "Obstacle detection",
      "Location tracking",
      "Emergency alerts",
      "Sensor-based environment awareness",
      "Assistive technology design",
    ],
    tech: ["Arduino", "Embedded C", "IoT", "Sensors"],
    research:
      "Academic project focused on combining embedded systems and IoT for assistive technology.",
    doi: null,
  },
];
