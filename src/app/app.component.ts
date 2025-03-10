import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponent } from "./task-form/task-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'do-i-automate';
}
