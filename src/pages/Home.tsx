import { Link } from 'react-router-dom';
import character from '../assets/Character.svg';
import github from '../assets/Github.svg';
import linkedIn from '../assets/Linkedin.svg';
import shopee from '../assets/Shopee.png';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.container} id='home'>
      <div className={styles.con_left}>
        <div className={styles.text}>
          <p>Hello people,</p>
          <p id={styles.bold}>I am a Full Stack Developer</p>
          <p>Welcome to my portfolio website</p>
        </div>
        <button>Learn more about me</button>
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
          <Link to='https://shopee.com.my/syafiqs282' target='_blank'>
            <img id={styles.shopee} src={shopee} alt='Shopee' />
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
