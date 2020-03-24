"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Setup schema
const temperaturesSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        unique: true
    }
});
// Export Contact model
exports.TemperaturesSchema = mongoose_1.default.model("temperature", temperaturesSchema);
//# sourceMappingURL=temperatureModel.js.map