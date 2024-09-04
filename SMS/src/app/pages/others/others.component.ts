import { Component } from '@angular/core';
import { ClassComponent } from '../../forms/class/class.component';
import { CurrComponent } from '../../forms/curr/curr.component';
import { CurractivityComponent } from '../../forms/curractivity/curractivity.component';

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [ClassComponent,CurrComponent,CurractivityComponent],
  templateUrl: './others.component.html',
  styleUrl: './others.component.scss'
})
export class OthersComponent {

}
