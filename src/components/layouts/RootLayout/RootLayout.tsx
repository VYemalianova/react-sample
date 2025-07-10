import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import NavMenu from '@components/NavMenu/NavMenu';
import { GlobalContextProvider } from '@store/GlobalContext';

import styles from './RootLayout.module.scss';
import { MuiTheme } from '../../../theme';

const Layout = () => {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={MuiTheme}>
        <div className={styles['page-layout']}>
          <Header />
          <NavMenu />
          <main className={styles['page-content']}>
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default Layout;
