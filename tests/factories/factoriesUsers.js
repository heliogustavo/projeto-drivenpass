import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import client from '../../src/database/prisma';
import bcrypt from 'bcrypt';


export async function createUserFactory() {
  const hashedPassword = bcrypt.hashSync('password123', 10);
  const uniqueEmail = `user${uuidv4()}@example.com`;
  const user = await client.user.create({
      data: {
          email: uniqueEmail,
          password: hashedPassword
      }
  });
  return user;
}

export async function generateToken(userId){ 
  const token = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET)

  return token;
}

