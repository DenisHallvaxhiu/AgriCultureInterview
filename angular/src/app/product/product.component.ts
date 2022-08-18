import { GetDSService } from './../../services/get-ds.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {


  constructor(private GetDSService: GetDSService) {}

  ngOnInit(): void {

  }

}
