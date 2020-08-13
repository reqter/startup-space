const i18 = require("../config/Next18Wrapper");
const fs = require("fs");
const globby = require("globby");

function addPage(page) {
  if (page.includes("_app") || page.includes("_document")) {
    return "";
  }
  const path = page
    .replace("src", "")
    .replace("pages", "")
    .replace(".tsx", "")
    .replace("//", "")
    .replace("index", "");
  return `<url>
    <loc>${`${
      process.env.WEBSITE_URL + i18.config.defaultLanguage + "/"
    }${path}`}</loc>
    <changefreq>hourly</changefreq>
    ${i18.config.otherLanguages.reduce((acc, lang) => {
      acc =
        acc +
        `<xhtml:link rel="alternate" hreflang=${`"${lang}"`} href="${
          process.env.WEBSITE_URL + lang + "/" + path
        }" />`;
      return acc;
    }, "")}
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    "src/pages/**/*{.js,.tsx,.mdx}",
    "src/!pages/_*.js",
    "src/!pages/api",
  ]);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
  http://www.w3.org/1999/xhtml http://www.w3.org/2002/08/xhtml/xhtml1-strict.xsd"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(addPage).join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
