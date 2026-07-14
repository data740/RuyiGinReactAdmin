import type { ReactNode } from 'react';
import styles from './Table.module.css';
import { cn } from '@/utils/cn';

interface Column<T> {
  key: string;
  title: string;
  render?: (record: T) => ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

export function Table<T extends object>({ columns, data, className }: TableProps<T>) {
  return (
    <table className={cn(styles.table, className)}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={col.key}>
                {col.render ? col.render(record) : String((record as Record<string, unknown>)[col.key] ?? '')}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
