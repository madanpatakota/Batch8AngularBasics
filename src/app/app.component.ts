import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

      sampletext = "Hello world";
      customerDetails : any = {};
      // customer

      // Now appcompnent has triggerd {name: 'Madan', password: 'madfas', location: 'adfasdas'}
      getCustomerDetails($event : any){
           console.log("Now appcompnent has triggerd" ,$event);
           this.customerDetails = $event;
           //{name: 'Madan', password: 'madfas', location: 'adfasdas'}
      }

      customerSampleData : any = {};
      
      takeSampleDataFunc($event:any){

      //   sampleData = {
      //     name : 'Customer - 1',
      //     password : 'Customer - password',
      //     location : 'customer - location'
      //  }

       this.customerSampleData = $event;

      }

}
