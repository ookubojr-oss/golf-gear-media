(()=>{
  const leadGrid=document.querySelector('.lead-grid');
  const first=document.querySelector('.lead-grid .lead-story');
  if(!leadGrid||!first||first.closest('.hero-carousel'))return;

  leadGrid.classList.add('has-hero-carousel');

  const style=document.createElement('style');
  style.textContent=`
  .lead-grid.has-hero-carousel{display:block!important;grid-template-columns:1fr!important;min-width:0!important}.lead-grid.has-hero-carousel>.flash-panel{display:none!important}.hero-carousel{position:relative;display:block;width:100%;max-width:100%;overflow:hidden;border-radius:24px;min-width:0}.hero-carousel-track{display:flex;width:100%;transition:transform .55s cubic-bezier(.22,.61,.36,1);will-change:transform}.hero-carousel .lead-story{position:relative;flex:0 0 100%;width:100%;min-width:0;margin:0!important;min-height:520px!important;border-radius:24px!important;background-position:center;background-size:cover;overflow:hidden}.hero-carousel .lead-overlay{position:absolute!important;inset:0!important;background:linear-gradient(90deg,rgba(4,12,7,.78) 0%,rgba(4,12,7,.48) 55%,rgba(4,12,7,.2) 100%);pointer-events:none}.hero-carousel .lead-copy{position:absolute!important;z-index:3;left:48px;right:48px;bottom:54px;max-width:760px;margin:0!important;padding:0!important}.hero-carousel .lead-copy small{display:block;color:#d8ef75;font-size:12px;line-height:1.3;font-weight:800;letter-spacing:.12em;margin:0 0 14px}.hero-carousel .lead-copy h2{font-size:clamp(38px,5.2vw,68px)!important;line-height:1.03!important;letter-spacing:-.045em!important;max-width:760px!important;margin:0 0 18px!important;color:#fff!important;text-wrap:balance}.hero-carousel .lead-copy p{font-size:clamp(14px,1.55vw,20px)!important;line-height:1.65!important;max-width:700px!important;margin:0 0 24px!important;color:rgba(255,255,255,.88)!important}.hero-carousel .lead-copy a{position:relative;z-index:4;display:inline-flex!important;align-items:center;min-height:52px;padding:0 24px!important;border-radius:999px!important;background:#f3efe4!important;color:#152318!important;font-size:14px!important;font-weight:900!important;text-decoration:none!important;white-space:nowrap}.hero-carousel .lead-badge{position:absolute!important;z-index:4;left:48px;top:36px;margin:0!important;background:#d8ef75!important;color:#18301d!important;border-radius:999px!important;padding:9px 14px!important;font-size:10px!important;line-height:1!important;font-weight:900!important;letter-spacing:.08em!important}.hero-carousel-dots{position:absolute;z-index:5;left:48px;bottom:24px;display:flex;gap:7px}.hero-carousel-dot{width:7px;height:7px;border:0;border-radius:99px;background:rgba(255,255,255,.48);padding:0;transition:width .25s ease,background .25s ease}.hero-carousel-dot.is-active{width:24px;background:#d8ef75}.hero-carousel-hint{position:absolute;right:28px;bottom:24px;z-index:5;color:#eef5e9;font:800 9px/1 system-ui;letter-spacing:.12em;text-transform:uppercase;opacity:.85}.hero-slide-link{position:absolute;inset:0;z-index:2}.hero-carousel .hero-winner{background-position:center 24%}.hero-carousel .hero-gear{background-position:center 42%}.hero-carousel .hero-pick{background-position:center 38%}@media(max-width:760px){.hero-carousel{border-radius:18px}.hero-carousel .lead-story{min-height:440px!important;border-radius:18px!important}.hero-carousel .lead-overlay{background:linear-gradient(180deg,rgba(4,12,7,.12) 0%,rgba(4,12,7,.38) 42%,rgba(4,12,7,.9) 100%)}.hero-carousel .lead-badge{left:18px;top:18px;padding:8px 11px!important;font-size:8px!important}.hero-carousel .lead-copy{left:18px;right:18px;bottom:48px;max-width:none}.hero-carousel .lead-copy small{font-size:9px;margin-bottom:9px}.hero-carousel .lead-copy h2{font-size:clamp(31px,10vw,44px)!important;line-height:1.06!important;margin-bottom:12px!important;max-width:100%!important}.hero-carousel .lead-copy p{font-size:12px!important;line-height:1.6!important;margin-bottom:18px!important;max-width:96%!important}.hero-carousel .lead-copy a{min-height:46px;padding:0 18px!important;font-size:12px!important}.hero-carousel-dots{left:18px;bottom:17px}.hero-carousel-hint{right:16px;bottom:16px}.hero-carousel .hero-winner,.hero-carousel .hero-gear,.hero-carousel .hero-pick{background-position:center center}}@media(max-width:380px){.hero-carousel .lead-story{min-height:410px!important}.hero-carousel .lead-copy h2{font-size:30px!important}.hero-carousel .lead-copy p{font-size:11px!important}}
  `;
  document.head.appendChild(style);

  const carousel=document.createElement('div');carousel.className='hero-carousel';
  const track=document.createElement('div');track.className='hero-carousel-track';
  first.parentNode.insertBefore(carousel,first);carousel.appendChild(track);

  function makeSlide({className,badge,kicker,title,text,url,image,label}){
    const article=document.createElement('article');
    article.className=`lead-story ${className||''}`.trim();
    article.style.backgroundImage=`linear-gradient(180deg,rgba(5,9,4,.08),rgba(5,9,4,.84)),url('${image}')`;
    article.innerHTML=`<a class="hero-slide-link" href="${url}" aria-label="${label}"></a><div class="lead-overlay"></div><span class="lead-badge">${badge}</span><div class="lead-copy"><small>${kicker}</small><h2>${title}</h2><p>${text}</p><a href="${url}">${label}　›</a></div>`;
    return article;
  }

  const slides=[];

  slides.push(makeSlide({
    className:'hero-winner',badge:'THIS WEEK WINNER',kicker:'SCOTTIE SCHEFFLER / FEDEx ST. JUDE',
    title:'8打差V。勝った14本を全部見る。',text:'Qi4D Core投入。シェフラーの優勝クラブセッティングを実物写真つきで掲載。',
    url:'/posts/2026-08-23-scottie-scheffler-fedex-st-jude-witb/',image:'https://cdn.mos.cms.futurecdn.net/YjPf8xAd8AYQp2XeB8DjMX.jpg',label:'優勝セッティングを見る'
  }));

  first.classList.add('hero-beginner');
  first.querySelector('.lead-badge')?.replaceChildren(document.createTextNode('BEGINNER GUIDE'));
  const firstSmall=first.querySelector('.lead-copy small');if(firstSmall)firstSmall.textContent='START GOLF / BEGINNER';
  const firstTitle=first.querySelector('.lead-copy h2');if(firstTitle)firstTitle.textContent='はじめてのゴルフを、迷わず。';
  const firstText=first.querySelector('.lead-copy p');if(firstText)firstText.textContent='クラブ選び、練習場、コースデビューまで初心者向けの記事をまとめてチェック。';
  const firstLink=first.querySelector('.lead-copy a');if(firstLink){firstLink.href='/beginner/';firstLink.textContent='初心者ガイドを見る　›'}
  let overlayLink=first.querySelector('.hero-slide-link');if(!overlayLink){overlayLink=document.createElement('a');overlayLink.className='hero-slide-link';first.prepend(overlayLink)}overlayLink.href='/beginner/';overlayLink.setAttribute('aria-label','初心者ガイドを見る');
  slides.push(first);

  slides.push(makeSlide({
    className:'hero-latest',badge:'LATEST GEAR',kicker:'NEW CLUBS / BUYING GUIDE',
    title:'新作ギアと、クラブ選びの最新情報。',text:'新モデル、トレンド、選び方をまとめて。買う前に知りたい情報を短くチェック。',
    url:'/categories/latest-gear/',image:'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1784693259290/zoom/TC441_zoom_D.jpg?sh=1200&sm=fit&sw=1200',label:'最新情報を見る'
  }));

  slides.push(makeSlide({
    className:'hero-gear',badge:'GEAR PICKS',kicker:'JIRO GOLF / GEAR SELECTION',
    title:'いま選びたい、おすすめクラブ・ギア。',text:'ドライバーからパターまで、実物商品写真と価格・特徴を見やすく比較。',
    url:'/recommended-gear/',image:'https://assets.taylormadegolf.com/i/30/979061/R7-Quad-Mini-Studio-Hero~W1000_H562_Mcrop_P50-50.png',label:'おすすめギアを見る'
  }));

  slides.push(makeSlide({
    className:'hero-pick',badge:"JIRO'S PICK",kicker:'EDITOR SELECT / FEATURE',
    title:'気になった一本、話題を深掘り。',text:'新製品だけではなく、選び方や使い方までJIRO GOLF目線でピックアップ。',
    url:'/categories/jiros-pick/',image:'/images/jiro-golf-hero-original.jpg',label:"JIRO'S PICKを見る"
  }));

  slides.forEach(s=>track.appendChild(s));

  const dots=document.createElement('div');dots.className='hero-carousel-dots';
  const hint=document.createElement('div');hint.className='hero-carousel-hint';hint.textContent='SWIPE →';
  carousel.append(dots,hint);

  let index=0,timer=null,startX=0,startY=0,dragging=false;
  slides.forEach((_,i)=>{const b=document.createElement('button');b.className='hero-carousel-dot'+(i===0?' is-active':'');b.type='button';b.setAttribute('aria-label',`${i+1}枚目を表示`);b.addEventListener('click',()=>{go(i);restart()});dots.appendChild(b)});
  const dotEls=[...dots.children];
  function go(i){index=(i+slides.length)%slides.length;track.style.transform=`translateX(-${index*100}%)`;dotEls.forEach((d,n)=>d.classList.toggle('is-active',n===index));hint.textContent=index===slides.length-1?'← SWIPE':'SWIPE →'}
  function next(){go(index+1)}
  function restart(){clearInterval(timer);timer=setInterval(next,6500)}
  carousel.addEventListener('mouseenter',()=>clearInterval(timer));carousel.addEventListener('mouseleave',restart);
  carousel.addEventListener('touchstart',e=>{const t=e.touches[0];startX=t.clientX;startY=t.clientY;dragging=true;clearInterval(timer)},{passive:true});
  carousel.addEventListener('touchend',e=>{if(!dragging)return;dragging=false;const t=e.changedTouches[0],dx=t.clientX-startX,dy=t.clientY-startY;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))go(index+(dx<0?1:-1));restart()},{passive:true});
  if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches){track.style.transition='none'}else{restart()}
})();