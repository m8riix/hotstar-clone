import './globals.css'

export const metadata = {
  title: 'Hotstar Clone - Streaming Platform',
  description: 'A modern streaming platform clone with React and Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
