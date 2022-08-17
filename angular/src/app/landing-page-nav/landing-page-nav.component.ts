import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page-nav',
  templateUrl: './landing-page-nav.component.html',
  styleUrls: ['./landing-page-nav.component.css']
})
export class LandingPageNavComponent implements OnInit {

  constructor() { }

  popup = false

  ngOnInit(): void {
  }

  togglePopup(){
    this.popup = !this.popup
    console.log(this.popup)
  }

}
