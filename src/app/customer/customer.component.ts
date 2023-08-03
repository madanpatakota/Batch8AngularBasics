
import { Component, ElementRef, ViewChild , Input } from '@angular/core';
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
       //console.log("Clicked");

   }

   //Next target the i want to pass the the username ,
   //pass word and location to the cutomers details page


   // My target is i want to capture the value of CN,
    //PW , Loc when i fired the button
    
}