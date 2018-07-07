import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company.model';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  private companyService: CompanyService;

  // public companies: Company[] = [];
  public companies: Company[] = [
    {name: 'E1'},
    {name: 'E2'},
    {name: 'E3'},
    {name: 'E4'},
    {name: 'E5'}
  ];

  constructor() { }

  ngOnInit() {
    // Ir no serviço e pegar todos os companies
    // this.companyService.companies().subscribe(
    //   companies => {
    //     this.companies = companies;
    //   }
    // );
  }
}
