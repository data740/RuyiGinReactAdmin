export interface StatCardData {
  title: string;
  value: string;
  footer: string;
  trend?: 'up' | 'down';
  trendValue?: string;
}

export interface ActionRecord {
  operator: string;
  type: string;
  typeColor: 'blue' | 'green' | 'orange' | 'red' | 'purple';
  description: string;
  time: string;
}

export interface SystemInfo {
  label: string;
  value: string;
}
