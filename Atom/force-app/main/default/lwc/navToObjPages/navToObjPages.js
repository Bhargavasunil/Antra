import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
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
    NaviagateToNewCntactWithDefaultValues(){
        //creating an object for default values 
        //we have to encode this values object before passing them
        const varDefaultvalues= encodeDefaultFieldValues({
              FirstName : 'Salesforce',
              LastName : 'Zombie',
              LeadSource : 'Other',
              Level__c: 'Secondary',
        })
        this[NavigationMixin.Navigate]({
               type:'standard__objectPage',
               attributes:{
                    objectApiName:'Contact',
                    actionName:'new'
               },
               state:{
                   defaultFieldValues:varDefaultvalues
               }
        })
    }
}