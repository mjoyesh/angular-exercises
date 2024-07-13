import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.service';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], searchText: string, showCompleted: boolean): Task[] {
    if (!tasks) return [];

    let filteredTasks = tasks;

    // Filter by search text
    if (searchText) {
      const lowerCaseSearchText = searchText.toLowerCase();
      filteredTasks = filteredTasks.filter(task =>
        task.name.toLowerCase().includes(lowerCaseSearchText)
      );
    }

    // Filter by completion status
    if (!showCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.completed);
    }

    return filteredTasks;
  }
}
