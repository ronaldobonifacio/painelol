const ModelPainel = require('../models/painel');

module.exports = 
{
    async List(req, res)
    {
        try {
            const  painel = await ModelPainel.findAll;
            return res.json(painel);

        } catch (erro) {
            return console.error("Erro na list : ",erro);
        }
    },

    async GetOne(req, res)
    {
        try {
            const  painel = await ModelPainel.findByPk(req.body.ZW7_PEDPALM);
            return res.json(painel);

        } catch (erro) {
            return console.error("Erro na list1 : ",error);
        }
    }   
}