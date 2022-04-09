var myValue = 0

function waitForChange(){ 
    (function listen(){
        setTimeout(
            ()=>{
                if(myValue==1) return
                else listen
            }
        ,1000)
    })
}

waitForChange()