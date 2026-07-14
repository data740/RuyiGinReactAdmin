import { Card } from '@/components/ui';
import styles from './StatCard.module.css';
import type { StatCardData } from '@/types/dashboard';

interface StatCardProps extends StatCardData {
  gradient?: string;
}

export function StatCard({ title, value, footer, trend, trendValue, gradient }: StatCardProps) {
  return (
    <Card gradient={gradient}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
      <div className={styles.footer}>
        {trend && trendValue ? (
          <>
            {footer} <span className={styles[trend]}>{trend === 'up' ? '↑' : '↓'} {trendValue}</span>
          </>
        ) : (
          footer
        )}
      </div>
    </Card>
  );
}
