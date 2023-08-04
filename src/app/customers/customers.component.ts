import { Component, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {


  @Input() CustomerInputInfo:any;
  @Output() SampleDataEmitter  = new EventEmitter<any>();

  

  sampleData = {
     name : 'Customer - 1',
     password : 'Customer - password',
     location : 'customer - location'
  }
  submitDta(){
       this.SampleDataEmitter.emit(this.sampleData);
  }


}
