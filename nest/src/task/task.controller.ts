import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service.js';
import type { taskdto } from './task.dto.js';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() data: taskdto) {
    return this.taskService.create(data);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.taskService.delete(Number(id));
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: taskdto) {
    return this.taskService.update(Number(id), data);

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.taskService.delete(Number(id));
  }
}
