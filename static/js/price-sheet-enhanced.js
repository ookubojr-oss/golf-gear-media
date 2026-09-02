(()=>{
  const sheet=document.querySelector('[data-sheet]');
  if(!sheet)return;
  const priceEl=sheet.querySelector('[data-sheet-price]');
  const shopCountEl=sheet.querySelector('[data-shop-count]');
  const shopList=sheet.querySelector('[data-shop-list]');
  const tabs=[...sheet.querySelectorAll('.condition-tab')];

  let panel=sheet.querySelector('.sheet-enhanced-panel');
  if(!panel){
    panel=document.createElement('div');
    panel.className='sheet-enhanced-panel';
    panel.innerHTML=`
      <div class="sheet-market-grid">
        <div><small>参考価格</small><strong data-ref-price>販売先で確認</strong></div>
        <div><small>状態</small><strong data-ref-condition>新品</strong></div>
        <div><small>比較先</small><strong data-ref-shops>3ショップ</strong></div>
      </div>
      <section class="sheet-jiro-check">
        <div class="sheet-jiro-title">JIRO'S CHECK</div>
        <ul data-jiro-points></ul>
        <div class="sheet-jiro-target"><small>おすすめゴルファー</small><strong data-jiro-target></strong></div>
      </section>`;
    const note=sheet.querySelector('.sheet-note');
    if(note)note.insertAdjacentElement('beforebegin',panel); else sheet.appendChild(panel);
  }

  const refPrice=panel.querySelector('[data-ref-price]');
  const refCondition=panel.querySelector('[data-ref-condition]');
  const refShops=panel.querySelector('[data-ref-shops]');
  const points=panel.querySelector('[data-jiro-points]');
  const target=panel.querySelector('[data-jiro-target]');

  const categoryAdvice=(cat,spec)=>{
    const c=cat||'';
    if(c.includes('ドライバー')) return {
      target:'ミスを減らしたい人・弾道を調整したい人',
      points:[spec||'寛容性と弾道のバランスを比較。','同じモデルでもロフト・シャフトで価格差が大きいので要確認。','中古はクラウン傷・フェース打痕・シャフト状態を優先してチェック。']
    };
    if(c.includes('フェアウェイ')||c.includes('ハイブリッド')||c.includes('ユーティリティ')) return {
      target:'長い距離をやさしく運びたい人',
      points:[spec||'高さの出しやすさと寛容性を比較。','番手・ロフト違いで価格が変わるためスペック確認が重要。','中古はソール傷とフェース摩耗、シャフト長をチェック。']
    };
    if(c.includes('アイアン')) return {
      target:'セットでコスパ良く揃えたい人',
      points:[spec||'やさしさと打感、セット構成を比較。','中古は番手抜け・ライ角・シャフトの統一を確認。','グリップ交換費も含めて総額で判断。']
    };
    if(c.includes('ウェッジ')) return {
      target:'スピン性能と距離の打ち分けを重視する人',
      points:[spec||'ロフトとバウンスの組み合わせを比較。','中古は溝の摩耗が価格以上に重要。','フェース面の状態が悪い個体は安くても慎重に。']
    };
    if(c.includes('パター')) return {
      target:'構えやすさと転がりの安定感を重視する人',
      points:[spec||'形状・長さ・打感を比較。','中古はフェース面とシャフトの曲がりを確認。','グリップ状態も交換コスト込みで見る。']
    };
    return {target:'価格と状態を比較して選びたい人',points:[spec||'特徴と価格のバランスを比較。','販売先ごとに価格・在庫・仕様を確認。','中古は状態と付属品を必ずチェック。']};
  };

  const selectedCondition=()=>tabs.find(b=>b.classList.contains('active'))?.dataset.condition||'new';
  const enhance=(el,condition=selectedCondition())=>{
    if(!el)return;
    const isUsed=condition==='used';
    const rawPrice=isUsed?(el.dataset.usedPrice||''):(el.dataset.newPrice||'');
    const display=rawPrice&&rawPrice.trim()?rawPrice.trim():(isUsed?'中古価格を確認':'販売先で確認');
    if(priceEl)priceEl.textContent=display;
    if(shopCountEl)shopCountEl.textContent='3ショップを比較';
    refPrice.textContent=display;
    refCondition.textContent=isUsed?'中古':'新品';
    refShops.textContent='Amazon・楽天・Yahoo!';
    const advice=categoryAdvice(el.dataset.category||'',el.dataset.spec||'');
    points.innerHTML='';
    advice.points.forEach(t=>{const li=document.createElement('li');li.textContent=t;points.appendChild(li)});
    target.textContent=advice.target;
    if(shopList){
      shopList.querySelectorAll('.shop-price').forEach(p=>{
        if(/価格を確認|販売先で確認/.test(p.textContent||'')) p.textContent='販売先で確認';
      });
    }
  };

  document.querySelectorAll('[data-sheet-open]').forEach(el=>{
    el.addEventListener('click',()=>setTimeout(()=>enhance(el,'new'),0));
  });
  tabs.forEach(btn=>btn.addEventListener('click',()=>{
    const opened=document.querySelector('[data-sheet-open][data-active-price-sheet="1"]');
    const current=opened||window.__jiroPriceSheetSource;
    setTimeout(()=>enhance(current,btn.dataset.condition),0);
  }));
  document.querySelectorAll('[data-sheet-open]').forEach(el=>el.addEventListener('click',()=>{
    window.__jiroPriceSheetSource=el;
  }));
})();