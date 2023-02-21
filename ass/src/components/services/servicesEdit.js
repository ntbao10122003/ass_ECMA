
import { getService, updateServices } from "../../api/services";
import { useEffect, router, useState } from "../../lib";
import axios from "axios";


const servicesEdit = ({id}) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        (async () => {
            try {
                setProject(await getService(id));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const projectName = document.getElementById("#project-name");
        const projectDesc = document.querySelector("#project-desc");

        form.addEventListener("submit", async function (e)  {
            e.preventDefault();

            try {
                const formData = {
                   id,
                   name : projectName.value,
                   desc : projectDesc.value,
                };
                await updateServices(formData);
                router.navigate("/AdminServicesList");
            } catch (error) {
                console.log(error);
            }
        });
    });


    return `<div>
    <div class="container pt-5">
    <h1>Sửa dự án</h1>
        <form action="" id="form-edit">
            <div class="form-group">
                <label for="" class="form-label">Tên Dự án</label>
                <input type="text" class="form-control" id="project-name" value="${project.name}"/>
            </div>
            <div class="form-group">
            <label for="" class="form-label">Mô tả</label>
            <input type="text" class="form-control" id="project-desc" value="${project.desc}"/>
        </div>
            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>
</div>`;



}


export default servicesEdit