import { LightningElement ,api} from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import {NavigationMixin} from 'lightning/navigation';
export default class QuickQuote extends NavigationMixin(LightningElement) {
    @api invoke(){

        alert('1')
        this[NavigationMixin.GenerateUrl]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Quote',
                actionName:'new'
            }
        }).then((result)=>{
            window.open(result,'_blank')
        })
       this.dispatchEvent(
            new ShowToastEvent({
                title:'HeadLess action is called to create a quote',
                message:'Quote created successfully',
                variant:'success',
            })
       )
  }
}