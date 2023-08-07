import {
  Component,
  ElementRef,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  OnChanges,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent
  implements
    OnChanges,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // 1. txtCustomerName is local reference which ref the input element

  // just try to import the txtcsutmoername(child) from (___.html view)

  // Life cycle hooks , Life cycle stages , Angular page life cycle events

  @ViewChild('txtCustomerName') _txtCustomerName: ElementRef;
  @ViewChild('txPassword') _txtPassword: ElementRef;
  @ViewChild('txtLocation') _txtLocation: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this._txtPassword.nativeElement.value = 'PeterPassword';
    }, 4000)
    console.log('In ngAfterViewInit Stage');
  }

  ngAfterViewChecked(){
    console.log('In ngAfterViewChecked Stage');
  }


  @Input() txtWorld: any;
  @Input() CustomerSampleDetails: any = {};
  ngOnChanges(): void {
    console.log('CustomerSampleDetails', this.CustomerSampleDetails);
    console.log('In ngOnchanges Stage');
    this.CustomerSampleDetails = {
      name: 'peter',
      password: '!@@!!#$',
      location: 'Melborn',
    };
    // if(this.CustomerSampleDetails.name == ''){
    //   this.CustomerSampleDetails.name == 'peter'
    // }
  }

  ngOnInit(): void {
    console.log('In ngOnInit Stage');
  }

  // export the data to the parent component

  @Output() evtCustomerEmitter = new EventEmitter<any>();
  // EventEmitter is a kind of the method which accepts the any kind of the data and inject that data to the  parent  component

  // Emit or Inject

  evtClick() {
    //   txtCustomerName i want to pick the value from this textbox

    console.log(this._txtCustomerName.nativeElement.value);
    console.log(this._txtPassword.nativeElement.value);
    console.log(this._txtLocation.nativeElement.value);

    /*--------ContentChild*-----*/
    console.log(
      '_txtCustomerMessage',
      this._txtCustomerMessage.nativeElement.value
    );

    console.log('Value from appcomponenti is ', this.txtWorld);

    let customerInfo = {
      name: this._txtCustomerName.nativeElement.value,
      password: this._txtPassword.nativeElement.value,
      location: this._txtLocation.nativeElement.value,
    };

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

  @ContentChild('CustomerMessage') _txtCustomerMessage: ElementRef;
  ngAfterContentInit(): void {
    console.log(
      'CustomerMessage',
      this._txtCustomerMessage.nativeElement.value
    );
    this._txtCustomerMessage.nativeElement.value = 'Hi Iam peter from Melborn';
    console.log('In ngAfterContentInit Stage');
  }

  ngAfterContentChecked(): void {
    console.log('In ngAfterContentChecked Stage');
  }


  // Init
  ngOnDestroy(){
    console.log('In ngAfterContentChecked Stage');
  }
}
