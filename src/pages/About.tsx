import styles from './About.module.css';
import syafiq from '../assets/Syafiq.jpg';

const About = () => {
  return (
    <main className={styles.container} id='about'>
      <div className={styles.con_header}>
        <div className={styles.con_title}>
          <p id={styles.title_one}>About</p>
          <p>Me</p>
        </div>
        <div className={styles.con_desc}>
          <p>You cannot love with</p>
          <p>what you do not know.</p>
        </div>
      </div>
      <div className={styles.me}>
        <img src={syafiq} alt='Syafiq' />
        <div className={styles.name}>
          <p id={styles.first}>Syafiq</p>
          <p>Fadli</p>
        </div>
      </div>
      <div className={styles.me_desc}>
        <p>
          Hi! My name is
          <b style={{ color: 'antiquewhite' }}> Syafiq Syahmi Bin Mohd Fadli</b>
          . I have 4 years experience in programming since my Foundation Level.
          With a strong educational background and a passion for professional
          growth, I am ready to embark on a fulfilling career and seeking for a
          job in my chosen field that bring my skill in frontend development. I
          am actively seeking opportunities to apply my abilities and embark on
          a rewarding career journey.
        </p>
      </div>
    </main>
  );
};

export default About;
