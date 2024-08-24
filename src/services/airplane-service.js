const { AirplaneRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class AirplaneService extends CrudService {
    constructor() {
        const airplaneRepository = new AirplaneRepository();
        super(airplaneRepository);
    }
}

module.exports = AirplaneService;
