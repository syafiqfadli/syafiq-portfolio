import { Link } from 'react-router-dom';
import character from '../assets/Character.svg';
import github from '../assets/socials/Github.svg';
import linkedIn from '../assets/socials/Linkedin.svg';
import styles from './Home.module.css';

const goToAbout = () => {
  var access = document.getElementById('about');
  access!.scrollIntoView();
}

const Home = () => {
  return (
    <main className={styles.container} id='home'>
      <div className={styles.con_left}>
        <div className={styles.text}>
          <p>Hello people,</p>
          <p id={styles.bold}>I am a Full Stack Developer</p>
          <p>Welcome to my portfolio website</p>
        </div>
        <button onClick={goToAbout}>Learn more about me</button>
        <div className={styles.icon}>
          <Link to='https://github.com/syafiqfadli' target='_blank'>
            <img src={github} alt='Github' />
          </Link>
          <Link
            to='https://www.linkedin.com/in/syafiq-fadli-70b9b6211/'
            target='_blank'
          >
            <img src={linkedIn} alt='Linked In' />
          </Link>
        </div>
      </div>
      <div className={styles.con_right}>
        <img src={character} alt='Character' />
      </div>
    </main>
  );
};

export default Home;
