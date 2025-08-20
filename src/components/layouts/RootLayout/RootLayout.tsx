import { ThemeProvider } from '@mui/material';
import { Suspense, useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import NavMenu from '@components/navMenu/HorizontalNavMenu/HorizontalNavMenu';
import PageLoader from '@components/PageLoader/PageLoader';
import AuthModal from '@components/auth/AuthModal/AuthModal';
import { GlobalContextProvider } from '@store/globalContext';
import { useIsMobile } from '@hooks/useIsMobile';

import styles from './RootLayout.module.scss';
import { MuiTheme } from '../../../theme';

const Layout = () => {
  const isMobile = useIsMobile();

  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleShowAuthModal = useCallback(
    () => setShowAuthModal((prev) => !prev),
    [setShowAuthModal]
  );

  return (
    <GlobalContextProvider>
      <ThemeProvider theme={MuiTheme}>
        <div className={styles['page-layout']}>
          <Header onSignUp={handleShowAuthModal} />

          {!isMobile && <NavMenu />}

          <div className={styles['scrollable-content']}>
            <main className={styles['page-content']}>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>

              {showAuthModal && <AuthModal isOpen={showAuthModal} onClose={handleShowAuthModal} />}
            </main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </GlobalContextProvider>
  );
};

export default Layout;
