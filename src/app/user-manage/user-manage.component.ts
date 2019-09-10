import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent implements OnInit {
  listOfData = [];

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.userService.getList().subscribe(({responseData}: any) => {
      this.listOfData = responseData;
    });
  }

  addUser(event: MouseEvent) {
    event.preventDefault();
    this.router.navigate(['add-user'], {relativeTo: this.route});
  }
}
