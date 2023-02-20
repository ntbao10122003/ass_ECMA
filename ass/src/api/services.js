import instance from "./config";

const getServices = () => {
    return instance.get(`/servicesList`);
};
const getService = (id) => {
    return instance.get(`/servicesList/${id}`);
};
const addServices = (Service) => {
    return instance.post(`/servicesList`, Service);
};
const deleteServices = (id) => {
    return instance.delete(`/servicesList/${id}`);
};
const updateServices = (Service) => {
    return instance.put(`/servicesList/${Service.id}`, Service);
};
export { getServices, getService, addServices, deleteServices, updateServices };