import { getContact, updateContact } from "../../api/contact";
import { useEffect, router, useState } from "../../lib";

import axios from "axios";



const ContactEdit = ({id}) => {

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
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author"); 
        const projectPhone = document.querySelector("#project-phone");  


        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            try {
                const formData = {
                    id,
                    name: projectName.value,
                    author: projectAuthor.value,
                    phone :projectPhone.value,
                };
                await updateContact(formData);
                router.navigate("/ContactList");
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
                                    <input type="text" class="form-control" id="project-phone" value="${project.phone}" />
                                </div>

                                <button class="btn btn-primary">Thêm dự án</button>
                            </form>
                    </div>
                </div>;

  `  
}

export default ContactEdit