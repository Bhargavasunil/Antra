import { LightningElement } from 'lwc';

export default class Lifecyclehooks extends LightningElement {
    constructor() {
        super();
       let qr= this.template.querySelector('lightning-input');
        console.log(qr)
        let a = this.template;  
        console.log(a.isConnected);
    }
    
 changeHandler(event){
        let varVarible = event.target.value;
        console.log(varVarible);
        let a = this.template;
        console.log(a.isConnected);
        }
}