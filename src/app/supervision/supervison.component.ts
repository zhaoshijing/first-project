import { Component } from '@angular/core';

@Component({
  selector: 'app-supervision',
  templateUrl: './supervision.component.html',
  styleUrls: ['./supervision.component.less']
})
export class SupervisionComponent {
  supervisonList = [
    {iconType: 'android', des: 'project1'},
    {iconType: 'apple', des: 'project2'},
    {iconType: 'windows', des: 'project3'},
    {iconType: 'ie', des: 'project4'},
    {iconType: 'chrome', des: 'project5'},
    {iconType: 'github', des: 'project5'},
  ];
}
