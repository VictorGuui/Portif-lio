import AboutContainer from '../components/AboutContainer'
import TechnologiesContainer from '../components/TechnologiesContainer'
import ProjectsContainer from '../components/ProjectsContainer'

import '../styles/components/maincontent.sass'


const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;