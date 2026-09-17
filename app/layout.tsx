import './globals.css'

export const metadata = {
  title: 'Uksai Platform',
  description: 'UK School of Artificial Intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
