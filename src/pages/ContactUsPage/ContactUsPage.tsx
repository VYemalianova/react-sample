import styles from './ContactUsPage.module.scss';

import { loadIconsFromFolder } from '@utils/loadIcons';

const SOCIAL_NETWORK_LIST = ['facebook', 'instagram', 'pinterest', 'reddit', 'twitter'];

const ContactUsPage = () => {
  const icons = loadIconsFromFolder('social-icons');

  return (
    <div className={`content-wrapper color-gun-powder ${styles['content-wrapper']}`}>
      <div className={`${styles['contact-us-content']} mt-xl`}>
        <h1 className="gradient--text">Contact Our Team</h1>
        <p>
          We exist! You can fill out our form to ask a question or tell us more about your
          inquiries. This is the fastest and easiest way to reach us. We honestly and
          enthusiastically read each and every message we get. And we always write back.
        </p>
      </div>

      <div className={styles['social-media-content']}>
        <h4 className="text-caps">You can also follow us on social media:</h4>
        <div className={styles['social-media-icons']}>
          {SOCIAL_NETWORK_LIST.map((network, index) => (
            <img key={index} src={icons[network]} className="cursor-pointer" />
          ))}
        </div>

        <div className={styles['mailto-wrapper']}>
          <h4 className="text-caps">our email:</h4>
          <a
            href="mailto:example@example.com?subject=contact with support"
            className="link__underline"
          >
            support@astroyod.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
