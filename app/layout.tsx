import {Nunito} from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Airbnube',
  description: 'Generated by Paing Pyae Thu',
}

const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
