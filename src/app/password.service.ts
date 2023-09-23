import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService{
requirementArr:string[] = ['Include Uppercase Letters','Include Lowercase Letters','Include Numbers','Include Symbols'];
mixedStringArr:string[]=['ABCDEFGHIJKLMNOPQRSTUVXYZ','abcdefghijklmnopqrstuvxyz','0123456789','£$&()*+[]@#^-_!?'];
chosenReqArr:string[] = [];
mixedString:string = '';

 pass = '';
  constructor() { }

addReq(req:string){
   const newArr = this.chosenReqArr.slice();
   let index =this.requirementArr.indexOf(req);
   newArr.push(this.mixedStringArr[index]);
   this.chosenReqArr = [...newArr];
   
}
 removeReq(req:string){
  let newArr = this.chosenReqArr.slice();
  let index =this.requirementArr.indexOf(req);
  newArr = this.chosenReqArr.filter((item)=>item!==this.mixedStringArr[index]);
  this.chosenReqArr = [...newArr];
  
 }
generatePassword(passLength:number){
 
  
  let choosenReqQuantity = this.chosenReqArr.length;
  for(let i =0;i<passLength;i++){
    if(i%choosenReqQuantity===0){
      this.addRandomSymbol(0);
    }else if(i%choosenReqQuantity===1){
      this.addRandomSymbol(1);
    }else if(i%choosenReqQuantity===2){
      this.addRandomSymbol(2);
    }else if(i%choosenReqQuantity===3){
      this.addRandomSymbol(3);
    }

  }
  console.log(this.pass);
  this.pass = '';
  
}
addRandomSymbol(num:number){
  let randomStrIndex = Math.floor((Math.random() * this.chosenReqArr[num].length));
  this.pass += this.chosenReqArr[num][randomStrIndex]
}

}
