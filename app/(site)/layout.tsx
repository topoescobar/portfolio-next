import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ivan Portfolio',
  description: 'Generated next + sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pages = await getPages()


  return (

    <html lang="es">

      <body className='max-w-7xl mx-auto p-6 ' >
        <header className='flex items-center justify-between'>
          <Link href='/' className='bg-gradient-to-r from-sky-300 to-indigo-500 bg-clip-text text-transparent text-lg font-bold'>
            TOPO-DEV
          </Link>

          <div className="flex items-center gap-5 text-lg text-blue-400">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:">{page.title}</Link>
            ))}
            <Link href='/admin'> Admin </Link>

          </div>

        </header>
        <main>{children}</main>

      </body>
    </html>

  )
}
