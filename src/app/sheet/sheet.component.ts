import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SheetService } from './service/sheet.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.less']
})
export class SheetComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private sheetService: SheetService) {}
  listOfData = [];

  ngOnInit() {
    this.sheetService.getList().subscribe(({responseData}: any) => {
      this.listOfData = responseData;
    });
  }
  gotoDetail(event: MouseEvent, id: string) {
    event.preventDefault();
    this.router.navigate([id], {relativeTo: this.route});
  }

}
