import fs from 'node:fs/promises';

const file='data/gear.json';
const rows=JSON.parse(await fs.readFile(file,'utf8'));

const brands=[
  [/TaylorMade/i,{sites:['taylormadegolf.com','taylormadegolf.jp'],hosts:['taylormadegolf.com','taylormadegolf.jp','assets.taylormadegolf.com']}],
  [/Titleist|Vokey/i,{sites:['titleist.com','titleist.co.jp'],hosts:['titleist.com','titleist.co.jp','acushnet.scene7.com']}],
  [/Scotty Cameron/i,{sites:['scottycameron.com'],hosts:['scottycameron.com']}],
  [/PING/i,{sites:['ping.com','clubping.jp'],hosts:['ping.com','clubping.jp','api.next.ping.com']}],
  [/Callaway/i,{sites:['callawaygolf.com'],hosts:['callawaygolf.com','prd-sfcc.callawaygolf.com']}],
  [/Odyssey/i,{sites:['odyssey.callawaygolf.com','callawaygolf.com'],hosts:['odyssey.callawaygolf.com','callawaygolf.com','prd-sfcc.callawaygolf.com']}],
  [/Srixon/i,{sites:['srixonasia.com','srixon.com','sports.dunlop.co.jp'],hosts:['srixonasia.com','srixon.com','sports.dunlop.co.jp','dunlopsports.com','au.dunlopsports.com']}],
  [/Cleveland/i,{sites:['clevelandgolf.com','srixonasia.com'],hosts:['clevelandgolf.com','srixonasia.com','dunlopsports.com','au.dunlopsports.com']}],
  [/Mizuno/i,{sites:['jpn.mizuno.com','mizunogolf.com'],hosts:['jpn.mizuno.com','mizunogolf.com','mizuno.com']}],
  [/COBRA/i,{sites:['cobragolf.com'],hosts:['cobragolf.com','cdn.shopify.com','images.salsify.com']}],
  [/L\.A\.B\./i,{sites:['labgolf.com','labgolf.jp'],hosts:['labgolf.com','labgolf.jp','cdn.shopify.com']}],
  [/Bridgestone/i,{sites:['bridgestonegolf.com','bs-golf.com'],hosts:['bridgestonegolf.com','bs-golf.com']}],
  [/FootJoy/i,{sites:['footjoy.com','footjoy.jp'],hosts:['footjoy.com','footjoy.jp']}],
  [/adidas/i,{sites:['adidas.com','adidas.jp'],hosts:['adidas.com','adidas.jp','assets.adidas.com']}],
  [/Nikon/i,{sites:['nikon-image.com'],hosts:['nikon-image.com']}],
  [/Pride/i,{sites:['pridegolftee.com'],hosts:['pridegolftee.com']}]
];

const curated={
'TaylorMade Qi4D Driver':'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1784693259290/zoom/TC441_zoom_D.jpg?sh=900&sm=fit&sw=900',
'Titleist GTS2 Driver':'https://www.titleist.co.jp/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master-JP/default/dwa8a59a0d/560BC/560BC_01.png?sfrm=png&sh=650&sm=fit&sw=650',
'COBRA OPTM X Driver':'https://cdn.shopify.com/s/files/1/0634/7833/3657/files/SS26_Ecom_Cobra_OPTM_PDP_Driver_X_ImgGal-1-min.jpg',
'PING G440 MAX Driver':'https://api.next.ping.com/media/catalog/product/c/l/clubs_drivers_g440_max_sole_1600x1600_8603.png?auto=webp&fit=bounds&format=pjpg&quality=80&width=1600',
'Callaway ELYTE X Driver':'https://prd-sfcc.callawaygolf.com/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1784528739488/sits/drivers-2025-elyte-x/drivers-2025-elyte-x___1.jpg?bgcolor=F7F7F7&q=90&sfrm=png&sw=3000',
'TaylorMade R7 Quad Mini Driver':'https://assets.taylormadegolf.com/i/30/979061/R7-Quad-Mini-Studio-Hero~W1000_H562_Mcrop_P50-50.png',
'TaylorMade Qi4D Fairway #3':'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1786680948148/zoom/TC448_zoom_D.jpg?sh=900&sm=fit&sw=900',
'TaylorMade Qi4D Fairway #5':'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1786680948148/zoom/TC448_zoom_D.jpg?sh=900&sm=fit&sw=900',
'Srixon Z U85 U4':'https://sports.dunlop.co.jp/golf/products/clublibrary/iron/images/srzu855000_main.jpg',
'PING G440 Hybrid #4':'https://api.next.ping.com/media/catalog/product/c/l/clubs.hybrids.g440.4_hybrid_sole_1600x1600_38ee.png?auto=webp&fit=bounds&format=pjpg&quality=80&width=1600',
'Titleist GT2 Fairway #5':'https://acushnet.scene7.com/is/image/titleist/24-Spec-GT2-FW-Thumb?fmt=png-alpha&qlt=100&resMode=sharp2&wid=1200',
'TaylorMade P7TW 5-PW':'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1787240910549/zoom/ST472_zoom_D.jpg?sh=900&sm=fit&sw=900',
'PING G440 6-PW':'https://api.next.ping.com/media/catalog/product/c/l/clubs.irons.g440.7_iron_cavity_alt_1600x1600_58b0.png?auto=webp&fit=bounds&format=pjpg&quality=80&width=1600',
'Titleist T350 6-PW':'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master/default/dw66fe6b50/563C_01.png?sfrm=png&sh=650&sm=fit&sw=650',
'Callaway Apex Ai300 5-PW':'https://prd-sfcc.callawaygolf.com/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1784007623121/sits/irons-2024-apex-ai300/irons-2024-apex-ai300___1.jpg?bgcolor=F7F7F7&q=90&sfrm=png&sw=3000',
'COBRA KING TEC X 5-PW':'https://www.cobragolf.com/cdn/shop/files/R9001_ADDRESS_84bf3a86-e4bf-4c99-b50b-dc501b7714a1.jpg?v=1775233744&width=1600',
'L.A.B. Golf MEZZ.1 MAX Custom':'https://labgolf.jp/cdn/shop/files/cover-max-custom.jpg?v=1763455992&width=832',
'L.A.B. Golf DF 2.1 Custom':'https://labgolf.jp/cdn/shop/files/cover-df21-custom.jpg?v=1763456019&width=832',
'TaylorMade Spider Tour X':'https://www.taylormadegolf.com/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1787544747870/zoom/TC928_zoom_D.jpeg?sh=900&sm=fit&sw=900',
'Titleist Scotty Cameron Phantom 5':'https://www.scottycameron.com/media/kceemsxz/2026-sc-phantom-5-hero.jpg',
'Nikon COOLSHOT PROIII STABILIZED':'https://www.nikon-image.com/products/sportoptics/laser/coolshot_proiii_stabilized/img/product_01.png'
};

function brandFor(name){for(const [re,v] of brands)if(re.test(name))return v;throw new Error(`No official brand mapping: ${name}`)}
function abs(u,base){try{return new URL(u,base).href}catch{return null}}
function hostAllowed(u,hosts){try{const h=new URL(u).hostname.toLowerCase();return hosts.some(x=>h===x||h.endsWith('.'+x))}catch{return false}}
function strip(s=''){return s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,' ')}
function tokens(name){return strip(name).split(/\s+/).filter(x=>x.length>1&&!['driver','irons','iron','fairway','wedge','putter','golf','custom','stand','bag','glove','boa'].includes(x))}
async function get(url){const r=await fetch(url,{redirect:'follow',headers:{'user-agent':'Mozilla/5.0 (compatible; JiroGolfImageAudit/1.0)'}});if(!r.ok)throw new Error(`${r.status} ${url}`);return {text:await r.text(),url:r.url}}
function linksFromSearch(html,site){const out=[];for(const m of html.matchAll(/href="(https?:\/\/[^"&]+)"/g)){const u=m[1];if(u.includes(site)&&!u.includes('/search')&&!u.includes('bing.com'))out.push(u)}return [...new Set(out)]}
function candidates(html,base,name){const out=[];for(const m of html.matchAll(/<meta[^>]+(?:property|name)=["'](?:og:image|twitter:image)["'][^>]+content=["']([^"']+)/gi))out.push([m[1],30]);for(const m of html.matchAll(/<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["'](?:og:image|twitter:image)["']/gi))out.push([m[1],30]);for(const m of html.matchAll(/"image"\s*:\s*(?:\[\s*)?["'](https?:\\?\/\\?\/[^"']+)/gi))out.push([m[1].replace(/\\\//g,'/'),45]);for(const m of html.matchAll(/<img[^>]+(?:src|data-src)=["']([^"']+)["'][^>]*(?:alt=["']([^"']*)["'])?/gi)){const alt=m[2]||'';let score=5;const hay=strip(`${m[1]} ${alt}`);for(const t of tokens(name))if(hay.includes(t))score+=8;out.push([m[1],score])}return out.map(([u,s])=>[abs(u,base),s]).filter(x=>x[0]).sort((a,b)=>b[1]-a[1])}
async function findImage(row){if(curated[row.name])return {image:curated[row.name],source:'curated-official'};const b=brandFor(row.name);const q=encodeURIComponent(`site:${b.sites[0]} ${row.name}`);let pages=[];try{const {text}=await get(`https://www.bing.com/search?q=${q}`);pages=linksFromSearch(text,b.sites[0]).slice(0,5)}catch{};for(const page of pages){try{const {text,url}=await get(page);for(const [img] of candidates(text,url,row.name)){if(hostAllowed(img,b.hosts)&&!/logo|icon|sprite|badge/i.test(img))return {image:img,source:url}}}catch{}}return null}

let ok=0;const failed=[];
for(const row of rows){const found=await findImage(row);if(found){row.image=found.image;row.image_verified=true;row.image_source=found.source;ok++;console.log(`OK ${ok}/50 ${row.name} -> ${found.image}`)}else{row.image_verified=false;failed.push(row.name);console.error(`FAIL ${row.name}`)}}
if(rows.length!==50)throw new Error(`Expected 50 rows, got ${rows.length}`);
await fs.writeFile(file,JSON.stringify(rows,null,2)+'\n');
await fs.writeFile('data/gear-image-audit.json',JSON.stringify({checked_at:new Date().toISOString(),verified:ok,total:rows.length,failed,items:rows.map(({no,name,image,image_verified,image_source})=>({no,name,image,image_verified,image_source}))},null,2)+'\n');
if(failed.length)throw new Error(`Official image verification incomplete: ${ok}/50; ${failed.join(', ')}`);
console.log('Official image verification complete: 50/50');
