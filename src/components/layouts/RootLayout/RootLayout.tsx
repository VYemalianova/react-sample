import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import NavMenu from '@components/NavMenu/NavMenu';
import { GlobalContextProvider } from '@store/context';
import { useIsMobile } from '@hooks/useIsMobile';

import styles from './RootLayout.module.scss';
import { MuiTheme } from '../../../theme';

const Layout = () => {
  const isMobile = useIsMobile();

  return (
    <GlobalContextProvider>
      <ThemeProvider theme={MuiTheme}>
        <div className={styles['page-layout']}>
          <Header />

          {!isMobile && <NavMenu />}

          <div className={styles['scrollable-content']}>
            <main className={styles['page-content']}>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default Layout;
