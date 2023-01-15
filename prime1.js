let num=5
let factor=0
for(let i=2;i<num/2;i++){
  if(num%i==0){
    factor++
  }
}
if(factor==0){
  console.log("Prime")
}
else{
  console.log("Not prime")
}