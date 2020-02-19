function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora São ${hora} Horas`
    if(hora > 0 && hora < 12){
        //bom dia
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >=12 && hora <= 18){
        //boa tarde
        imagem.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //boa noite
        imagem.src ='fotonoite.png'
        document.body.style.background = '#515154'
    }
}