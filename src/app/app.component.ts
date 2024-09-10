import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";


@Component({
  selector: 'app-root',
  template: `
  <nav>
   <a routerLink="/">Home</a>
   <a routerLink="/about">About</a>
  </nav>
  <router-outlet></router-outlet>

  `,
  standalone: true,
  imports: [RouterModule],
})

export class AppComponent {
}
