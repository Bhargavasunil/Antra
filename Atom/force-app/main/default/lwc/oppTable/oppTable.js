import { LightningElement,wire,track,api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import fetchOpportunities from '@salesforce/apex/OppHandler.fetchOpportunities';
const COLUMNS=[
    {
        label: "Name",
        fieldName:'Name',
        type: "button",
        typeAttributes: { label: { fieldName: "Name" }, variant: "success" }
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
      @api _selectedRow;
      @api recordId;
      columns = COLUMNS
    @wire(fetchOpportunities) 
    wiredOpportunities({data,error}){
         if(data){
             this._oppList = data.map(item=>{
                let stageColor = item.StageName == 'Closed Won' ? 'slds-text-color_success': item.StageName=='Closed Lost'?'slds-text-color_error':''
                return {...item,'stageColor': stageColor}
             });
             console.log(this._oppList);
         }
         else{
            console.log(error);
         }
    }
    handleRowAction(event){
              this._selectedRow = event.detail.row.Id;
              console.log(this._selectedRow)
              this[NavigationMixin.GenerateUrl]({
                type: "standard__recordPage",
                attributes: {
                    recordId: this._selectedRow,
                    actionName: "view"
                }
            }).then((url) => {
                console.log(url);
                window.open(url, "_blank");
            });
    }
}