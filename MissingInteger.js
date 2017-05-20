// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var countA=new Array();
    var perIndx=0;
    A.forEach(function(cur){
        countA[cur]=1;
    })
    for(var i=1;i<countA.length;i++){
        if(countA[i]==null){
            return i;
        }
    }
    return countA.length==0?1:countA.length;

}