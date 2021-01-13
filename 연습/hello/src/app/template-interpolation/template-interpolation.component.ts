import { Component } from '@angular/core';

@Component({
  selector: 'app-template-interpolation',
  templateUrl: './template-interpolation.component.html',
  styleUrls: ['./template-interpolation.component.css']
})
export class TemplateInterpolationComponent {

  name = 'Angular';
  age = 20;
  admin = true;
  address = {
    city:'Seoul',
    country:'Korea'
  }

  sayHi(){
    return `Hi! my name is ${this.name}`
  }

}
