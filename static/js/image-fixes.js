(()=>{
  const REAL_GEAR_IMAGES = [
    {
      match: /qi4d\s*(7w|fairway)?/i,
      src: 'https://cdn11.bigcommerce.com/s-hgw48x3/products/4543/images/35184/TM26MWF-TC448-N8401509-Qi4D-Core-Fairway-3Q-v1__77316.1767828863.400.400.jpg?c=2'
    },
    {
      match: /(srixon\s*)?z\s*u85|zu85/i,
      src: 'https://www.pgatoursuperstore.com/dw/image/v2/BCFG_PRD/on/demandware.static/-/Sites-master-catalog-pgatss/default/dwff7096e8/Golf-Clubs/Irons-and-Pkg-Sets/Mens-Iron-Sets/Srixon/2000000001070/2000000001070_2.png?sh=1200&sm=fit&sw=1200'
    }
  ];

  const genericFallback = '/images/gear-fallback-transparent.png';

  function identify(img){
    const card = img.closest('[data-name], .witb-card, .gear-card, .photo-card');
    return [
      img.alt || '',
      card?.dataset?.name || '',
      card?.textContent || ''
    ].join(' ');
  }

  function realSrcFor(img){
    const text = identify(img);
    const item = REAL_GEAR_IMAGES.find(x => x.match.test(text));
    return item ? item.src : '';
  }

  function applyRealPhoto(img){
    if(!(img instanceof HTMLImageElement)) return;
    const replacement = realSrcFor(img);
    if(!replacement) return;
    const current = img.getAttribute('src') || '';
    if(current === replacement) return;
    if(current.includes('gear-fallback-transparent') || img.dataset.fallbackApplied === '1' || /Qi4D|U85|ZU85/i.test(identify(img))){
      img.dataset.realPhotoFix = '1';
      img.src = replacement;
      img.alt = identify(img).includes('U85') ? 'Srixon Z U85 実物商品写真' : 'TaylorMade Qi4D フェアウェイウッド 実物商品写真';
    }
  }

  function removeGenericFallback(img){
    if(!(img instanceof HTMLImageElement)) return;
    if((img.getAttribute('src') || '').includes('gear-fallback-transparent')){
      const replacement = realSrcFor(img);
      if(replacement){
        img.src = replacement;
      } else {
        img.style.display = 'none';
        img.setAttribute('aria-hidden','true');
      }
    }
  }

  document.querySelectorAll('img').forEach(img => {
    applyRealPhoto(img);
    img.addEventListener('error', () => {
      setTimeout(() => {
        applyRealPhoto(img);
        removeGenericFallback(img);
      }, 0);
    });
  });

  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => {
      if(m.type === 'attributes' && m.target instanceof HTMLImageElement){
        applyRealPhoto(m.target);
        removeGenericFallback(m.target);
      }
      m.addedNodes.forEach(node => {
        if(!(node instanceof Element)) return;
        if(node.matches('img')) applyRealPhoto(node);
        node.querySelectorAll?.('img').forEach(applyRealPhoto);
      });
    });
  });
  observer.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['src']});
})();