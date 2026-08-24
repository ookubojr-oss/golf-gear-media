(()=>{
  const leadGrid=document.querySelector('.lead-grid');
  const first=document.querySelector('.lead-grid .lead-story');
  if(!leadGrid||!first||first.closest('.hero-carousel'))return;

  const style=document.createElement('style');
  style.textContent=`
  .hero-carousel{position:relative;overflow:hidden;border-radius:inherit;min-width:0}.hero-carousel-track{display:flex;width:100%;transition:transform .55s cubic-bezier(.22,.61,.36,1);will-change:transform}.hero-carousel .lead-story{flex:0 0 100%;width:100%;margin:0;min-height:100%;border-radius:inherit}.hero-carousel-dots{position:absolute;z-index:5;left:20px;bottom:18px;display:flex;gap:7px}.hero-carousel-dot{width:7px;height:7px;border:0;border-radius:99px;background:rgba(255,255,255,.48);padding:0;transition:width .25s ease,background .25s ease}.hero-carousel-dot.is-active{width:24px;background:#d8ef75}.hero-carousel-hint{position:absolute;right:18px;bottom:15px;z-index:5;color:#eef5e9;font:800 9px/1 system-ui;letter-spacing:.12em;text-transform:uppercase;opacity:.85}.hero-slide-link{position:absolute;inset:0;z-index:2}.hero-carousel .lead-copy,.hero-carousel .lead-badge{position:relative;z-index:3}.hero-carousel .lead-copy a{position:relative;z-index:4}.hero-carousel .lead-story.hero-scheffler{background-position:center 24%}.hero-carousel .hero-scheffler .lead-badge{background:#d8ef75;color:#18301d}.hero-carousel .hero-scheffler .lead-copy small{color:#d8ef75}@media(max-width:760px){.hero-carousel-dots{left:16px;bottom:14px}.hero-carousel-hint{right:14px;bottom:12px}.hero-carousel .lead-story.hero-scheffler{background-position:center center}}
  `;
  document.head.appendChild(style);

  const carousel=document.createElement('div');
  carousel.className='hero-carousel';
  const track=document.createElement('div');
  track.className='hero-carousel-track';
  first.parentNode.insertBefore(carousel,first);
  carousel.appendChild(track);
  track.appendChild(first);

  const second=document.createElement('article');
  second.className='lead-story hero-scheffler';
  second.style.backgroundImage="linear-gradient(180deg,rgba(5,9,4,.08),rgba(5,9,4,.84)),url('https://cdn.mos.cms.futurecdn.net/YjPf8xAd8AYQp2XeB8DjMX.jpg')";
  second.innerHTML=`<a class="hero-slide-link" href="/posts/2026-08-23-scottie-scheffler-fedex-st-jude-witb/" aria-label="スコッティ・シェフラーの優勝クラブセッティングを見る"></a><div class="lead-overlay"></div><span class="lead-badge">PGA WINNER WITB</span><div class="lead-copy"><small>SCOTTIE SCHEFFLER / FEDEx ST. JUDE</small><h2>8打差V。勝った14本を全部見る。</h2><p>Qi4D Core投入。シェフラーの優勝クラブセッティングを実物写真つきで掲載。</p><a href="/posts/2026-08-23-scottie-scheffler-fedex-st-jude-witb/">優勝セッティングを見る　›</a></div>`;
  track.appendChild(second);

  const dots=document.createElement('div');dots.className='hero-carousel-dots';
  const hint=document.createElement('div');hint.className='hero-carousel-hint';hint.textContent='SWIPE →';
  carousel.append(dots,hint);
  const slides=[first,second];
  let index=0,timer=null,startX=0,startY=0,dragging=false;
  slides.forEach((_,i)=>{const b=document.createElement('button');b.className='hero-carousel-dot'+(i===0?' is-active':'');b.type='button';b.setAttribute('aria-label',`${i+1}枚目を表示`);b.addEventListener('click',()=>{go(i);restart()});dots.appendChild(b)});
  const dotEls=[...dots.children];
  function go(i){index=(i+slides.length)%slides.length;track.style.transform=`translateX(-${index*100}%)`;dotEls.forEach((d,n)=>d.classList.toggle('is-active',n===index));hint.textContent=index===0?'SWIPE →':'← SWIPE'}
  function next(){go(index+1)}
  function restart(){clearInterval(timer);timer=setInterval(next,6500)}
  carousel.addEventListener('mouseenter',()=>clearInterval(timer));carousel.addEventListener('mouseleave',restart);
  carousel.addEventListener('touchstart',e=>{const t=e.touches[0];startX=t.clientX;startY=t.clientY;dragging=true;clearInterval(timer)},{passive:true});
  carousel.addEventListener('touchend',e=>{if(!dragging)return;dragging=false;const t=e.changedTouches[0],dx=t.clientX-startX,dy=t.clientY-startY;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)){go(index+(dx<0?1:-1))}restart()},{passive:true});
  restart();
})();
