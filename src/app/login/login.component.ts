import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: any
  password: any

  constructor(private service: ApiService, private rout: Router) { }
  login() {
    this.service.login(this.username, this.password)
      .subscribe((result: any) => {
        alert(result.message)
        this.rout.navigateByUrl('register')
        
      }, (result: any) => {
        console.log("test:", result.error.message)
        alert(result.error.message)
      })
  }


}
