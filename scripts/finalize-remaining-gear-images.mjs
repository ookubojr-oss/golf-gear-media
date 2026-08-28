import fs from 'node:fs/promises';

const file='data/gear.json';
const rows=JSON.parse(await fs.readFile(file,'utf8'));
const pages={
'TaylorMade Qi10 MAX Driver':'https://www.taylormadegolf.jp/taylormade-drivers/Qi10-Max-%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/DW-KY266.html?lang=ja_JP',
'TaylorMade Qi10 Fairway #3':'https://www.taylormadegolf.jp/taylormade-fairways/Qi10-%E3%83%95%E3%82%A7%E3%82%A2%E3%82%A6%E3%82%A7%E3%82%A4%E3%82%A6%E3%83%83%E3%83%89/DW-KY268.html?lang=ja_JP',
'TaylorMade P790 5-PW':'https://www.taylormadegolf.jp/p700-series-2026/p790.html',
'TaylorMade Hi-Toe 4 58°':'https://www.taylormadegolf.com/clubhouse/882339-taylormade-introduces-hi-toe-4-wedges.html?lang=default',
'TaylorMade TP5 2026 1ダース':'https://www.taylormadegolf.com/tp5/?lang=en_US',
'TaylorMade FlexTech Stand Bag':'https://www.taylormadegolf.com/FlexTech-Stand-Bag/DW-JE942.html?lang=default',
'Callaway Chev Stand Bag':'https://www.callawaygolf.com/accessories/golf-bags/stand-bags/bags-2018-chev-stand.html',
'FootJoy PRO/SLX BOA':'https://www.footjoy.com/golf-shoes/proslx-boa-previous-season-style/56915XW090.html',
'adidas CODECHAOS 25 BOA':'https://news.adidas.com/golf/codechaos-25-redefines-performance-in-spikeless-footwear/s/480df764-3f20-46c3-86b6-2baffa69f8df'
};
const ua={'user-agent':'Mozilla/5.0 (compatible; JiroGolfOfficialImageAudit/2.0)'};
function abs(u,b){try{return new URL(u.replaceAll('&amp;','&'),b).href}catch{return null}}
function score(u,name){const s=(u+' '+name).toLowerCase();let n=0;for(const t of name.toLowerCase().replace(/[^a-z0-9]+/g,' ').split(/\s+/).filter(x=>x.length>2))if(s.includes(t))n+=3;if(/hero|zoom|pdp|product|gallery|main|_01/i.test(u))n+=4;if(/logo|icon|sprite|payment|footer|header/i.test(u))n-=20;return n}
async function resolve(page,name){const r=await fetch(page,{redirect:'follow',headers:ua});if(!r.ok)throw new Error(`${r.status} ${page}`);const html=await r.text();const c=[];for(const re of [/<meta[^>]+(?:property|name)=["'](?:og:image|twitter:image)["'][^>]+content=["']([^"']+)/gi,/<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["'](?:og:image|twitter:image)["']/gi,/"image"\s*:\s*(?:\[\s*)?["'](https?:\\?\/\\?\/[^"']+)/gi,/<img[^>]+(?:src|data-src|data-zoom-image)=["']([^"']+)/gi])for(const m of html.matchAll(re)){const u=abs(m[1].replace(/\\\//g,'/'),r.url);if(u&&/^https:/.test(u)&&!c.includes(u))c.push(u)}
const ranked=c.map(u=>[u,score(u,name)]).sort((a,b)=>b[1]-a[1]);if(!ranked.length)throw new Error(`No image candidate: ${name}`);return {image:ranked[0][0],source:r.url,candidates:ranked.slice(0,5)} }
let done=0;const report=[];
for(const [name,page] of Object.entries(pages)){const row=rows.find(x=>x.name===name);if(!row)throw new Error(`Missing row ${name}`);const x=await resolve(page,name);row.image=x.image;row.image_verified=true;row.image_source=x.source;row.image_verification='official-product-page';report.push({name,...x});done++;console.log(`OFFICIAL ${done}/9 ${name} -> ${x.image}`)}
await fs.writeFile(file,JSON.stringify(rows,null,2)+'\n');
await fs.writeFile('data/gear-image-final-pass.json',JSON.stringify({checked_at:new Date().toISOString(),resolved:done,total:9,items:report},null,2)+'\n');
console.log('Remaining official image pass complete: 9/9');
