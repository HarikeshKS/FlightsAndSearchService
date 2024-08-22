const { CityService } = require("../services/index");

const cityService = new CityService();

// POST -> /city -> data in req.body
const create = async (req, res) => {
    try {
        const response = await cityService.createCity(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully created a city",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create a city",
            err: error,
        });
    }
};

// DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete a city",
            err: error,
        });
    }
};

// PATCH -> /city/:id -> req.body => data
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated a city",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update a city",
            err: error,
        });
    }
};

// GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a city",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch a city",
            err: error,
        });
    }
};

// GET -> /city  => Fetch all cities
const getAll = async (req, res) => {
    try {
        const response = await cityService.getAllCities();
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all the cities",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to all the cities",
            err: error,
        });
    }
};

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
};
