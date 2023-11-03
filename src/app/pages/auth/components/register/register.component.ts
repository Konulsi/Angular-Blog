import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { RegisterDto } from '../../interfaces/registerDto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent {
  // registerForm: FormGroup;

  // userName: FormControl = new FormControl('', Validators.required);
  // email: FormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  // password: FormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.minLength(8),
  // ]);

  // constructor(private formBuilder: FormBuilder, private router: Router) {
  //   this.registerForm = this.formBuilder.group({
  //     username: this.userName,
  //     email: this.email,
  //     password: this.password,
  //   });
  // }

  password: string;
  email: string;
  userName: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}
  onSubmit(): void {
    this.authService
      .register({
        //methodun ichine datalari  object olaraq yaradib gonderirik
        user: {
          username: this.userName,
          email: this.email,
          password: this.password,
        },
      } as unknown as RegisterDto)
      .subscribe((resp) => {
        console.log(resp);
      });

    // const a = {
    //   user: {
    //     userName: this.userName,
    //     email: this.email,
    //     password: this.password,
    //   },
    // };
    // console.log(a);

    //yaratdigimiz objecti as RegisterDto deyerek RegisterDto tipine chevirmish oluruq.
  }
}

// user: bio: null;
// email: 'testKonul@test.com';
// image: 'https://api.realworld.io/images/smiley-cyrus.jpeg';
// token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidGVzdEtvbnVsQHRlc3QuY29tIiwidXNlcm5hbWUiOiJ0ZXN0S29udWwifSwiaWF0IjoxNjk4OTA5ODkwLCJleHAiOjE3MDQwOTM4OTB9.b9UApsq_oyqMu_5VVPMIUJSv4qOo4Z1wQ5_yZ2fUOis';
// username: 'testKonul';
