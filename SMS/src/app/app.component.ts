import { SidebarComponent } from './sidebar/sidebar.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegformComponent } from './forms/regform/regform.component';
import { CurrComponent } from './forms/curr/curr.component';
import { CurractivityComponent } from './forms/curractivity/curractivity.component';
import { ClassComponent } from './forms/class/class.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,RegformComponent,CurrComponent,CurractivityComponent,ClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SMS';
}
