import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DeviceService } from './service/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.less']
})
export class DeviceComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private deviceService: DeviceService) {}
  listOfData = [];

  classMap = {
    on: 'on-icon',
    off: 'off-icon',
    error : 'error-icon'
  };

  ngOnInit() {
    this.deviceService.getList().subscribe(({responseData}: any) => {
      this.listOfData = responseData;
    });
  }

  gotoDetail(event: MouseEvent, id: string) {
    event.preventDefault();
    this.router.navigate([id], {relativeTo: this.route});
  }

  registerDevice(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['register-device'], {relativeTo: this.route});
  }
}
