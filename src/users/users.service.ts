import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IHashedPassword } from 'src/auth/interfaces';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        username,
      },
    });
  }

  async create(user: { username: string; password: IHashedPassword }) {
    const { passwordHash: password, ...createdUser } = await this.usersRepository.save(
      User.create(user),
    );

    return createdUser;
  }
}
