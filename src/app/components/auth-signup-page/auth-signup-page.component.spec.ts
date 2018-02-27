import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignupPageComponent } from './auth-signup-page.component';

describe('AuthSignupPageComponent', () => {
  let component: AuthSignupPageComponent;
  let fixture: ComponentFixture<AuthSignupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSignupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
