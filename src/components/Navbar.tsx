import MenuIcon from '@mui/icons-material/Menu';
import styles from './Navbar.module.css';
import logo from '../assets/Logo.svg';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_lead}>
        <img src={logo} alt='Logo' />
        <p>Syafiq Fadli</p>
      </div>
      <div className={styles.nav_list_mobile}>
        <MenuIcon fontSize='large' />
      </div>
      <div className={styles.nav_list_web}>
        <a href='#home' className={styles.nav_link}>
          Home
        </a>
        <a href='#about' className={styles.nav_link}>
          About
        </a>
        <a href='#experience' className={styles.nav_link}>
          Experience
        </a>
        <a href='#project' className={styles.nav_link}>
          Project
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
