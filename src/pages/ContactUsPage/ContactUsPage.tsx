import styles from './ContactUsPage.module.scss';

const SOCIAL_NETWORK_LIST = ['facebook', 'instagram', 'pinterest', 'reddit', 'twitter'];

const ContactUsPage = () => {
  return (
    <div className={`content-wrapper color-gun-powder ${styles.content}`}>
      <div>
        <h1 className="gradient--text">Contact Our Team</h1>
        <p>
          We exist! You can fill out our form to ask a question or tell us more about your
          inquiries. This is the fastest and easiest way to reach us. We honestly and
          enthusiastically read each and every message we get. And we always write back.
        </p>
      </div>

      <div>
        <h4 className="uppercase-title">You can also follow us on social media:</h4>
        <div className={styles['social-media-icons']}>
          {SOCIAL_NETWORK_LIST.map((network, index) => (
            <img
              key={index}
              src={`./src/assets/social-network-icons/${network}.svg`}
              className="cursor-pointer"
            />
          ))}
        </div>

        <div className={styles['mailto-wrapper']}>
          <h4 className="uppercase-title">our email:</h4>
          <a href="mailto:example@example.com?subject=contact with support" className="link email">
            support@astroyod.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
