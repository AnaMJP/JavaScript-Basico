var factorial = 1;
var i = 1;
while(true){
    factorial *= i;
    if(i === 10){
        console.log(factorial);
        break;
    }
    i++;
}