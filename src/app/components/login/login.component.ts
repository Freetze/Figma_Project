import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  @Output() formIsValid = new EventEmitter<{
    username: string;
    password: string;
  }>();
  constructor(private fb: FormBuilder) {
    this.login = fb.group({
      username: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
        },
      ],
      password: [
        '',

        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9]*$/),
          ],
        },
      ],
    });
  }
  get username(): FormControl {
    return this.login.get('username') as FormControl;
  }
  get password(): FormControl {
    return this.login.get('password') as FormControl;
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.login.valid) {
      this.formIsValid.emit(this.login.value);
    }
  }
}
