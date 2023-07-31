import { Component } from '@angular/core';



// <app-root></app-root>

// 1. css , html , Ts and spec


//  html -> we are preparing the content 
//  CSs  -> Styles
//  TS ----> Business logic
// spec --> Test cases preparing 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasics'
}
