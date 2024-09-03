import { SidebarComponent } from './sidebar/sidebar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegformComponent } from './forms/regform/regform.component';
import { GradeformComponent } from './gradeform/gradeform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,RegformComponent,GradeformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SMS';
}
