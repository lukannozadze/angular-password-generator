import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
passRequirements:string[] = [];
lowCase = "abcdefghijklmnopqrstuvxyz";
upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
Numbers = "0123456789";
SpecialChar = "£$&()*+[]@#^-_!?";
  constructor() { }

addReq(req:string){
  let newArr = this.passRequirements.slice();
  newArr.push(req);
  this.passRequirements = [...newArr];
}
removeReq(req:string){
  let newArr = this.passRequirements.slice();
  newArr =  this.passRequirements.filter((item)=>item!==req);
  this.passRequirements = [...newArr];
}

print(){
  return this.passRequirements;
}
}
