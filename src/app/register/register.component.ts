import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name: any
  email: any
  mobile: any
  age: any
  username: any
  password: any

  constructor(private api: ApiService) { }

  register() {
    this.api.register(this.name, this.email, this.mobile, this.age, this.username, this.password)
      .subscribe((result: any) => {
        alert(result.message)

      }, (result: any) => {
        alert(result.error.message)
      })
  }



}

