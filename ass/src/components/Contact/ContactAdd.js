import { addContact } from "../../api/contact";
import { useEffect, router } from "../../lib";
import axios from "axios";
const ContactAdd = () => {

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const contactName = document.querySelector("#contact-name");
        const contactsdt = document.querySelector("#contact-sdt");
        const contactauthor = document.querySelector("#contact-author");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                // Tạo proejct mới
                const formData = {
                    name: contactName.value,
                    sdt: contactsdt.value,
                    author: contactauthor.value,

                };
                await addContact(formData);
                router.navigate("/ContactList");
            } catch (error) {
                console.log(error);
            }
        });
    });



    return `<div class="container pt-5">
    <form action="" id="form-add">
        <div class="form-group">
            <label for="" class="form-label">Tên Dự án</label>
            <input type="text" class="form-control" id="contact-name" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">số điện thoại</label>
            <input type="text" class="form-control" id="contact-sdt" />
        </div>
        <div class="form-group">
            <label for="" class="form-label">author</label>
            <input type="text" class="form-control" id="contact-author" />
        </div>
        <button class="btn btn-primary">Thêm dự án</button>
    </form>
    </div>`;
  
}

export default ContactAdd