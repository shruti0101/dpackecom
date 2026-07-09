export const dynamic = "force-dynamic";

import { client } from "@/lib/sanity";
import { groq } from "next-sanity";

const baseUrl = "https://packingairbag.com";

// Blogs
async function getAllBlogs() {
  return client.fetch(groq`
    *[_type=="blog"]{
      slug,
      date
    }
  `);
}

// Products & Categories
async function getProductsAndCategories() {
  const [productsRes, categoriesRes] = await Promise.all([
    fetch(`${baseUrl}/api/products`, {
      cache: "no-store",
    }),
    fetch(`${baseUrl}/api/categories`, {
      cache: "no-store",
    }),
  ]);

  const products = await productsRes.json();
  const categories = await categoriesRes.json();

  return { products, categories };
}

export async function GET() {
  const blogs = await getAllBlogs();
  const { products, categories } = await getProductsAndCategories();

  // Homepage
  const homepage = `
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
  `;

  // Static Pages
  const staticPages = [
    "/about",
    "/contact",
    "/shop",
    "/our-blogs",
    "/privacy-policy",
    "/return-refund-policy",
    "/shipping-policy",
    "/terms-conditions",
  ]
    .map(
      (page) => `
      <url>
        <loc>${baseUrl}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
    )
    .join("");

  // Categories
  const categoryUrls = categories
    .map(
      (category) => `
      <url>
        <loc>${baseUrl}/categories/${category.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
    )
    .join("");

  // Products
  const productUrls = products
    .map(
      (product) => `
      <url>
        <loc>${baseUrl}/products/${product.slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
    `
    )
    .join("");

  // Blogs
  const blogUrls = blogs
    .map(
      (blog) => `
      <url>
        <loc>${baseUrl}/blog/${blog.slug.current}</loc>
        <lastmod>${blog.date
          ? new Date(blog.date).toISOString()
          : new Date().toISOString()
        }</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>
    `
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${homepage}
${staticPages}
${categoryUrls}
${productUrls}
${blogUrls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}