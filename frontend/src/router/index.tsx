import { createBrowserRouter } from 'react-router-dom';
import { AdminLayout } from '@/layouts/AdminLayout';
import Dashboard from '@/pages/Dashboard';
import UserManage from '@/pages/UserManage';
import RoleManage from '@/pages/RoleManage';
import MenuManage from '@/pages/MenuManage';
import SystemMonitor from '@/pages/SystemMonitor';
import LogManage from '@/pages/LogManage';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    element: <AdminLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/users', element: <UserManage /> },
      { path: '/roles', element: <RoleManage /> },
      { path: '/menus', element: <MenuManage /> },
      { path: '/monitor', element: <SystemMonitor /> },
      { path: '/logs', element: <LogManage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);
