class CrudService {
    constructor(respository) {
        this.respository = respository;
    }

    async create(data) {
        try {
            const response = await this.respository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the CRUD service layer!"); // ? temporarily
            throw { error };
        }
    }

    async destroy(id) {
        try {
            const response = await this.respository.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the CRUD service layer!"); // ? temporarily
            throw { error };
        }
    }

    async update(data, id) {
        try {
            const response = await this.respository.update(data, id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the CRUD service layer!"); // ? temporarily
            throw { error };
        }
    }

    async get(id) {
        try {
            const response = await this.respository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the CRUD service layer!"); // ? temporarily
            throw { error };
        }
    }

    async getAll() {
        try {
            const response = await this.respository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the CRUD service layer!"); // ? temporarily
            throw { error };
        }
    }
}
module.exports = CrudService;
