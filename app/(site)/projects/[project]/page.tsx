import { getProject } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

type Props = { //definir el tipo de dato para params
  params: { project: string }
}

export default async function Project({ params }: Props) {

  const slug = params.project //la propiedad project de params tiene que ser igual a la ruta dinamica /[project]
  const project = await getProject(slug)

  return (
    <div className="max-w-2xl mx-auto py-20">
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
          {project.name}
        </h1>

        <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-slate-900 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
          Ver sitio web
        </a>

      </header>

      <div className="text-lg text-indigo-400 mt-5">
        <PortableText value={project.content} />
      </div>

      
      <Image src={project.image} alt={project.name} width={1920} height={1080} 
      className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />

    </div>
  )
}