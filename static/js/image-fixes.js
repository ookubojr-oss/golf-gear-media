(()=>{
  const PRODUCTS = [
    {match:/qi4d\s*core|qi4d\s*driver/i,alt:'TaylorMade Qi4D Core Driver 実物商品写真',srcs:[
      'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1784693259290/zoom/TC441_zoom_D.jpg?sh=900&sm=fit&sw=900',
      'https://www.golfwarehouse.nz/cdn/shop/files/TaylorMade-Mens-Qi4D-Core-Driver-At-Golf-Warehouse-NZ.jpg?v=1769474147&width=1214'
    ]},
    {match:/qi10\s*(3w|fairway)|taylormade\s*qi10/i,alt:'TaylorMade Qi10 フェアウェイウッド 実物商品写真',srcs:[
      'https://www.taylormadegolf.ca/on/demandware.static/-/Sites-tmag-master-catalog/en_CA/v1772514404440/zoom/TC299_zoom_D.jpg'
    ]},
    {match:/qi4d\s*(7w|fairway)|taylormade\s*qi4d(?!\s*core)/i,alt:'TaylorMade Qi4D フェアウェイウッド 実物商品写真',srcs:[
      'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1786680948148/zoom/TC448_zoom_D.jpg?sh=900&sm=fit&sw=900',
      'https://cdn11.bigcommerce.com/s-hgw48x3/products/4543/images/35184/TM26MWF-TC448-N8401509-Qi4D-Core-Fairway-3Q-v1__77316.1767828863.400.400.jpg?c=2'
    ]},
    {match:/(srixon\s*)?z\s*u85|zu85/i,alt:'Srixon Z U85 実物商品写真',srcs:[
      'https://www.pgatoursuperstore.com/dw/image/v2/BCFG_PRD/on/demandware.static/-/Sites-master-catalog-pgatss/default/dwff7096e8/Golf-Clubs/Irons-and-Pkg-Sets/Mens-Iron-Sets/Srixon/2000000001070/2000000001070_2.png?sh=1200&sm=fit&sw=1200'
    ]},
    {match:/p7tw/i,alt:'TaylorMade P7TW アイアン 実物商品写真',srcs:[
      'https://cdn11.bigcommerce.com/s-d6glsqook0/products/3265/images/12792/TAYLO-P7TW-2__83641.1622150473.386.513.jpg?c=1'
    ]},
    {match:/vokey\s*sm8|sm8\s*(50|56)/i,alt:'Titleist Vokey SM8 ウェッジ 実物商品写真',srcs:[
      'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master/default/dw86d87c43/833RSF/833RSF_01.png'
    ]},
    {match:/vokey\s*sm9|sm9\s*60/i,alt:'Titleist Vokey SM9 ウェッジ 実物商品写真',srcs:[
      'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master/default/dw77ef934e/852RSS/852RSS_01.png'
    ]},
    {match:/spider\s*tour\s*x/i,alt:'TaylorMade Spider Tour X パター 実物商品写真',srcs:[
      'https://www.golfworx.co.uk/wp-content/uploads/2025/02/tourx3.webp'
    ]},
    {match:/titleist\s*pro\s*v1|pro\s*v1/i,alt:'Titleist Pro V1 実物商品写真',srcs:[
      'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwf626864d/T2029S-H-J/T2029S-H-J_01.png'
    ]},
    {match:/r7\s*quad\s*mini/i,alt:'TaylorMade R7 Quad Mini Driver 実物商品写真',srcs:[
      'https://assets.taylormadegolf.com/i/30/979061/R7-Quad-Mini-Studio-Hero~W1000_H562_Mcrop_P50-50.png'
    ]},
    {match:/mezz\.1\s*max/i,alt:'L.A.B. Golf MEZZ.1 MAX 実物商品写真',srcs:[
      'https://labgolf.jp/cdn/shop/files/cover-max-custom.jpg?v=1763455992&width=832'
    ]},
    {match:/df\s*2\.1/i,alt:'L.A.B. Golf DF 2.1 実物商品写真',srcs:[
      'https://labgolf.jp/cdn/shop/files/cover-df21-custom.jpg?v=1763456019&width=832'
    ]},
    {match:/cobra\s*optm\s*x|optm\s*x\s*driver/i,alt:'COBRA OPTM X Driver 実物商品写真',srcs:[
      'https://cdn.shopify.com/s/files/1/0634/7833/3657/files/SS26_Ecom_Cobra_OPTM_PDP_Driver_X_ImgGal-1-min.jpg'
    ]},
    {match:/titleist\s*gts2|gts2\s*driver/i,alt:'Titleist GTS2 Driver 実物商品写真',srcs:[
      'https://www.titleist.co.jp/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master-JP/default/dwa8a59a0d/560BC/560BC_01.png?sfrm=png&sh=650&sm=fit&sw=650'
    ]}
  ];

  function identify(img){
    const card=img.closest('[data-name],.witb-card,.gear-card,.photo-card,.gear-card-v3');
    return [img.alt||'',card?.dataset?.name||'',card?.textContent||''].join(' ');
  }

  function productFor(img){
    const text=identify(img);
    return PRODUCTS.find(p=>p.match.test(text));
  }

  function setRealImage(img,product,index=0){
    if(!(img instanceof HTMLImageElement)||!product)return;
    const i=Math.max(0,Math.min(index,product.srcs.length-1));
    img.dataset.realImageIndex=String(i);
    img.dataset.realProductPhoto='1';
    img.style.display='';
    img.removeAttribute('aria-hidden');
    img.alt=product.alt;
    const next=product.srcs[i];
    if(img.getAttribute('src')!==next)img.src=next;
  }

  function fix(img,force=false){
    if(!(img instanceof HTMLImageElement))return;
    const product=productFor(img);
    if(!product)return;
    const current=img.getAttribute('src')||'';
    const isGeneric=current.includes('gear-fallback-transparent');
    const isKnown=product.srcs.includes(current);
    if(force||isGeneric||!isKnown)setRealImage(img,product,Number(img.dataset.realImageIndex||0));
  }

  function wire(img){
    if(!(img instanceof HTMLImageElement)||img.dataset.realPhotoWired==='1')return;
    img.dataset.realPhotoWired='1';
    img.addEventListener('error',()=>{
      const product=productFor(img);
      if(!product)return;
      const current=Number(img.dataset.realImageIndex||0);
      const next=current+1;
      if(next<product.srcs.length){
        setTimeout(()=>setRealImage(img,product,next),0);
      }
    });
    fix(img,true);
  }

  document.querySelectorAll('img').forEach(wire);

  const observer=new MutationObserver(mutations=>{
    mutations.forEach(m=>{
      if(m.type==='attributes'&&m.target instanceof HTMLImageElement){
        wire(m.target);
        if((m.target.getAttribute('src')||'').includes('gear-fallback-transparent'))fix(m.target,true);
      }
      m.addedNodes.forEach(node=>{
        if(!(node instanceof Element))return;
        if(node.matches('img'))wire(node);
        node.querySelectorAll?.('img').forEach(wire);
      });
    });
  });
  observer.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['src']});
})();