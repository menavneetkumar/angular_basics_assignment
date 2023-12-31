import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ract-form',
  templateUrl: './ract-form.component.html',
  styleUrls: ['./ract-form.component.css']
})
export class RactFormComponent {
  userForm: FormGroup;
  userFormValue : any;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      alert(JSON.stringify(this.userForm.value));
      this.userFormValue = JSON.stringify(this.userForm.value);
    }
  }

}
