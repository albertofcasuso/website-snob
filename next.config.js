/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  experimental:{
    images:{
      unoptimized:true
    }
  }
};
module.exports = nextConfig;
