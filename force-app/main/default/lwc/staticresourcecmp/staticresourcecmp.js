import {LightningElement} from 'lwc';
import {loadScript} from "lightning/platformResourceLoader";
import momentjss from '@salesforce/resourceUrl/momentjss';
import animatecsss from  '@salesforce/resourceUrl/animatecsss';
import rahulTrigger from '@salesforce/contentAssetUrl/rahulTriggerdocx';
import userid from '@salesforce/user/Id'
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';'
export default class Staticresourcecmp extends LightningElement {
    times ;
    das = false ;
    files = rahulTrigger ; 
    ids = userid ;
    renderedCallback(){
         
          if(this.das){
            return ;
          }
          else{
            Promise.all([
          loadScript(this, momentjss +'/moment/moment.min.js'),
          loadScript(this, animatecsss+'/animate/animate.min.css')
        ])
          
          .then(() =>{
            this.cc();
          }).catch(()=>{
          console.log("error");
          })
          this.das =true ;
          }
           
    }
    cc()
    {
    this.times =  moment().format('llll');
    }
}