(()=>{
  const mobile=window.matchMedia('(max-width: 768px)');
  if(!mobile.matches)return;
  const home=document.querySelector('.mobile-home-existing');
  if(!home)return;
  const fallbackImage='/images/jiro-golf-hero-original.jpg';

  const hero=home.querySelector('.concept-hero');
  if(hero){
    const h1=hero.querySelector('h1'); const lead=hero.querySelector('strong'); const sub=hero.querySelector('small');
    if(h1)h1.innerHTML='the innovation<br>of golf equipment';
    if(lead)lead.innerHTML='最新ギアの情報を、もっと早く、<br>もっと深く。';
    if(sub)sub.textContent='Discover, explore, and shop the latest golf gear.';
  }
  const gearTitle=home.querySelector('.concept-gear .concept-section-head h2'); if(gearTitle)gearTitle.textContent='LATEST GEAR';
  const picksTitle=home.querySelector('.concept-picks .concept-section-head h2'); if(picksTitle)picksTitle.textContent="JIRO'S PICK";
  const coursesTitle=home.querySelector('.concept-courses .concept-section-head h2'); if(coursesTitle)coursesTitle.textContent='注目ゴルフコース';

  const menuBtn=home.querySelector('.concept-menu'); const nav=home.querySelector('.concept-home-nav');
  if(nav){
    if(!nav.querySelector('.mobile-nav-close')){
      const label=document.createElement('div'); label.className='mobile-nav-label'; label.textContent='JIRO GOLF';
      const sub=document.createElement('div'); sub.className='mobile-nav-sub'; sub.textContent='ゴルフ最新速報部';
      const close=document.createElement('button'); close.className='mobile-nav-close'; close.type='button'; close.setAttribute('aria-label','メニューを閉じる'); close.textContent='×';
      nav.append(label,sub,close); close.addEventListener('click',()=>toggleMenu(false));
    }
    const links=[...nav.querySelectorAll('a')]; const labels=['NEWS / TOPICS','GEAR REVIEWS','TOURNAMENTS','COURSES','中古クラブ2026'];
    links.forEach((a,i)=>{if(labels[i])a.textContent=labels[i]}); if(links[3])links[3].href='/posts/course-guide/';
  }
  function toggleMenu(open){if(!nav)return;nav.classList.toggle('is-open',open);document.body.style.overflow=open?'hidden':'';if(menuBtn)menuBtn.setAttribute('aria-expanded',open?'true':'false')}
  if(menuBtn)menuBtn.addEventListener('click',()=>toggleMenu(!nav?.classList.contains('is-open'))); nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggleMenu(false)));

  const news=home.querySelector('.concept-news');
  if(news && !news.querySelector('.mobile-news-list')){
    const desktopNews=[...document.querySelectorAll('.desktop-news-card')].slice(1,4); const list=document.createElement('div'); list.className='mobile-news-list';
    desktopNews.forEach(card=>{
      const a=document.createElement('a'); a.href=card.getAttribute('href')||'#';
      const bg=card.style.backgroundImage||''; const urls=[...bg.matchAll(/url\(["']?([^"')]+)["']?\)/g)];
      const img=(urls.length?urls[urls.length-1][1]:'')||fallbackImage;
      const title=card.querySelector('strong')?.textContent?.trim()||'最新ゴルフニュース'; const date=card.querySelector('small')?.textContent?.trim()||'NEWS';
      a.innerHTML=`<span class="thumb" role="img" aria-label="${title.replace(/"/g,'')}"></span><span><small>${date}</small><strong>${title}</strong></span>`;
      a.querySelector('.thumb').style.backgroundImage=`url("${img}")`; list.appendChild(a);
    });
    news.querySelector('.concept-wrap')?.appendChild(list);
  }

  if(news && !document.querySelector('.mobile-main-categories')){
    const section=document.createElement('section'); section.className='mobile-main-categories mobile-only-injected';
    section.innerHTML=`<h2>MAIN CATEGORIES</h2><div class="mobile-category-grid"><a href="/beginner/"><b>♙</b><strong>初心者ガイド</strong><p>ゴルフを始めるあなたへ。クラブ選びや練習場まで分かりやすく解説。</p><span>→</span></a><a href="/categories/witb/"><b>♜</b><strong>優勝クラブ・WITB</strong><p>PGA・国内・女子ツアーの最新優勝クラブセッティング。</p><span>→</span></a><a href="/categories/latest-gear/"><b>♙</b><strong>最新情報・クラブ選び</strong><p>新製品情報やクラブ選びのコツ、比較記事をまとめてチェック。</p><span>→</span></a><a href="/used-clubs-2026/"><b>▤</b><strong>中古クラブ2026</strong><p>中古クラブ相場やモデル別価格、お得な情報を随時更新。</p><span>→</span></a><a class="wide" href="/categories/jiros-pick/"><b>☆</b><strong>JIRO'S PICK</strong><p>編集部JIROが選ぶ、今注目のギアや話題をピックアップ。</p><span>→</span></a></div>`;
    news.after(section);
  }

  home.querySelectorAll('.concept-pick-card').forEach(card=>{
    if(card.classList.contains('has-mobile-image'))return; const style=card.getAttribute('style')||''; const urls=[...style.matchAll(/url\(["']?([^"')]+)["']?\)/g)]; const src=(urls.length?urls[urls.length-1][1]:'')||fallbackImage;
    const img=document.createElement('img'); img.className='mobile-pick-image'; img.src=src; img.alt=card.querySelector('b')?.textContent?.trim()||'JIRO GOLF'; img.loading='lazy'; img.onerror=()=>{img.onerror=null;img.src=fallbackImage}; card.prepend(img); card.classList.add('has-mobile-image'); card.removeAttribute('style');
  });

  home.querySelectorAll('.concept-course-grid a').forEach(card=>{
    if(card.classList.contains('has-mobile-image'))return; const style=card.getAttribute('style')||''; const urls=[...style.matchAll(/url\(["']?([^"')]+)["']?\)/g)]; const src=(urls.length?urls[urls.length-1][1]:'')||fallbackImage;
    const img=document.createElement('img'); img.className='mobile-course-image'; img.src=src; img.alt=card.querySelector('b')?.textContent?.trim()||'ゴルフコース'; img.loading='lazy'; img.onerror=()=>{img.onerror=null;img.src=fallbackImage}; card.prepend(img); card.classList.add('has-mobile-image'); card.removeAttribute('style');
  });

  const courses=home.querySelector('.concept-courses');
  if(courses && !document.querySelector('.mobile-follow')){const follow=document.createElement('section');follow.className='mobile-follow mobile-only-injected';follow.innerHTML='<h3>FOLLOW US</h3><div class="mobile-socials"><a href="#" aria-label="X">X</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="YouTube">▶</a><a href="#" aria-label="TikTok">♪</a></div><div class="mobile-legal"><a href="/about/">運営者情報</a>　<a href="/privacy/">プライバシーポリシー</a>　<a href="/terms/">利用規約</a><br>© 2026 JIRO GOLF</div>';courses.after(follow)}
  const bottom=document.querySelector('.concept-bottom-nav');
  if(bottom){const items=[...bottom.querySelectorAll('a')];if(items[3]){items[3].href='/posts/course-guide/';items[3].querySelector('b').textContent='♙';items[3].querySelector('small').textContent='コース'}if(items[4]){items[4].href='#';items[4].classList.add('mobile-menu-tab');items[4].querySelector('b').textContent='☰';items[4].querySelector('small').textContent='メニュー';items[4].addEventListener('click',e=>{e.preventDefault();toggleMenu(true)})}}
})();