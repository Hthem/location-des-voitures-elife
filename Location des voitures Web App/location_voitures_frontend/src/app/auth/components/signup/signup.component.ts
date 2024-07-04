import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  isSpinning = false;

  constructor(private fb: FormBuilder,
    private authService:AuthService,
    private router:Router
  ) {
    this.signupForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      checkPassword: [null, [Validators.required, this.confirmationValidate]]
    });
  }

  ngOnInit(): void {

}
  

    confirmationValidate = (control: FormControl): { [s: string]: boolean } => { 
      if (!control.value) {
          return { required: true };
          } else if (control.value !== this.signupForm.controls['password'].value) { 
            return { confirm: true, error: true };
          }
          return {};
    };

  register(): void {
    console.log(this.signupForm.value);
    this.authService.register(this.signupForm.value).subscribe((res) => {
      console.log(res);
    })
    this.router.navigateByUrl("/login");
  }



}
