import { FunctionComponent } from 'react';
import styles from './ProjectList.module.css';
import Constants from '../utils/constants';
import ProjectCard from './ProjectCard';
import { ProjectType } from '../utils/enums';

interface ProjectListProps {
  selectedTab: ProjectType;
}

const ProjectList: FunctionComponent<ProjectListProps> = (props) => {
  return (
    <div className={styles.con_proj}>
      {Constants.projects.map((project, index) => {
        if (props.selectedTab === project.type) {
          return (
            <div key={index} className={styles.card}>
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.desc}
              />
            </div>
          );
        }

        if (props.selectedTab === ProjectType.All) {
          return (
            <div key={index} className={styles.card}>
              <ProjectCard
                key={index}
                title={project.title}
                desc={project.desc}
              />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default ProjectList;
