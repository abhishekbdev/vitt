import { Component, OnInit } from '@angular/core';
import formula from '../../assets/json/formula.json'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  formulaData = formula;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToCalculator(name: string) {
    this.router.navigate(['/calculator', name]);
  }
}
