import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { CreateUserDTO } from './dto/createUser.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const saltOrRounds = 10;
    const passwordHashded = await hash(createUserDTO.password, saltOrRounds);

    const user: User = {
      ...createUserDTO,
      id: this.users.length + 1,
      password: passwordHashded
    }

    this.users.push(user);

    // console.log('passwordHashded', passwordHashded)

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}
