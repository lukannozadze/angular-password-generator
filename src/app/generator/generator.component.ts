import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent  {
 
@ViewChild('f') formEl: any;
rangeIndicator:number = 10;
requirementArr:string[] = ['Include Uppercase Letters','Include Lowercase Letters','Include Numbers','Include Symbols'];
 onRangeChange(){
  this.rangeIndicator = +this.formEl.value.point
 }

}
