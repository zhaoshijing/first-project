import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SheetService } from '../service/sheet.service';

@Component({
  selector: 'app-sheet-detail',
  templateUrl: './sheet-detail.component.html',
  styleUrls: ['./sheet-detail.component.less']
})
export class SheetDetailComponent implements OnInit {

  id: string;
  updateOptions: any;
  updateOptions1: any;
  constructor(private route: ActivatedRoute, private sheetService: SheetService) {}
  pieOption = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['低电压告警', '液位告警', '移动告警', '电池寿命告警']
    },
    series: [{
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [
            {value: 0, name: '低电压告警'},
            {value: 0, name: '液位告警'},
            {value: 0, name: '移动告警'},
            {value: 0, name: '电池寿命告警'},
        ]
      }
    ]
  };
  barOption = {
    title: {
        text: '报表统计'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['低电压告警', '液位告警', '移动告警', '电池寿命告警']
    },
    series: [
        {
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        }
    ]
  };



  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sheetService.getList().subscribe(({responseData}: any) => {
      const targetObj = responseData.filter(item => item.key === this.id)[0];
      const updateData = [
        {value: targetObj.lowPower, name: '低电压告警'},
        {value: targetObj.liquid, name: '液位告警'},
        {value: targetObj.move, name: '移动告警'},
        {value: targetObj.lifeWarning, name: '电池寿命告警'}
      ];
      setTimeout(() => {
        this.updateOptions = {
          series: [{
            data: updateData
          }]
        };
        this.updateOptions1 = {
          series: [{
            data: updateData.map(item => item.value)
          }]
        };
      }, 500);
    });
  }
}
