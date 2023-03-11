import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  update(updateUserDto: UpdateUserDto, id: number) {
    return {
      email: updateUserDto.email,
      id,
    };
  }
}
