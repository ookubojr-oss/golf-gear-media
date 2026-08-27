(()=>{
  const PRODUCTS = [
    {match:/qi4d\s*core|qi4d\s*driver/i,alt:'TaylorMade Qi4D Core Driver メーカー公式商品写真',srcs:['https://www.taylormadegolf.com/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1787154929998/zoom/TC441_zoom_D.jpg?sh=900&sm=fit&sw=900']},
    {match:/qi10\s*(3w|fairway)|taylormade\s*qi10/i,alt:'TaylorMade Qi10 フェアウェイウッド メーカー公式商品写真',srcs:['https://www.taylormadegolf.ca/on/demandware.static/-/Sites-tmag-master-catalog/en_CA/v1772514404440/zoom/TC299_zoom_D.jpg']},
    {match:/qi4d\s*(7w|fairway)|taylormade\s*qi4d(?!\s*core)/i,alt:'TaylorMade Qi4D フェアウェイウッド メーカー公式商品写真',srcs:['https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1786680948148/zoom/TC448_zoom_D.jpg?sh=900&sm=fit&sw=900']},
    {match:/(srixon\s*)?z\s*u85|zu85/i,alt:'Srixon Z U85 メーカー公式商品写真',srcs:['https://sports.dunlop.co.jp/golf/products/clublibrary/iron/images/srzu855000_main.jpg']},
    {match:/p7tw/i,alt:'TaylorMade P7TW アイアン メーカー公式商品写真',srcs:['https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1787240910549/zoom/ST472_zoom_D.jpg?sh=900&sm=fit&sw=900']},
    {match:/vokey\s*sm8\s*50|sm8\s*50/i,alt:'Titleist Vokey SM8 50° メーカー公式商品写真',srcs:['https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master/default/dw86d87c43/833RSF/833RSF_01.png','https://page.titleist.co.jp/mediacenter/images/images-videos/golfclubs/vokey-design-sm8-wedges/09.jpg']},
    {match:/vokey\s*sm8\s*56|sm8\s*56/i,alt:'Titleist Vokey SM8 56° メーカー公式商品写真',srcs:['https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master/default/dw86d87c43/833RSF/833RSF_01.png','https://page.titleist.co.jp/mediacenter/images/images-videos/golfclubs/vokey-design-sm8-wedges/03.jpg']},
    {match:/vokey\s*sm8/i,alt:'Titleist Vokey SM8 ウェッジ メーカー公式商品写真',srcs:['https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master/default/dw86d87c43/833RSF/833RSF_01.png','https://page.titleist.co.jp/mediacenter/images/images-videos/golfclubs/vokey-design-sm8-wedges/03.jpg']},
    {match:/vokey\s*sm9|sm9\s*60/i,alt:'Titleist Vokey SM9 60° メーカー公式商品写真',srcs:['https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master/default/dw77ef934e/852RSS/852RSS_01.png']},
    {match:/spider\s*tour\s*x/i,alt:'TaylorMade Spider Tour X L-Neck メーカー公式商品写真',srcs:['https://www.taylormadegolf.com/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1787544747870/zoom/TC928_zoom_D.jpeg?sh=900&sm=fit&sw=900']},
    {match:/titleist\s*pro\s*v1|pro\s*v1/i,alt:'Titleist Pro V1 High Number メーカー公式商品写真',srcs:['https://www.titleist.co.jp/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw5f9812c2/005PV1T/T2029S_01.png?sfrm=png&sh=650&sm=fit&sw=650']},
    {match:/26\s*ventus\s*tr|ventus\s*tr\s*26/i,alt:'Fujikura 26 VENTUS TR メーカー公式商品写真',srcs:['https://www.fujikurashaft.jp/wp-content/uploads/2026/04/ventus_tr_2604.png']},
    {match:/r7\s*quad\s*mini/i,alt:'TaylorMade R7 Quad Mini Driver メーカー公式商品写真',srcs:['https://assets.taylormadegolf.com/i/30/979061/R7-Quad-Mini-Studio-Hero~W1000_H562_Mcrop_P50-50.png']},
    {match:/mezz\.1\s*max/i,alt:'L.A.B. Golf MEZZ.1 MAX 正規販売元商品写真',srcs:['https://labgolf.jp/cdn/shop/files/cover-max-custom.jpg?v=1763455992&width=832']},
    {match:/df\s*2\.1/i,alt:'L.A.B. Golf DF 2.1 正規販売元商品写真',srcs:['https://labgolf.jp/cdn/shop/files/cover-df21-custom.jpg?v=1763456019&width=832']},
    {match:/cobra\s*optm\s*x|optm\s*x\s*driver/i,alt:'COBRA OPTM X Driver メーカー公式商品写真',srcs:['https://cdn.shopify.com/s/files/1/0634/7833/3657/files/SS26_Ecom_Cobra_OPTM_PDP_Driver_X_ImgGal-1-min.jpg']},
    {match:/titleist\s*gts2|gts2\s*driver/i,alt:'Titleist GTS2 Driver メーカー公式商品写真',srcs:['https://www.titleist.co.jp/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master-JP/default/dwa8a59a0d/560BC/560BC_01.png?sfrm=png&sh=650&sm=fit&sw=650']},
    {match:/callaway\s*elyte\s*x|elyte\s*x\s*driver/i,alt:'Callaway ELYTE X Driver メーカー公式商品写真',srcs:['https://cdn2.webdamdb.com/1280_YjeDKtjEyD518FnA.png?1753642061']}
  ];
  const BRAND_RULES = [
    {name:/\bping\b|g440/i,src:/ping|clubping/i},
    {name:/callaway|elyte/i,src:/callaway|webdamdb/i},
    {name:/srixon|zxi|cleveland/i,src:/srixon|dunlop|cleveland/i},
    {name:/titleist|vokey|pro\s*v1/i,src:/titleist|acushnet/i},
    {name:/cobra|optm/i,src:/cobra|shopify/i},
    {name:/taylormade|qi4d|qi10|p7tw|spider\s*tour|r7\s*quad/i,src:/taylormade/i},
    {name:/lab\s*golf|mezz\.1|df\s*2\.1/i,src:/labgolf/i}
  ];
  function identify(img){const card=img.closest('[data-name],.witb-card,.gear-card,.photo-card,.gear-card-v3,.desktop-gear-card,.concept-gear-card');return [img.alt||'',card?.dataset?.name||'',card?.textContent||''].join(' ')}
  function productFor(img){const text=identify(img);return PRODUCTS.find(p=>p.match.test(text))}
  function mismatchFor(img){
    const text=identify(img),src=(img.getAttribute('src')||'').toLowerCase();
    if(!text||!src||src.startsWith('data:'))return false;
    const rule=BRAND_RULES.find(r=>r.name.test(text));
    if(!rule)return false;
    if(/amazon|rakuten|yahoo|golfpartner|golf5|victoria|alpen/.test(src))return false;
    return !rule.src.test(src);
  }
  function pendingPlaceholder(img){
    if(!(img instanceof HTMLImageElement)||img.dataset.imageMismatch==='1')return;
    img.dataset.imageMismatch='1';
    img.style.display='none';
    img.setAttribute('aria-hidden','true');
    const holder=document.createElement('div');
    holder.className='product-image-pending';
    holder.dataset.generatedImagePending='1';
    holder.setAttribute('role','img');
    holder.setAttribute('aria-label','商品画像を確認中');
    holder.innerHTML='<b>PHOTO CHECK</b><small>モデル一致画像を確認中</small>';
    holder.style.cssText='width:100%;min-height:150px;aspect-ratio:4/3;display:grid;place-content:center;gap:6px;text-align:center;background:#f1f1ed;color:#4c514b;padding:14px;font-size:12px;letter-spacing:.04em';
    img.insertAdjacentElement('afterend',holder);
  }
  function clearPlaceholder(img){
    if(!(img instanceof HTMLImageElement))return;
    const holder=img.nextElementSibling;
    if(holder?.dataset?.generatedImagePending==='1')holder.remove();
    img.dataset.imageMismatch='0';
    img.style.display='';
    img.removeAttribute('aria-hidden');
  }
  function setRealImage(img,p,index=0){if(!(img instanceof HTMLImageElement)||!p)return;const i=Math.max(0,Math.min(index,p.srcs.length-1));img.dataset.realImageIndex=String(i);img.dataset.realProductPhoto='1';clearPlaceholder(img);img.alt=p.alt;const next=p.srcs[i];if(img.getAttribute('src')!==next)img.src=next}
  function audit(img){if(!(img instanceof HTMLImageElement))return;if(mismatchFor(img))pendingPlaceholder(img);else if(img.dataset.imageMismatch==='1')clearPlaceholder(img)}
  function fix(img,force=false){if(!(img instanceof HTMLImageElement))return;const p=productFor(img);if(!p){audit(img);return;}const current=img.getAttribute('src')||'';const isGeneric=current.includes('gear-fallback-transparent');const isKnown=p.srcs.includes(current);if(force||isGeneric||!isKnown)setRealImage(img,p,Number(img.dataset.realImageIndex||0));audit(img)}
  function wire(img){if(!(img instanceof HTMLImageElement)||img.dataset.realPhotoWired==='1')return;img.dataset.realPhotoWired='1';img.addEventListener('error',()=>{const p=productFor(img);if(!p){audit(img);return;}const current=Number(img.dataset.realImageIndex||0),next=current+1;if(next<p.srcs.length)setTimeout(()=>setRealImage(img,p,next),0);else pendingPlaceholder(img)});fix(img,true)}
  document.querySelectorAll('img').forEach(wire);
  const observer=new MutationObserver(ms=>{ms.forEach(m=>{if(m.type==='attributes'&&m.target instanceof HTMLImageElement){if((m.target.getAttribute('src')||'').includes('gear-fallback-transparent'))fix(m.target,true);else audit(m.target)}m.addedNodes.forEach(node=>{if(!(node instanceof Element))return;if(node.matches('img'))wire(node);node.querySelectorAll?.('img').forEach(wire)})})});observer.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['src']});
})();