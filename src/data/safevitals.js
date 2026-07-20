/**
 * SafeVitals XR — Product & Company Data
 */

export const safevitalsOverview = {
  name:    'SafeVitals XR',
  tagline: 'Redefining Healthcare Through Intelligence',
  mission: 'Building the infrastructure for proactive, continuous, AI-powered healthcare — from wearable sensors to hospital-wide intelligent ecosystems.',
  problem: `Healthcare today is reactive. Patients visit hospitals only when symptoms become critical. 
    By then, the window for early intervention has often closed. 
    Millions of preventable deaths occur each year because we don't have the right data, at the right time, in the right hands.`,
  solution: `SafeVitals XR creates a continuous, intelligent health monitoring layer that connects patients, 
    wearable devices, hospital systems, and AI — enabling doctors to detect and respond to health threats 
    before they become emergencies.`,
};

export const safevitalsFeatures = [
  {
    id:    'ai-risk',
    title: 'AI Risk Prediction',
    desc:  'Machine learning models analyze biometric patterns to predict health deterioration up to 72 hours in advance.',
    icon:  '🧠',
    size:  'large',
  },
  {
    id:    'remote-monitoring',
    title: 'Remote Monitoring',
    desc:  'Continuous vital sign tracking from anywhere. Real-time alerts to care teams.',
    icon:  '📡',
    size:  'normal',
  },
  {
    id:    'xr-consultation',
    title: 'XR Doctor Consultation',
    desc:  'Extended Reality interfaces enable doctors to visualize patient data in immersive 3D environments.',
    icon:  '🥽',
    size:  'normal',
  },
  {
    id:    'digital-twin',
    title: 'Digital Twin Healthcare',
    desc:  'Create a precise digital replica of each patient\'s physiological state for simulation and prediction.',
    icon:  '👤',
    size:  'large',
  },
  {
    id:    'emergency-sos',
    title: 'Emergency SOS',
    desc:  'Sub-10ms emergency alerts over 5G with GPS location and automatic hospital notification.',
    icon:  '🚨',
    size:  'normal',
  },
  {
    id:    'hospital-dashboard',
    title: 'Hospital Dashboard',
    desc:  'Unified command center for hospital administrators with real-time floor maps, bed occupancy, and staff alerts.',
    icon:  '🏥',
    size:  'large',
  },
  {
    id:    'health-reports',
    title: 'Health Reports',
    desc:  'AI-generated patient health summaries, trend analysis, and physician-ready reports.',
    icon:  '📊',
    size:  'normal',
  },
  {
    id:    'predictive-analytics',
    title: 'Predictive Analytics',
    desc:  'Population health analytics to identify at-risk cohorts before admission surges.',
    icon:  '📈',
    size:  'normal',
  },
  {
    id:    'cloud-sync',
    title: 'Cloud Sync',
    desc:  'Encrypted, HIPAA-aligned cloud infrastructure with sub-second global synchronization.',
    icon:  '☁️',
    size:  'normal',
  },
  {
    id:    'secure-data',
    title: 'Secure Patient Data',
    desc:  'End-to-end encryption, zero-knowledge architecture, and full audit trails for every record.',
    icon:  '🔒',
    size:  'normal',
  },
];

export const safevitalsTechStack = [
  { label: 'Python',           category: 'AI' },
  { label: 'TensorFlow',       category: 'AI' },
  { label: 'OpenCV',           category: 'AI' },
  { label: 'FastAPI',          category: 'Backend' },
  { label: 'React',            category: 'Frontend' },
  { label: 'TypeScript',       category: 'Frontend' },
  { label: 'Supabase',         category: 'Backend' },
  { label: 'ESP32',            category: 'Hardware' },
  { label: 'Arduino',          category: 'Hardware' },
  { label: 'Raspberry Pi',     category: 'Hardware' },
  { label: 'MQTT',             category: 'IoT' },
  { label: 'Unreal Engine',    category: 'XR' },
  { label: 'Machine Learning', category: 'AI' },
  { label: 'Digital Twins',    category: 'Healthcare AI' },
  { label: '5G / B5G',         category: 'Connectivity' },
  { label: 'Edge Computing',   category: 'Infrastructure' },
  { label: 'Cloud',            category: 'Infrastructure' },
];

export const safevitalsMetrics = [
  { value: '72h',    label: 'Advance Warning',    desc: 'AI prediction window' },
  { value: '<10ms',  label: 'Alert Latency',      desc: 'Emergency SOS speed' },
  { value: '24/7',   label: 'Continuous Monitor', desc: 'Always-on coverage' },
  { value: '∞',      label: 'Patients Reachable', desc: 'Global scale vision' },
];

export const safevitalsRoadmap = [
  { phase: 'Prototype',        status: 'done',        desc: 'First working device' },
  { phase: 'Validation',       status: 'done',        desc: 'Clinical data testing' },
  { phase: 'Pilot Hospitals',  status: 'in-progress', desc: 'Partner hospital trials' },
  { phase: 'Insurance',        status: 'upcoming',    desc: 'Reimbursement pathways' },
  { phase: 'Global Scale',     status: 'vision',      desc: 'International expansion' },
];
