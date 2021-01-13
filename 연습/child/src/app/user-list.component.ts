import { Component, Input } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-user-list',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th> No. </th>
          <th> ID </th>
          <th> Name </th>
          <th> Role </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users let i=index">
          <td>{{ i }}</td>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.role }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <div>
        <p> Admin : {{cntAdmin}}</p>
        <p> Developer : {{cntDeveloper}} </p>
        <p> Designer : {{cntDesigner}} </p>
        <p></p>
      </div>
    </div>
  `,
})
export class UserListComponent {

  private _users : User[]

  cntAdmin : number;
  cntDeveloper : number;
  cntDesigner :  number;

  @Input()
  set users(users: User[]) {
    if (!users)  return
    this.cntAdmin = users.filter(({role})=>role==="Administrator").length
    this.cntDeveloper = users.filter(({role})=>role==="Developer").length
    this.cntDesigner = users.filter(({role})=>role==="Designer").length
    this._users = users
  }
  get users() : User[] {
    return this._users;
  }
}
