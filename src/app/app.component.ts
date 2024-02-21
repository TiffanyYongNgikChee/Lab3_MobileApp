import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AComponent,BComponent],
  templateUrl: './app.component.html', //METADATA, template/view (html), business logic
  styleUrl: './app.component.css' //Style
})
export class AppComponent {
  title:string = 'my-first-app';
  name:string = 'Tiffany';
  age:number = 21;
}
