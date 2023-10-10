import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const data: Prisma.UserCreateInput = {
      email: createUserDto.email,
      password: createUserDto.password,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      age: createUserDto.age,
    };
    return this.prisma.user.create({
      data,
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const data: Prisma.UserUpdateInput = {
      email: updateUserDto.email,
      password: updateUserDto.password,
      firstName: updateUserDto.firstName,
      lastName: updateUserDto.lastName,
      age: updateUserDto.age,
    };
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
