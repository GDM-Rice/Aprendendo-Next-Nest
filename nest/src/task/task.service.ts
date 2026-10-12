import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { PrismaService } from '../database/prisma.service.js';
import { taskdto } from './task.dto.js';

@Injectable()
export class TaskService {

  constructor (private prisma: PrismaService) {}

  async create(data: taskdto) {
    const task = await this.prisma.task.create({ 
      data
    })
    return task;
  }

  async findAll() {
    return this.prisma.task.findMany();
  }

  async update(id: number, data: UpdateTaskDto) {
    const task = await this.prisma.task.findUnique({
      where: { id }
    });
    if(!task) {
      throw new Error(`Task com o id ${id} não encontrado`);
    }
    return await this.prisma.task.update({
      where: { id },
      data
    });
  }

  async delete(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id }
    });
    if(!task) {
      throw new Error(`Task com o id ${id} não encontrado`);
    }
    return await this.prisma.task.delete({
      where: { id }
    });
  }

  async findOne(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id }
    });
    if(!task) {
      throw new Error(`Task com o id ${id} não encontrado`);
    }
    return task;
  }
  
}