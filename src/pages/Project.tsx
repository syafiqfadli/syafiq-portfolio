import ProjectList from '../components/ProjectList';
import ProjectTab from '../components/ProjectTab';
import { ProjectType } from '../utils/enums';
import { useState } from 'react';
import styles from './Project.module.css';

const tabs = [
  ProjectType.All,
  ProjectType.MobileApp,
  ProjectType.ServerSide,
  ProjectType.DeepLearning,
];

const Project = () => {
  const [selectedTab, setSelected] = useState(ProjectType.All);
  const [isHover, setHover] = useState([ProjectType.All, false]);

  return (
    <main className={styles.container} id='project'>
      <div className={styles.con_header}>
        <div className={styles.con_title}>
          <p id={styles.title_one}>Personal</p>
          <p>Project</p>
        </div>
        <div className={styles.con_desc}>
          <p>These are some of the</p>
          <p>projects I have done.</p>
        </div>
      </div>
      <div className={styles.con_proj}>
        <div className={styles.proj_tabs}>
          {tabs.map((tab, index) => {
            return (
              <div className={styles.tab}>
                <ProjectTab
                  key={index}
                  tab={tab}
                  selectedTab={selectedTab}
                  isHover={isHover}
                  setSelected={setSelected}
                  setHover={setHover}
                />
              </div>
            );
          })}
        </div>
        <ProjectList selectedTab={selectedTab} />
      </div>
    </main>
  );
};

export default Project;
