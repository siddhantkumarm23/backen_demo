import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @ApiOperation({
    summary: "Create a Task"
  })
  @Post()
  create(@Body() createTaskPayload: CreateTaskDto) {
    return this.taskService.create(createTaskPayload);
  }

  @ApiOperation({
    summary: "Get all tasks"
  })
  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @ApiOperation({
    summary: "Get task by id"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @ApiOperation({
    summary: "Update task details by id"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @ApiOperation({
    summary: "Delete task details by id"
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
