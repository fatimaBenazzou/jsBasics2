//arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ],
    len = arr.length ,
    positionMin , //sauvegarder la position du minimum
    min;  

for(var j = 0 ; j < len - 1 ; j++) {
    min = arr[j];
  
    //chercher la valeur min du tableau + sa position
    for(var i = j + 1 ; i < len ; i++) {
        if (min > arr[i]) {
            min = arr[i];
            positionMin = i ; 
        }
    }

    //permutation 
    if(arr[j] != min){
      [arr[j],arr[positionMin]] = [arr[positionMin],arr[j]];
    }
}

console.log(arr);