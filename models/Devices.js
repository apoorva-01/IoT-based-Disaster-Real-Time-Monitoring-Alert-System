import mongoose from 'mongoose';

const devicesSchema = new mongoose.Schema(
  {
    deviceName: { type: String, required: true,unique: true},
    type: { type: String, required: true },
    timestamp: { type: Date, required: true },
  }
);

const Devices = mongoose.models.Devices || mongoose.model('Devices', devicesSchema,'devices');
export default Devices;
