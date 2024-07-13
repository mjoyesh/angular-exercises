import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  id: number;
  name: string;
  dueDate: Date;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
  notes: string;
  tags: string[];
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.tasksSubject.next(tasks);
  }

  private saveToLocalStorage(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addTask(task: Task) {
    const tasks = [...this.tasksSubject.value, task];
    this.tasksSubject.next(tasks);
    this.saveToLocalStorage(tasks);
  }

  updateTask(updatedTask: Task) {
    const tasks = this.tasksSubject.value.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasksSubject.next(tasks);
    this.saveToLocalStorage(tasks);
  }

  deleteTask(taskId: number) {
    const tasks = this.tasksSubject.value.filter(task => task.id !== taskId);
    this.tasksSubject.next(tasks);
    this.saveToLocalStorage(tasks);
  }

  getTaskById(taskId: number): Task | undefined {
    return this.tasksSubject.value.find(task => task.id === taskId);
  }
}
