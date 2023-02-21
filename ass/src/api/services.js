import instance from "./config";

const getServices = () => {
    return instance.get(`/services`);
};
const getService = (id) => {
    return instance.get(`/services/${id}`);
};
const addServices = (Service) => {
    return instance.post(`/services`, Service);
};
const deleteServices = (id) => {
    return instance.delete(`/services/${id}`);
};
const updateServices = (Service) => {
    return instance.put(`/services/${Service.id}`, Service);
};
export { getServices, getService, addServices, deleteServices, updateServices };