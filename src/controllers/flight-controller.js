const { FlightService } = require("../services/index");

const flightService = new FlightService();

// POST : flight
const create = async (req, res) => {
    try {
        const response = await flightService.createFlight(req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully created a flight",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create a flight",
            err: error,
        });
    }
};

// Get : flight/<query params>
const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlights(req.query);
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
    getAll,
};
