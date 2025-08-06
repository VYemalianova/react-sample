import { ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import NavMenu from '@components/NavMenu/NavMenu';
import PageLoader from '@components/PageLoader/PageLoader';
import AuthModal from '@components/auth/AuthModal/AuthModal';
import { GlobalContextProvider } from '@store/globalContext';
import { useIsMobile } from '@hooks/useIsMobile';

import styles from './RootLayout.module.scss';
import { MuiTheme } from '../../../theme';

const Layout = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <GlobalContextProvider>
      <ThemeProvider theme={MuiTheme}>
        <div className={styles['page-layout']}>
          <Header onSignUp={() => setShowAuthModal(true)} />

          {!isMobile && <NavMenu />}

          <div className={styles['scrollable-content']}>
            <main className={styles['page-content']}>
              {loading && <PageLoader />}
              {!loading && <Outlet />}

              {showAuthModal && (
                <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
              )}
            </main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default Layout;
