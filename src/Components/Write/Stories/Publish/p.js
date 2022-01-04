function threeMaxThreeMin(N,arr){
   let num =arr.sort((a,b)=>a-b)
 
   let count=1
   let min=[]
   for(let i=0; i<N; i++){
       if(count<=3){
       if(num[i]!=num[i+1]){
           min.push(num[i])
           count++
       }
       }
   }
   
   let count1=1
   let max=[]
   for(let i=N-1; i>=0; i--){
       if(count1<=3){
       if(num[i-1]!=num[i]){
           max.push(num[i])
           count1++
       }
       }
   }
  
   if(min.length==3){
       console.log(min[0]+" "+min[1]+" "+min[2])
   }else{
         console.log("Not Possible")
   }
    if(max.length==3){
       console.log(max[2]+" "+max[1]+" "+max[0])
   }else{
         console.log("Not Possible")
   }
}
