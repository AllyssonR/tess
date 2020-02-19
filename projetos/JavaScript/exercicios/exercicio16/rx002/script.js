function tabuada(){
    let numero = document.getElementById('numero')
    let num = Number(numero.value)
    num = 2
    let c =  0 
    while(c <=2){
        console.log(`${num} x ${c} = ${num*c}`)
        c++

    }
}
