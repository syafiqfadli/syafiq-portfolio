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
    const endDate = endJob.includes('Present') ? new Date() : new Date(endJob);
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();

    const totalMonths =
      (endYear - startYear) * 12 + (endMonth - startMonth) + 1;

    if (totalMonths >= 12) {
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;
      return `${years} year${years > 1 ? 's' : ''}, ${
        months ? `${months} month${months > 1 ? 's' : ''}` : ''
      }`;
    }

    return `${totalMonths} month${totalMonths > 1 ? 's' : ''}`;
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
      <div className={styles.card_time}>
        <p id={styles.year}>{props.year}</p>
        <p id={styles.duration}>({getDuration(props.year)})</p>
      </div>
      <p id={styles.desc}>{props.desc}</p>
    </div>
  );
};

export default JobCard;
