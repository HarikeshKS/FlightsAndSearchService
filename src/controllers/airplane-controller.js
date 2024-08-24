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

module.exports = {
    create,
};
