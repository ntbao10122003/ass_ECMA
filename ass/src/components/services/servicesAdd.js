import { addServices } from "../../api/services";
import { useEffect, router } from "../../lib";
import axios from "axios";
const AdminServicesAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectDesc = document.querySelector("#project-desc");
        const projectLink = document.querySelector("#project-link");
        const projectAuthor = document.querySelector("#project-author");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // Tạo proejct mới
                const formData = {
                    name: projectName.value,
                    desc: projectDesc.value,
                    link: projectLink.value,
                    author: projectAuthor.value,
                };
                await addServices(formData);
                router.navigate("services/servicesList");
            } catch (error) {
                console.log(error);
            }
        });
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
                <input type="text" class="form-control" id="project-author" />
            </div>
            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>`;
};

export default AdminServicesAddPage;