const { AirportRepository } = require("../repository/index");
const CrudService = require("./crud-service");
class AirportService extends CrudService {
    constructor() {
        const airportRepository = new AirportRepository();
        super(airportRepository);
        
        this.airportRepository = new AirportRepository();
    }
    // createAirport => create -> handle by crud repo
    // deleteAirport => delete -> handle by crud repo
    // updateAirport => update -> handle by crud repo
    // getAirport => get -> handle by crud repo

    // -> Only one Overrided from the crud repo
    async getAll(filter) {
        try {
            const airports = await this.airportRepository.getAll({
                name: filter.name,
            });
            return airports;
        } catch (error) {
            console.log("Something went wrong in the service layer!"); // ? temporarily
            throw { error };
        }
    }
}

module.exports = AirportService;
