import { Component } from '@angular/core';

@Component({
  selector: 'app-template-property-binding',
  templateUrl: './template-property-binding.component.html',
  styleUrls: ['./template-property-binding.component.css']
})
export class TemplatePropertyBindingComponent{
 name="ungmo2"
 contents = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
 imageUrl = 'https://via.placeholder.com/350x150'
 isDisabled = true
}
