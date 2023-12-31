import Footer from '@/Components/Footer'
import './globals.css'
import 'tailwindcss/tailwind.css';
import Header from '@/Components/Header'
export const metadata = {
  title: 'Utopia Store',
  description: 'E-commerce website',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head >
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body >
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
