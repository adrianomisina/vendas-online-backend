import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDTO):Promise<User> {
    return this.userService.createUser(createUser);
  }


  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
