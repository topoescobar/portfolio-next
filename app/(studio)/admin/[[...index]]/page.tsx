"use client"

import config from '@/sanity.config'
import {NextStudio} from 'next-sanity/studio'
// todas las rutas /admin vienen aca con el [[...index]]

export default function AdminPage() {
    // NextStudio es un componente que viene con el paquete next-sanity
     return <NextStudio  config={config}></NextStudio>
}