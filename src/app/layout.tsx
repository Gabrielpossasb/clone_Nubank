import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Nubank - Finalmente você no controle do seu dinheiro',
  description: 'Você finalmente no controle do seu dinheiro. Controle total do cartão de crédito e da conta 100% digital',
  icons: "https://www.google.com/s2/favicons?domain=nubank.com.br"
}

const graphik = localFont({
  src: [
    {
      path: '../../public/fonts/GraphikExtralight.otf',
      weight: '200'
    },
    {
      path: '../../public/fonts/GraphikLight.otf',
      weight: '300'
    },
    {
      path: '../../public/fonts/GraphikRegular.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/GraphikMedium.otf',
      weight: '500'
    },
    {
      path: '../../public/fonts/GraphikSemibold.otf',
      weight: '600'
    },
    {
      path: '../../public/fonts/GraphikBold.otf',
      weight: '700'
    },
    {
      path: '../../public/fonts/GraphikBlack.otf',
      weight: '800'
    }
  ],
  variable: '--font-graphik'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${graphik.variable} font-sans`}>
      <body className={''}>{children}</body>
    </html>
  )
}
