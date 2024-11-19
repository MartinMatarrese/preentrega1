import express from "express";
import productRouter from "./routes/productos.js";
import cartRouter from "./routes/carritos.js";

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.use("/api/products", productRouter)

app.use("/api/carts", cartRouter)

app.listen(PORT, () => {
    console.log("server on port", PORT);  
})