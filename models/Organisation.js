import mongoose from 'mongoose';

const organisationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tagline: { type: String, required: true },
    logo: { type: String, required: true },
    FF01_I05_status: { type: Boolean, required: true },
    FF01_I04_status: { type: Boolean, required: true },
    AC1: { type: Boolean, required: false },
    AC2: { type: Boolean, required: false },
    AC3: { type: Boolean, required: false },
    AC4: { type: Boolean, required: false },
    Humidifier1: { type: Boolean, required: false },
    Humidifier2: { type: Boolean, required: false },
    Humidifier3: { type: Boolean, required: false },
    Humidifier4: { type: Boolean, required: false },
    Chillar1: { type: Boolean, required: false },
    Chillar2: { type: Boolean, required: false },
    Chillar3: { type: Boolean, required: false },
    Chillar4: { type: Boolean, required: false },
  }
);

const Organisation = mongoose.models.Organisation || mongoose.model('Organisation', organisationSchema,'organisation');
export default Organisation;
