import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthDto } from '../../interfaces/authDto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent {
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.form.valid) {
      const data: AuthDto = {
        user: this.form.value,
      };

      this.authService
        .login(
          //methodun ichine datalari  object olaraq yaradib gonderirik
          data
        )
        .subscribe((resp) => {
          this.authService.setToken(resp.user.token);
          this.router.navigate(['/']);
        });
    }
  }
}
