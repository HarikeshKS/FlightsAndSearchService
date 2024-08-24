const { Op, where } = require("sequelize");
const { Flight } = require("../models/index");

class FlightRepository {
    // => Filter for flight search
    #createFilter(data) {
        let filter = {};

        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        // ? Price filter
        let priceFilter = [];

        if (data.minPrice) {
            priceFilter.push({ price: { [Op.gte]: data.minPrice } });
        }
        if (data.maxPrice) {
            priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
        }
        Object.assign(filter, { [Op.and]: priceFilter });

        console.log(filter);
        return filter;
    }
    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async deleteFlight(flightId) {
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

    async getAllFlights(data) {
        try {
            // ? the filteration criteria can have multiple filters
            // -> so we need to create a filter for that!

            const filterObject = this.#createFilter(data);
            const flights = await Flight.findAll({
                where: filterObject,
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }
}

module.exports = FlightRepository;
