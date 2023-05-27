import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

const client = createClient(config)
//leer los datos cargados en sanity studio
// export async function getProjects(): Promise<Project[]> { //de esta forma no se tiene que declarar el type en cada componente que lo use
export async function getProjects() {
  // query usando groq
  return client.fetch( //buscamos en todo el dataset con type project
    groq`*[_type == 'project']{ 
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getProject(slug:string): Promise<Project> { //aca si uso Promise para que declarado el type del retorno

  return client.fetch( //devuelve todo el array y seleccionamos el 1ero con coincidencia con el slug
    groq`*[_type == 'project' && slug.current == $slug][0] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    {slug} 
  )
  
} 