import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../task.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskViewComponent } from '../task-view/task-view.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  showCompleted: boolean = false;
  searchText: string = '';

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.taskService.tasks$.subscribe(tasks => this.tasks = tasks);
  }

  toggleCompleted() {
    this.showCompleted = !this.showCompleted;
  }

  deleteTask(taskId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to delete this task?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.deleteTask(taskId);
      }
    });
  }

  openTaskForm(task?: Task) {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (task) {
          this.taskService.updateTask(result);
        } else {
          this.taskService.addTask(result);
        }
      }
    });
  }

  openTaskView(task: Task) {
    this.dialog.open(TaskViewComponent, {
      data: task
    });
  }

  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
    this.taskService.updateTask(task);
  }
}
