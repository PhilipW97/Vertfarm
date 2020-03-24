"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const temperatureModel_1 = require("./models/temperatureModel");
const router = express_1.default.Router();
exports.router = router;
// Get all temperatures
router.get("/temperatures", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield temperatureModel_1.TemperaturesSchema.find().exec();
        // tslint:disable-next-line:no-console
        console.log("result", result);
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
// Create a Temperature
router.post("/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.body.name;
    try {
        const newTemperaturesSchema = new temperatureModel_1.TemperaturesSchema({ name });
        const result = yield newTemperaturesSchema.save();
        res.send(result);
    }
    catch (error) {
        res.status(500).send(error);
    }
}));
//# sourceMappingURL=api-routes.js.map