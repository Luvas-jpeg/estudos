const paginaInicial = async(req,res) =>{
    res.send('Contato')
    console.log(req.body)
};

module.exports={
    paginaInicial,
}