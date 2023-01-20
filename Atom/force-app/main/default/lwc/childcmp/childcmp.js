import { LightningElement,api } from 'lwc';

export default class Childcmp extends LightningElement {
    @api message;
    @api className;
    get alertName(){
        return this.className ? `alert ${this.className}`:`alert`;
    }
}