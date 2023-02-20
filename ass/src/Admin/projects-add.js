import { addProject } from "../api/project";
import { useEffect, router } from "../lib";
import axios from "axios";
const AdminProjectsAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
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
                name: projectName.value,
                author: projectAuthor.value,
                link: projectLink.value,
                desc: projectDesc.value,
                img: urls,

            };

            await addProject(formData);
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
    return `<div class="container pt-5">
        <form action="" id="form-add">
            <div class="form-group">
                <label for="" class="form-label">Tên Dự án</label>
                <input type="text" class="form-control" id="project-name" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Mô tả</label>
                <input type="text" class="form-control" id="project-desc" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Link Github</label>
                <input type="text" class="form-control" id="project-link" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Hình ảnh</label>
                <input type="file" multiple class="form-control" id="project-images" />
            </div>
            <div class="form-group">
                <label for="" class="form-label">Tác giả</label>
                <input type="text" class=" form-control" id="project-author" />
            </div>
            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>`;
};

export default AdminProjectsAddPage;