import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  desc: string;
  link: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  return !props.link ? (
    <div className={styles.card}>
      <p id={styles.title}>{props.title}</p>
      <p id={styles.desc}>{props.desc}</p>
    </div>
  ) : (
    <Link to={props.link} target='_blank' style={{ textDecoration: 'none' }}>
      <div className={styles.card}>
        <p id={styles.title}>{props.title}</p>
        <p id={styles.desc}>{props.desc}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
