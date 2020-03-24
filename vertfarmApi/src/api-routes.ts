import express from "express";
import { TemperaturesSchema } from "./models/temperatureModel";

const router = express.Router();

// Get all temperatures
router.get("/temperatures", async (req, res) => {
  try {
    const result = await TemperaturesSchema.find().exec();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create a Temperature
router.post("/new", async (req: express.Request, res: express.Response) => {
  const temperature = req.body.temperature;
  try {
    const newTemperaturesSchema = new TemperaturesSchema({ temperature });
    const result = await newTemperaturesSchema.save();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export { router };
