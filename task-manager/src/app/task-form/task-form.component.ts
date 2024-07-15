import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TaskFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task | null
  ) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['Medium', Validators.required],
      notes: [''],
      tags: ['']
    });
  }

  ngOnInit(): void {}

  saveTask() {
    if (this.taskForm.valid) {
      const task: Task = {
        id: this.data ? this.data.id : Date.now(),
        ...this.taskForm.value,
        tags: this.taskForm.value.tags.split(',').map((tag: string) => tag.trim()),
        completed: this.data ? this.data.completed : false
      };
      this.dialogRef.close(task);
    }
  }
}
