import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { BackgroundOrbs } from '../components/BackgroundOrbs';
import styles from './AdminLayout.module.css';

export function AdminLayout() {
  return (
    <div className={styles.layout}>
      <BackgroundOrbs />
      <Header />
      <div className={styles.body}>
        <Sidebar />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
