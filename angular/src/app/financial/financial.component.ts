import { GetDSService } from './../../services/get-ds.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { registerables } from 'chart.js';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {


  employeeData: any;

  constructor(private GetDSService:GetDSService) { }

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
            data: [135200, 1122150, 497850, 147680, 226080, 224950, 312000, 5268608, 457439, 501000, 701500],
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
