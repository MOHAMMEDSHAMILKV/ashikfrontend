import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-jobcard',
  templateUrl: './jobcard.component.html',
  styleUrls: ['./jobcard.component.css']
})
export class JobcardComponent {

  elements: any
  constructor(private service: ApiService) {

  }
  ngOnInit() {
    this.jobcard()
  }

  jobcard() {
    this.service.joblist()
      .subscribe((result: any) => {
        this.elements = result.data
      }

      )
  }



}
