(()=>{
  const gallery=document.getElementById('swing-gallery');
  if(!gallery)return;

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
})();
