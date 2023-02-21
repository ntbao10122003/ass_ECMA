import "./src/components/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {render , router } from "./src/lib";
import Header from "./src/components/Header";
import Home from "./src/components/Home";
import Contact from "./src/components/Contact/Contact";
import AdminProjectsAddPage from "./src/Admin/projects-add";
import AdminProjectEditPage from "./src/Admin/projects-edit";
import AdminProjectsPage from "./src/Admin/projects";
import ContactEdit from "./src/components/Contact/ContactEdit";
import AdminServicesList from "./src/components/services/servicesList";
import AdminServicesAddPage from "./src/components/services/servicesAdd";
import ServicesEdit from "./src/components/services/servicesEdit"
import Projects from "./src/components/Projects";


import allAdmin from "./src/QlAdmin/allAdmin"
const app = document.querySelector("#app");

router.on("/ContactEdit/:id/edit" , ({data}) => render(() => ContactEdit(data), app));
router.on("/ContactEdit" , () => render(ContactEdit,app));
router.on("/Header" , () => render(Header, app));
router.on("/home" , () => render(Home,app));
router.on("/Contact" , () => render(Contact,app));
router.on("/Projects" , () => render(Projects,app));

router.on("/admin/projects" , () => render(AdminProjectsPage,app));
router.on("/admin/projectsAdd" , () => render(AdminProjectsAddPage,app));
router.on("/admin/AdminProjectEditPage" , () => render(AdminProjectEditPage,app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectEditPage(data), app));

router.on("/AdminServicesEdit/:id/edit", ({ data }) => render(() => ServicesEdit(data), app));
router.on("/AdminServicesList" , () => render(AdminServicesList,app));
router.on("/AdminServicesAdd" , () => render(AdminServicesAddPage,app));

router.on("/allAdmin" , () => render (allAdmin,app));



router.resolve();