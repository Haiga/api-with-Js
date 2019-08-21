module .exports = class IndexController{
    static async index(req, res){
        try{
            let conteudo = [
                {
                    id: 1,
                    nome: "Pedro1"
                },
                {
                    id: 2,
                    nome: "Pedro2"
                },
                {
                    id: 3,
                    nome: "Pedro3"
                },
                {
                    id: 4,
                    nome: "Pedro4"
                }

            ]
            res.json(conteudo)
        }catch(e){
            return res.status(403).json({error: e.message});
        }
    }

    static async create(req, res){
        try{
            
            res.json({'created': 1214})
        }catch(e){
            return res.status(403).json({error: e.message});
        }
    }
    static async show(req, res){
        try{
            
            res.json({'created': req.params.nome})
        }catch(e){
            return res.status(403).json({error: e.message});
        }
    }
    static async info(req, res){
        try{
            
            res.json({'created': req.params.nome, 'veio': req.query})
        }catch(e){
            return res.status(403).json({error: e.message});
        }
    }
}