import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ECGLine from './ECGLine';

function VitalStat({ label, value, unit, animate = true }) {
  const [displayed, setDisplayed] = useState(value);

  useEffect(() => {
    if (!animate) return;
    const interval = setInterval(() => {
      const variation = (Math.random() - 0.5) * 3;
      const base      = typeof value === 'number' ? value : parseInt(value);
      setDisplayed(Math.round(base + variation));
    }, 3200 + Math.random() * 2000);
    return () => clearInterval(interval);
  }, [value, animate]);

  return (
    <div className="flex flex-col gap-0.5">
      <span
        className="text-[9px] uppercase tracking-wider"
        style={{ color: '#8A8783', fontFamily: 'var(--font-body)' }}
      >
        {label}
      </span>
      <div className="flex items-baseline gap-1">
        <span
          className="text-lg font-bold tabular-nums leading-none"
          style={{ color: '#0A0A0A', fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}
        >
          {displayed}
        </span>
        <span className="text-[9px]" style={{ color: '#8A8783', fontFamily: 'var(--font-body)' }}>
          {unit}
        </span>
      </div>
    </div>
  );
}

function AIRiskBadge({ score = 12 }) {
  const riskLevel = score < 20 ? 'Low Risk' : score < 50 ? 'Moderate' : 'High Risk';
  const color     = score < 20 ? '#494847'  : score < 50 ? '#2A2928'  : '#0A0A0A';

  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5 rounded-xl"
      style={{
        background: 'rgba(10,10,10,0.05)',
        border:     '1px solid rgba(10,10,10,0.10)',
      }}
    >
      <motion.div
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: color }}
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <div>
        <p className="text-[9px] uppercase tracking-wider" style={{ color: '#8A8783', fontFamily: 'var(--font-body)' }}>
          AI Risk Score
        </p>
        <p className="text-sm font-bold leading-tight" style={{ color, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
          {score}% <span className="text-[10px] font-normal">{riskLevel}</span>
        </p>
      </div>
    </div>
  );
}

function ConnectionStatus({ label }) {
  return (
    <div className="flex items-center gap-1.5">
      <motion.div
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: '#6B6967' }}
        animate={{ opacity: [1, 0.35, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: Math.random() }}
      />
      <span className="text-[9px]" style={{ color: '#8A8783', fontFamily: 'var(--font-body)' }}>{label}</span>
    </div>
  );
}

export default function HealthDashboard() {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const t  = setTimeout(() => setAlert(true),  4500);
    const t2 = setTimeout(() => setAlert(false), 7200);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Soft glow behind card */}
      <div
        className="absolute -inset-6 rounded-[3rem] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(10,10,10,0.06) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
        aria-hidden="true"
      />

      {/* Main dashboard card */}
      <motion.div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: 'rgba(212,209,204,0.80)',
          border: '1px solid rgba(255,255,255,0.30)',
          boxShadow: '0 24px 80px rgba(10,10,10,0.10), 0 4px 16px rgba(10,10,10,0.06), inset 0 1px 0 rgba(255,255,255,0.60)',
          backdropFilter: 'blur(24px) saturate(150%)',
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-5 py-3.5"
          style={{
            background: 'rgba(10,10,10,0.03)',
            borderBottom: '1px solid rgba(10,10,10,0.06)',
          }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(10,10,10,0.15)' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(10,10,10,0.10)' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(10,10,10,0.06)' }} />
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#494847' }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <span
              className="text-[11px] font-semibold"
              style={{ color: '#494847', fontFamily: 'var(--font-body)' }}
            >
              SafeVitals XR · Live
            </span>
          </div>
          <span className="text-[10px]" style={{ color: '#8A8783', fontFamily: 'var(--font-body)' }}>
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>

        {/* Patient info + AI Risk */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderBottom: '1px solid rgba(10,10,10,0.06)' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold"
              style={{ background: 'rgba(10,10,10,0.07)', color: '#0A0A0A', fontFamily: 'var(--font-heading)' }}
            >
              P1
            </div>
            <div>
              <p className="text-[11px] font-semibold leading-none" style={{ color: '#0A0A0A', fontFamily: 'var(--font-body)' }}>
                Patient ID: #4821
              </p>
              <p className="text-[10px] mt-0.5" style={{ color: '#8A8783', fontFamily: 'var(--font-body)' }}>
                Ward 3 · Wearable Active
              </p>
            </div>
          </div>
          <AIRiskBadge score={alert ? 48 : 12} />
        </div>

        {/* ECG Section */}
        <div
          className="px-5 py-4"
          style={{ borderBottom: '1px solid rgba(10,10,10,0.06)' }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span
              className="text-[10px] uppercase tracking-wider font-medium"
              style={{ color: '#8A8783', fontFamily: 'var(--font-body)' }}
            >
              ECG — Real Time
            </span>
            <span className="text-[10px] font-semibold" style={{ color: '#494847', fontFamily: 'var(--font-body)' }}>
              Normal Sinus
            </span>
          </div>
          <ECGLine color="#494847" height={52} width={320} className="w-full" />
        </div>

        {/* Vitals grid */}
        <div
          className="grid grid-cols-4 gap-3 px-5 py-4"
          style={{ borderBottom: '1px solid rgba(10,10,10,0.06)' }}
        >
          <VitalStat label="Heart Rate"  value={72}     unit="bpm"  />
          <VitalStat label="SpO₂"        value={98}     unit="%"    />
          <VitalStat label="BP"          value="120/80" unit="mmHg" animate={false} />
          <VitalStat label="Temp"        value={36.8}   unit="°C"   />
        </div>

        {/* Connection status + alert */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderBottom: '1px solid rgba(10,10,10,0.05)' }}
        >
          <div className="flex gap-4">
            <ConnectionStatus label="Wearable"   />
            <ConnectionStatus label="Cloud Sync" />
            <ConnectionStatus label="XR Ready"   />
          </div>
          <AnimatePresence>
            {alert && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                style={{ background: 'rgba(10,10,10,0.08)', border: '1px solid rgba(10,10,10,0.14)' }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#0A0A0A' }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <span className="text-[10px] font-semibold" style={{ color: '#0A0A0A', fontFamily: 'var(--font-body)' }}>
                  Alert
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* AI Analysis strip */}
        <div
          className="flex items-center gap-3 px-5 py-3"
          style={{ background: 'rgba(10,10,10,0.02)' }}
        >
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: '#8A8783', fontFamily: 'var(--font-body)' }}>
              AI Analysis
            </p>
            <motion.p
              className="text-[11px] font-medium leading-snug"
              style={{ color: '#494847', fontFamily: 'var(--font-body)' }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {alert
                ? 'Elevated stress markers detected. Notify physician.'
                : 'All vitals within normal parameters. Monitoring active.'}
            </motion.p>
          </div>
          <div
            className="px-2.5 py-1 rounded-lg text-[10px] font-semibold"
            style={{ background: 'rgba(10,10,10,0.06)', color: '#494847', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}
          >
            View Report →
          </div>
        </div>
      </motion.div>

      {/* Floating wearable badge */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{
          background: '#0A0A0A',
          boxShadow: '0 8px 24px rgba(10,10,10,0.22)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        aria-hidden="true"
      >
        <span className="text-lg">⌚</span>
      </motion.div>

      {/* XR badge */}
      <motion.div
        className="absolute -top-4 -left-3 px-3 py-2 rounded-xl flex items-center gap-2"
        style={{
          background: 'rgba(212,209,204,0.92)',
          border: '1px solid rgba(255,255,255,0.30)',
          boxShadow: '0 4px 16px rgba(10,10,10,0.08)',
        }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        aria-hidden="true"
      >
        <span className="text-sm">🥽</span>
        <span className="text-[10px] font-semibold" style={{ color: '#494847', fontFamily: 'var(--font-body)' }}>
          XR Mode
        </span>
      </motion.div>

      {/* Doctor portal badge */}
      <motion.div
        className="absolute -top-2 right-4 px-3 py-1.5 rounded-xl flex items-center gap-1.5"
        style={{
          background: 'rgba(212,209,204,0.88)',
          border: '1px solid rgba(255,255,255,0.28)',
          boxShadow: '0 4px 12px rgba(10,10,10,0.06)',
        }}
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
        aria-hidden="true"
      >
        <span className="text-xs">🏥</span>
        <span className="text-[10px] font-semibold" style={{ color: '#6B6967', fontFamily: 'var(--font-body)' }}>
          Doctor Portal
        </span>
      </motion.div>
    </div>
  );
}
