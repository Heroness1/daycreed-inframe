/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Izinkan remote images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // Tambahkan domain lain jika ada (Cloudinary, ImgBB, dll)
      // {
      //   protocol: "https",
      //   hostname: "res.cloudinary.com",
      // },
    ],

    // Format modern (paling hemat ukuran)
    formats: ["image/avif", "image/webp"],

    // Ukuran device (fokus mobile + desktop)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    
    // Ukuran untuk gambar kecil (logo, thumbnail)
    imageSizes: [16, 32, 48, 64, 96, 128, 256],

    // Cache gambar lebih lama (bagus untuk performa)
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 hari

    // Matikan image optimization di development biar lebih cepat (opsional)
    // unoptimized: process.env.NODE_ENV === "development",
  },
};

module.exports = nextConfig;
