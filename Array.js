function changeArray(arr){
    arr = ['Array will nt changed']
}

function changeArrayObject(arr){
    arr.val = ['Array ichanged']
}

function arraySquare(arr){
    arr.val.forEach(element => {
        element = element*element
    });
}

module.exports= {changeArray,changeArrayObject,arraySquare}