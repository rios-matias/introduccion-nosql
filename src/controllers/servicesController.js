import serviceSchema from '../models/service'

const getAllServices = async(req, res) => {
    serviceSchema
        .find()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.json({ message: error }));
};

const getServiceById = async(req, res) => {
    const { id } = req.params;
    serviceSchema
        .findById(id)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(400).json({ message: "cannot find service with id " + id }));
};

const newService = async(req, res) => {
    console.log(req.body)
    const newService = serviceSchema(req.body);
    newService
        .save()
        .then((data) => res.status(200).json({ message: "service saved" }))
        .catch((error) => res.json({ message: error }));
};
const updateService = async(req, res) => {
    const { id } = req.params;
    const { name, description, price, duration } = req.body;
    serviceSchema
        .updateOne({ _id: id }, { $set: { name, description, price, duration } })
        .then((data) => res.status(200).json({ message: "service updated succefully" }))
        .catch((error) => res.status(400).json({ message: "service could not be updated" }));
}

// delete a user
const deleteService = async(req, res) => {
    const { id } = req.params;
    serviceSchema
        .remove({ _id: id })
        .then((data) => res.status(200).json({ message: "service deleted succesfully" }))
        .catch((error) => res.statusjson(400).json({ message: "service could not be deleted" }));
}
module.exports = { getAllServices, getServiceById, newService, updateService, deleteService }