import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationExampleOne extends NavigationMixin(LightningElement) {
    chatterHandler(){
         this[NavigationMixin.Navigate]({
              type:'standard__namedPage',
              attributes:{
                pageName:'chatter'
              }
         })
    }

    NaviagationToHome(){
        this[NavigationMixin.Navigate]({
             type:'standard__objectPage',
             attributes:{
                 objectApiName:'Account',
                 actionName:'new'
             }
        })
    }
}