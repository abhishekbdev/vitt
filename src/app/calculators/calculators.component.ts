import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.css']
})
export class CalculatorsComponent implements OnInit {

  public chart: any;


  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}


  name!: string;
  formula!: string;
  calculatorForm!: FormGroup;
  result!: number;
  principal: number = 100000;
  period: number = 30;
  interestRate: number = 6.4;
  totalInterest: number = 0
  totalAmount: number = 0
  ngOnInit(): void {
    this.createChart();

    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.formula = params['formula'];
    });
    this.calculate();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart

      data: { // values on X-Axis
        labels: ['Principal Amount', 'Interest Amount'],
        datasets: [{
          label: '₹',
          data: [Math.round(this.principal), Math.round(this.totalInterest)],
          backgroundColor: [
            '#03dac6',
            '#bb86fc',
          ],
          borderColor: 'transparent',
          borderWidth: 5, // Set border width
          hoverOffset: 40
        }],
      },
      options: {
        cutout: '75%',
        aspectRatio: 1.2,
        layout: {
          padding: 5,
        },
        plugins: {
          legend: {
              display: true,
              position: 'bottom',
              labels: {
                borderRadius: 50,
                color: '#fff',
                padding: 50 // Set tooltip padding
            } // Position legend at the bottom
          },
          tooltip:{
            enabled: true,
            
          }
      }   
      }
    });
  }


  calculate(): void {
    // Check if the form is valid
    if (true) {
      const periods = this.period * 12;
      // Implement calculation logic based on the selected formula
      // switch (this.name) {
      //   case 'Home Loan Calculator':
          this.result = this.principal * (this.interestRate / 100 / 12) / (1 - Math.pow(1 + this.interestRate / 100 / 12, -periods));
          this.totalInterest = (this.result * periods) - this.principal;
          this.totalAmount = this.principal + this.totalInterest
          // this.result = Math.round(this.result)
          // this.totalInterest = Math.round(this.totalInterest)
          // this.totalAmount = Math.round(this.totalAmount)
      //     break;
      //   case 'A = P * (1 + (r/n))^(nt)':
      //     // this.result = principal * Math.pow(1 + (interestRate / 100 / 12), periods * 12);
      //     break;
      //   case 'FV = PV * (1 + r)^n':
      //     // this.result = principal * Math.pow(1 + (interestRate / 100), periods);
      //     break;
      //   case 'PV = FV / (1 + r)^n':
      //     // this.result = principal / Math.pow(1 + (interestRate / 100), periods);
      //     break;
      //   case 'Converted Amount = Amount * Exchange Rate':
      //     // Assuming Exchange Rate is provided in interestRate
      //     // this.result = principal * interestRate;
      //     break;
      //   case 'Tax = Income * Tax Rate':
      //     // this.result = principal * (interestRate / 100);
      //     break;
      //   default:
      //     this.result = 0; // Default result if no formula matches
      //     break;
      // }

    }
    
  // Check if chart instance exists
  if (this.chart) {
    // Update the data in the dataset based on the slider value
    const newData = [Math.round(this.principal), Math.round(this.totalInterest)];
    this.chart.data.datasets[0].data = newData;
    // Update the chart
    this.chart.update();
  }  }

}
