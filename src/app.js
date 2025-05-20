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
