function removeDuplicate(arr){
    var exists = {},
        clearArr = [],
        elm = null;

    for(var i =0; i<arr.length; i++){
        elm = arr[i];
        if(!exists[elm]){
            clearArr.push(elm);
            exists[elm] = true;
        }
    }

    return clearArr;
}
