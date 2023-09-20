import { Component, Input } from '@angular/core';
import { PasswordService } from 'src/app/password.service';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.css']
})
export class CustomCheckboxComponent {
  constructor(private passService:PasswordService){}
isClicked = false;
@Input('active') activeEl:any


onCheckboxClick(){
this.isClicked = !this.isClicked;
if(this.isClicked){
  this.passService.addReq(this.activeEl);
}else{
  this.passService.removeReq(this.activeEl);
}
console.log(this.passService.print());
}
}