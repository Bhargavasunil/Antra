({
    handleMessage:function(cmp,event){
           if(event != null){
             cmp.set('v.message',JSON.stringify(event._params.lmsData.value))
           }
    }
})
