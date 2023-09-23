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
@Output() strengthEvent = new EventEmitter<number>();
@Input('active') activeEl:any


onCheckboxClick(){
this.isClicked = !this.isClicked;
if(this.isClicked){
  this.passService.addReq(this.activeEl);
  this.strengthEvent.emit(+this.passService.chosenReqArr.length)
 console.log(this.strengthEvent);
}
else{
  this.passService.removeReq(this.activeEl);
  this.strengthEvent.emit(this.passService.chosenReqArr.length)

}

}
}