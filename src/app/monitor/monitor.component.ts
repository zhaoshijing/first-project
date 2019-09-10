import { Component, OnInit } from '@angular/core';

import { MonitorService } from './service/monitor.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.less']
})
export class MonitorComponent implements OnInit {
  listOfData = [];

  classMap = {
    on: 'on-icon',
    off: 'off-icon',
    error : 'error-icon'
  };

  constructor(private monitorService: MonitorService) {}

  ngOnInit() {
    this.monitorService.getList().subscribe(({responseData}: any) => {
      this.listOfData = responseData;
    });
  }
}
