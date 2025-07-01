import { ThemeProvider } from '@mui/material';

import styles from './Layout.module.scss';

import { MuiTheme } from '../../theme';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <div className={styles['page-layout']}>
        <Header />

        <main className={styles['page-content']}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
