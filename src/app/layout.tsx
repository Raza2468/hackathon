import './globals.css'
import { Inter } from 'next/font/google'
import Home from './page'
import { HomePage } from './Home/page'

// import Header from "./Header/page";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <HomePage />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
