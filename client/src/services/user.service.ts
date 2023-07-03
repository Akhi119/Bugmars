import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from '../../src/config/constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Create a new user
  saveUser(userData: any): Observable<any> {
    console.log(`userData: ${JSON.stringify(userData)}`);
    return this.http.post(url.domainurl + `users`, userData);
  }
}
