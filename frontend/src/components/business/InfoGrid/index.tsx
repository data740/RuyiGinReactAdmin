import styles from './InfoGrid.module.css';
import type { SystemInfo } from '@/types/dashboard';

interface InfoGridProps {
  data: SystemInfo[];
}

export function InfoGrid({ data }: InfoGridProps) {
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <div className={styles.item} key={item.label}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.value}>{item.value}</span>
        </div>
      ))}
    </div>
  );
}
