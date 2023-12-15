import { LightningElement, api, wire } from 'lwc';
import useridss from '@salesforce/user/Id';

import { getObjectInfo } from "lightning/uiObjectInfoApi";
import {getPicklistValuesByRecordType} from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
export default class Wirecomponent extends LightningElement {
    idss = useridss;
    industryoptions
    industryvalues
    typevalues
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT })
    objectinfo;
    @wire(getPicklistValuesByRecordType,{ objectApiName: ACCOUNT_OBJECT,recordTypeId:'$objectinfo.data.defaultRecordTypeId'})
    dadas({data,error}){
        if(data){
            // console.log(data);
         this.industryoptions = this.pickolistGenerator(data.picklistFieldValues.Industry);
         this.Typesoptions = this.pickolistGenerator(data.picklistFieldValues.Type);
        }
        if(error){
            console.log(error);
        }
    }
    pickolistGenerator(data){
     return data.values.map(item =>({label:item.label,value:item.value}));
    }
    handleChange(event){
            const{name,value} = event.target;
            if(name === 'industry'){
            this.industryvalues = event.target.value ;
            }
            if(name ==='Types'){
            this.typevalues = event.target.value ;
            }
    }

  }


