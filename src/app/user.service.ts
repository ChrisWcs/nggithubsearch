import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  data = {};

  constructor(private http: HttpClient) { }

  getUser(user: string) {
    return this.http.get(`https://api.github.com/users/${user}`);
  }


}
