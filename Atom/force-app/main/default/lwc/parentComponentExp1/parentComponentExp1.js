import { LightningElement} from 'lwc';

export default class ParentComponentExp1 extends LightningElement {
   inputValue;
    handleChange(event){
          this.inputValue = event.target.value?event.target.value:this.inputValue;
          console.log(this.inputValue)
    }
}