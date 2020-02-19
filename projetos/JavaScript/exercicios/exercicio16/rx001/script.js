/*
tive que converter os os dados do HTML para Numeros
no caso
ini = inicio
f = fin
p = passo

*/ 

function contador(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if( inicio.value.length == 0 || fim.value.length == 0  || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
    }else{
        let ini  = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(ini < f){
        for(let c = ini ; c <= f;c += p ){
            res.innerHTML += `${c} \u{1f449}`
        }  
        }
        else{
            for(let c = i; c >= f;c -= p){
                res.innerHTML +=`${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}