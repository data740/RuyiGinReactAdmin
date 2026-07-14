import { useApi } from '@/hooks/useApi';
import { GlassPanel, Table, Tag } from '@/components/ui';
import { StatCard, InfoGrid } from '@/components/business';
import type { StatCardData, ActionRecord, SystemInfo } from '@/types/dashboard';
import styles from './Dashboard.module.css';

const cardGradients = [
  'linear-gradient(90deg, #1e90ff, #00bcd4, #7c4dff)',
  'linear-gradient(90deg, #00bcd4, #26c6da, #00e5ff)',
  'linear-gradient(90deg, #7c4dff, #b388ff, #ea80fc)',
  'linear-gradient(90deg, #00e676, #69f0ae, #b9f6ca)',
];

const actionColumns = [
  { key: 'operator', title: '操作人' },
  {
    key: 'type',
    title: '操作类型',
    render: (record: ActionRecord) => <Tag color={record.typeColor}>{record.type}</Tag>,
  },
  { key: 'description', title: '描述' },
  { key: 'time', title: '时间' },
];

export default function Dashboard() {
  const { data: stats } = useApi<StatCardData[]>('/api/dashboard/stats');
  const { data: actions } = useApi<ActionRecord[]>('/api/dashboard/actions');
  const { data: systemInfo } = useApi<SystemInfo[]>('/api/dashboard/system-info');

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>控制台</h2>
        <span className={styles.breadcrumb}>首页 / 控制台</span>
      </div>

      <div className={styles.cards}>
        {stats?.map((item, idx) => (
          <StatCard key={item.title} {...item} gradient={cardGradients[idx]} />
        ))}
      </div>

      <GlassPanel title="最近操作" className={styles.section}>
        {actions && <Table columns={actionColumns} data={actions} />}
      </GlassPanel>

      <GlassPanel title="系统信息" className={styles.section}>
        {systemInfo && <InfoGrid data={systemInfo} />}
      </GlassPanel>
    </>
  );
}
