import { deleteProject, getProjects } from "../api/project";
import { useEffect, useState } from "../lib";
import axios from "axios";
import Header from "../components/Header";
import headerAdmin from "./headerAdmin";

const AdminProjectsPage = () => {
    // localStorage
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

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", async function (e) {
                try {
                    const id = this.dataset.id;

                    deleteProject(id).then(() => {
                        const newProjects = projects.filter((project) => project.id != id);
                        setProjects(newProjects);
                    });
                } catch (error) {
                    console.log(error);
                }
            });
        }
    });

    return `
    ${headerAdmin()}

    <div class="container pt-5">
    <style>
    .btn-addPr{
        margin: 0 75px;
        width: 150px;
        height: 30px;	
        background : gold ;
    }
    .btn-addPr a{
        color: black;
        font-weight: bold;
        font-size: 15px;
    }
    
    </style>
    <button class="btn-addPr"><a href="/admin/projectsAdd">Thêm dự án</a></button>
    <table style="padding-top:50px;" class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên dự án</th>
                    <th>Mô tả</th>
                    <th>Link Github</th>
                    <th>Hình ảnh</th>
                    <th>Tác giả</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${projects
                    .map((project, index) => {
                        return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${project.name}</td>
                            <td>${project.desc}</td>
                            <td>${project.link}</td>
                            <td style=" width:150px;height:150px;"><img  src = "${project.img}"}></td>
                            <td>${project.author}</td>
                            <td>
                                <button data-name="bao" data-id="${
                                    project.id
                                }"class="btn btn-danger btn-remove">Xóa</button>
                                <a href="/admin/projects/${project.id}/edit">Sửa</a>
                            </td>
                        </tr>
                    `;
                    })
                    .join("")} 
                
                
            </tbody>
        </table>



        
</div>`;

};

export default AdminProjectsPage;