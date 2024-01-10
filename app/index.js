import  express  from "express";
//Fix para __direname
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath (import.meta.url));
import {methods as authentication} from "./controllers/authrntication.controller.js"

//Server
const app = express();
app.set("port", 4000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto", app.get("port"));

//Configuración

app.use(express.static(__dirname + "/public"));
app.use(express.json());

//Rutas
app.get("/", (req,res)=> res.sendFile(__dirname + "/pages/login.html"));
app.get("/register", (req,res)=> res.sendFile(__dirname + "/pages/register.html"));
app.get("/todolist", (req,res)=> res.sendFile(__dirname + "/pages/admin/todolist.html"));
app.post("/api/login", authentication.login);
app.post("/api/register", authentication.register);
