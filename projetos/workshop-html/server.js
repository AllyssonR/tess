//usei o express pra criar meu servidor e configurar meu servidor
const express = require('express')
const server = express()


const ideias = [{
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudos",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, maiores quod. Libero doloremque reprehenderit iure molestias nulla, commodi soluta aut minima ullam nihil, quae quis delectus inventore totam similique officiis.",
        url: "https://rocketseat.com.br"

    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercicios",
        category: "Saude",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, maiores quod. Libero doloremque reprehenderit iure molestias nulla, commodi soluta aut minima ullam nihil, quae quis delectus inventore totam similique officiis.",
        url: "https://rocketseat.com.br"

    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mantalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, maiores quod. Libero doloremque reprehenderit iure molestias nulla, commodi soluta aut minima ullam nihil, quae quis delectus inventore totam similique officiis.",
        url: "https://rocketseat.com.br"

    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diverção em Familia",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, maiores quod. Libero doloremque reprehenderit iure molestias nulla, commodi soluta aut minima ullam nihil, quae quis delectus inventore totam similique officiis.",
        url: "https://rocketseat.com.br"

    }
]

//configurar arquivos estaticos
server.use(express.static('public'))

//Configuração  do nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('views', {
    express: server,
    noCache: true, //boolean
})

//criei uma rota /
//e capturo o pedido do cliente para responder
server.get("/", function(req, res) {
    return res.render('ideias.html')
})


server.get("/ideias", function(req, res) {
    return res.render('ideias.html')
})

//liguei meu servidor na porta 3000
server.listen(3000)
