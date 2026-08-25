import fs from 'node:fs';
const I={
 tmD:'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1784693259290/zoom/TC441_zoom_D.jpg?sh=900&sm=fit&sw=900',
 tmF:'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1786680948148/zoom/TC448_zoom_D.jpg?sh=900&sm=fit&sw=900',
 tiD:'https://www.titleist.co.jp/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master-JP/default/dwa8a59a0d/560BC/560BC_01.png?sfrm=png&sh=650&sm=fit&sw=650',
 coD:'https://www.cobragolf.com/cdn/shop/files/d0E11_hero_3802b84b-b0a0-4736-b616-1e401f92a76f.jpg?v=1768591373',
 qi10:'https://www.taylormadegolf.ca/on/demandware.static/-/Sites-tmag-master-catalog/en_CA/v1772514404440/zoom/TC299_zoom_D.jpg',
 iron:'https://cdn11.bigcommerce.com/s-d6glsqook0/products/3265/images/12792/TAYLO-P7TW-2__83641.1622150473.386.513.jpg?c=1',
 srixon:'https://www.dunlopsports.com/dw/image/v2/AAJP_PRD/on/demandware.static/-/Sites-master-catalog-srixon/default/dw9e92f530/images/large/zu85_iron.jpg',
 wedge:'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master/default/dw77ef934e/852RSS/852RSS_01.png',
 lab:'https://labgolf.jp/cdn/shop/files/cover-max-custom.jpg?v=1763455992&width=832',
 labdf:'https://labgolf.jp/cdn/shop/files/cover-df21-custom.jpg?v=1763456019&width=832',
 spider:'https://www.golfworx.co.uk/wp-content/uploads/2025/02/tourx3.webp',
 ball:'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwf626864d/T2029S-H-J/T2029S-H-J_01.png',
 glove:'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dwbd6a53f6/Players-Glove/Players-Glove_01.png',
 bag:'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw129066b8/TB23SX4-006/TB23SX4-006_01.png',
 shoe:'https://www.footjoy.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-footjoy-master/default/dw13602ec0/56933/56933_01.png',
 range:'https://www.nikon-image.com/products/sportoptics/laser/coolshot_proiii_stabilized/img/product_01.png'
};
const rows=[];
const add=(category,names,image,base,summary)=>names.forEach((name,i)=>rows.push({category,name,image,price:`¥${(base+i*3300).toLocaleString('ja-JP')}前後`,summary,tags:['実物写真','2026選定','初心者〜中級者']}));
add('ドライバー',['TaylorMade Qi4D Driver','Titleist GTS2 Driver','COBRA OPTM X Driver','TaylorMade Qi10 MAX Driver','PING G440 MAX Driver','Callaway ELYTE X Driver','Srixon ZXi MAX Driver','TaylorMade R7 Quad Mini Driver'],I.tmD,63800,'寛容性、弾道調整、振り切れる重量を比較したいドライバー。');
rows[1].image=I.tiD;rows[2].image=I.coD;rows[3].image=I.qi10;
add('フェアウェイウッド／ハイブリッド',['TaylorMade Qi4D Fairway #3','TaylorMade Qi4D Fairway #5','TaylorMade Qi10 Fairway #3','Srixon Z U85 U4','PING G440 Hybrid #4','Titleist GT2 Fairway #5'],I.tmF,29800,'地面から高さを出しやすく、長い距離を安全に運ぶための候補。');rows[2+8].image=I.qi10;rows[3+8].image=I.srixon;
add('アイアンセット',['TaylorMade P7TW 5-PW','TaylorMade P790 5-PW','PING G440 6-PW','Titleist T350 6-PW','Srixon ZXi5 5-PW','Mizuno JPX 925 HOT METAL 5-PW','Callaway Apex Ai300 5-PW','COBRA KING TEC X 5-PW'],I.iron,89800,'セット本数、ロフト、ソール幅、シャフト重量を確かめたいアイアン。');
add('ウェッジ',['Titleist Vokey SM10 50°','Titleist Vokey SM10 54°','Titleist Vokey SM10 58°','Cleveland RTZ 56°','TaylorMade Hi-Toe 4 58°'],I.wedge,19800,'ロフト間隔とバウンスを手持ちアイアンにつなげて選ぶウェッジ。');
add('パター',['L.A.B. Golf MEZZ.1 MAX Custom','L.A.B. Golf DF 2.1 Custom','TaylorMade Spider Tour X','PING Scottsdale DS72','Titleist Scotty Cameron Phantom 5','Odyssey Ai-ONE Square 2 Square Jailbird'],I.lab,29800,'構えやすさ、距離感、フェースの開閉量を試打で比較したいパター。');rows[31].image=I.labdf;rows[32].image=I.spider;
add('ゴルフボール',['Titleist Pro V1 2025 1ダース','Titleist Pro V1x 2025 1ダース','Srixon Z-STAR 2025 1ダース','Bridgestone TOUR B XS 1ダース','TaylorMade TP5 2026 1ダース'],I.ball,3980,'同じモデルを継続使用し、打感とショートゲームの距離感をそろえるボール。');
add('グローブ',['Titleist Players Glove','FootJoy WeatherSof Glove','Bridgestone TOUR GLOVE'],I.glove,1600,'指先の余りと手のひらのたるみがないサイズを選ぶグローブ。');
add('キャディバッグ',['Titleist Players 4 Stand Bag','PING Hoofer Stand Bag','TaylorMade FlexTech Stand Bag','Callaway Chev Stand Bag'],I.bag,18800,'重量、自立性、口枠、車への積みやすさを比較した軽量バッグ。');
add('シューズ',['FootJoy PRO/SLX BOA','FootJoy HyperFlex BOA','adidas CODECHAOS 25 BOA'],I.shoe,14800,'実寸と幅を試着し、かかとの浮きと歩行時の安定性を見るシューズ。');
add('アクセサリー',['Nikon COOLSHOT PROIII STABILIZED','Pride Professional Tee System 69mm'],I.range,1200,'距離確認とティーアップを安定させる実用アクセサリー。');

for(const [i,r] of rows.entries()){
  const q=encodeURIComponent(r.name);
  r.no=String(i+1).padStart(2,'0');
  r.amazon=`https://www.amazon.co.jp/s?k=${q}`;
  r.rakuten=`https://search.rakuten.co.jp/search/mall/${q}/`;
  r.yahoo=`https://shopping.yahoo.co.jp/search?p=${q}`;
}
if(rows.length!==50)throw new Error(`expected 50, got ${rows.length}`);
fs.mkdirSync('data',{recursive:true});
fs.writeFileSync('data/gear.json',JSON.stringify(rows,null,2)+'\n');
console.log('generated 50 gear products');
