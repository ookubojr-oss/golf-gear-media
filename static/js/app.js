(()=>{
const sheet=document.querySelector('[data-sheet]');
const backdrop=document.querySelector('[data-sheet-backdrop]');
if(sheet&&backdrop){
  const nameEl=sheet.querySelector('[data-sheet-name]'),categoryEl=sheet.querySelector('[data-sheet-category]'),specEl=sheet.querySelector('[data-sheet-spec]'),imageEl=sheet.querySelector('[data-sheet-image]'),priceEl=sheet.querySelector('[data-sheet-price]'),shopCountEl=sheet.querySelector('[data-shop-count]'),shopList=sheet.querySelector('[data-shop-list]');
  let activeData=null;
  const brandClass=(name='')=>{const n=name.toLowerCase();if(n.includes('amazon'))return'amazon';if(n.includes('楽天'))return'rakuten';if(n.includes('yahoo'))return'yahoo';if(n.includes('ゴルフパートナー'))return'golfpartner';if(n.includes('公式')||n.includes('taylormade'))return'official';return''};
  const brandMark=(name='')=>{const n=name.toLowerCase();if(n.includes('amazon'))return'a';if(n.includes('楽天'))return'楽天';if(n.includes('yahoo'))return'Y!';if(n.includes('ゴルフパートナー'))return'GP';if(n.includes('公式')||n.includes('taylormade'))return'OFF';return name.slice(0,2).toUpperCase()};
  const parsePrice=(v)=>{if(v===null||v===undefined)return null;const s=String(v);const m=s.replace(/,/g,'').match(/\d+/);return m?Number(m[0]):null};
  const render=(condition='new')=>{
    if(!activeData)return;
    document.querySelectorAll('.condition-tab').forEach(btn=>btn.classList.toggle('active',btn.dataset.condition===condition));
    let shops=(activeData.shops||[]).filter(s=>!s.condition||s.condition===condition||s.condition==='both');
    if(!shops.length&&activeData.shopUrl){shops=[{name:activeData.shopName||'販売ページ',url:activeData.shopUrl,price:condition==='used'?activeData.usedPrice:activeData.newPrice,note:condition==='used'?'中古':'新品'}]}
    const normalized=shops.map((s,i)=>({...s,_i:i,_price:parsePrice(s.price)}));
    const priced=normalized.filter(s=>s._price!==null).sort((a,b)=>a._price-b._price);
    const cheapest=priced.length?priced[0]._price:null;
    const sorted=[...normalized].sort((a,b)=>{if(a._price===null&&b._price===null)return a._i-b._i;if(a._price===null)return 1;if(b._price===null)return-1;return a._price-b._price});
    priceEl.textContent=cheapest!==null?`¥${cheapest.toLocaleString('ja-JP')}`:'販売先で確認';
    shopCountEl.textContent=`${shops.length}ショップを比較`;
    shopList.innerHTML='';
    if(!sorted.length){shopList.innerHTML='<div class="shop-empty">現在確認できる販売先がありません。</div>';return}
    sorted.forEach(s=>{
      const row=document.createElement('div');const isCheapest=cheapest!==null&&s._price===cheapest;row.className='shop-row'+(isCheapest?' is-cheapest':'');
      const logo=document.createElement('div');logo.className='shop-logo '+brandClass(s.name);logo.textContent=brandMark(s.name);
      const info=document.createElement('div');info.className='shop-info';const name=document.createElement('div');name.className='shop-name';name.textContent=s.name||'販売先';if(isCheapest){const badge=document.createElement('span');badge.className='cheapest-badge';badge.textContent='最安値';name.appendChild(badge)}
      const price=document.createElement('strong');price.className='shop-price';price.textContent=s._price!==null?`¥${s._price.toLocaleString('ja-JP')}`:(s.price||'価格を確認');
      const sub=document.createElement('small');sub.className='shop-sub';sub.textContent=s.note||'価格・在庫は販売先で確認';info.append(name,price,sub);
      const buy=document.createElement('a');buy.className='shop-buy';buy.href=s.url||'#';buy.target='_blank';buy.rel='noopener sponsored';buy.textContent='購入';if(!s.url){buy.removeAttribute('href');buy.textContent='確認中'}
      row.append(logo,info,buy);shopList.appendChild(row)
    })
  };
  const open=(el)=>{
    let shops=[];if(el.dataset.shops){try{shops=JSON.parse(el.dataset.shops)}catch(e){shops=[]}}
    activeData={name:el.dataset.name||'',category:el.dataset.category||'',spec:el.dataset.spec||'',image:el.dataset.image||'',newPrice:el.dataset.newPrice||'',usedPrice:el.dataset.usedPrice||'',shopName:el.dataset.shopName||'',shopUrl:el.dataset.shopUrl||'',shops};
    nameEl.textContent=activeData.name;categoryEl.textContent=activeData.category||'PRICE CHECK';specEl.textContent=activeData.spec;imageEl.src=activeData.image;imageEl.alt=activeData.name;render('new');sheet.classList.add('is-open');backdrop.classList.add('is-open');sheet.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'
  };
  const close=()=>{sheet.classList.remove('is-open');backdrop.classList.remove('is-open');sheet.setAttribute('aria-hidden','true');document.body.style.overflow=''};
  document.querySelectorAll('[data-sheet-open]').forEach(el=>el.addEventListener('click',()=>open(el)));document.querySelectorAll('[data-sheet-close]').forEach(el=>el.addEventListener('click',close));document.querySelectorAll('.condition-tab').forEach(btn=>btn.addEventListener('click',()=>render(btn.dataset.condition)));backdrop.addEventListener('click',close);document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})
}
const holder=document.getElementById('dailyTourCourses');if(holder){const courses=[{name:'東京よみうりカントリークラブ',area:'東京',tag:'丘陵・名門',img:'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1000&q=84'},{name:'太平洋クラブ御殿場コース',area:'静岡',tag:'富士山・ロング',img:'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1000&q=84'},{name:'宍戸ヒルズカントリークラブ',area:'茨城',tag:'林間・戦略性',img:'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1000&q=84'},{name:'フェニックスカントリークラブ',area:'宮崎',tag:'松林・風',img:'https://images.unsplash.com/photo-1530028828-25e8270793c5?auto=format&fit=crop&w=1000&q=84'},{name:'ABCゴルフ倶楽部',area:'兵庫',tag:'池・バンカー',img:'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1000&q=84'},{name:'三好カントリー倶楽部 西コース',area:'愛知',tag:'距離・タフ',img:'https://images.unsplash.com/photo-1591491719565-9efed5e5fc38?auto=format&fit=crop&w=1000&q=84'},{name:'札幌ゴルフ倶楽部 輪厚コース',area:'北海道',tag:'雄大・歴史',img:'https://images.unsplash.com/photo-1600783486034-7a5b3b2e04c4?auto=format&fit=crop&w=1000&q=84'},{name:'富士桜カントリー倶楽部',area:'山梨',tag:'富士山麓・タフ',img:'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1000&q=84'}];const d=new Date(Date.now()+9*3600000),key=Number(`${d.getUTCFullYear()}${String(d.getUTCMonth()+1).padStart(2,'0')}${String(d.getUTCDate()).padStart(2,'0')}`),a=key%courses.length,b0=(key*7+3)%courses.length,b=b0===a?(b0+1)%courses.length:b0;holder.innerHTML=[courses[a],courses[b]].map((c,i)=>{const href='/posts/course-guide/?name='+encodeURIComponent(c.name);return `<a href="${href}" class="featured-course-card daily-tour-card" style="background-image:url('${c.img}')"><div class="featured-course-overlay"></div><span class="featured-course-no">0${i+1}</span><div class="featured-course-copy"><small>${c.area} / ${c.tag}</small><strong>${c.name}</strong><em>コースを見る →</em></div></a>`}).join('')}})();