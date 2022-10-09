import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
interface Career {
  job: string;
}
@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  careers: Career[];

  selectedCareer: Career;

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.careers = [{ job: 'Magician' }, { job: 'Clown' }, { job: 'Juggler' }];
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: '',
      careers: '',
    });

    this.myForm.valueChanges.subscribe(console.log);
  }
}
