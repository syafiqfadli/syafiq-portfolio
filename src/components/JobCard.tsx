import { FunctionComponent } from 'react';
import styles from './JobCard.module.css';

interface JobCardProps {
  logo: string;
  company: string;
  position: string;
  desc: string;
}

const JobCard: FunctionComponent<JobCardProps> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <img src={props.logo} alt='Company Logo' />
        <div className={styles.text}>
          <p id={styles.company}>{props.company}</p>
          <p id={styles.position}>{props.position}</p>
        </div>
      </div>
      <p id={styles.desc}>{props.desc}</p>
    </div>
  );
};

export default JobCard;
