import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import * as vivus from 'vivus';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  query: string;
  constructor(private formService: FormService, private router: Router) {}

  ngOnInit() {}

  searchQuery(value: string) {
    this.formService.changeFormQuery(this.query);
    console.log(this.query);
    this.router.navigate(['/books']);
    this.query = '';
  }
  ngAfterViewInit() {
    const hi = new vivus('logoAni', {
      type: 'delayed',
      duration: 600,
    });
  }
}
