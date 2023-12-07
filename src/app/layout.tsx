import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vinícios Costa | Desenvolvedor Web',
  description: 'Apaixonado por tecnologia e buscando minha primeira oportunidade no mercado de trabalho como desenvolvedor front-end, combinando com minha experiência em design para criar experiências digitais envolventes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
