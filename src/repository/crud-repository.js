class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the CRUD repository layer!"); // ? temporarily
            throw { error };
        }
    }
    async destroy(id) {
        try {
            await this.model.destroy({
                where: {
                    id: id,
                },
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the CRUD repository layer!"); // ? temporarily
            throw { error };
        }
    }
    async update(data, id) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id,
                },
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in the CRUD repository layer!"); // ? temporarily
            throw { error };
        }
    }
    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in the CRUD repository layer!"); // ? temporarily
            throw { error };
        }
    }
    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in the CRUD repository layer!"); // ? temporarily
            throw { error };
        }
    }
}
module.exports = CrudRepository;
