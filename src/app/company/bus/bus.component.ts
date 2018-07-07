import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bus } from '../../models/bus.model';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  public companyName: string;

  public buses: Bus[] = [
    {registration: 1},
    {registration: 2},
    {registration: 3},
    {registration: 4},
    {registration: 5},
    {registration: 6},
    {registration: 7},
    {registration: 8},
    {registration: 9},
    {registration: 10}
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyName = this.route.snapshot.paramMap.get('name');

    // Ir no serviço para pergar os buses a partir do companyName
  }
}
