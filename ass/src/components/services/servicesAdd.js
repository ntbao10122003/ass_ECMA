import { addServices } from "../../api/services";
import { useEffect, router } from "../../lib";
import axios from "axios";
const AdminServicesAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectDesc = document.querySelector("#project-desc");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // Tạo proejct mới
                const formData = {
                    name: projectName.value,
                    desc: projectDesc.value,
                };
                await addServices(formData);
                router.navigate("/AdminServicesList");
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
            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>`;
};

export default AdminServicesAddPage;