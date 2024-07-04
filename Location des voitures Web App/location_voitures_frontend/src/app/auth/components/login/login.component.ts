import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSpinning: boolean = false;
  loginForm!: FormGroup;  

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  login() {
    this.isSpinning = true;
    this.authService.login(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        this.isSpinning = false;
        if (res.userId != null) {
          const user = {
            id: res.userId,
            role: res.userRole
          };
          StorageService.saveUser(user);
          StorageService.saveToken(res.jwt);
          if (StorageService.isAdminLoggedIn()) {
            this.router.navigateByUrl("/admin/dashboard");
          } else if (StorageService.isCustomerLoggedIn()) {
            this.router.navigateByUrl("/customer/dashboard");
          }
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.isSpinning = false;
      }
    );
  }
}
