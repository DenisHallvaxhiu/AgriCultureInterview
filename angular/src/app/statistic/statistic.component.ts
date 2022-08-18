import { GetDSService } from './../../services/get-ds.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { registerables } from 'chart.js';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css'],
})
export class StatisticComponent implements OnInit {
  constructor(private GetDSService: GetDSService) {}

  employeeData: any;
  hourRateOfAllEmployees: any = [];
  productionWorkerSalary: number = 0;
  tempSalary: number = 0;

  ngOnInit(): void {
    this.employeeData = this.GetDSService.getPostsGetAllDS();

    Chart.register(...registerables);

    const pieChart = new Chart('countries', {
      type: 'pie',
      data: {
        labels: [
          'Shipping & Receiving',
          'Sales',
          'Finance',
          'Document Control',
          'Tool Design',
          'Human Resources',
          'Marketing',
          'Production',
          'Purchasing',
          'Engineering',
          'Information Service',
        ],
        datasets: [
          {
            label: 'My First Dataset',
            data: [65, 539, 239, 71, 108, 108, 150, 2532, 219, 240, 341],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(120,12,12)',
              'rgb(100,100,100)',
              'rgb(250,200,150)',
              'rgb(24, 33, 27)',
              'rgb(37, 87, 249)',
              'rgb(153, 237, 109)',
              'rgb(130, 49, 237)',
              'rgb(98, 137, 19)',
            ],
          },
        ],
      },
    });
  }
}
