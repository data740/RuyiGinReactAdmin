import { useLocation, useNavigate } from 'react-router-dom';
import { menuConfig } from '@/config/menu';
import { cn } from '@/utils/cn';
import styles from './Sidebar.module.css';

export function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className={styles.sidebar}>
      <ul className={styles.menu}>
        {menuConfig.map((item) => (
          <li
            key={item.key}
            className={cn(styles.item, location.pathname === item.key && styles.active)}
            onClick={() => navigate(item.key)}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
