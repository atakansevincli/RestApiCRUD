import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Hoşgeldiniz Ahmet BEY!"));
app.all("*", (req, res) =>
  res.status(404).send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () => console.log("listening on"));
//console.log(`Server running on port: http://localhost:${PORT}`)
