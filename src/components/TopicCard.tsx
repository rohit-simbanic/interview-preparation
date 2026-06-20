import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Code,
  FileText,
  Layers,
  Database,
  Globe,
  Server,
  Binary,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface TopicCardProps {
  categoryKey: string;
  detail: { name: string; count: number };
  index: number;
}

const getCategoryIcon = (key: string) => {
  switch (key) {
    case 'react':
      return <Code className="h-5.5 w-5.5 text-indigo-500" />;
    case 'typescript':
      return <FileText className="h-5.5 w-5.5 text-blue-500" />;
    case 'javascript':
      return <FileText className="h-5.5 w-5.5 text-yellow-500" />;
    case 'css':
      return <Layers className="h-5.5 w-5.5 text-pink-500" />;
    case 'node-express':
      return <Globe className="h-5.5 w-5.5 text-emerald-500" />;
    case 'mongodb':
      return <Database className="h-5.5 w-5.5 text-green-500" />;
    case 'nextjs':
      return <Globe className="h-5.5 w-5.5 text-slate-800 dark:text-white" />;
    case 'state-query':
      return <Layers className="h-5.5 w-5.5 text-purple-500" />;
    case 'system-design':
      return <Server className="h-5.5 w-5.5 text-cyan-500" />;
    case 'dsa':
      return <Binary className="h-5.5 w-5.5 text-orange-500" />;
    default:
      return <BookOpen className="h-5.5 w-5.5 text-indigo-500" />;
  }
};

const MotionLink = motion(Link);

export function TopicCard({ categoryKey, detail, index }: TopicCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  
  // Motion values for normalized cursor positions (-0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to avoid abrupt jumps
  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // Map normalized mouse inputs to tilt values
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of cursor relative to element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalized position relative to center of element
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 + 0.1, duration: 0.35, ease: 'easeOut' }}
      className="h-full"
      style={{ perspective: 1000 }}
    >
      <MotionLink
        ref={cardRef}
        to={`/topic/${categoryKey}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
          willChange: 'transform',
        }}
        className="group relative flex flex-col justify-between h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-500/30 dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-indigo-500/20 transition-colors duration-300 select-none cursor-pointer"
      >
        <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} className="space-y-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-400 group-hover:scale-110 transition-transform">
            {getCategoryIcon(categoryKey)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {detail.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-light">
              Full collection of {detail.count} questions covering core concepts, design patterns, and exercises.
            </p>
          </div>
        </div>

        <div 
          style={{ transform: 'translateZ(20px)' }}
          className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800"
        >
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
            {detail.count} Questions
          </span>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            <span>Start</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </MotionLink>
    </motion.div>
  );
}
