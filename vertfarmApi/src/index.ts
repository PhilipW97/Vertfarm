import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { router } from "./api-routes";

const app = express();
const port = 8080; // default port to listen

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Connect Mongoose
mongoose.connect("mongodb://localhost/resthub", { useNewUrlParser: true });

const db = mongoose.connection;

// Routes
app.use("/", router);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
