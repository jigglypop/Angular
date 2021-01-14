import { Component } from '@angular/core';

interface User {
  id:number
  name:string
}

@Component({
  selector: 'app-root',
  template: `
    <input type="text" placeholder="이름을 입력하세요" #name>
    <button (click)="addUser(name.value)">add User</button>
    <ul>
      <li *ngFor="let user of users let i=index trackBy: trackByUserId">
        {{ i }} : {{ user.name }}
        <button (click)="removeUser(user.id)">x</button>
      </li>
    </ul>
    <pre>{{ users | json }}</pre>
  `
})
export class AppComponent {
  users : User[] = [
    {id : 1, name:'Lee'},
    {id : 2, name:'Kim'},
    {id : 3, name:'Baek'},
  ]

  addUser(name:string){
    if (name){
      this.users.push({id : this.getNewUserId(), name})
    }
  }
  removeUser(userid:number){
    this.users = this.users.filter(({id}) => id !== userid)
  }
  getNewUserId() : number {
    return this.users.length ? Math.max(...this.users.map(({id})=>id)) + 1 : 1
  }

  trackByUserId(index : number, user : User){
    return user.id
  }
}
