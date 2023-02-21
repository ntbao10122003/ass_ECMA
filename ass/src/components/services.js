import {  getServices } from "../api/services";
import { useEffect, useState } from "../lib";
import axios from "axios";

const services = () => {


  const [projects, setProjects] = useState([]);

  useEffect(() => {
      (async () => {
          try {
              setProjects(await getServices());
          } catch (error) {
              console.log(error);
          }
      })();
  }, []);



  return `
  
  <section id="services">
     <div class="services container">
            <div class="service-top">
                <h1 class="section-title">Serv<span>i</span>ces</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
                    magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias
                    voluptatum explicabo!</p>
            </div>
            <div class="service-bottom">

            ${projects.map((services  , index) => {
              return `
                <div class="service-item">
                  <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                  <h2>${services.name}</h2>
                  <p>${services.desc}</p>
                </div>
              
              `

            })}
           
            </div>
           
        
             
  
  </section>


  `
  
}

export default services