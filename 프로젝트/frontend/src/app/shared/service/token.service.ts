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

  get(): string | null {
    try {
      return JSON.parse(localStorage.getItem('token'))
    } catch (e) {
      console.error('Error saving to localStorage', e)
      return null
    }
  }
  clear(): void {
    try {
      return localStorage.clear()
    } catch (e) {
      console.error('Error saving to localStorage', e)
      return null
    }
  }
}
