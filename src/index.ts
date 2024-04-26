import { run } from "./queue/queueClient";
const express = require("express");
const { routes } = require("./routes");

run().then(console.error);

const app = express();
routes(app);
app.listen(process.env.PORT, () => {
    console.log("Listening to port ", process.env.PORT);
});