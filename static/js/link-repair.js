(()=>{const redirects={
'/posts/used-golf-clubs-where-to-buy/':'/used-clubs-where-to-buy/',
'/posts/cheap-used-golf-clubs-guide/':'/used-clubs-cheap-guide/',
'/posts/used-golf-club-set-guide/':'/used-club-set-guide/',
'/posts/used-golf-club-trade-in-guide/':'/used-clubs-sell-guide/'
};const repair=()=>document.querySelectorAll('a[href]').forEach(a=>{try{const u=new URL(a.getAttribute('href'),location.origin);if(u.origin===location.origin&&redirects[u.pathname])a.href=redirects[u.pathname]+u.search+u.hash}catch(_){}});if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',repair,{once:true});else repair();})();