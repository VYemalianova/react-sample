import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 820;
const checkIsMobile = (breakpoint: number) => window.innerWidth <= breakpoint;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => checkIsMobile(MOBILE_BREAKPOINT));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile(MOBILE_BREAKPOINT));
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};
