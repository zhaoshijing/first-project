import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DeviceService } from '../service/device.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.less']
})
export class DeviceDetailComponent implements OnInit {

  id: string;
  constructor(private route: ActivatedRoute, private deviceService: DeviceService) {}
  targetDevice: any = {};
  keys: string[] = [];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.deviceService.getList().subscribe(({responseData}: any) => {
      this.targetDevice = responseData.filter(item => item.key === this.id)[0];
      this.keys = Object.keys(this.targetDevice);
    });
  }
}
