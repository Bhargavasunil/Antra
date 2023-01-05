import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationToRecordpage extends NavigationMixin(LightningElement) {
    navigateToRecordPage(){
        //this[NavigationMixin.navigate](pageReference)
        this[NavigationMixin.Navigate]({
             type:'standard__recordPage',
             attributes:{
                recordId:'0035i00000AiQxXAAV',
                objectApiName:'Contact',
                actionName:'view'
             }
        })
    }
}