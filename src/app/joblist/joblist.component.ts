import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class JoblistComponent {

  show = 1

  jobname: any
  description: any
  place: any
  time: any
  company: any
  number: any

  elements: any = []

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.joblist()
  }

  joblist() {
    this.service.joblist()
      .subscribe((result: any) => {
        console.log("result", result)
        this.elements = result.data
        console.log(":elements:", this.elements)
      })
  }

  clicked() {
    if (this.show = 1) {
      this.show = 0
    }
    else if (this.show = 0) {
      this.show = 1
    }
  }

  addjob() {
    this.service.addjob(this.jobname, this.description, this.place, this.time, this.company, this.number)
      .subscribe((result: any) => {
        alert(result.message)
        console.log();

      })
  }
}


