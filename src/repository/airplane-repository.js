const { Airplane } = require("../models/index");

class AirplaneRepository {
    async getAirplane(airplaneId) {
        try {
            const airplane = await Airplane.findByPk(airplaneId);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }
}

module.exports = AirplaneRepository;
