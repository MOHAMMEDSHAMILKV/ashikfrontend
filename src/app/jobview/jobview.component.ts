import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-jobview',
  templateUrl: './jobview.component.html',
  styleUrls: ['./jobview.component.css']
})
export class JobviewComponent {
  elements: any

  paramsname: any
  constructor(private service: ApiService, private AR: ActivatedRoute) { }

  ngOnInit() {

    this.AR.params
      .subscribe((result) => {
        

        this.paramsname = result['jobname']
        console.log("params", this.paramsname);


      })

    this.service.viewcard(this.paramsname)
      .subscribe((result) => {
        console.log("Res", result);
        this.elements = result
        this.elements = this.elements.data
        console.log("elements", this.elements);

      })
  }
}