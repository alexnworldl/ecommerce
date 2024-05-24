import routerx from "express-promise-router"
import User from "./User"
import Categoria from "./Categoria"


const router = routerx();

router.use('/users',User);
router.use('/categorias',Categoria);



export default router;//cargando archivo de rutas de usuario