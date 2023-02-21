import { getProject, updateProject } from "../api/project";
import { useEffect, router, useState } from "../lib";
import axios from "axios";
const AdminProjectEditPage = ({ id }) => {
    const [project, setProject] = useState({});
    useEffect(() => {
        (async () => {
            try {
                setProject(await getProject(id));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    useEffect(() => {
        const form = document.querySelector("#form-edit");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");
        const projectDesc = document.querySelector("#project-desc");
        const projectLink = document.querySelector("#project-link");
        const projectImg = document.querySelector("#project-images");
        

        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(projectImg.files);
        try{
            // Tạo proejct mới
            const formData = {
                id,
                name: projectName.value,
                author: projectAuthor.value,
                link: projectLink.value,
                desc: projectDesc.value,
                img: urls,

            };

            await updateProject(formData);
            router.navigate("/admin/projects");
        }catch (error) {
            console.log(error); 
        } 
    });
        
        const uploadFiles = async (files) => {
            if(files){
                const CLOUD_NAME ="devcitufs";
                const PRESET_NAME ="baontph21353";
                const FOLDER_NAME = "mikami";
                const urls = [];
                const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    
                const formData = new FormData();
                formData.append("upload_preset", PRESET_NAME);
                formData.append("folder", FOLDER_NAME);
    
                for(const file of files){
                    formData.append("file", file);
                    const response = await axios.post(api, formData,{
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    });
                    urls.push(response.data.secure_url);
                }
                return urls;
            }

        }
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
            <div class="form-group">
                <label for="" class="form-label">Link Github</label>
                <input type="text" class="form-control" id="project-link" value="${project.link}"/>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Hình ảnh</label>
                <input type="file" multiple class="form-control" id="project-images" value="${project.img}"/>
            </div>
                <div class="form-group">
                    <label for="" class="form-label">Tác giả</label>
                    <input type="text" class="form-control" id="project-author" value="${project.author}" />
                </div>
                <button class="btn btn-primary">Thêm dự án</button>
            </form>
            </div>
    </div>`;
};

export default AdminProjectEditPage;