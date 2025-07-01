import styles from './Footer.module.scss';

const SOCIAL_NETWORK_LIST = ['facebook', 'instagram', 'pinterest', 'reddit', 'twitter'];

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footer} gradient--selago-wisppink`}>
        <div className={styles['footer-content']}>
          <div className={styles['footer-left-content']}>
            <div className={styles['social-media-wrapper']}>
              <div className={styles['logo-wrapper']}>
                <img src="./src/assets/lock.svg" />
                <span className="gradient--text">AstroYod</span>
              </div>

              <h4 className="uppercase-title mt-m">follow us:</h4>
              <div className={styles['social-media-icons']}>
                {SOCIAL_NETWORK_LIST.map((network, index) => (
                  <img
                    key={index}
                    src={`./src/assets/social-network-icons/${network}.svg`}
                    className="cursor-pointer"
                  />
                ))}
              </div>
            </div>

            <div className={styles['more-links-wrapper']}>
              <a className="cursor-pointer">About us</a>
              <a className="cursor-pointer">Contact us</a>
              <a className="cursor-pointer">Privacy Policy </a>
              <a className="cursor-pointer">Terms of Service </a>
            </div>
          </div>

          <div className={styles['footer-right-content']}>
            <div className={styles['useful-link-wrapper']}>
              <img src="./src/assets/50-email_horoscopes.svg" />
              <a className="link">Email Horoscope</a>
            </div>
            <div className="vertical-divider"></div>
            <div className={styles['useful-link-wrapper']}>
              <img src="./src/assets/50-free_reports_readings.svg" />
              <a className="link">Free Reports Readings</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
