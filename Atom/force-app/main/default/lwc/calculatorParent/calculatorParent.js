import { LightningElement,track } from 'lwc';

export default class CalculatorParent extends LightningElement {
        @track _a='';
        @track _b='';

        clickhandler(event){
             if(field=='firstname'){
                   this._a=this.target.value;
             }
             if(field=='secondname'){
                this._b=this.target.value;
             }
             console.log(a,b)
        }
} 