/* Fonction Anonyme */
(function alertArrowImport  (){
    console.log('>>>> Arrow package called')
})()

/* How to declare function with array method */
const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

/* Module export */
module.exports = {add,sub};