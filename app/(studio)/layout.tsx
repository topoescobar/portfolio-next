import '../globals.css'

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
      <body>
        <main>{children}</main>

      </body>
    </html>

  )
}
