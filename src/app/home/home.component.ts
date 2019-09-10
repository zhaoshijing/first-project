import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {
  supervisonList = [
    {iconType: 'android', des: 'project1'},
    {iconType: 'apple', des: 'project2'},
    {iconType: 'windows', des: 'project3'},
    {iconType: 'ie', des: 'project4'},
    {iconType: 'chrome', des: 'project5'},
    {iconType: 'github', des: 'project5'},
  ];
  option = {
    title : {
        text: '告警数据',
        x: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['数据1', '数据2', '数据3', '数据4', '数据5']
    },
    series : [
        {
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '数据1'},
                {value: 310, name: '数据2'},
                {value: 234, name: '数据3'},
                {value: 135, name: '数据4'},
                {value: 1548, name: '数据5'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
  };
}
