import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

interface Career {
  job: string;
}

@Component({
  selector: 'app-validation-demo',
  templateUrl: './validation-demo.component.html',
  styleUrls: ['./validation-demo.component.scss'],
  providers: [MessageService],
})
export class ValidationDemoComponent implements OnInit {
  careers: Career[];

  selectedCareer: Career;

  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.careers = [{ job: 'Magician' }, { job: 'Clown' }, { job: 'Juggler' }];
  }

  ngOnInit() {
    this.userform = this.fb.group({
      email: new FormControl('', Validators.required),
      message: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
      careers: new FormControl('', Validators.required),
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
}
