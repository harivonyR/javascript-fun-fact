var myValue = 0

function waitForChange(){       // wait scraping to be done
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