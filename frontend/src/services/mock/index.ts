import type { StatCardData, ActionRecord, SystemInfo } from '@/types/dashboard';

export const dashboardStats: StatCardData[] = [
  { title: '用户总数', value: '1,286', footer: '较昨日', trend: 'up', trendValue: '12%' },
  { title: '今日访问', value: '3,542', footer: '较昨日', trend: 'up', trendValue: '8%' },
  { title: '订单数量', value: '896', footer: '较昨日', trend: 'down', trendValue: '3%' },
  { title: '系统消息', value: '28', footer: '未读消息' },
];

export const recentActions: ActionRecord[] = [
  { operator: '管理员', type: '登录', typeColor: 'blue', description: '系统登录成功', time: '2026-07-14 10:30' },
  { operator: '张三', type: '新增', typeColor: 'green', description: '新增用户「李四」', time: '2026-07-14 09:15' },
  { operator: '王五', type: '修改', typeColor: 'orange', description: '修改角色权限', time: '2026-07-14 08:42' },
  { operator: '管理员', type: '删除', typeColor: 'red', description: '删除过期日志', time: '2026-07-13 18:00' },
  { operator: '张三', type: '导出', typeColor: 'purple', description: '导出用户列表', time: '2026-07-13 16:30' },
];

export const systemInfo: SystemInfo[] = [
  { label: '操作系统', value: 'Windows 11' },
  { label: '服务器', value: 'Gin v1.9' },
  { label: '数据库', value: 'MySQL 8.0' },
  { label: '前端框架', value: 'React 19' },
  { label: '缓存', value: 'Redis 7.0' },
  { label: '运行时长', value: '15 天 3 小时' },
];

const mockMap: Record<string, unknown> = {
  '/api/dashboard/stats': dashboardStats,
  '/api/dashboard/actions': recentActions,
  '/api/dashboard/system-info': systemInfo,
};

export function getMockData(url: string): unknown {
  return mockMap[url] ?? null;
}
