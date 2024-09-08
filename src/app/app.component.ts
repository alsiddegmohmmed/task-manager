import { Component } from "@angular/core";
import { TaskListComponent } from "./task-list.component";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-root',
  template: `
  <h1>task manager</h1>
  <app-task-list> </app-task-list>
  `,
  standalone: true,
  imports: [TaskListComponent , FormsModule],
})

export class AppComponent {
}
