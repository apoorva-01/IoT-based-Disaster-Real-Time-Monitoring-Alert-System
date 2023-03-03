import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  console.log({ name: req.body.name,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
    isSuperAdmin: false,})
  await db.connect();
  const newUser = new User({
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
    isSuperAdmin: false,
  });
  const user = await newUser.save();
  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    isAdmin: user.isAdmin,
    isSuperAdmin: user.isSuperAdmin,
  });
});

export default handler;
