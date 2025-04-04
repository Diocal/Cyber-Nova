/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Esto asegura que Next.js exporte el sitio como estático
  images: {
    unoptimized: true,  // Si deshabilitas la optimización de imágenes, puede ser útil para exportación estática
  },
};

export default nextConfig;
