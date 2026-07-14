import type { ReactNode } from 'react';
import styles from './Card.module.css';
import { cn } from '@/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export function Card({ children, className, gradient }: CardProps) {
  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.glow}></div>
      {gradient && (
        <div className={styles.topBar} style={{ background: gradient }}></div>
      )}
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
