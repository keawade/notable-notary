import { IHashedPassword } from '../auth/interfaces';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ unique: true })
  username: string;

  @Column()
  passwordHash: string;
  @Column()
  passwordSalt: string;
  @Column()
  passwordSaltIterations: number;

  @CreateDateColumn()
  created: string;

  @UpdateDateColumn()
  modified: string;

  // TODO: Salt and hash password
  public static create(user: { username: string; password: IHashedPassword }) {
    const newUser = new User();

    newUser.username = user.username;

    newUser.passwordHash = user.password.hash;
    newUser.passwordSalt = user.password.salt;
    newUser.passwordSaltIterations = user.password.iterations;

    return newUser;
  }
}
