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

  public tracker: Tracker =
    {latitude: 51.678418,
    longitude: 7.809007,
    time: '12h30'};
  // public trackers: Tracker[] = [
  //   {latitude: 123242,
  //   longitude: 801403,
  //   time: '12h30'},
  //   {latitude: 123243,
  //   longitude: 801403,
  //   time: '12h31'},
  //   {latitude: 123244,
  //   longitude: 801403,
  //   time: '12h32'},
  //   {latitude: 123245,
  //   longitude: 801403,
  //   time: '12h35'},
  //   {latitude: 123246,
  //   longitude: 801403,
  //   time: '12h36'}
  // ];

  constructor() { }

  ngOnInit() {
  }

}
