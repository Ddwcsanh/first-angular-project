import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  signupUsers: any[] = [];

  signupObj: any = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  loginObj: any = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {
    const loginData = localStorage.getItem('signupUsers');
    if (loginData != null) {
      this.signupUsers = JSON.parse(loginData);
    }
  }

  signup() {
    if (this.signupObj.password !== this.signupObj.confirmPassword) {
      alert('Password and Confirm Password should be same.');
      return;
    }
    const user = this.signupUsers.find((x) => x.email === this.signupObj.email);
    if (user) {
      alert('User already exists!');
      return;
    }
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    alert('Sign Up Successful');
  }

  login() {
    const user = this.signupUsers.find(
      (x) =>
        x.email === this.loginObj.email && x.password === this.loginObj.password
    );
    if (user) {
      alert('Login Successful');
      window.location.href = 'https://www.ddwcsanh.social/';
    } else {
      alert('Invalid Credentials');
      return;
    }
    this.loginObj = {
      email: '',
      password: '',
    };
  }
}
