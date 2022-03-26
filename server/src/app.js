import express from "express";
import "./db/conn.js";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/router.js";

const app = express();

const port = process.env.PORT || 8000;

//build in middleware
app.use(cors());
//using body-parser 
app.use(bodyParser.json({ extended : true }));
app.use(bodyParser.urlencoded({ extended : true }));
app.use("/" ,  router);


app.listen(port , ()=>{
    console.log("Listining to the port " + port);
})