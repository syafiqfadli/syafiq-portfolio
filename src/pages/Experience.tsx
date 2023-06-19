import JobCard from '../components/JobCard';
import styles from './Experience.module.css';
import Constants from '../utils/constants';

const Experience = () => {
  return (
    <main className={styles.container} id='experience'>
      <div className={styles.con_header}>
        <div className={styles.con_empty}></div>
        <div className={styles.con_desc}>
          <p>The journey of a thousand miles</p>
          <p>begins with a single step.</p>
        </div>
        <div className={styles.con_title}>
          <p id={styles.title_one}>Work</p>
          <p>Experience</p>
        </div>
      </div>
      <div className={styles.con_exp}>
        {Constants.jobs.map((job, i) => {
          return (
            <div className={styles.card}>
              <JobCard
                key={i}
                logo={job.logo}
                company={job.company}
                position={job.position}
                desc={job.desc}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Experience;
