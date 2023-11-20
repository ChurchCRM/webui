import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/services/login/login.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let html: any;

  beforeEach(() => {
    const loginService = LoginService;
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
      ],
      providers: [
        { provide: LoginService, useValue: loginService },
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    html = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render titles', () => {
    expect(html.nativeElement.querySelector('.centered strong')?.textContent).toContain('Church');
    expect(html.nativeElement.querySelector('.centered')?.textContent).toContain('CRM');
    expect(html.nativeElement.querySelector('mat-card-subtitle')?.textContent).toContain('Please Login');
  });

  it('should have form input fields', () => {
    expect(html.nativeElement.querySelector('[formControlName="email"]')).toBeTruthy();
    expect(html.nativeElement.querySelector('[formControlName="password"]')).toBeTruthy();
  });

  it('should input form fields has wrong values', () => {
    component.form.controls['email'].setValue('test@');
    component.form.controls['password'].setValue('12345');
    fixture.detectChanges();
    expect(component.form.invalid).toBeTruthy();
    expect(html.nativeElement.querySelector('button')?.disabled).toBeTruthy();
  });

  it('should input form fields has true values', () => {
    component.form.controls['email'].setValue('test@email.com');
    component.form.controls['password'].setValue('123456');
    fixture.detectChanges();
    expect(component.form.valid).toBeTruthy();
    expect(html.nativeElement.querySelector('button')?.disabled).toBeFalsy();
  });

});
