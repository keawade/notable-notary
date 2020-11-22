import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { IHashedPassword } from './interfaces';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user) {
      const match = await bcrypt.compare(password, user.passwordHash);
      if (match) {
        const {
          passwordHash: password,
          passwordSalt,
          passwordSaltIterations,
          ...authenticatedUser
        } = user;
        return authenticatedUser;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
    };
  }

  async register(user: { username: string; password: string }) {
    const hashedPassword = await this.hashPassword(user.password);

    const { passwordSalt, passwordSaltIterations, ...createdUser } = await this.usersService.create(
      {
        username: user.username,
        password: hashedPassword,
      },
    );

    return this.login(createdUser);
  }

  async hashPassword(
    unhashedPassword: string,
    hashOptions?: { salt: string; iterations: number },
  ): Promise<IHashedPassword> {
    if (!hashOptions) {
      const iterations = 10_000;
      hashOptions = {
        salt: await bcrypt.genSalt(iterations),
        iterations,
      };
    }

    return {
      hash: await bcrypt.hash(unhashedPassword, hashOptions.salt),
      ...hashOptions,
    };
  }
}
