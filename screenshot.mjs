import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

// 1. Homepage
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 20000 });
await page.screenshot({ path: 'C:/Users/ibrah/Desktop/nextjs_home.png' });
console.log('Homepage done');

// 2. Directory
await page.goto('http://localhost:3000/advocaten', { waitUntil: 'networkidle2', timeout: 20000 });
await new Promise(r => setTimeout(r, 8000)); // wait for Supabase data
await page.screenshot({ path: 'C:/Users/ibrah/Desktop/nextjs_directory.png' });
console.log('Directory done');

// 3. Lawyer profile page (P.F. Slob slug)
await page.goto('http://localhost:3000/advocaat/p-f-slob-zwijndrecht', { waitUntil: 'networkidle2', timeout: 30000 });
await page.screenshot({ path: 'C:/Users/ibrah/Desktop/nextjs_lawyer.png' });
console.log('Lawyer page done');

await browser.close();
