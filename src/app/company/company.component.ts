import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companies: Company[] = [
    {name: 'E1'},
    {name: 'E2'},
    {name: 'E3'},
    {name: 'E4'},
    {name: 'E5'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
