import { Router } from "express";
import {Consultarproductos} from "../services/conexion.js";
const router = Router();

router.get('/', (req, res) => res.render('index', {title: 'Tienda de Ropa'}));
router.get('/api/productos', async (req, res) => {
    const productos = await Consultarproductos();
    res.status(200).json(productos);
});
export default router;