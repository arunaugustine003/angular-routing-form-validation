import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss'],
  providers: [MessageService],
})
export class ArrayFormComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean;

  genders: SelectItem[];

  description: string;
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      phones: this.fb.array([]),

      // phones: new FormControl(this.fb.array([]), Validators.required),
    });
    this.myForm.valueChanges.subscribe(console.log);
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
  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: ['', Validators.required],
      prefix: ['', Validators.required],
      line: ['', Validators.required],
    });

    this.phoneForms.push(phone);
  }

  deletePhone(i) {
    this.phoneForms.removeAt(i);
  }
}
