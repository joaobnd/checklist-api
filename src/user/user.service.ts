import prismaClient from "../prisma";
import { LogLevel, logMessage } from "../lib/logger";

class UserService {
  async login(email: string, pswd: string) {
    try {
      const user = await prismaClient.user.findUnique({
        where: { email }
      });

      if (user && user.pswd === pswd) {
        return { ...user };
      } else {
        throw new Error('Invalid email or password');
      }

    } catch (error) {
      logMessage(LogLevel.ERROR, 'Cannot login.', { message: error.message });
      throw new Error('Error while logging in.');
    }
  }

  async create(email: string, pswd: string) {
    try {

      const existingUser = await prismaClient.user.findUnique({
        where: { email }
      });

      if (existingUser) {
        throw new Error('User already exists');
      }

      const newUser = await prismaClient.user.create({
        data: {
          email,
          pswd: pswd,
        }
      });

      return { ...newUser };

    } catch (error) {
      logMessage(LogLevel.ERROR, 'Cannot create user.', { message: error.message });
      throw new Error('Error while creating user.');
    }
  }
}

export default UserService;