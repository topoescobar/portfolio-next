import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ivan Portfolio',
  description: 'Generated next + sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="es">

      <body className='max-w-8xl mx-auto p-6 ' >

        <header>
          <Link href='/' className='bg-gradient-to-r from-sky-300 to-indigo-500 bg-clip-text text-transparent text-lg font-bold'>
            TOPO-DEV
          </Link>
        </header>
        <main>{children}</main>

      </body>
    </html>

  )
}
