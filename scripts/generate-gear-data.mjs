import fs from 'node:fs';

const file='data/gear.json';
if(!fs.existsSync(file)) throw new Error('data/gear.json is required; refusing to regenerate products with placeholder/category images');

const rows=JSON.parse(fs.readFileSync(file,'utf8'));
if(!Array.isArray(rows) || rows.length!==50) throw new Error(`expected existing 50 gear products, got ${Array.isArray(rows)?rows.length:'invalid data'}`);

for(const [i,r] of rows.entries()){
  if(!r?.name || !r?.category) throw new Error(`invalid gear row at index ${i}`);
  // Critical safety rule: never synthesize or replace image/image_source here.
  // Images are curated separately by the official-image audit scripts.
  const q=encodeURIComponent(r.name);
  r.no=String(i+1).padStart(2,'0');
  r.amazon=`https://www.amazon.co.jp/s?k=${q}`;
  r.rakuten=`https://search.rakuten.co.jp/search/mall/${q}/`;
  r.yahoo=`https://shopping.yahoo.co.jp/search?p=${q}`;
}

fs.writeFileSync(file,JSON.stringify(rows,null,2)+'\n');
console.log('normalized 50 gear products without modifying curated images');
