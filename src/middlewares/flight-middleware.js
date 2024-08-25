const { ClientErrorCodes } = require("../utils/status-codes");
const validateCreateFlight = async (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body to create flight",
            err: "Mandatory properties are misssing to create flight",
        });
    }
    next();
};

module.exports = {
    validateCreateFlight,
};
