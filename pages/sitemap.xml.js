export async function getServerSideProps({ res }) {
  const baseUrl = "https://www.suburmajuprinting.com";

  const urls = [
    "/",
    "/undangan-digital",
    "/pesan",
    "/hardcover-skripsi-jakarta-timur",
    "/banner-jakarta-timur",
    "/stiker-jakarta-timur",
    "/brosur-jakarta-timur",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${path === "/" ? "daily" : "weekly"}</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
