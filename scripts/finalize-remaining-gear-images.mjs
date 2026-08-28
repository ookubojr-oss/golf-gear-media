import fs from 'node:fs/promises';

const file='data/gear.json';
const rows=JSON.parse(await fs.readFile(file,'utf8'));

// Exact manufacturer assets already verified from exact official product/press pages.
const pinned={
'TaylorMade Qi10 MAX Driver':{
  image:'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1786075672959/zoom/KY266_zoom_D.jpg?sh=900&sm=fit&sw=900',
  source:'https://www.taylormadegolf.jp/taylormade-drivers/Qi10-Max-%E3%83%89%E3%83%A9%E3%82%A4%E3%83%90%E3%83%BC/DW-KY266.html'
},
'TaylorMade Qi10 Fairway #3':{
  image:'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1776053356368/zoom/KY268_zoom_D.jpg?sh=900&sm=fit&sw=900',
  source:'https://www.taylormadegolf.jp/taylormade-fairways/Qi10-%E3%83%95%E3%82%A7%E3%82%A2%E3%82%A6%E3%82%A7%E3%82%A4%E3%82%A6%E3%83%83%E3%83%89/DW-KY268.html'
},
'TaylorMade P790 5-PW':{
  image:'https://www.taylormadegolf.com/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/default/v1785304008150/zoom/TA283_zoom_D.jpg?sh=900&sm=fit&sw=900',
  source:'https://www.taylormadegolf.com/P790-Irons/N2780111.html'
},
'TaylorMade TP5 2026 1ダース':{
  image:'https://assets.taylormadegolf.com/i/f7/1260171/2026-TP5-Golf-Ball-Studio_2026-01-28-200904_uyeo~W1000_Mcrop_P50-50.jpeg',
  source:'https://www.taylormadegolf.com/clubhouse/1264489-tp5-tp5x-press-release.html'
},
'Callaway Chev Stand Bag':{
  image:'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1742015112529/sits/bags-2018-chev-stand/bags-2018-chev-stand_2266___1.jpg?bgcolor=F7F7F7&q=90&sfrm=png&sw=3000',
  source:'https://www.callawaygolf.com/bags-2018-chev-stand.html'
}
};

const pages={
'TaylorMade Hi-Toe 4 58°':['https://www.taylormadegolf.com/Hi-Toe-4-Wedge/N2926409.html','https://www.taylormadegolf.com/clubhouse/882339-taylormade-introduces-hi-toe-4-wedges.html'],
'TaylorMade FlexTech Stand Bag':['https://www.taylormadegolf.jp/taylormade-accessories-CaddieBags/%E3%83%95%E3%83%AC%E3%83%83%E3%82%AF%E3%82%B9%E3%83%86%E3%83%83%E3%82%AF-%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%90%E3%83%83%E3%82%B0/DW-JE941.html','https://www.taylormadegolf.com/FlexTech-Stand-Bag/DW-JE942.html'],
'FootJoy PRO/SLX BOA':['https://www.footjoy.com/golf-shoes/proslx-boa-previous-season-style/56915XW090.html','https://www.footjoy.com/men/golf-shoes/spikeless/proslx-boa/'],
'adidas CODECHAOS 25 BOA':['https://www.adidas.jp/%E3%80%90%E3%82%B4%E3%83%AB%E3%83%95%E3%80%91%E3%82%B3%E3%83%BC%E3%83%89%E3%82%AB%E3%82%AA%E3%82%B9-%E3%83%9C%E3%82%A2-25-codechaos-boa-25/IH5142.html','https://news.adidas.com/golf/codechaos-25-redefines-performance-in-spikeless-footwear/s/480df764-3f20-46c3-86b6-2baffa69f8df']
};

const ua={'user-agent':'Mozilla/5.0 (compatible; JiroGolfOfficialImageAudit/2.1)','accept':'text/html,application/xhtml+xml'};
function abs(u,b){try{return new URL(String(u).replaceAll('&amp;','&'),b).href}catch{return null}}
function toks(name){return name.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,' ').split(/\s+/).filter(x=>x.length>2&&!['taylormade','footjoy','adidas','golf','stand','bag','boa','wedge'].includes(x))}
function score(u,name){const s=u.toLowerCase();let n=0;for(const t of toks(name))if(s.includes(t))n+=8;if(/zoom|pdp|product|gallery|main|_01|hero/i.test(u))n+=6;if(/logo|icon|sprite|payment|footer|header|ogp|meta_image|beanie/i.test(u))n-=40;return n}
async function getHtml(start){let url=start;for(let i=0;i<6;i++){
  const r=await fetch(url,{redirect:'manual',headers:ua});
  if(r.status>=300&&r.status<400){const loc=r.headers.get('location');if(!loc)throw new Error(`redirect without location ${url}`);const next=abs(loc,url);if(!next||next===url)throw new Error(`redirect loop ${url}`);url=next;continue;}
  if(!r.ok)throw new Error(`${r.status} ${url}`);
  return {html:await r.text(),url:r.url||url};
}
throw new Error(`too many redirects ${start}`)}
function candidates(html,base,name){const c=[];const regs=[
/<meta[^>]+(?:property|name)=["'](?:og:image|twitter:image)["'][^>]+content=["']([^"']+)/gi,
/<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["'](?:og:image|twitter:image)["']/gi,
/"image"\s*:\s*(?:\[\s*)?["'](https?:\\?\/\\?\/[^"']+)/gi,
/<img[^>]+(?:src|data-src|data-zoom-image|data-hi-res)=["']([^"']+)/gi
];
for(const re of regs)for(const m of html.matchAll(re)){const u=abs(m[1].replace(/\\\//g,'/'),base);if(u&&/^https:/.test(u)&&!c.includes(u))c.push(u)}
return c.map(u=>[u,score(u,name)]).sort((a,b)=>b[1]-a[1]);}
async function resolve(pagesForName,name){let lastErr=null;for(const page of pagesForName){try{const {html,url}=await getHtml(page);const ranked=candidates(html,url,name);if(ranked.length&&ranked[0][1]>0)return {image:ranked[0][0],source:url,candidates:ranked.slice(0,5)};lastErr=new Error(`No strong image candidate: ${name} @ ${page}`);}catch(e){lastErr=e;console.warn(`SKIP ${name} ${page}: ${e.message}`)}}throw lastErr||new Error(`Unresolved ${name}`)}

const report=[];
for(const [name,x] of Object.entries(pinned)){
  const row=rows.find(r=>r.name===name);if(!row)throw new Error(`Missing row ${name}`);
  row.image=x.image;row.image_verified=true;row.image_source=x.source;row.image_verification='official-exact-pinned';
  report.push({name,...x,pinned:true});console.log(`PINNED ${name} -> ${x.image}`);
}
let resolved=0;const failures=[];
for(const [name,ps] of Object.entries(pages)){
  const row=rows.find(r=>r.name===name);if(!row)throw new Error(`Missing row ${name}`);
  try{const x=await resolve(ps,name);row.image=x.image;row.image_verified=true;row.image_source=x.source;row.image_verification='official-product-page';report.push({name,...x,pinned:false});resolved++;console.log(`OFFICIAL ${name} -> ${x.image}`)}
  catch(e){failures.push({name,error:e.message});console.error(`UNRESOLVED ${name}: ${e.message}`)}
}
await fs.writeFile(file,JSON.stringify(rows,null,2)+'\n');
await fs.writeFile('data/gear-image-final-pass.json',JSON.stringify({checked_at:new Date().toISOString(),pinned:Object.keys(pinned).length,resolved,failed:failures.length,items:report,failures},null,2)+'\n');
console.log(`Final pass: ${Object.keys(pinned).length+resolved}/9 resolved`);
if(failures.length)console.warn(`Partial success committed; ${failures.length} official images still need manual pinning.`);
