function pares(x,y){
    let inicio = x
    let fim = y
    let res
    for(inicio;inicio<=fim;inicio++){
        if(inicio % 2 ==1){
           res +=inicio 
        }
    }
return res
}
let x=1
let y=10
console.log(pares(x,y))