import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import devChats from "../../assets/devChats.png"
import devex from "../../assets/devex.png"
import syncspace from "../../assets/syncspace.png"
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={devex}
          major={true}
          link="https://github.com/PranjalBarnwal/blogsite-frontend"
          h3="DevEx"
          p="Interview Exp sharing platform for developers"
        />
        <ProjectCard
          src={syncspace}
          link="https://github.com/PranjalBarnwal/SyncScript"
          h3="SyncSpace"
          p="Collaborative light code editor"
        />
        <ProjectCard
          src={devChats}
          link="https://github.com/PranjalBarnwal/DevChats-v2"
          h3="A chat app"
          p="A simple chatting app "
        />
      </div>
    </section>
  );
}

export default Projects;
