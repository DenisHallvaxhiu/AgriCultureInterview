import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page-nav',
  templateUrl: './landing-page-nav.component.html',
  styleUrls: ['./landing-page-nav.component.css'],
})
export class LandingPageNavComponent implements OnInit {
  constructor(private LoginService: LoginService) {}

  popup = false;
  profile = false
  user:any;

  ngOnInit(): void {}

  togglePopup() {
    this.popup = !this.popup;
  }
  logOut(){
    this.profile = !this.profile
  }

  loginUser(loginForm: NgForm) {
    // console.log(loginForm.value.username)
    // console.log(loginForm.value.password)
  }
  getLogin(loginForm: NgForm) {
    this.LoginService.getLogin(
      loginForm.value.username,
      loginForm.value.password
    ).subscribe(
      (response) => {
        this.user =response
        if (this.user.length === 0) {
          this.user = true;
        }else{
          this.user = false
          this.popup = !this.popup
          this.profile = !this.profile
          loginForm.resetForm()
        }

      },
      (error) => {
        console.log('error during post is ', error);
      }
    );
  }
}
