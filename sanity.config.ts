import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk'
// import project from "./sanity/schemas/project-schema"; //usando cada schema por separado
import schemas from "./sanity/schemas"; //usando schemas ordenados en barrels

//usamos los datos de configuracion de la app creada con sanity
const config = defineConfig({
    projectId: '69y3yni7',
    dataset: 'production',
    title: 'portfolio ivan',
    apiVersion: '14-05-23',
    basePath: '/admin',

    plugins: [deskTool()],
    // schema: {types: [project]}
    schema: {types: schemas} //schemas ordenados en barrels

})

export default config