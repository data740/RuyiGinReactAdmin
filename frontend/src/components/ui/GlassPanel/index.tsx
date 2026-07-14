import type { ReactNode } from 'react';
import styles from './GlassPanel.module.css';
import { cn } from '@/utils/cn';

interface GlassPanelProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function GlassPanel({ title, children, className }: GlassPanelProps) {
  return (
    <div className={cn(styles.panel, className)}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </div>
  );
}
