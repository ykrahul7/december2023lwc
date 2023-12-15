import { LightningElement, api } from 'lwc';

export default class Childcomp extends LightningElement {
  userdetail ={} ;
@api  
get detail (){
return this.userdetail ;

}
set detail(data){
let newage = data.age*2 ;
this.userdetail = {...data,age:newage,"Location":"Chandrpaura"};

}
 
    }


