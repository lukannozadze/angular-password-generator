import { Component, Input, ViewChild } from '@angular/core';
import { PasswordService } from '../password.service';
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent  {
 constructor(private passService:PasswordService){}
@ViewChild('range') formEl: any;
ReqNumber:number = 0;
rangeIndicator:number = 10;
requirementArr:string[] = ['Include Uppercase Letters','Include Lowercase Letters','Include Numbers','Include Symbols'];
strengthNumber:number = 0;
 onRangeChange(){
  this.rangeIndicator = +this.formEl.value
  console.log(this.formEl)
 }
 onGenerateClick(){
this.passService.generatePassword(this.rangeIndicator);
 }

 onStrengthEvent(eventData:number){
 this.strengthNumber = eventData;
 }
}
