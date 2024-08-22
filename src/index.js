const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");

//for db sync
// ? Why is it necessary to sync the db?
// => Because, we will be able to use the MAGIC METHODS that sequelize provides!
// => Also, if we don't use migrations, we have to obviously need to sync the db.

const db = require("./models/index")

const ApiRoutes = require("./routes/index");

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //For API routes
    app.use("/api", ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at port: ${PORT}`);
        if (process.env.SYNC_DB) {
            db.sequelize.sync({ alter: process.env.SYNC_DB });
        }
    });
};

setupAndStartServer();
