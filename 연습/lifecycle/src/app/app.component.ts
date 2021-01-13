import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="status=!status">
      {{ status ? 'Destroy Child' : 'Create Child'}}
    </button>
    <app-child *ngIf="status" [prop]="prop"></app-child>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = false;
  prop = 'Hello'
}
