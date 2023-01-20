import { LightningElement,wire } from 'lwc';
import SAMPLE_MSG from '@salesforce/messageChannel/SampleMessageChannel__c';
import { APPLICATION_SCOPE, MessageContext,subscribe, } from 'lightning/messageService';
export default class ComponentY extends LightningElement {
    @wire(MessageContext)
    context;
    _display
    connectedCallback(){
        this.subscribeHandler();  //chainging
    }
    subscribeHandler(){
    subscribe(this.context,SAMPLE_MSG,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }
    handleMessage(data){
          this._display=data.lmsData.value?data.lmsData.value:'No message received'
    }
}