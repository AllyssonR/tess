let num=document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores =[]

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n,l){
    if(l.indexOf(Number(n))!= -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isnumero(num.value) && !inlista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou ja encontrado na lista')
    }
    num.value =''
    num.focus()
}

function finalizar(){
    if(valores.length ==0){
        window.alert('Adicione valores')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma =0 
        let media =0
        for(let pos in valores){
            soma+= valores[pos]
            media = soma /tot
            if(valores[pos]>maior){
                maior = valores[pos]
            }if(valores[pos]<menor){
                menor = valores[pos]
            }
        }
        res.innerHTML =''
        res.innerHTML += `<p>Ao todo temos ${tot} dados cadastrados.</p>` 
        res.innerHTML += `<p> O maior valor informado é ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}</p>`
        res.innerHTML += `<p> A Soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores é ${media}</p>`
    }
}