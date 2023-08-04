
import { Component, 
  ElementRef,
   ViewChild , 
   Input , 
   Output ,
   EventEmitter } from '@angular/core';
@Component({
  selector :'app-customer',
  templateUrl : './customer.component.html',
  styleUrls  : [ './customer.component.css' ]
})
export class CustomerComponent{


   // 1. txtCustomerName is local reference which ref the input element 

   // just try to import the txtcsutmoername(child) from (___.html view)

   

  @ViewChild('txtCustomerName')  _txtCustomerName : ElementRef;
  @ViewChild('txPassword')  _txtPassword : ElementRef;
  @ViewChild('txtLocation')  _txtLocation : ElementRef;





  @Input() txtWorld : any; 
  @Input() CustomerSampleDetails: any = {};

// export the data to the parent component 
  
  @Output() evtCustomerEmitter = new EventEmitter<any>();
   // EventEmitter is a kind of the method which accepts the any kind of the data and inject that data to the  parent  component 

   // Emit or Inject 

   evtClick(){
   //   txtCustomerName i want to pick the value from this textbox

       console.log(this._txtCustomerName.nativeElement.value);
       console.log(this._txtPassword.nativeElement.value);
       console.log(this._txtLocation.nativeElement.value);


       console.log("Value from appcomponenti is " , this.txtWorld)

       let customerInfo = {
            name : this._txtCustomerName.nativeElement.value,
            password : this._txtPassword.nativeElement.value,
            location : this._txtLocation.nativeElement.value
       }

        console.log(customerInfo);
        // @Output() evtCustomerEmitter = new EventEmitter<any>();
        this.evtCustomerEmitter.emit(customerInfo);
        // Here i want to export the customerinfo to the customerscomponet
       //console.log("Clicked");

   }

   //Next target the i want to pass the the username ,
   //pass word and location to the cutomers details page


   // My target is i want to capture the value of CN,
    //PW , Loc when i fired the button
    
}