const {add,sub} = require('./Arrow')
const {changeArray,changeArrayObject} = require('./Array')
//console.log(' 2+3 = ' +sub(2,3))


var data =  ['I am a new array']

changeArray(data)   // don't
console.log('1st meth :No change happened \n\t'+data);  // data not changed

var data = {
    val : ['I am a new array, it will work']
}

changeArrayObject(data)
console.log("2nd meth :Change happened \n\t"+data.val);