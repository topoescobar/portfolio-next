import { getProject } from "@/sanity/sanity-utils"

type Props = { //definir el tipo de dato para params
  params: {project : string}
}

export default async function Project({params} : Props) {
  const slug = params.project //la propiedad project de params tiene que ser igual a la ruta dinamica /[project]
  const project = await getProject(slug)
  return (
    <div>My project: {project.name}</div>
  )
}