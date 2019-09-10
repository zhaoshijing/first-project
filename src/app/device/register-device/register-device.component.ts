import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { DeviceService } from '../service/device.service';

@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.less']
})
export class RegisterDeviceComponent implements OnInit {
  imeiId: string;
  province: string;
  city: string;
  type: string;
  constructor(private deviceService: DeviceService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  confirm() {
    const postData = [
      {
        imeiId: this.imeiId,
        province: this.province,
        city: this.city,
        type: this.type
      }
    ];
    this.deviceService.postData({responseData: [postData]}).subscribe((res) => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  cancel() {
    this.router.navigate(['..'], {relativeTo: this.route});

  }
}
