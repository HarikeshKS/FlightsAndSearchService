const { FlightService } = require("../services/index");
const { SuccessCodes, ServerErrorCodes } = require("../utils/status-codes");
const flightService = new FlightService();

// POST : flight
const create = async (req, res) => {
    try {
        // ! Good Practice is to destructure the req.body for the required data
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
        };
        const response = await flightService.create(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            message: "Successfully created a flight",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
            data: {},
            success: false,
            message: "Unable to create a flight",
            err: error,
        });
    }
};

// DELETE -> /flight/:id
const destroy = async (req, res) => {
    try {
        const response = await flightService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted an flight",
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

// PATCH -> /flight/:id -> req.body => data
const update = async (req, res) => {
    try {
        const response = await flightService.update(req.body, req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated a flight",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update a flight",
            err: error,
        });
    }
};

// GET -> /flight/:id
const get = async (req, res) => {
    try {
        const response = await flightService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a flight",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch a flight",
            err: error,
        });
    }
};

// Get : flight/<query params>
const getAll = async (req, res) => {
    try {
        const response = await flightService.getAll(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched flights",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch the flights",
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
