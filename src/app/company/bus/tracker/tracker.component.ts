import { Component, OnInit } from '@angular/core';
import { Tracker } from '../../../models/tracker.model';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  private companyService: CompanyService;

  // public tracket: Tracker;
  public tracker: Tracker =
    {latitude: 51.678418,
    longitude: 7.809007,
    time: '12h30'};

  constructor() { }

  ngOnInit() {
    // this.companyService.tracker(
    //   tracker => {
    //     this.tracker = tracker;
    //   }
    // );
  }

}
