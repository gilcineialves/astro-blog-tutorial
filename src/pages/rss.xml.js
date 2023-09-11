import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Snowzinhx Astro | Blog',
    description: 'Minha jornada aprendendo Astro',
    site: 'https://snowzinhx-astro.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>pt-br</language>`,
  });
}