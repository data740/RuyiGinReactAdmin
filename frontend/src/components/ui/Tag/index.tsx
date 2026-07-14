import type { ReactNode } from 'react';
import styles from './Tag.module.css';
import { cn } from '@/utils/cn';

type TagColor = 'blue' | 'green' | 'orange' | 'red' | 'purple';

interface TagProps {
  color?: TagColor;
  children: ReactNode;
}

export function Tag({ color = 'blue', children }: TagProps) {
  return (
    <span className={cn(styles.tag, styles[color])}>
      {children}
    </span>
  );
}
