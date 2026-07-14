import type { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import { cn } from '@/utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps) {
  return (
    <button className={cn(styles.btn, styles[variant], styles[size], className)} {...props}>
      {children}
    </button>
  );
}
