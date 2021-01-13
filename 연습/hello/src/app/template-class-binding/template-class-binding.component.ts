import { Component } from '@angular/core';

@Component({
  selector: 'app-template-class-binding',
  templateUrl: './template-class-binding.component.html',
  styleUrls: ['./template-class-binding.component.css']
})
export class TemplateClassBindingComponent {
  isLarge = true
  isRed = false
  myClasses = 'text-large color-red'
}
