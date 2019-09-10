import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { filter } from 'rxjs/operators';
interface DeviceType {
  key: number;
  name: string;
  type: string;
  status: string;
}
@Injectable()
export class DeviceService {

  url = 'assets/device/mock-data.json';

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
