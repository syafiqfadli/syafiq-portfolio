import { LocationOn, Phone, Email } from '@mui/icons-material';
import styles from './Footer.module.css';

const Footer = () => {
  const iconStyle = {
    color: 'white',
    fontSize: '150%',
    backgroundColor: '#263138',
    padding: '10px',
    borderRadius: '50%',
  };

  return (
    <footer className={styles.container}>
      <div className={styles.contact}>
        <p id={styles.title}>Contact</p>
        <div className={styles.contact_sub}>
          <div className={styles.con_icon}>
            <LocationOn style={iconStyle} />
            <p>Melaka, Malaysia</p>
          </div>
          <div className={styles.con_icon}>
            <Phone style={iconStyle} />
            <p>
              <a href='tel: +601157588830'>+60 1157588830</a>
            </p>
          </div>
          <div className={styles.con_icon}>
            <Email style={iconStyle} />
            <p>
              <a href='mailto: ssyahmi282@gmail.com'>ssyahmi282@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.credit}>
        <p>
          Designed by <a href='#about'>Me</a> © 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
