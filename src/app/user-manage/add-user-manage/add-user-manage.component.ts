import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user-manage',
  templateUrl: './add-user-manage.component.html',
  styleUrls: ['./add-user-manage.component.less']
})
export class AddUserManageComponent implements OnInit {
  username: string;
  password: string;
  role: string;
  group: string;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  confirm() {
    const postData = [
      {
        username: this.username,
        role: this.role,
        group: this.group
      }
    ];
    this.userService.postData({responseData: [postData]}).subscribe((res) => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  cancel() {
    this.router.navigate(['..'], {relativeTo: this.route});

  }
}
