import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>
  res.status(404).send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () =>
 // console.log(`Server running on port: http://localhost:${PORT}`)
  console.log('listening on', http.address().port);
);
