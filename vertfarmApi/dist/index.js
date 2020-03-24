"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_routes_1 = require("./api-routes");
const app = express_1.default();
const port = 8080; // default port to listen
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(body_parser_1.default.json());
// Connect Mongoose
mongoose_1.default.connect("mongodb://localhost/resthub", { useNewUrlParser: true });
const db = mongoose_1.default.connection;
// Routes
app.use("/", api_routes_1.router);
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map