(()=>{
  if(!window.matchMedia('(max-width: 768px)').matches)return;
  const path=location.pathname.replace(/\/+$/,'/');
  if(path!='/beginner/')return;
  const main=document.querySelector('main');
  if(!main)return;
  const articles=[
    ['/posts/2026-08-23-beginner-first-club-guide/','最初に買うクラブは何本あればいい？','https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=600&q=84'],
    ['/posts/2026-08-23-beginner-driving-range-guide/','ゴルフの始め方 完全ガイド','https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=84'],
    ['/posts/2026-08-23-beginner-swing-tips/','スイングの基本｜構え方とグリップ','https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=84'],
    ['/posts/2026-08-23-beginner-essential-gear/','初心者に必要な道具とギア','https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=600&q=84'],
    ['/posts/2026-08-23-beginner-course-debut-checklist/','初ラウンド前に確認したいこと','https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=84']
  ];
  const list=(items)=>items.map(([href,title,img])=>`<a href="${href}"><img src="${img}" alt="${title}" loading="lazy"><div><small>BEGINNER</small><span>2026.08.23</span><b>${title}</b></div></a>`).join('');
  main.innerHTML=`<div class="beginner-mobile-page">
    <section class="bg-breadcrumb">HOME <span>›</span> 初心者ガイド</section>
    <section class="bg-hero"><div class="bg-hero-copy"><h1>初心者ガイド</h1><p>ゴルフを始めるあなたへ。<br>基礎から丁寧にサポートします。</p></div><img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=900&q=88" alt="ゴルフクラブ"></section>
    <section class="bg-topic-grid"><a href="#basic"><span>◫</span><b>始め方・基礎知識</b></a><a href="#club"><span>⌕</span><b>クラブの選び方</b></a><a href="#swing"><span>⌁</span><b>スイングの基本</b></a><a href="#manner"><span>♡</span><b>ルール・マナー</b></a><a href="#practice"><span>▣</span><b>練習方法</b></a><a href="#round"><span>♧</span><b>ラウンドの流れ</b></a></section>
    <section class="bg-section" id="basic"><div class="bg-section-head"><h2>おすすめ記事</h2><a href="#all">すべて見る →</a></div><div class="bg-article-list">${list(articles.slice(0,3))}</div><a class="bg-all-btn" href="#all">すべての記事を見る →</a></section>
    <section class="bg-steps"><h2>ステップガイド</h2><p>ゴルフ上達への6つのステップ</p><ol><li><b>1</b><div><strong>知る</strong><span>ゴルフの基本を知る</span></div></li><li><b>2</b><div><strong>揃える</strong><span>道具を揃える</span></div></li><li><b>3</b><div><strong>練習する</strong><span>打ち方を覚える</span></div></li><li><b>4</b><div><strong>コースデビュー</strong><span>実際にラウンドする</span></div></li><li><b>5</b><div><strong>スコアをつける</strong><span>ルールを理解する</span></div></li><li><b>6</b><div><strong>上達する</strong><span>継続して練習する</span></div></li></ol></section>
    <section class="bg-section bg-popular" id="club"><div class="bg-section-head"><h2>人気のテーマ</h2><a href="#all">すべて見る →</a></div><div class="bg-popular-grid"><a href="/posts/2026-08-23-beginner-first-club-guide/"><img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=600&q=84"><b>クラブの選び方</b><span>初心者向けの基本を解説。</span></a><a id="swing" href="/posts/2026-08-23-beginner-swing-tips/"><img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=84"><b>スイングの基本</b><span>構え方からやさしく。</span></a><a id="manner" href="/posts/2026-08-23-beginner-course-debut-checklist/"><img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=600&q=84"><b>ルール・マナー</b><span>コースで困らない基本。</span></a><a id="practice" href="/posts/2026-08-23-beginner-driving-range-guide/"><img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=84"><b>練習方法</b><span>打ちっぱなしデビュー。</span></a></div></section>
    <section class="bg-section bg-category-list" id="round"><h2>このページのカテゴリー</h2><a href="#basic">始め方・基礎知識 <span>›</span></a><a href="#club">クラブの選び方 <span>›</span></a><a href="#swing">スイングの基本 <span>›</span></a><a href="#manner">ルール・マナー <span>›</span></a><a href="#practice">練習方法 <span>›</span></a><a href="#round">ラウンドの流れ <span>›</span></a></section>
    <section class="bg-gear-cta"><div><small>BEGINNER GEAR</small><h2>まずは道具選びから</h2><p>初心者におすすめのクラブ・ギアをチェック。</p><a href="/recommended-gear/">詳しく見る →</a></div></section>
    <section class="bg-section" id="all"><div class="bg-section-head"><h2>すべての記事</h2></div><div class="bg-article-list">${list(articles)}</div></section>
    <div class="bg-follow"><b>FOLLOW US</b><div>X　◎　▶　♪</div></div>
    <nav class="bg-bottom"><a href="/">⌂<small>ホーム</small></a><a href="/categories/latest-gear/">▤<small>ニュース</small></a><a href="/recommended-gear/">◇<small>ギア</small></a><a href="/posts/course-guide/">♧<small>コース</small></a><a href="#">☰<small>メニュー</small></a></nav>
  </div>`;
})();