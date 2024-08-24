const { AirplaneService } = require("../services/index");
const airplaneService = new AirplaneService();

// POST -> /airplane -> data in req.body
const create = async (req, res) => {
    try {
        const response = await airplaneService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created an airplane",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create an airplane",
            err: error,
        });
    }
};

const destroy = async (req, res) => {
    try {
        const response = await airplaneService.destroy(req.params.id);
        return res.status(201).json({
            data: {response},
            success: true,
            message: "Successfully deleted an airplane",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete an airplane",
            err: error,
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await airplaneService.update(req.body, req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully updated an airplane",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update an airplane",
            err: error,
        });
    }
};
// POST -> /airplane -> data in req.body
const get = async (req, res) => {
    try {
        const response = await airplaneService.get(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetched an airplane",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch an airplane",
            err: error,
        });
    }
};
const getAll = async (req, res) => {
    try {
        const response = await airplaneService.getAll(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetched the airplanes",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch the airplanes",
            err: error,
        });
    }
};

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
};
