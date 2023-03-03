import mongoose from 'mongoose';

const entriesSchema = new mongoose.Schema(
  {
    deviceID: { type: Number, required: true },
    deviceName: { type: String, required: true },
    accelerationX: { type: Number, required: true },
    accelerationY: { type: Number, required: true },
    accelerationZ: { type: Number, required: true },
    rotationX: { type: Number, required: true },
    rotationY: { type: Number, required: true },
    rotationZ: { type: Number, required: true },
    temperature: { type: Number, required: true }
  }
);

const EarthquakeEntries = mongoose.models.EarthquakeEntries || mongoose.model('EarthquakeEntries', entriesSchema,'earthquake-entries');
export default EarthquakeEntries;
