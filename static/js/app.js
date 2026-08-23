(()=>{
const sheet=document.querySelector('[data-sheet]');
const backdrop=document.querySelector('[data-sheet-backdrop]');
if(sheet&&backdrop){
  const nameEl=sheet.querySelector('[data-sheet-name]');
  const categoryEl=sheet.querySelector('[data-sheet-category]');
  const specEl=sheet.querySelector('[data-sheet-spec]');
  const imageEl=sheet.querySelector('[data-sheet-image]');
  const priceEl=sheet.querySelector('[data-sheet-price]');
  const priceLabel=sheet.querySelector('[data-price-label]');
  const shopList=sheet.querySelector('[data-shop-list]');
  let activeData=null;
  const render=(condition='new')=>{
    if(!activeData)return;
    document.querySelectorAll('.condition-tab').forEach(btn=>btn.classList.toggle('active',btn.dataset.condition===condition));
    const isUsed=condition==='used';
    const price=isUsed?activeData.usedPrice:activeData.newPrice;
    priceLabel.textContent=isUsed?'中古価格':'新品価格';
    priceEl.textContent=price||'販売ページで確認';
    shopList.innerHTML='';
    if(activeData.shopUrl){
      const a=document.createElement('a');
      a.href=activeData.shopUrl;
      a.target='_blank';
      a.rel='noopener sponsored';
      a.innerHTML=`<b>${activeData.shopName||'販売ページ'}</b><span>商品を見る</span>`;
      shopList.appendChild(a);
    }else{
      const d=document.createElement('div');
      d.innerHTML='<b>販売ページ</b><span>確認中</span>';
      shopList.appendChild(d);
    }
  };
  const open=(el)=>{
    activeData={name:el.dataset.name||'',category:el.dataset.category||'',spec:el.dataset.spec||'',image:el.dataset.image||'',newPrice:el.dataset.newPrice||'',usedPrice:el.dataset.usedPrice||'',shopName:el.dataset.shopName||'',shopUrl:el.dataset.shopUrl||''};
    nameEl.textContent=activeData.name;
    categoryEl.textContent=activeData.category||'PRICE CHECK';
    specEl.textContent=activeData.spec;
    imageEl.src=activeData.image;
    imageEl.alt=activeData.name;
    render('new');
    sheet.classList.add('is-open');
    backdrop.classList.add('is-open');
    sheet.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  };
  const close=()=>{sheet.classList.remove('is-open');backdrop.classList.remove('is-open');sheet.setAttribute('aria-hidden','true');document.body.style.overflow=''};
  document.querySelectorAll('[data-sheet-open]').forEach(el=>el.addEventListener('click',()=>open(el)));
  document.querySelectorAll('[data-sheet-close]').forEach(el=>el.addEventListener('click',close));
  document.querySelectorAll('.condition-tab').forEach(btn=>btn.addEventListener('click',()=>render(btn.dataset.condition)));
  backdrop.addEventListener('click',close);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
}
const holder=document.getElementById('dailyTourCourses');
if(holder){
  const courses=[{name:'東京よみうりカントリークラブ',area:'東京',img:'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1000&q=82'},{name:'太平洋クラブ御殿場コース',area:'静岡',img:'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1000&q=82'},{name:'宍戸ヒルズカントリークラブ',area:'茨城',img:'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1000&q=82'},{name:'フェニックスカントリークラブ',area:'宮崎',img:'https://images.unsplash.com/photo-1530028828-25e8270793c5?auto=format&fit=crop&w=1000&q=82'},{name:'ABCゴルフ倶楽部',area:'兵庫',img:'https://images.unsplash.com/photo-1584837140804-599306fb37f8?auto=format&fit=crop&w=1000&q=82'},{name:'三好カントリー倶楽部 西コース',area:'愛知',img:'https://images.unsplash.com/photo-1591491719565-9efed5e5fc38?auto=format&fit=crop&w=1000&q=82'},{name:'札幌ゴルフ倶楽部 輪厚コース',area:'北海道',img:'https://images.unsplash.com/photo-1600783486034-7a5b3b2e04c4?auto=format&fit=crop&w=1000&q=82'},{name:'富士桜カントリー倶楽部',area:'山梨',img:'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1000&q=82'}];
  const d=new Date(Date.now()+9*3600000),key=Number(`${d.getUTCFullYear()}${String(d.getUTCMonth()+1).padStart(2,'0')}${String(d.getUTCDate()).padStart(2,'0')}`),a=key%courses.length,b0=(key*7+3)%courses.length,b=b0===a?(b0+1)%courses.length:b0;
  holder.innerHTML=[courses[a],courses[b]].map((c,i)=>{const href='/posts/course-guide/?name='+encodeURIComponent(c.name);return `<a href="${href}" class="featured-course-card daily-tour-card" style="background-image:url('${c.img}')"><div class="featured-course-overlay"></div><span class="featured-course-no">0${i+1}</span><div class="featured-course-copy"><small>${c.area} / JGTO</small><strong>${c.name}</strong><em>コースを見る →</em></div></a>`}).join('');
}
})();