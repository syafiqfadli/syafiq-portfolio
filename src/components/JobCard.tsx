import { FunctionComponent } from 'react';
import styles from './JobCard.module.css';

interface JobCardProps {
  logo: string;
  company: string;
  position: string;
  year: string;
  desc: string;
}

const JobCard: FunctionComponent<JobCardProps> = (props) => {
  const getDuration = (year: string) => {
    const startJob = `1 ${year.split('-')[0].trim()}`;
    const endJob = `1 ${year.split('-')[1].trim()}`;
    const startDate = new Date(startJob);
    const endDate = endJob.includes('Current') ? new Date() : new Date(endJob);
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();

    const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
    return months;
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        <img src={props.logo} alt='Company Logo' />
        <div className={styles.text}>
          <p id={styles.company}>{props.company}</p>
          <p id={styles.position}>{props.position}</p>
        </div>
      </div>
      <p id={styles.year}>
        {props.year} ({getDuration(props.year)} months)
      </p>
      <p id={styles.desc}>{props.desc}</p>
    </div>
  );
};

export default JobCard;
