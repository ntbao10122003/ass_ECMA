import { getContacts, deleteContact } from "../../api/contact";
import { useEffect, useState } from "../../lib";
import headerAdmin from "../../Admin/headerAdmin";
import axios from "axios";
const ContactList = () => {
    const [Contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                setContacts(await getContacts());
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

                    deleteContact(id).then(() => {
                        const newContacts = Contacts.filter((service) => service.id != id);
                        setContacts(newContacts);
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
                    <th>Tên </th>
                    <th>số điện thoại </th>
                    <th>outhor</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${Contacts
                    .map((contact, index) => {
                        return `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${contact.name}</td>
                            <td>${contact.sdt}</td>
                            <td>${contact.author}</td>

                            <td>
                                <button data-name="Bao" data-id="${
                                    contact.id
                                }"class="btn btn-danger btn-remove">Xóa</button>
                                <a href="/AdminServicesEdit/${contact.id}/edit">Sửa</a>
                            </td>
                        </tr>
                    `;
                    })
                    .join("")} 
                
                
            </tbody>
        </table>



        
</div>`;
  
}

export default ContactList