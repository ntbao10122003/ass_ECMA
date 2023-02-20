import { deleteProject, getProjects } from "../api/project";
import { useEffect, useState } from "../lib";
import axios from "axios";

const Projects = () => {


    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setProjects(await getProjects());
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

  return `
  <section id="projects">
                <div class="projects container">
                    <div class="projects-header">
                </div>
 
            ${projects.map((project,index) => {

            return`
                <div class="all-projects">
                    <div class="project-item">
                    <div class="project-info">
                    <h1>${project.name}</h1>
                    <h2>${project.author}</h2>
                    <p>${project.desc}</p>
                    <a href="" style = "color : white ;"> link githud :  ${project.link}</a>
                    </div>
                    <div class="project-img">
                    <img src="${project.img}" alt="img">
                    </div>
                </div>
                ` 
            })}

            </div>
            </div>
</section>
  `
}

export default Projects