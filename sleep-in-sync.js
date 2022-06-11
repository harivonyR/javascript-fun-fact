/*  
    Wait t time before next task
*/


async function sleep(t){
    await new Promise(resolve => setTimeout(resolve, t));
}

// test
(async()=>{
    console.log('Waiting 5 second ... ')
    await sleep(5000)
    .then(()=>{
        console.log('> Welcome !')
    })
})()

