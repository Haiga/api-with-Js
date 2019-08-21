const express = require("express");
const IndexRoutes = require("./routes/index")

class Server{
    constructor(){
        this.app = express();
        
        this.startMidleware();
        this.startDevMid();

        this.startRoute();
    }
    startRoute(){
        this.app.use(IndexRoutes)
    }
    static startServer(port){
        new Server().app.listen(port,()=>{
            console.log("TEste asasasas");
        });
    }

    startMidleware(){
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(express.json())

    }
    startDevMid(){
        this.app.use(require("morgan")("dev"));
        this.app.use(require("cors")());
    }
}
Server.startServer(3000);