var sum=0; 
var T = process.argv;
for ( var i=2; i < T.length ; i++){ 
    
    sum += Number(T[i]) ;
}

console.log(sum)

