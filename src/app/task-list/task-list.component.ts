import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service'; // Import TaskService
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
})
export class TaskListComponent implements OnInit {
  tasks: any[];
  newTask: string = '';
  editingTask: boolean[] = [];

  constructor(private taskService: TaskService, private router: Router) {
    this.tasks = this.taskService.getTasks();
  }

  ngOnInit() {
    // Remove this line if you initialize in the constructor
    // this.tasks = this.taskService.getTasks();
  }

  addTask() {
    if (this.newTask.trim()) {
      const task = {
        id: this.tasks.length, // Generating a simple ID
        name: this.newTask.trim(),
        description: 'No description yet',
      };
      this.taskService.addTask(task);
      this.newTask = '';
      this.editingTask.push(false);
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  viewTask(task: { id: number; name: string }) {
    this.router.navigate(['/task', task.id], { state: { task } });
  }

  toggleEdit(index: number) {
    this.editingTask[index] = !this.editingTask[index];
    if (!this.editingTask[index]) {
      const updatedTask = this.tasks[index];
      this.taskService.editTask(updatedTask);
    }
  }
}
