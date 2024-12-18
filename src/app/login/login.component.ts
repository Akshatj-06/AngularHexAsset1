import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../models/Login';
import { LoginService } from '../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObj: LoginModel = new LoginModel();
  loginSrv = inject(LoginService);
  router = inject(Router);
  toastr = inject(ToastrService);

  onLogin() {
    this.loginSrv.onLogin(this.loginObj).subscribe({
      next: (result: any) => {
        this.toastr.success('Successfully Logged In');
        localStorage.setItem('jwtToken', result.token);
        this.router.navigateByUrl('header');
      },
      error: (err) => {
        this.toastr.error('Invalid credentials. Please try again.', 'Login Failed');
      }
    });
  }


  onLogout() {
    this.loginSrv.onLogout();
    this.toastr.warning('Logged Out Successfully');
    this.router.navigateByUrl('login');
  }
  onForgotPassword() {
    this.router.navigateByUrl('forgot-password');
  }
}
