import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

assert(fs.existsSync(dist), 'dist/ does not exist. Run npm run build first.');

const htmlFiles = [];

const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(filePath);
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      htmlFiles.push(filePath);
    }
  }
};

if (fs.existsSync(dist)) {
  walk(dist);
}

const routeForFile = (filePath) =>
  `/${path
    .relative(dist, filePath)
    .replace(/index\.html$/, '')
    .replaceAll(path.sep, '/')}`;

const routeExists = (url) => {
  const cleanUrl = url.split('#')[0].split('?')[0];

  if (!cleanUrl || cleanUrl === '/') return true;
  if (cleanUrl.endsWith('/')) {
    return fs.existsSync(path.join(dist, cleanUrl, 'index.html'));
  }

  return (
    fs.existsSync(path.join(dist, cleanUrl)) ||
    fs.existsSync(path.join(dist, `${cleanUrl}/index.html`))
  );
};

const missingInternalLinks = [];
const noindexRoutes = [];
const forbiddenMatches = [];

const forbiddenTerms = [
  'clayduncan.com',
  'site-clayduncan',
  'chat with clay',
  'why join clay',
  'realtor-ai-training',
  '/join-us/',
  '/blog/',
  '/contact/',
  '/huntsville/va-loans/',
  '/huntsville/jumbo-loans/',
  '/huntsville/medical-professional-mortgage/',
  '/huntsville/complex-mortgage-guidance/',
];

for (const htmlFile of htmlFiles) {
  const html = fs.readFileSync(htmlFile, 'utf8').toLowerCase();
  const route = routeForFile(htmlFile);

  if (/name="robots" content="[^"]*noindex/.test(html)) {
    noindexRoutes.push(route);
  }

  for (const term of forbiddenTerms) {
    if (html.includes(term)) {
      forbiddenMatches.push(`${route} -> ${term}`);
    }
  }

  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const url = match[1];
    const isExternal =
      url.startsWith('http') ||
      url.startsWith('mailto:') ||
      url.startsWith('tel:') ||
      url.startsWith('data:') ||
      url.startsWith('#') ||
      url.startsWith('/_astro/');

    if (!isExternal && url.startsWith('/') && !routeExists(url)) {
      missingInternalLinks.push(`${route} -> ${url}`);
    }
  }
}

const sitemapPath = path.join(dist, 'sitemap-0.xml');
assert(fs.existsSync(sitemapPath), 'dist/sitemap-0.xml does not exist.');

const sitemap = fs.existsSync(sitemapPath)
  ? fs.readFileSync(sitemapPath, 'utf8')
  : '';
const sitemapUrls = [
  ...sitemap.matchAll(/<loc>https:\/\/www\.leviduncan\.com([^<]+)<\/loc>/g),
].map((match) => match[1]);

const llmsPath = path.join(root, 'public/llms.txt');
const llms = fs.existsSync(llmsPath) ? fs.readFileSync(llmsPath, 'utf8') : '';

const expectedRoutes = [
  '/',
  '/about/',
  '/events/',
  '/huntsville/mortgage-guidance/fha-loans/',
  '/huntsville/mortgage-guidance/',
  '/huntsville/mortgage-guidance/usda-loans/',
  '/reviews/',
];

assert(
  htmlFiles.length === 8,
  `Expected 8 built HTML files including 404, found ${htmlFiles.length}.`,
);

for (const route of expectedRoutes) {
  assert(sitemapUrls.includes(route), `Sitemap must include ${route}.`);
}

assert(!sitemapUrls.includes('/404.html'), 'Sitemap must exclude /404.html.');
assert(noindexRoutes.includes('/404.html'), '/404.html must be noindex.');
assert(
  missingInternalLinks.length === 0,
  `Missing internal links:\n${missingInternalLinks.join('\n')}`,
);
assert(
  forbiddenMatches.length === 0,
  `Found removed Clay route or identity references in built HTML:\n${forbiddenMatches.join('\n')}`,
);
assert(
  llms.includes('https://www.leviduncan.com/events/'),
  'llms.txt must include the Homebuyer Master Class events page.',
);
assert(
  llms.includes('Mortgage Loan Originator'),
  'llms.txt must use Levi regulated title.',
);

const result = {
  htmlFileCount: htmlFiles.length,
  sitemapUrls,
  noindexRoutes,
  missingInternalLinks,
};

if (failures.length > 0) {
  console.error(JSON.stringify({ ...result, failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ ...result, status: 'passed' }, null, 2));
