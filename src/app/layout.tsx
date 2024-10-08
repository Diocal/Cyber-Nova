// app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';  // Importación del archivo CSS global

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          maxWidth: '1512px',  // Máximo ancho ajustado
          minHeight: '100vh',  // Cambiado a 100vh para asegurar que ocupe toda la pantalla
          margin: '0 auto',    // Centra horizontalmente en la pantalla
          padding: '0',        // Quitamos el padding
          position: 'relative',
          //borderRadius: '40px 0px 0px 0px',
          overflowX: 'hidden',  // Evita scroll horizontal
          overflowY: 'auto',    // Habilita scroll vertical si es necesario
          backgroundColor: '#000', // Fondo negro para hacer contraste
        }}
      >
        {/* Gradientes globales */}
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
        <div className="gradient-4"></div>
        <div className="gradient-5"></div>
        <div className="gradient-6"></div>

        {/* Render del contenido */}
        {children}
      </body>
    </html>
  );
}
