import { FunctionComponent } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  desc: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = (props) => {
  return (
    <div className={styles.card}>
      <p id={styles.title}>{props.title}</p>
      <p id={styles.desc}>{props.desc}</p>
    </div>
  );
};

export default ProjectCard;
