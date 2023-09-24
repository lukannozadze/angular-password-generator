import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PasswordService } from 'src/app/password.service';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.css']
})
export class CustomCheckboxComponent {
  constructor(private passService:PasswordService){}
isClicked = false;
status:string = '';
@Output() strengthEvent = new EventEmitter<{status:string,strengthNumber:number}>();
@Input('active') activeEl:any


defineStrength(){
  if(this.passService.chosenReqArr.length===1){
    this.status = 'too weak!';
  }else if(this.passService.chosenReqArr.length===2){
    this.status = 'weak';
  }else if(this.passService.chosenReqArr.length===3){
    this.status = 'medium';
  }else if(this.passService.chosenReqArr.length===4){
    this.status = 'strong';
  }else{
    this.status = '';
  }
}

onCheckboxClick(){
this.isClicked = !this.isClicked;
if(this.isClicked){
  this.passService.addReq(this.activeEl);
  this.defineStrength();
  this.strengthEvent.emit({status:this.status,strengthNumber:+this.passService.chosenReqArr.length})
}
else{
  this.passService.removeReq(this.activeEl);
  this.defineStrength();
  this.strengthEvent.emit({status:this.status,strengthNumber:+this.passService.chosenReqArr.length})
}
}
}