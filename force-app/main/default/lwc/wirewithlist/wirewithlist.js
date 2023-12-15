import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
export default class Wirewithlist extends LightningElement {
  apinames
  Description
  Phone
  Name
        @api recordId;
    @wire(getRecord, {recordId:'$recordId', layoutTypes: ["Full"], modes: ["View"]})

      sdsds({data,error}){
       if(data){
        console.log(data);
        this.apinames = data.apiName;
        this.Phone = data.fields.Phone.value ;
        this.Name = data.fields.Name.value ;
        this.Description = data.fields.Description.value ;
       }
       if(error){
        console.log(error);
       }
      }



}
