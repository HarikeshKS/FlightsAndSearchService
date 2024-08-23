// -> Interaction with the airport database
const { where, Op } = require("sequelize");
const { Airport } = require("../models/index");

/* 
* NOTE: 
=> Here Airport should not be instantiated as a new object -> 
 - it's already a Sequelize model instance that can directly be used to interact with the database
*/

class AirportRepository {
    // constructor() {
    //     this.Airport = new Airport();    //! this is wrong
    // }

    async createAirport(data) {
        try {
            const airport = await Airport.create(data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async deleteAirport(airportId) {
        try {
            const response = await Airport.destroy({
                where: {
                    id: airportId,
                },
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async updateAirport(data, airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            airport.name = data.name;
            airport.address = data.address;
            airport.cityId = data.cityId;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async getAllAirports(filter) {
        try {
            if (filter.name) {
                const airports = await Airport.findAll({
                    where: {
                        name: { [Op.startsWith]: filter.name },
                    },
                });
                return airports;
            }
            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }
}

module.exports = AirportRepository;
