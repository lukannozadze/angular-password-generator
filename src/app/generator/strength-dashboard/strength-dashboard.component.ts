import { Component, Input} from '@angular/core';



import { PasswordService } from 'src/app/password.service';

@Component({
  selector: 'app-strength-dashboard',
  templateUrl: './strength-dashboard.component.html',
  styleUrls: ['./strength-dashboard.component.css']
})
export class StrengthDashboardComponent {
@Input('strengthNumber') strengthNumber:number = 0;
@Input('status') status:string = '';
constructor(private passService:PasswordService){
}



}
