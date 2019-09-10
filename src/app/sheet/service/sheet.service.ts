import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SheetService {

  url = 'assets/sheet/mock-data.json';

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }
}
