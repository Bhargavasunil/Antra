import { LightningElement } from 'lwc';

export default class ErrOne extends LightningElement {
    showModalButton = false;
    buttonName;
    click=false;
    constructor(){
        super()
        console.log('Parent Constructor Called')
    }
    connectedCallback(){
        this.showModalButton=true
        this.buttonName='Open'
        console.log('connectedCallback called')
    }
    renderedCallback(){
        console.log('renderedCallback  called')
    }
    handler(event){
           
           console.log('handler caleed')
           console.log(`this.click${this.click}`)
           if(this.click){
                 this.buttonName='Close'
                 this.click=false;
           }
           else if(this.click==false){
                  this.buttonName = 'Open'
           }
    }
    disconnectedCallback(){
        this.showModalButton=false;
        console.log('disconnected callback called')
    }
}