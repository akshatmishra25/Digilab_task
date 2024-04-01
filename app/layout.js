export const metadata = {
  title: 'Digilabs',
  description: 'My Assignment',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}