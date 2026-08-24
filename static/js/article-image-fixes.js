(()=>{
  const IMG={
    bag:'https://www.baliinternationalgolf.com/wp-content/uploads/2025/08/Golf-Equipment-Bali-International-Golff.webp',
    driver:'https://lirp.cdn-website.com/c686827d/dms3rep/multi/opt/271804575_462555815472767_5511775322659542080_n-1920w.jpg',
    fairway:'https://i.ebayimg.com/images/g/fG0AAeSwSoZpybly/s-l1200.jpg',
    iron:'https://stat.ameba.jp/user_images/20210524/18/1up-golf/82/87/j/o1080081014946870026.jpg',
    wedge:'https://store.alpen-group.jp/Contents/FeatureIkou/cms/magazine/assets/img/uploads/2021/golf/05/210506_golf_01_image05.jpg',
    shaft:'https://cdn11.bigcommerce.com/s-u2zqy/images/stencil/590x590/products/1670/4019/Fujikura_Ventus_Black_Driver___37816.1741110674.jpg?c=2',
    putter:'https://blog.monarkgolf.com/wp-content/uploads/2025/05/Is-It-Time-to-Upgrade-Your-Putter-Discover-Top-Picks-from-Monark-Golf.jpg',
    ball:'https://images.unsplash.com/photo-1621005570368-8c1f58c98ca5?fm=jpg&ixlib=rb-4.1.0&q=80&w=1800',
    gps:'https://beaugolf.fr/IMG/garmin-gps-golf-s62.webp',
    launch:'https://cdn.shopify.com/s/files/1/2031/8247/files/SkyTrakPlusSIG10GolfSimulatorWith4x10SoftyHittingMat.jpg?v=1717794914',
    tour:'https://uploads.mygolfspy.com/uploads/2026/03/Screenshot-2026-03-19-at-2.16.09-PM.jpg'
  };

  const rules=[
    [/build-14-club-bag|playoff-bag-changes|jason-day-bag-overhaul|bmw-bellerive-gear-strategy|club-length-fit|grip-size|swingweight/,IMG.bag],
    [/face-angle|driver-moi|driver-loft-9-vs-105|used-driver-check|titleist-new-mini-driver/,IMG.driver],
    [/3w-vs-5w|7wood-popularity|9wood-amateur|cameron-young-gts-3wood|scheffler-7wood-utility/,IMG.fairway],
    [/ball-alignment-line|ball-compression/,IMG.ball],
    [/blade-vs-cavity-single|hollow-body-irons|iron-lie-angle|iron-sole-width|used-irons-groove|callaway-apex-mb-raw/,IMG.iron],
    [/counterbalance-shaft|shaft-torque|shaft-weight-50-60-70|ventus-headspeed-40/,IMG.shaft],
    [/cleveland-rtz2|high-toe-wedge-fit|raw-wedge-rust|wedge-grind-guide|taylormade-hitoe5|scheffler-old-wedges/,IMG.wedge],
    [/lab-vzn1i|ping-pld-dzb|spider-tour-2026|spider-zt-max|scotty-phantom-new|zero-torque-fit|koepka-putter-changes|thorbjornsen-putter-switch/,IMG.putter],
    [/rangefinder-vs-gps/,IMG.gps],
    [/launch-monitor-home/,IMG.launch],
    [/ben-griffin-quantum-max|fedexcup-top30|liv-golf-now|mcilroy-memphis-reset|min-woo-lee-prototypes|scheffler-qi4d-core-switch|spieth-playoff-pressure/,IMG.tour]
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
  });

  const hero=document.querySelector('.cat-hero');
  if(hero){
    const src=imageFor(location.pathname);
    if(src){
      hero.style.backgroundImage=`linear-gradient(180deg,rgba(5,10,6,.08),rgba(5,10,6,.86)),url('${src}')`;
      hero.dataset.articleImageFixed='1';
    }
  }
})();