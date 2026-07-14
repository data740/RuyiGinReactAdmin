import { request } from '../request';
import type { StatCardData, ActionRecord, SystemInfo } from '@/types/dashboard';

export function getDashboardStats() {
  return request<StatCardData[]>('/api/dashboard/stats');
}

export function getRecentActions() {
  return request<ActionRecord[]>('/api/dashboard/actions');
}

export function getSystemInfo() {
  return request<SystemInfo[]>('/api/dashboard/system-info');
}
