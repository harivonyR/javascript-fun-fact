/* Arrow function here */

const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}


/* Fonction Anonyme */

(function alertArrowImport  (){
    console.log('>>>> Arrow pachage called')
})()

/* Module export */

module.exports = {add,sub};