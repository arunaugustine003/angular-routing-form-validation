import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [MessageService],
})
export class ContactFormComponent implements OnInit {
  userform: FormGroup;
  submitted: boolean;
  genders: SelectItem[];
  description: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}
  ngOnInit() {
    this.userform = this.fb.group({
      name: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ),
      comment: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
    });
    this.userform.valueChanges.subscribe(console.log);
  }
  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({
      severity: 'info',
      summary: 'Success',
      detail: 'Form Submitted',
    });
  }

  get diagnostic() {
    // return JSON.stringify(this.userform.value);
    return null;
  }
  log(x) {
    console.log(x);
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}
