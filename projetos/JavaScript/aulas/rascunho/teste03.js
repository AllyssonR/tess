let  amigo = {nome:'jose',
sexo:'m',
peso:65,
idade:40,
engordar(p=0){
    console.log ('Engordou')
    this.peso += p
}
}
amigo.engordar(2)
console.log(`seu${amigo.nome} pesa ${amigo.peso}`)