const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./app/models');

dotenv.config();

const app = express();

const corsOptions = { origin: "http://localhost:5000" };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.sequelize.sync().then(() => {
    console.log("db synced and connected successfully");
}).catch((err) => {
    console.log("failed to sync db: " + err.message);
}); 

require("./app/routes/movie.routes.js")(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`server running port ${PORT}`);
});

// app.get("/", (req, res) => {
//     res.json({ message: "starting new application"});
// });