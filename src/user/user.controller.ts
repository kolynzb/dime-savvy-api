import {
  Controller,
  Delete,
  Get,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('')
  createUser(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.create(updateUserDto);
  }

  @Get('')
  getUsers() {
    return this.userService.getAll();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getOne(id);
  }

  @Patch(':id')
  updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.update(updateUserDto, id);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
