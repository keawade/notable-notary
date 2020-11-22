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

  // TODO: Salt and hash password
  @Column()
  password: string;

  @CreateDateColumn()
  created: string;

  @UpdateDateColumn()
  modified: string;

  // TODO: Salt and hash password
  public static create(user: { username: string; password: string }) {
    const newUser = new User();
    newUser.username = user.username;
    // TODO: Salt and hash password
    newUser.password = user.password;

    return newUser;
  }
}
