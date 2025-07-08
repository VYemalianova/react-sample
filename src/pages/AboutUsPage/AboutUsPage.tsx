import styles from './AboutUsPage.module.scss';

const AboutUsPage = () => {
  return (
    <div className={`content-wrapper color-gun-powder ${styles['content-wrapper']}`}>
      <h1 className="gradient--text mt-xl">About Horoscopes</h1>
      <p>
        Astrology.com is the leading astrology media brand. With personalized readings and a vast
        library of astrology information, our site has the most to offer for beginners, learners,
        and professionals alike.
      </p>

      <p>
        Astrology.com offers cutting edge content, fresh daily horoscopes, detailed astrology
        reports, and a hyper-personalized subscription service, Astrology+. Coming from a team who
        loves astrology as much as you do, Astrology+ is the first service to offer real-time
        transit notifications, birth chart analysis, live Q&As, and personalized moon reports — all
        in one place!
      </p>
    </div>
  );
};

export default AboutUsPage;
