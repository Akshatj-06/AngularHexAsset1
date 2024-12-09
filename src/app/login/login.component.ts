import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: any= {
     "email": "",
  "password": ""
  };
  http = inject(HttpClient);
  router = inject(Router);

  onLogin(){
    this.http.post("https://localhost:7209/api/User/login",this.loginObj).subscribe((result:any)=>{
      this.router.navigateByUrl('app')
      alert(" success")
    })
  }
}
