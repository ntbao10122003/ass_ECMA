import { deleteServices, getServices } from "../../api/services";
import { useEffect, useState } from "../../lib";
import axios from "axios";
import headerAdmin from "../../Admin/headerAdmin";

const AdminServicesList = () => {
    // localStorage
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

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", async function (e) {
                try {
                    const id = this.dataset.id;

                    deleteServices(id).then(() => {
                        const newProjects = projects.filter((service) => service.id != id);
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
    <button class="btn-addPr"><a href="/AdminServicesAdd">Thêm dự án</a></button>
    <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên dự án</th>
                    <th>Mô tả</th>
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
                            <td>
                                <button data-name="Bao" data-id="${
                                    project.id
                                }"class="btn btn-danger btn-remove">Xóa</button>
                                <a href="/AdminServicesEdit/${project.id}/edit">Sửa</a>
                            </td>
                        </tr>
                    `;
                    })
                    .join("")} 
                
                
            </tbody>
        </table>



        
</div>`;

};

export default AdminServicesList;