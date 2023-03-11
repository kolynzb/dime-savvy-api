import { Controller, Patch } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Patch(':id')
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param() param: { id: number },
  ) {
    return this.userService.update(updateUserDto, param.id);
  }
}
