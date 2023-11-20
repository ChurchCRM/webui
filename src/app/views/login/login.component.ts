import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
  });

  formInvalid: boolean = true;

  constructor(
    private loginService: LoginService
  ) {
    this.validateBuilder();
  }

  validateBuilder(): void {
    this.form.valueChanges.subscribe({
      next: (ele: any) => {
        if (ele.password.length < 6) this.form.setErrors({invalid: true});
        this.formInvalid = this.form.invalid;
      }
    });
  }

  sendForm(): void {
    this.loginService.sendData().subscribe({
      next: (res: any) => {
        console.log(res);
      }
    });
  }

}
