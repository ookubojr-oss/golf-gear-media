(()=>{
  // Only override article imagery when the image is a manufacturer-official,
  // product-matched asset. Generic third-party photos are intentionally not
  // injected: if an exact official product image is not verified, the article
  // keeps its own editorial image instead of showing a different model.
  const IMG={
    qi4dCore:'https://www.taylormadegolf.com/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/en_US/v1787154929998/zoom/TC441_zoom_D.jpg?sh=900&sm=fit&sw=900',
    vokeySm8:'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master/default/dw86d87c43/833RSF/833RSF_01.png',
    ventusTr:'https://www.fujikurashaft.jp/wp-content/uploads/2026/04/ventus_tr_2604.png',
    spiderTour:'https://assets.taylormadegolf.com/i/81/866150/TM24PTR-TC961-N7550326-Spider-Tour-Black-SS-BMB-TMG07191-v1-2048x2048~W800_H600_Mcrop_Fwebp_P50-50.webp'
  };

  const rules=[
    [/scheffler-qi4d-core-switch/,IMG.qi4dCore],
    [/scheffler-old-wedges/,IMG.vokeySm8],
    [/ventus-headspeed-40/,IMG.ventusTr],
    [/spider-tour-2026/,IMG.spiderTour]
  ];

  function imageFor(path){
    const p=String(path||'').toLowerCase();
    const hit=rules.find(([re])=>re.test(p));
    return hit?hit[1]:'';
  }

  document.querySelectorAll('.archive-card').forEach(card=>{
    const link=card.querySelector('a[href]');
    const thumb=card.querySelector('.archive-thumb');
    const src=imageFor(link?.getAttribute('href'));
    if(!thumb||!src)return;
    thumb.style.backgroundImage=`linear-gradient(180deg,rgba(4,10,5,.06),rgba(4,10,5,.72)),url('${src}')`;
    thumb.dataset.articleImageFixed='1';
    thumb.dataset.imageSource='manufacturer-official';
  });

  const hero=document.querySelector('.cat-hero');
  if(hero){
    const src=imageFor(location.pathname);
    if(src){
      hero.style.backgroundImage=`linear-gradient(180deg,rgba(5,10,6,.08),rgba(5,10,6,.86)),url('${src}')`;
      hero.dataset.articleImageFixed='1';
      hero.dataset.imageSource='manufacturer-official';
    }
  }
})();