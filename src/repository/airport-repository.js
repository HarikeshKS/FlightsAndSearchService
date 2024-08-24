// -> Interaction with the airport database
const { Op } = require("sequelize");
const { Airport } = require("../models/index");

const CrudRepository = require("./crud-repository");
/* 
* NOTE: 
=> Here Airport should not be instantiated as a new object -> 
 - it's already a Sequelize model instance that can directly be used to interact with the database
*/

class AirportRepository extends CrudRepository {
    // constructor() {
    //     this.Airport = new Airport();    //! this is wrong
    // }
    constructor() {
        super(Airport);
    }
    // createAirport => create -> handle by crud repo
    // deleteAirport => delete -> handle by crud repo
    // updateAirport => update -> handle by crud repo
    // getAirport => get -> handle by crud repo

    // -> Only one Overrided from the crud repo
    async getAll(filter) {
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
