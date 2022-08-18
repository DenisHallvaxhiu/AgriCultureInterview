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


  SalaryArray:{
    Salary:number;
    Department:string
  }[]=[]
  employeeData: any;

  constructor(private GetDSService:GetDSService) { }

  ngOnInit(): void {
    this.getFinance()
  }

  getFinance() {
    this.GetDSService.getPostsGetAllDS().subscribe((response) => {
      this.employeeData = response;

      Chart.register(...registerables);
      let data = []
      let department = []
      for(let result of this.employeeData){
        this.SalaryArray.push({'Salary':Math.round(result.Salary)*52*40,'Department':result.Department})
        data.push(Math.round(result.Salary)*52*40)
        department.push(result.Department)
      }
      console.log(department);

      const pieChart = new Chart('expensis', {
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
              data: data,
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
    });
  }

}
