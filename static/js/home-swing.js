(()=>{
  const gallery=document.getElementById('swing-gallery');
  if(gallery){
    const heading=gallery.querySelector('.panel-head h2');
    if(heading)heading.innerHTML='今週の優勝者スイング <span>WINNER</span>';

    const filter=gallery.querySelector('.swing-filter');
    if(filter)filter.style.display='none';

    const cards=[...gallery.querySelectorAll('.swing-card')];
    cards.forEach((card,index)=>{if(index>0)card.remove()});

    const grid=gallery.querySelector('.swing-grid');
    if(grid){
      grid.style.gridTemplateColumns='minmax(0, 760px)';
      grid.style.justifyContent='start';
    }
  }

  // Winner WITB rule: irons from the same model/set are shown as one card.
  const witb=document.querySelector('#weekly .witb-row');
  if(!witb)return;

  const p7twCards=[...witb.querySelectorAll('.witb-card')].filter(card=>/P7TW/i.test(card.dataset.name||card.textContent||''));
  if(p7twCards.length>1){
    const first=p7twCards[0];
    first.dataset.name='TaylorMade P7TW 5–PW';
    first.dataset.category='アイアンセット';
    first.dataset.spec='5番〜PW（6本） / Dynamic Gold Tour Issue X100';

    const label=first.querySelector('span');
    if(label)label.textContent='5–PW / IRONS';

    const title=first.querySelector('b');
    if(title)title.innerHTML='TaylorMade<br>P7TW 5–PW';

    const note=first.querySelector('small');
    if(note)note.textContent='6本セット / DG Tour Issue X100';

    const img=first.querySelector('img');
    if(img)img.alt='TaylorMade P7TW 5番〜PW アイアンセット実物写真';

    p7twCards.slice(1).forEach(card=>card.remove());
  }
})();
