# SEO Integration for https://www.skyservicescol.com

Added:
- /public/robots.txt
- /public/sitemap.xml
- /public/og-image.jpg (placeholder)
- vercel.json (SPA rewrite, 301 to www, headers for PDFs inline + asset caching)
- index.html metas (title/description, OG/Twitter), JSON-LD ProfessionalService, lang="en"
- react-helmet-async added, HelmetProvider wrap, default Helmet in App

Next:
1) Push to GitHub and import in Vercel (or merge if already connected).
2) In Vercel → Settings → Domains: set Primary Domain and keep 301 from apex to www.skyservicescol.com.
3) Verify domain in Google Search Console (Domain property) and submit /sitemap.xml.
4) Replace og-image.jpg with a branded image when available.

Instagram: https://www.instagram.com/skyservices_col/
Phone: +1 (435) 915-4125
Focus area: Utah & Salt Lake City
