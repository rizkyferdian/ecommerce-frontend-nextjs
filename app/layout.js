import './globals.css'
import { Poppins } from "@next/font/google"
import Navbar from './navbar'

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: "--font-poppins"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  )
}
