const { AirportService } = require("../services/index");

const airportService = new AirportService();

// POST -> /airport -> data in req.body
const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully created an airport",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create an airport",
            err: error,
        });
    }
};

// DELETE -> /airport/:id
const destroy = async (req, res) => {
    try {
        const response = await airportService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted an airport",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete an airprot",
            err: error,
        });
    }
};

// PATCH -> /airport/:id -> req.body => data
const update = async (req, res) => {
    try {
        const response = await airportService.update(
            req.body,
            req.params.id
        );
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated an airport",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update an airport",
            err: error,
        });
    }
};

// GET -> /airport/:id
const get = async (req, res) => {
    try {
        const response = await airportService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched an airport",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch an airport",
            err: error,
        });
    }
};

// GET -> /airport  => Fetch all airports
const getAll = async (req, res) => {
    try {
        const response = await airportService.getAll(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all the airports",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch all the airports",
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
