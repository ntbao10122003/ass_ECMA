import instance from "./config";
const getContact = (id) => {
    return instance.get(`/Contact/${id}`);
};
const getContacts = () => {
    return instance.get(`/Contact`);
};
const addContact = (Contact) => {
    return instance.post(`/Contact`, Contact);
};
const deleteContact = (id) => {
    return instance.delete(`/Contact/${id}`);
};
const updateContact = (Contact) => {
    return instance.put(`/Contact/${Contact.id}`, Contact);
};
export {getContacts, getContact, addContact, deleteContact, updateContact };
