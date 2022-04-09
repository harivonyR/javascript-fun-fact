/* Fonction Anonyme */
(function alertArrowImport  (){
    console.log('>>>> Arrow pachage called')
})()

/* Arrow function here */

const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

/* Module export */

module.exports = {add,sub};