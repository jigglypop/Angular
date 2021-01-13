import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{ name | uppercase }}</h2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'lee';
}
