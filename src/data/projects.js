export const projects = [
  {
    id: 1,
    index: '01',
    title: 'SafeVitals XR',
    subtitle: 'AI-powered remote healthcare monitoring system',
    year: '2024',
    description:
      'An end-to-end system for continuous patient monitoring outside the hospital. Wearable IoT devices capture biometric data — ECG, SpO₂, heart rate, temperature — and transmit it in real-time over 5G to cloud AI models that flag deterioration up to 72 hours in advance. Extended Reality interfaces give clinicians an immersive 3D view of patient status.',
    problem:
      'Healthcare is reactive. Patients arrive at hospitals too late. Doctors lack the continuous, intelligent data streams needed to intervene early.',
    solution:
      'A continuous monitoring ecosystem that detects anomalies before they become emergencies, bridging the gap between home and hospital care.',
    outcome:
      'Two functional hardware prototypes built and tested. Demonstrated to government officials and presented at the MSME Summit. Live ML pipeline validated in lab conditions.',
    stack: ['Python', 'TensorFlow', 'ESP32', 'FastAPI', 'React', 'Supabase', 'Unreal Engine 5', 'MQTT', '5G'],
    tags: ['AI/ML', 'IoT', 'Wearables', 'XR', 'Healthcare'],
    links: { github: null, live: null },
  },
  {
    id: 2,
    index: '02',
    title: 'Digital Twin Healthcare System',
    subtitle: 'Real-time patient environment simulation using IoT and Unreal Engine',
    year: '2023',
    description:
      'A real-time digital replica of a hospital patient\'s physiological state and environment. IoT sensors stream biometric data via MQTT to a Raspberry Pi gateway, feeding a cloud-hosted digital twin model rendered as an immersive Unreal Engine 5 environment for remote medical monitoring.',
    problem:
      'Healthcare practitioners need spatial, intuitive interfaces to understand complex patient environments without being physically present.',
    solution:
      'A digital twin that mirrors each patient\'s environment live — accurate to sub-second latency — rendered in a navigable 3D space.',
    outcome:
      'Working prototype with real-time biometric sync and immersive VR visualization. Sub-second data latency verified.',
    stack: ['Python', 'Raspberry Pi', 'MQTT', 'Unreal Engine 5', 'Node.js', 'TensorFlow Lite'],
    tags: ['IoT', 'Raspberry Pi', 'Digital Twin', 'VR'],
    links: { github: null, live: null },
  },
  {
    id: 3,
    index: '03',
    title: 'SOS Wearable — B5G Emergency Response',
    subtitle: 'Ultra-low latency emergency alert system on Beyond-5G networks',
    year: '2024',
    description:
      'A wearable device that continuously monitors vital signs and physical state. On detecting a critical event — fall, cardiac anomaly, or manual trigger — it transmits an encrypted SOS payload over a B5G network slice to a cloud response center and the nearest hospital in under 10 milliseconds.',
    problem:
      'Emergency response systems are too slow. No existing consumer wearable can deliver sub-second alerts with simultaneous vitals and location data.',
    solution:
      'A 5G-sliced wearable with edge AI preprocessing that detects emergencies and notifies hospitals with full context faster than current systems.',
    outcome:
      'Hardware prototype with edge AI and encrypted 5G telemetry verified in lab. Sub-10ms alert latency achieved.',
    stack: ['Embedded C', 'ESP32', 'B5G SDK', 'Python', 'AWS IoT', 'MQTT'],
    tags: ['B5G', '5G', 'Wearable', 'Emergency Response', 'Edge Computing'],
    links: { github: null, live: null },
  },
  {
    id: 4,
    index: '04',
    title: '5G Signal Ray Tracing',
    subtitle: 'Physically-accurate mmWave signal simulation using Sionna RT',
    year: '2023',
    description:
      'A signal propagation simulator using NVIDIA\'s Sionna ray-tracing engine to model 5G mmWave behavior in realistic 3D urban environments. The system models reflection, diffraction, and scattering, producing high-fidelity channel impulse responses visualized as signal heatmaps and MIMO beam patterns.',
    problem:
      'Network engineers lack cost-effective, accurate tools to model 5G signal behavior in complex real-world environments before deploying infrastructure.',
    solution:
      'Physically-accurate ray tracing using Sionna with a custom Python visualization pipeline producing actionable channel models.',
    outcome:
      'Complete simulation pipeline producing validated channel models for urban 5G deployments. Results published in departmental research.',
    stack: ['Python', 'Sionna', 'TensorFlow', 'NumPy', 'Matplotlib', 'Blender'],
    tags: ['5G', 'mmWave', 'Ray Tracing', 'Simulation', 'Research'],
    links: { github: null, live: null },
  },
];
