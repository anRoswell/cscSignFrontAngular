import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ILogin } from '../../models/login.model';
import { AuthService } from './../../services/auth.service';
import { StorageService } from './../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: ILogin;
  public form: FormGroup;
  public error: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private storage: StorageService,
    private router: Router
  ) {
    this.error = false;
    if (this.auth.isAuth()) {
      this.router.navigate(['/admin/estadisticas/main']);
    } else {
      this.form = new FormGroup({
        usr_email: new FormControl(null, Validators.required),
        usr_password: new FormControl(null, Validators.required)
      })
    }
  }

  ngOnInit(): void {}

  isInvalid(field: string): boolean {
    const f = this.form.get(field);
    return f.invalid && (f.dirty || f.touched);
  }

  login() {

    if (this.form.valid) {
      this.user = this.form.value;
      this.user.password = this.form.get('usr_password').value;

      
      this.auth.login(this.user).subscribe(
        (user) => {
          const { access } = user;
          this.storage.save('_user', user);
          this.storage.save('_access', access, true);
          this.router.navigate(['/admin/estadisticas/main']);
        },
        ({ error, status }) => {
          console.log(`${error}`);
          this.error =
            status === 0 ? { message: 'Error de conexión al servidor' } : error;
          setTimeout(() => (this.error = false), 3000);
        }
      );
    }
  }
}
