import { LightningElement } from 'lwc';

export default class DemoSetterParent extends LightningElement {
     joined = new Date(2022,6,13);
    empObject = {
        name:'Bhargava',
        designation:'Salesforce Developer',
        Company:'Antra info tech',
        Dateofjoining:this.joined,
    }
}