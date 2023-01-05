import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavToObjPages extends NavigationMixin(LightningElement) {
    NaviageToNewContactPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Contact',
                actionName:'new'
            }
       })
    }
}