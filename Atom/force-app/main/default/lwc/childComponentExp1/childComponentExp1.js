import { LightningElement ,api} from 'lwc';

export default class ChildComponentExp1 extends LightningElement {

    @api childProperty;

     fun = function(chidlProperty){
           if(childProperty!==null){
                console.log(`childProperty property value is ${childProperty}`)
           }
    }

}