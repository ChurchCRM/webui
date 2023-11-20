import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordComponent } from './forgot-password.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      imports: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
