const produtos = [
    {
        nome:'NoteBook',
        preco:2100

    },
    {
        nome:'Smartphone',
        preco:400
    },
    {
        nome:'carregador',
        preco:200
    }
]

const total = produtos.map(p =>p.preco *4)
console.log(total)