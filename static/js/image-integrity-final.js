(()=>{
  const selector='.concept-gear-card img,.desktop-gear-card img,.witb-shop-card img,.used-photo img,.gear-photo,.used-rank-photo img,.used-category-card img,.club-bag-scene img';
  const replaceFailed=(img)=>{
    if(!img||img.dataset.integrityHandled==='1')return;
    img.dataset.integrityHandled='1';
    const box=document.createElement('div');
    box.className='verified-image-pending';
    box.setAttribute('role','img');
    box.setAttribute('aria-label',(img.alt||'商品')+' 公式画像確認中');
    box.innerHTML='<b>PHOTO CHECK</b><small>モデル一致の実物画像を確認中</small>';
    img.hidden=true;
    img.insertAdjacentElement('afterend',box);
  };
  const bind=()=>document.querySelectorAll(selector).forEach(img=>{
    if(img.dataset.integrityBound==='1')return;
    img.dataset.integrityBound='1';
    img.addEventListener('error',()=>replaceFailed(img));
    if(img.complete&&img.naturalWidth===0)replaceFailed(img);
    if(img.dataset.fallbackApplied==='1'||/gear-fallback-transparent\.png/.test(img.currentSrc||img.src))replaceFailed(img);
  });
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});else bind();
  const obs=new MutationObserver(()=>bind());
  obs.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['src']});
})();
