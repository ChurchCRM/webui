import { Component, HostListener, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  private viewOpened: Subject<any> = new Subject();
  formInvalid: boolean = true;

  form: FormGroup = new FormGroup({
    email: new FormControl('john@email.com', [Validators.required, Validators.email]),
    password: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    private loginService: LoginService
  ) {
    this.validateBuilder();
  }

  ngOnDestroy(): void {
    console.log('View destroyed');
    this.viewOpened.complete();
  }

  validateBuilder(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.viewOpened)
    ).subscribe({
      next: (ele: any) => {
        this.formInvalid = this.form.invalid;
      }
    });
  }

  sendForm(): void {
    this.loginService.sendData().pipe(
      takeUntil(this.viewOpened)
    ).subscribe({
      next: (res: any) => {
        console.log(res);
      }
    });
  }

}
