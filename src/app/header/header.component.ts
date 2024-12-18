import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginModel } from '../models/Login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  loginSrv = inject(LoginService);
  router = inject(Router);

  onLogout() {
    this.loginSrv.onLogout();
    alert("Logged out Successfully");
    this.router.navigateByUrl('login');
  }
}
