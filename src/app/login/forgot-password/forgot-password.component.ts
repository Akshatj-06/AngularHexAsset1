import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  email: string = '';
  newPassword: string = '';
  userSrv = inject(UserService);
  router = inject(Router);

  onForgotPassword() {
    console.log('Email:', this.email); 
    console.log('New Password:', this.newPassword); 

    if (!this.email || !this.newPassword) {
      alert('Please enter both email and new password.');
      return;
    }

    this.userSrv.onForgotPassword(this.email, this.newPassword).subscribe({
      next: () => {
        alert('Password Updated Successfully');
        this.router.navigateByUrl('login');
      },
      error: (err) => {
        console.error(err);
        alert('Failed to update password.');
      },
    });
  }
}
