import { SiPython, SiBlender, SiRaspberrypi, SiArduino } from 'react-icons/si';
import { Cpu, Wifi, BarChart3, Network, Globe, Layers, Code2, Radio, Activity } from 'lucide-react';

export const skills = [
  // Programming
  { name: 'Python', icon: SiPython, category: 'Programming', color: '#3b82f6' },
  { name: 'Java', icon: Code2, category: 'Programming', color: '#f97316' },
  { name: 'C / Embedded C', icon: Activity, category: 'Programming', color: '#00d4ff' },
  // Engineering Tools
  { name: 'MATLAB', icon: BarChart3, category: 'Tools', color: '#f59e0b' },
  { name: 'Wireshark', icon: Network, category: 'Tools', color: '#22c55e' },
  { name: 'Cisco Packet Tracer', icon: Globe, category: 'Tools', color: '#0ea5e9' },
  // Hardware
  { name: 'Raspberry Pi', icon: SiRaspberrypi, category: 'Hardware', color: '#ec4899' },
  { name: 'Arduino / ESP32', icon: SiArduino, category: 'Hardware', color: '#22c55e' },
  { name: 'IoT Systems', icon: Wifi, category: 'Hardware', color: '#00d4ff' },
  { name: 'Embedded Systems', icon: Cpu, category: 'Hardware', color: '#a855f7' },
  // 3D / Creative
  { name: 'Unreal Engine 5', icon: Layers, category: '3D / Creative', color: '#7c3aed' },
  { name: 'Blender 3D', icon: SiBlender, category: '3D / Creative', color: '#f97316' },
  // Telecom
  { name: '5G / 6G Research', icon: Radio, category: 'Telecom', color: '#f0abfc' },
];
