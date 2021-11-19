const express = require('express');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
//const postgres = require('@metamodules/postgres')();

const app = express();
const url = process.env.APP_URL;
const port = process.env.PORT;
require('./db');

const routesAdmin = require('./routes/Admins');
const routesKid = require('./routes/Kids');
const routesTask = require('./routes/Tasks');
const routesTaskView = require('./routes/TaskView');
const routesTaskReward = require('./routes/Rewards');
const routesTaskResult = require('./routes/Results');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    "/kidPhoto",
    express.static(path.resolve(__dirname, "./uploads/images/kidPhoto"))
);
app.use(
    "/taskImage",
    express.static(path.resolve(__dirname, "./uploads/images/taskImage"))
);

app.use(routesAdmin);
app.use(routesKid);
app.use(routesTask);
app.use(routesTaskView);
app.use(routesTaskReward);
app.use(routesTaskResult);

app.listen(port, url, () => {
  console.log(`Server running at http://${url}:${port}/`);
});

app.get('/', (req, res) => {
    return res.send("Server running!");
});

app.listen(port || 3000);