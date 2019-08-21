const Router = require("express").Router();
const IndexController = require("./../controller/index")
Router.get('/info', IndexController.index)
Router.post('/info', IndexController.create)
Router.get('/info/:nome', IndexController.show)
Router.get('/info2/:nome', IndexController.info)
module.exports = Router