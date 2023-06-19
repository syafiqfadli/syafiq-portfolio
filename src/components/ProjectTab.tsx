import { FunctionComponent } from 'react';
import { ProjectType } from '../utils/enums';

interface ProjectTabProps {
  tab: string;
  selectedTab: ProjectType;
  isHover: (string | boolean)[];
  setSelected: Function;
  setHover: Function;
}

const ProjectTab: FunctionComponent<ProjectTabProps> = (props) => {
  const isTab =
    props.selectedTab === props.tab ||
    (props.isHover[0] === props.tab && props.isHover[1]);

  const tabStyle = {
    textAlign: 'center' as 'center',
    cursor: 'pointer',
    padding: '20px',
    borderRadius: '20px',
    transition: '0.3s',
    backgroundColor: isTab ? '#445964' : '#DFDFDF',
    color: isTab ? 'white' : '#445964',
  };

  return (
    <div
      style={tabStyle}
      onClick={() => {
        props.setSelected(props.tab);
      }}
      onMouseEnter={() => {
        props.setHover([props.tab, true]);
      }}
      onMouseLeave={() => {
        props.setHover([props.tab, false]);
      }}
    >
      {props.tab}
    </div>
  );
};

export default ProjectTab;
