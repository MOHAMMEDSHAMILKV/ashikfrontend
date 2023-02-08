import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  login(username: any, password: any) {
    const body = {
      username, password
    }
    return this.http.post('http://localhost:3000/login', body)
  }


  register(name: any, email: any, mobile: any, age: any, username: any, password: any,) {
    const body = {
      name, email, mobile, age, username, password
    }
    return this.http.post('http://localhost:3000/register', body)
  }


  addjob(jobname: any, description: any, place: any, time: any, company: any, number: any) {
    const body = {
      jobname, description, place, time, company, number
    }
    return this.http.post('http://localhost:3000/jobs', body)
  }


  joblist() {
    return this.http.get('http://localhost:3000/jobs')

  }

  viewcard(jobname: any):   Observable<any> {
    console.log("jobnames", jobname);

    return this.http.get('http://localhost:3000/jobview/' + jobname)
  }

}

