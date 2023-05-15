import { createClient, groq } from "next-sanity";

//leer los datos cargados en sanity studio
export async function getProjects() {
  const client = createClient({
    projectId: '69y3yni7',
    dataset: 'production',
    apiVersion: '1'
  })

  // query usando groq
  return client.fetch(
    groq`*[_type == 'project']{ //buscamos en todo el dataset
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