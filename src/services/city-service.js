// service is for the bussiness logic (here for the city)

const { CityRepository } = require("../repository/index");
class CityService {
    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            const response = this.cityRepository.deleteCity(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer!"); // ? temporarily
            throw { error };
        }
    }
}

module.exports = CityService;