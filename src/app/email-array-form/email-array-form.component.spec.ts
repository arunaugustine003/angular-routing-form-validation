import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailArrayFormComponent } from './email-array-form.component';

describe('EmailArrayFormComponent', () => {
  let component: EmailArrayFormComponent;
  let fixture: ComponentFixture<EmailArrayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailArrayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailArrayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
