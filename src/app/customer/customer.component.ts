
import { Component } from '@angular/core';

// 1. Angular needs to understand what kind of feature this is

//  component , directive , pipe , service , module 

// 2. Needs to register the feature into 

// Hello John 


// i want to give the guidance to the angular just treat this as a component because i want to decorate 
// customer as a compoennt

// if you want to decarate the component for this class just import the component feature from the angular core pacakge

// p{
//   color : red
// }

// h1 {
//  background-color: yellow;
// }

/* case study */

// 20 elements
// styles to the 20 elements

// @Component({
//   selector :'app-customer',
//   template : '<p>Hello John</p> <h1> How are you</h1>',
//   styles  : [ 'p { color:red }' , ' h1 { background-color : yellow }' ]
// })


@Component({
  selector :'app-customer',
  templateUrl : './customer.component.html',
  styleUrls  : [ './customer.component.css' ]
})
export class CustomerComponent{

     name = "Hello John";

     customerID = "1";


     getCustomerLocation(){
        return "UK";
     }

     job = "Senior Software Engineer";


     inputType = "checkbox";




     evtClick(){
        console.log("You have clicked");
     }


     evtKeyUp(event:any){
        //console.log("Key pressed");

        console.log("The value from the textbox is" , event.target.value )
     }

     officeName = "Infosis";



     streetname_1 = "Oxford Street";


     //=======================================

     streetname_2 = "Brick Lane";


     getStreetNameDetails(evtdetails:any){
          console.log(evtdetails);
     }




     /** I want to capture the empFullNameID(htmlinputelement) 
      *  Details when the button trigger
      */

     geFullNameDetail(empEl:HTMLInputElement){
         
         console.log(empEl.value);


          
     }




    // a = "Angular"








       schoolName = "Oxford";



       applyYellowColor = true; 


       isVisiable = false;


       isContent = false;


       isIfConditionTrue = false;


      //  if(true){

      //  }
      //  else{

      //  }


/*
   prepare the array 
   Array -> List of the items

   Array -> Prepare the list items what do you want.

*/


    numbers = ["one" , "two" , "three" , "Four" , "Five",
               "Six" , "Seven" , "Eight" , "Nine"]





}