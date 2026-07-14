import type { MenuItem } from '@/types/menu';

export const menuConfig: MenuItem[] = [
  { key: '/', label: '控制台', icon: '◈' },
  { key: '/users', label: '用户管理', icon: '◇' },
  { key: '/roles', label: '角色管理', icon: '◆' },
  { key: '/menus', label: '菜单管理', icon: '□' },
  { key: '/monitor', label: '系统监控', icon: '○' },
  { key: '/logs', label: '日志管理', icon: '△' },
];
