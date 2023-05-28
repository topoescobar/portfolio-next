import page from "./page-schemas";
import project from "./project-schema";
//barrels: a medida q creamos mas schemas los metemos en el array, cuando lo vayamos a usar importar siempre este archivo solo para acceder a todos 

const schemas = [project, page]

export default schemas