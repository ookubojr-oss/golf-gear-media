(()=>{
  const esc = encodeURIComponent;
  const buildShops = (name) => {
    const q = esc(name || 'ゴルフクラブ');
    return [
      {name:'Amazon',condition:'both',price:'',note:'価格・在庫は販売先で確認',url:`https://www.amazon.co.jp/s?k=${q}`},
      {name:'楽天市場',condition:'both',price:'',note:'価格・在庫・ポイントは販売先で確認',url:`https://search.rakuten.co.jp/search/mall/${q}/`},
      {name:'Yahoo!ショッピング',condition:'both',price:'',note:'価格・在庫・還元は販売先で確認',url:`https://shopping.yahoo.co.jp/search?p=${q}`}
    ];
  };
  const enrich = () => {
    document.querySelectorAll('[data-sheet-open]').forEach(el => {
      if (el.dataset.shops) return;
      const name = el.dataset.name || '';
      if (!name) return;
      el.dataset.shops = JSON.stringify(buildShops(name));
      el.dataset.shopName = '3ショップ比較';
      el.dataset.shopUrl = '';
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', enrich, {once:true});
  else enrich();
})();
