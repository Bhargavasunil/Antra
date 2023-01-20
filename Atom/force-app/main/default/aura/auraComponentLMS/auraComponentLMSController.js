({
    handleMessage:function(cmp,event,helper){
           if(event != null){
               const messageBody = event.getParam('messageBody');
               const source = event.getParam('source');
               cmp.set("v.message",'Message: ' + message + '.\n\n Sent From: ' + source);
           }
    }
})
