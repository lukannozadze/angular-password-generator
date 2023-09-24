import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-dashboard',
  templateUrl: './password-dashboard.component.html',
  styleUrls: ['./password-dashboard.component.css']
})
export class PasswordDashboardComponent {
@Input('password') password:string = '';
isCopyClicked:boolean = false;

onCopyClick(){
  this.isCopyClicked = true;

  setTimeout(()=>{
this.isCopyClicked = false;
  },1000)
  
}
}
