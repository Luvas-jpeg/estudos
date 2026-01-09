const criarUsuario = async(req, res) =>{
    res.render('index')
}

const trataPost = async(req, res) =>{
    res.send("Nova rota de post")
    console.log(req.body)
}

module.exports = {
    criarUsuario,
    trataPost

}