import Lottie from 'lottie-react';

import dotsloader from '@assets/dotsloader.json';

import styles from './PageLoader.module.scss';

const PageLoader = () => {
  return (
    <div className={styles['page-loader']}>
      <Lottie animationData={dotsloader} loop />
    </div>
  );
};

export default PageLoader;
