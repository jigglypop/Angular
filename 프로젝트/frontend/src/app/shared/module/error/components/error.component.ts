import { Component, Input, OnInit } from '@angular/core';
import { IError } from 'src/app/shared/types/error.interface';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input('errors') errorProps: IError

  errors : string
  ngOnInit(): void {
    this.errors = this. errorProps.error.error.replace('Error: ', '')
    console.log(this.errors)
  }
}
