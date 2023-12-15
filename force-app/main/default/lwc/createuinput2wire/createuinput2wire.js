import { LightningElement, wire } from 'lwc';
import getaccount from '@salesforce/apex/accountcontrolllerss.getaccount'
export default class Createuinput2wire extends LightningElement {
         
       accountdataa
    handleClick(){
        getaccount().then(result =>{
         this.accountdataa = result ;
         console.log(result);
        }).catch(error =>{
            console.log(error);
        })


    }




}