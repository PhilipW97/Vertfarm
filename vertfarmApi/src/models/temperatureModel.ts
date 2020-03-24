import mongoose from "mongoose";

// Setup schemaschema
const temperaturesSchema = new mongoose.Schema({
  temperature: Number,
  date: Date.now
});

// Export Contact model
export const TemperaturesSchema = mongoose.model(
  "temperature",
  temperaturesSchema
);
o;
