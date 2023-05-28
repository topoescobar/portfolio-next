import { Project } from "@/types/project";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { Page } from "@/types/page";

const client = createClient(config)
//leer los datos cargados en sanity studio
// export async function getProjects(): Promise<Project[]> { //retorna una promesa que es un arreglo de tipo Project
export async function getProjects() { //usando esta forma de tiene que declarar el tipo cuando se llama la funcion
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

export async function getProject(slug:string): Promise<Project> { 

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


export async function getPages(): Promise<Page[]> { 
  return createClient(config).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(config).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}