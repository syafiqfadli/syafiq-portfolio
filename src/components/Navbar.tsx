import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Navbar.module.css';
import logo from '../assets/Logo.svg';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const clickMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_lead}>
        <img src={logo} alt='Logo' />
        <p>Syafiq Fadli</p>
      </div>
      <div className={styles.nav_list_mobile}>
        {isMenuClicked ? (
          <CloseIcon
            fontSize='large'
            onClick={clickMenu}
            className={styles.hamburger}
          />
        ) : (
          <MenuIcon
            fontSize='large'
            onClick={clickMenu}
            className={styles.hamburger}
          />
        )}
        {isMenuClicked ? (
          <div className={styles.mobile_link}>
            <a href='#home' className={styles.nav_link} onClick={clickMenu}>
              Home
            </a>
            <a href='#about' className={styles.nav_link} onClick={clickMenu}>
              About
            </a>
            <a
              href='#experience'
              className={styles.nav_link}
              onClick={clickMenu}
            >
              Experience
            </a>
            <a href='#project' className={styles.nav_link} onClick={clickMenu}>
              Project
            </a>
          </div>
        ) : (
          <></>
        )}
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
