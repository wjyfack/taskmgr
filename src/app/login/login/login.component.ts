import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.form = new FormGroup({
    //   email: new FormControl('wu@163.com', Validators.compose([Validators.required, Validators.email])),
    //   password: new FormControl('', Validators.required)
    // });
    this.form = this.fb.group({
      email: new FormControl('wu@163.com', Validators.compose([Validators.required, Validators.email,  this.validate])), //
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    console.log(JSON.stringify(value));
    // this.form.controls['email'].setValidators(this.validate);
  }
  // 自定义validate
  validate(c: FormControl): {[key: string]: any} {
    if (! c.value) {
      return null;
    }
    const pattern = /^wu+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      emailNotValid: 'The email must start with wu',
    }
  }
}
