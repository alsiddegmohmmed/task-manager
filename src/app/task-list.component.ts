import { Component, NgModule } from "@angular/core";
import { NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { OnInit } from "@angular/core";
import { NgIf } from "@angular/common";

@Component ({
  selector: 'app-task-list',
  template: `
<h2>Task List</h2>
<input [(ngModel)]="newTask" placeholder="Add a new task" />
<button (click)="addTask()">Add Task</button>
<ul>
  <li *ngFor="let task of tasks ; let i = index">
    <span *ngIf="!editingTask[i]">{{ task }}</span>
    <input *ngIf="editingTask[i]" [(ngModel)]="tasks[i]" />
    <button (click)="deleteTask(i)">delete</button>
    <button (click)="toggleEdit(i)">{{editingTask[i] ? "save" : "edit"}}</button>
  </li>
</ul>
  `,
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
})

export class TaskListComponent implements OnInit  {

  tasks: string[] = ['Learn Angular', 'Learn React', 'Learn Vue'];
  editingTask: boolean[] = [];
  newTask = '' ;
  ngOnInit() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
      this.saveTasks()
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.editingTask.splice(index, 1);
    this.saveTasks();
  }

  toggleEdit(index:number) {
    this.editingTask[index] = !this.editingTask[index];
    if (!this.editingTask[index]) {
      this.saveTasks();
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
