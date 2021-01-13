import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser() : User {
    return { id : 1, name: 'Lee', admin : true}
  }
}
