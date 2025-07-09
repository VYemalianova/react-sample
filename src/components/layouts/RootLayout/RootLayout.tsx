import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header/Header';

import styles from './RootLayout.module.scss';
import { MuiTheme } from '../../../theme';

const Layout = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <div className={styles['page-layout']}>
        <Header />
        <main className={styles['page-content']}>
          <Outlet />
        </main>
        <footer>Footer</footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
