import express from 'express'

const app = express()

//vai ler o body como um json
app.use(express.json())

const produtos = [
    {
        id: 1,
        nome: "Arroz 5kg",
        quantidade: 20,
        preco: 23.90
    }
]

function BuscarIdProduto(nome) {
    return produtos.filter(produtos => produtos.nome == nome)
}
function BuscarProdutosPorNome(nome) {
    return produtos.findIndex(produtos => produtos.nome == nome)
}
function DeletarPorNome(lista, nome) {
    const index = lista.findIndex(item => item.nome === nome);
    if (index !== -1) {
      lista.splice(index, 1);
    }
  }


const alimentos = [
    {
        id: 1,
        nome: "Arroz 5kg",
        quantidade: 20,
        preco: 23.90,
        perecivel: false,
        validade: "2026-01-01"
    },
    {
        id: 2,
        nome: "Leite Integral 1L",
        quantidade: 50,
        preco: 4.80,
        perecivel: true,
        validade: "2025-05-15"
    },
    {
        id: 3,
        nome: "Atum Enlatado",
        quantidade: 35,
        preco: 7.50,
        perecivel: false,
        validade: "2027-01-10"
    }
];
const limpeza = [
    {
        id: 1,
        nome: "Desinfetante 2L",
        quantidade: 25,
        preco: 8.99,
        inflamavel: false,
        tipoProduto: "desinfetante"
    },
    {
        id: 2,
        nome: "Sabão em Pó 1kg",
        quantidade: 40,
        preco: 12.30,
        inflamavel: false,
        tipoProduto: "sabão"
    },
    {
        id: 3,
        nome: "Álcool 70%",
        quantidade: 30,
        preco: 5.99,
        inflamavel: true,
        tipoProduto: "álcool"
    }
];
const cosmeticos = [
    {
        id: 1,
        nome: "Shampoo Anticaspa",
        quantidade: 18,
        preco: 16.50,
        tipoPele: "couro cabeludo oleoso",
        hipoalergenico: false
    },
    {
        id: 2,
        nome: "Sabonete de Argila",
        quantidade: 22,
        preco: 9.90,
        tipoPele: "pele sensível",
        hipoalergenico: true
    },
    {
        id: 3,
        nome: "Creme Hidratante",
        quantidade: 15,
        preco: 24.70,
        tipoPele: "pele seca",
        hipoalergenico: true
    }
];
app.get('/', (req, res) => {
    res.json(produtos);
});
app.get('/:nome', (req, res) => {
    res.json(BuscarProdutosPorNome(req.params.nome));
});

app.put('/:nome', (req, res) => {
    let index = BuscarIdProduto(req.params.nome)
    produtos[index].nome = req.body.nome
    produtos[index].quantidade = req.body.quantidade
    produtos[index].preco = req.body.preco
    res.json(produtos[index])
});

app.delete('/:nome', (req, res) => {
    DeletarPorNome(produtos,res.params.nome)
    res.send(`Produto Deletado`)
})

app.post('/alimentos', (req, res) => {

    alimentos.push(req.body)
})

app.post('/limpeza', (req, res) => {
    limpeza.push(req.body)
})

app.post('/cosmeticos', (req, res) => {
    cosmeticos.push(req.body)
})


export default app
