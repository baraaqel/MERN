const express = require("express");
const app = express();
require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
require("./routes/jokes.routes")(app);
const port = 8000;
app.listen(port, () => console.log(`The server is running on ${port}`));