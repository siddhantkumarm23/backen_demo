import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {

  private tasks: Task[] = []
  private nextid = 1;

  create(createTaskPayload: CreateTaskDto) {
    const newTask = new Task();
    newTask.id = this.nextid++;
    newTask.title = createTaskPayload.title;
    newTask.description = createTaskPayload.description;
    newTask.completed = createTaskPayload.completed;
    newTask.createDate = new Date();
    newTask.completedDate = new Date();
    this.tasks.push(newTask);
    return newTask;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    return this.tasks.find(task => task.id === id);
  }

  update(id: number, updateTaskPayload: UpdateTaskDto) {
    const checkId = this.findOne(id);
    if (!checkId) {
      throw new BadRequestException("Invalid id. Or Id not exist");
    }
    const updateDetails = { ...checkId };
    updateDetails.title = (updateTaskPayload.title != undefined) ? updateTaskPayload.title : checkId.title;
    updateDetails.description = (updateTaskPayload.description != undefined) ? updateTaskPayload.description : checkId.description;
    updateDetails.completed = (updateTaskPayload.completed != undefined) ? updateTaskPayload.completed : checkId.completed;
    const findIndex = this.tasks.findIndex(task => task.id === id);
    this.tasks[findIndex] = updateDetails;
    return updateDetails;
  }

  remove(id: number) {
    const findIndex = this.tasks.findIndex(task => task.id === id);
    if (findIndex === -1) {
      return false;
    }
    this.tasks.splice(findIndex, 1);
    return `${id} delete successfully;`

  }


}
