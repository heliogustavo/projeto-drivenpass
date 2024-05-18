import client from '../../src/database/prisma';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

export async function createUserFactory(){ 
  const hashedPassword = bcrypt.hashSync('password123', 10);
  const user = await client.user.create({
    data: {
      email: 'example@example.com',
      password: hashedPassword    }
  });
  return user;
} 
export async function generateToken(userId){ 
  const token = jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET)

  return token;
}

