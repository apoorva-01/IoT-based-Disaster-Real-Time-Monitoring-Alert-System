import nc from 'next-connect';
import Organisation from '../../../models/Organisation';
import db from '../../../utils/db';
import data from '../../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Organisation.deleteMany();
  await Organisation.insertMany(data.organisation);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;