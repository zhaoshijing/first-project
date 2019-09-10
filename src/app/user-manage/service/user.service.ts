import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  url = 'assets/user/mock-data.json';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }

  postData(data: any) {
    return this.http.post(this.url, data, this.httpOptions);
  }
}
