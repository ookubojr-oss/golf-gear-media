(()=>{
  const OFFICIAL={
    qi4dCore:'https://www.taylormadegolf.com/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1787154929998/zoom/TC441_zoom_D.jpg?sh=900&sm=fit&sw=900',
    vokeySm8:'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master/default/dw86d87c43/833RSF/833RSF_01.png',
    ventusTr:'https://www.fujikurashaft.jp/wp-content/uploads/2026/04/ventus_tr_2604.png',
    spiderTour:'https://assets.taylormadegolf.com/i/81/866150/TM24PTR-TC961-N7550326-Spider-Tour-Black-SS-BMB-TMG07191-v1-2048x2048~W800_H600_Mcrop_Fwebp_P50-50.webp'
  };
  const exactRules=[[/scheffler-qi4d-core-switch/,OFFICIAL.qi4dCore],[/scheffler-old-wedges/,OFFICIAL.vokeySm8],[/ventus-headspeed-40/,OFFICIAL.ventusTr],[/spider-tour-2026/,OFFICIAL.spiderTour]];
  const topicImages={
    reshaft:'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&w=1200&q=82',
    shop:'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=82',
    driver:'https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1200&q=82',
    iron:'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=82',
    putter:'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=1200&q=82',
    beginner:'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=82',
    course:'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=82',
    bag:'https://images.unsplash.com/photo-1530028828-25e8270793c5?auto=format&fit=crop&w=1200&q=82',
    swing:'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=82',
    fallback:'/images/jiro-golf-hero-original.jpg'
  };
  function exactImage(path){const p=String(path||'').toLowerCase();const hit=exactRules.find(([re])=>re.test(p));return hit?hit[1]:''}
  function topicImage(text,path){
    const s=(String(text||'')+' '+String(path||'')).toLowerCase();
    if(/リシャフト|シャフト|shaft/.test(s))return topicImages.reshaft;
    if(/保証|ショップ|購入|買い方|中古販売|メルカリ|bookoff|セカスト/.test(s))return topicImages.shop;
    if(/ドライバー|driver/.test(s))return topicImages.driver;
    if(/アイアン|iron/.test(s))return topicImages.iron;
    if(/パター|putter/.test(s))return topicImages.putter;
    if(/キャディ|バッグ|bag/.test(s))return topicImages.bag;
    if(/コース|ラウンド|大会|カップ|tour|course/.test(s))return topicImages.course;
    if(/スイング|練習|アプローチ|バンカー|swing/.test(s))return topicImages.swing;
    if(/初心者|ウェア|服装|beginner/.test(s))return topicImages.beginner;
    return topicImages.fallback;
  }
  document.querySelectorAll('.archive-card').forEach((card,index)=>{
    const link=card.querySelector('a[href]'); const thumb=card.querySelector('.archive-thumb'); if(!thumb)return;
    const path=link?.getAttribute('href')||''; const title=card.querySelector('h2')?.textContent||'';
    let src=exactImage(path)||topicImage(title,path); if(!src)return;
    if(/^https?:/.test(src))src+=(src.includes('?')?'&':'?')+'jirothumb='+(index+1);
    thumb.style.backgroundImage=`linear-gradient(180deg,rgba(4,10,5,.06),rgba(4,10,5,.42)),url('${src}')`;
    thumb.dataset.articleImageFixed='1'; thumb.dataset.imageSource=exactImage(path)?'manufacturer-official':'topic-related';
  });
})();