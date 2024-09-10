import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service'; // Import TaskService
import { Task } from '../task-list/task.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  standalone: true,
  imports: [DatePipe],
})
export class TaskDetailsComponent implements OnInit {
  task!: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    const task = this.taskService.getTaskById(id);

  }
}
