(()=>{const sheet=document.querySelector('[data-sheet]');const backdrop=document.querySelector('[data-sheet-backdrop]');if(sheet&&backdrop){const open=()=>{sheet.classList.add('is-open');backdrop.classList.add('is-open');sheet.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'};const close=()=>{sheet.classList.remove('is-open');backdrop.classList.remove('is-open');sheet.setAttribute('aria-hidden','true');document.body.style.overflow=''};document.querySelectorAll('[data-sheet-open]').forEach(el=>el.addEventListener('click',open));document.querySelectorAll('[data-sheet-close]').forEach(el=>el.addEventListener('click',close));backdrop.addEventListener('click',close);let startY=0;sheet.addEventListener('touchstart',e=>{startY=e.touches[0].clientY},{passive:true});sheet.addEventListener('touchend',e=>{if(e.changedTouches[0].clientY-startY>80)close()},{passive:true});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}

const shopMap={
  '楽天市場':q=>'https://search.rakuten.co.jp/search/mall/'+encodeURIComponent(q)+'/',
  'Yahoo!ショッピング':q=>'https://shopping.yahoo.co.jp/search?p='+encodeURIComponent(q),
  'Amazon':q=>'https://www.amazon.co.jp/s?k='+encodeURIComponent(q),
  'GDO':q=>'https://shop.golfdigest.co.jp/newshop/search/search.asp?keyword='+encodeURIComponent(q),
  'GDO 中古':q=>'https://shop.golfdigest.co.jp/used/gear/search.asp?keyword='+encodeURIComponent(q),
  'ゴルフパートナー':q=>'https://www.golfpartner.jp/shop/goods/search.aspx?keyword='+encodeURIComponent(q),
  'ゴルフドゥ':q=>'https://www.golfdo.com/search?keyword='+encodeURIComponent(q),
  'メルカリ':q=>'https://jp.mercari.com/search?keyword='+encodeURIComponent(q)
};

document.querySelectorAll('.shop-list div').forEach(row=>{
  row.setAttribute('role','link');
  row.setAttribute('tabindex','0');
  row.style.cursor='pointer';
  const go=()=>{
    const shop=row.querySelector('b')?.textContent.trim();
    const product=document.getElementById('sheetName')?.textContent.trim();
    if(!shop||!product||!shopMap[shop])return;
    window.open(shopMap[shop](product),'_blank','noopener');
  };
  row.addEventListener('click',go);
  row.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}});
});
})();