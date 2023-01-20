import { LightningElement,wire } from 'lwc';
import SAMPLE_MSG from '@salesforce/messageChannel/SampleMessageChannel__c';
import { MessageContext,publish } from 'lightning/messageService';
export default class ComponentX extends LightningElement {
    //creating inputvalue property to store the inputt from the ui
    _inputValue;
    @wire(MessageContext)
    textContext;
    inputHandler(event){
          this._inputValue=event.target.value;
          console.log(`_inputValue = ${this._inputValue}`)
        }
    publishHandler(event){
          const message={
              lmsData:{value:this._inputValue}
           }
           //publish(messageContext,messageChannel,message)
        publish(this.textContext,SAMPLE_MSG,message)
    }
}