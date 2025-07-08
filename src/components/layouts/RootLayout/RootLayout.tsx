import { Outlet } from 'react-router-dom';
import styles from './RootLayout.module.scss';

const Layout = () => {
  return (
    <div className={styles['page-layout']}>
      <header>Header</header>
      <main className={styles['page-content']}>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
