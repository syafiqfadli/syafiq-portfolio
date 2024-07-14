import { FunctionComponent } from 'react';
import Constants from '../utils/constants';
import { ProjectType } from '../utils/enums';
import ProjectCard from './ProjectCard';
import styles from './ProjectList.module.css';

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
                title={project.title}
                desc={project.desc}
                link={project.link}
              />
            </div>
          );
        }

        if (props.selectedTab === ProjectType.All) {
          return (
            <div key={index} className={styles.card}>
              <ProjectCard
                title={project.title}
                desc={project.desc}
                link={project.link}
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
