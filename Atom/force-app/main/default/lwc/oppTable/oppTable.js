import { LightningElement,wire,track} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';;
import fetchOpportunities from '@salesforce/apex/OppHandler.fetchOpportunities';
const COLUMNS=[
    {label:"Name",fieldName:'Name',type:'url',
    typeAttributes:{
         label:{filedName:'fname'},name:'urlredirect',variant:'base'
            }
    },
    {label:'Stage',fieldName:'StageName',type:'Picklist',
    cellAttributes:{
               class:{fieldName:'stageColor'},
    }
  },
    {label:'Amount',fieldName:'Amount',type:'Currency'},]
export default class OppTable extends NavigationMixin(LightningElement){
    //to store the opportunity records creating an array
      @track _oppList=[];
      columns = COLUMNS
    @wire(fetchOpportunities) 
    wiredOpportunities({data,error}){
         if(data){
             this._oppList = data.map(item=>{
                let stageColor = item.StageName == 'Closed Won' ? 'light green': item.StageName=='Closed Lost'?'slds-text-color_error':'Black'
                return {...item,'stageColor': stageColor}
             });
             console.log(this._oppList);
         }
         else if(error){
            console.error=error;
         }
    }
    handleRowAction(event){
           const row=event.detail.row;
           console.log(this.row)
           //view custom object record
           this[NavigationMixin.navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:row.id,
               // objectApiName: 'Opportunity', // objectApiName is optional
                actionName: 'view'
            }
           })
      }
}