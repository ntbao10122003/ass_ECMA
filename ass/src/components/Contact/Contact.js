import { getContact } from "../../api/contact";
import { useEffect, useState } from "../../lib";
import axios from "axios";
import Header from "../Header";

const Contact = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
      (async () => {
          try {
              setProjects(await getContact());
          } catch (error) {
              console.log(error);
          }
      })();
  }, []);






  return `
  ${Header()}
    <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">Contact <span>info</span></h1>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
    
          ${projects
            .map((projects , index) => {
              return `
              <div class="contact-info">
                  <h1 style="color:red;"> <a href="projects/${projects.id}/edit">số điện thoại </a> </h1>
                  <h2>${projects.name}</h2>
                  <h2>${projects.sdt}</h2>
                  <h2>${projects.author}</h2>
              </div> 
              </div>

              <div class="contact-item">
                 <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
                    <div class="contact-info">
                    <h1 style="color:red;"> <a href="projects/${projects.id}/edit">Email </a> </h1>
                        <h2>${projects.name}</h2>
                        <h2>${projects.author}</h2>
                    </div>
                  </div>
              </div>  


            </div>
              `
            })}
                    
          
          
     
    </div>
    </section>
  `
}

export default Contact



