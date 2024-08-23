const { Flight } = require("../models/index");

class FlightRepository {

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async deleteCity(flightId) {
        try {
            await Flight.destroy({
                where: {
                    id: flightId,
                },
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async updateFlight(flightId, data) {
        try {
            await Flight.update(data, {
                where: {
                    id: flightId,
                },
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            // TODO: Make approproiate changes here 
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }
}

module.exports = FlightRepository;
