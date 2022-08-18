import { TerritoryService } from './../../services/territory.service';
import { GenderService } from './../../services/gender.service';
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

  GenderArray:{
    Amount:number;
    Gender:string
  }[]=[]
  GenderData: any;

  TerritoryArray:{
    Amount:number;
    Territory:string
  }[]=[]
  TerritoryData: any;

  constructor(private GenderService:GenderService,private TerritoryService:TerritoryService) {}

  ngOnInit(): void {
    Chart.register(...registerables);

    this.getGender()
    this.getTerritory()

    const lineChart = new Chart('quoterSales', {
      type: 'line',
      data: {
        labels: [
          '2011/3',
          '2011/4',
          '2012/1',
          '2012/2',
          '2012/3',
          '2012/4',
          '2013/1',
          '2013/2',
          '2013/3',
        ],
        datasets: [
          {
            label: 'Stephen Jiang',
            data: [
              140000.0, 70000.0, 154000.0, 107000.0, 58000.0, 263000.0,
              116000.0, 84000.0, 187000.0,
            ],
            backgroundColor: ['rgb(255, 99, 132)'],
          },
          {
            label: 'Michael Blythe',
            data: [
              550000.0, 1429000.0, 1324000.0, 729000.0, 1194000.0, 1575000.0,
              1218000.0, 849000.0, 869000.0,
            ],
            backgroundColor: ['rgb(54, 162, 235)'],
          },
          {
            label: 'Linda Mitchell',
            data: [
              639000.0, 1355000.0, 1009000.0, 860000.0, 1021000.0, 1525000.0,
              1276000.0, 894000.0, 1124000.0,
            ],
            backgroundColor: ['rgb(130, 49, 237)'],
          },
          {
            label: 'Jillian Carson',
            data: [
              952000.0, 1600000.0, 1352000.0, 839000.0, 1369000.0, 1171000.0,
              971000.0, 714000.0, 947000.0,
            ],
            backgroundColor: ['rgb(153, 237, 109)'],
          },
          {
            label: 'Garrett Vargas',
            data: [
              341000.0, 542000.0, 329000.0, 239000.0, 418000.0, 507000.0,
              453000.0, 280000.0, 390000.0,
            ],
            backgroundColor: ['rgb(98, 137, 19)'],
          },
        ],
      },
    });
  }

  getGender(){
    this.GenderService.getGender().subscribe((response)=>{
      this.GenderData = response

      let data= []
      let gender = []

      for(let result of this.GenderData){
        this.GenderArray.push({'Amount':result.Amount,'Gender': result.Gender})
        data.push(result.Amount)
        gender.push((result.Gender == "F" ? 'Female':'Male'))
      }

      const doughnutChart = new Chart('gender', {
        type: 'doughnut',
        data: {
          labels: gender,
          datasets: [
            {
              label: 'Gender',
              data: data,
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)'],
            },
          ],
        },
      });
    })
  }

  getTerritory(){

    this.TerritoryService.getTerritory().subscribe((response)=>{
      this.TerritoryData = response

      let data= []
      let territory = []

      for(let result of this.TerritoryData){
        this.TerritoryArray.push({'Amount':result.Amount,'Territory': result.Territory})
        data.push(result.Amount)
        territory.push(result.Territory)
      }

      const polarAreaChart = new Chart('territory', {
        type: 'polarArea',
        data: {
          labels: territory,
          datasets: [
            {
              label: 'Territory',
              data: data,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(250,200,150)',
              ],
            },
          ],
        },
      });
    })

  }
}
