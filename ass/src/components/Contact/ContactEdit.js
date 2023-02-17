import { getContact, updateContact } from "../../api/contact";
import { useEffect, router, useState } from "../../lib";




const ContactEdit = () => {

    const [project, setProject] = useState({});
    useEffect(() => {
        (async () => {
            try {
                setProject(await getContact(id));
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);


    useEffect(() => {
        const form = document.getElementById("form-edit");
        const projectName = document.getElementById("project-name");
        const projectAuthor = document.getElementById("project-author");
        const projectsdt = document.getElementById("project-sdt");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const formData = {
                    id:id,
                    name: projectName.value,
                    author: projectAuthor.value,
                    sdt:projectsdt.value,
                };
                await updateContact(formData);
                router.navigate("Contact");
            } catch (error) {
                console.log(error);
            }
        });
    });




  return `
                <div>
                    <div class="container pt-5">
                            <form action="" id="form-edit">
                                <div class="form-group">
                                        <label for="" class="form-label">Tên </label>
                                        <input type="text" class="form-control" id="project-name" value="${project.name}"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="" class="form-label">Email</label>
                                        <input type="text" class="form-control" id="project-author" value="${project.author}" />
                                    </div>
                                    <div class="form-group">
                                    <label for="" class="form-label">số điện thoại </label>
                                    <input type="text" class="form-control" id="project-sdt" value="${project.sdt}" />
                                </div>

                                <button class="btn btn-primary">Thêm dự án</button>
                            </form>
                    </div>
                </div>;

  `  
}

export default ContactEdit