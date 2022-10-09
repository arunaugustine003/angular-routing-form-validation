import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormBuilder,
  FormGroup,
  FormArray,
} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-email-array-form',
  templateUrl: './email-array-form.component.html',
  styleUrls: ['./email-array-form.component.scss'],
  providers: [MessageService],
})
export class EmailArrayFormComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean;
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      firstname: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      lastname: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      emails: this.fb.array([]),
    });
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
  get emailForms() {
    return this.myForm.get('emails') as FormArray;
  }
  addEmail() {
    // console.log(`My Form before add=`);
    // console.log(this.myForm);
    const email = this.fb.control('', Validators.required);
    /* const email = this.fb.group({
      email: ['', Validators.required],
    }); */
    this.emailForms.push(email);
    // console.log(`My Form after add=`);
    // console.log(this.myForm);
  }

  deleteEmail(i) {
    this.emailForms.removeAt(i);
  }
}
