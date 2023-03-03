import nc from 'next-connect';
import Devices from '../../../models/Devices';
import db from '../../../utils/db';
import data from '../../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Devices.insertMany(data.devices);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;