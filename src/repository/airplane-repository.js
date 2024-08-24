const { Airplane } = require("../models/index");
const CrudRepository = require("./crud-repository");
class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
    // async getAirplane(airplaneId) {
    //     try {
    //         const airplane = await Airplane.findByPk(airplaneId);
    //         return airplane;
    //     } catch (error) {
    //         console.log("Something went wrong in the repository layer!"); // ? temporarily
    //         throw { error };
    //     }
    // }
}

module.exports = AirplaneRepository;
