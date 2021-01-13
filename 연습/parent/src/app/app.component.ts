import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row">
        <div class="form-inline">
          <div class="form-group" style="margin: 30p 0">
            <label for="name"> Name : </label>
            <input #name type="text" id="name" class="form-confrol" placeholder="이름을 입력하세요">
            <label for="role"> Role : </label>
            <select #role id="role" class="form-control">
              <option> Administrator </option>
              <option> Developer </option>
              <option> Designer </option>
            </select>
            <button type="button" class="btn btn-default" (click)="addUser(name.value, role.value)">
              Add User
            </button>
          </div>
          <app-user-list [users]="users" (remove)="removeUser($event)"></app-user-list>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
  users : User[]
  constructor(){
    this.users = [
      new User(1, 'Lee', 'Adminitrator'),
      new User(2, 'Baek', 'Developer'),
      new User(3, 'Park', 'Designer'),
    ]
  }
  addUser(name : string, role: string){
    if (name && role){
      this.users = [...this.users, new User(this.getNextId(), name, role)]
    }
  }

  removeUser(user : User){
    this.users = this.users.filter(({id}) => id !== user.id)
  }

  getNextId():number {
    return this.users.length ? Math.max(...this.users.map(({id}) => id)) + 1: 1
  }
}
