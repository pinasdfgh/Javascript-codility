// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
   // write your code in JavaScript (Node.js 6.4.0)
    var maxValue=0;
    var max=0;
    var result=new Array();
    result.length=N;
    for(var i=0;i<N;i++){
        result[i]=0;
        }
    
    for(var i=0;i<A.length;i++){
        if(A[i]>N){
         max=maxValue;
        }else {
            //ailgn to max count
            if(result[A[i]-1]<max){
                result[A[i]-1]=max;
            }
             
            result[A[i]-1]++;
            
            var cur=result[A[i]-1];
            maxValue=maxValue>cur?maxValue:cur;
        }
        
    }
    for(var i=0;i<N;i++){
       if(result[i]<max) result[i]=max;
       // console.log(result[i]);
        }
    return result;
}