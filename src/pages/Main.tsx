import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Experience from '../pages/Experience';
import Project from './Project';
import About from './About';
import styles from './Main.module.css';
import arrowUp from '../assets/arrow-up.svg'
import { useEffect, useState } from 'react';

const Main = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {showTopBtn ? (
        <button onClick={goToTop} id={styles.scroll_btn}>
          <img src={arrowUp} alt="Arrow Up" />
        </button>
      ) : (
        <></>
      )}
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
    </>
  );
};

export default Main;
