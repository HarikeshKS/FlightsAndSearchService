const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareDateTime } = require("../utils/helper");

const CrudService = require("./crud-service");
class FlightService extends CrudService {
    constructor() {
        const flightRepository = new FlightRepository();
        super(flightRepository);

        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    // -> Overriden the crud 
    async create(data) {
        try {
            if (compareDateTime(data.arrivalTime, data.departureTime)) {
                throw {
                    error: "Arrival date-time cannot be less than departure date-time.",
                };
            }
            const airplane = await this.airplaneRepository.getAirplane(
                data.airplaneId
            );
            
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity,
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer!"); // ? temporarily
            throw { error };
        }
    }
    
    // -> Overriden the crud 
    async getAll(data) {
        try {
            const flights = await this.flightRepository.getAll(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in the service layer!"); // ? temporarily
            throw { error };
        }
    }
}

module.exports = FlightService;
