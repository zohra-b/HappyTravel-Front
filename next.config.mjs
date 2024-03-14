/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:8000/api",
  },
  images: {
    domains: ["localhost"], // Agrega otros dominios si necesitas cargar imágenes desde otros lugares
  },
};

export default nextConfig;
