import express,{Application,Request,Response,NextFunction} from "express";

const app: express.Application = express();
// const app: Application = express();

const add = (a:number,b:number):number =>{
    return a+b;
}
app.get("/",(req:Request, res:Response) => {
    res.send("Hello world"+add(2,3));
})
app.listen(3500,()=> {
    console.log("Server is running");
})




