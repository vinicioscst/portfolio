import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Vinícios Costa | Desenvolvedor Web',
  description:
    'Apaixonado por tecnologia e buscando minha primeira oportunidade no mercado de trabalho como desenvolvedor front-end, combinando com minha experiência em design para criar experiências digitais envolventes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth scroll-pt-8">
      <body
        className={`${poppins.className} bg-background-color text-type-color`}
      >
        {children}
      </body>
    </html>
  )
}
