import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  set(data: string): void {
    try {
      localStorage.setItem('token', JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to localStorage', e)
    }
  }

  get(data: string): void {
    try {
      localStorage.setItem('token', JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to localStorage', e)
    }
  }
}
