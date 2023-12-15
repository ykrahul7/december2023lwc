import { LightningElement, wire } from 'lwc';
import getaccount from '@salesforce/apex/accountcontrolllerss.getaccount'
import getaccountparameter from '@salesforce/apex/accountcontrolllerss.getaccountparameter'
export default class Createcontactwithwire extends LightningElement {
    datadd
    accountsname ='';
    timers
    changehandler(event){
       this.accountsname = event.target.value ;
    window.clearTimeout(this.timers);
      this.timers =  setTimeout(()=>{
        this.catttch()
       },2000);
    }
    catttch(){
        getaccountparameter({searchkey :this.accountsname}).then(result =>{
            console.log(result);
            this.datadd = result;
           }).catch(error =>{
            console.log(error);
           });
    }

    }
    
