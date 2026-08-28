import fs from 'node:fs/promises';
const file='data/gear.json';
const rows=JSON.parse(await fs.readFile(file,'utf8'));
const curated={
'TaylorMade Qi4D Driver':'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1784693259290/zoom/TC441_zoom_D.jpg?sh=900&sm=fit&sw=900',
'Titleist GTS2 Driver':'https://www.titleist.co.jp/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master-JP/default/dwa8a59a0d/560BC/560BC_01.png?sfrm=png&sh=650&sm=fit&sw=650',
'COBRA OPTM X Driver':'https://cdn.shopify.com/s/files/1/0634/7833/3657/files/SS26_Ecom_Cobra_OPTM_PDP_Driver_X_ImgGal-1-min.jpg',
'TaylorMade Qi10 MAX Driver':'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1786075672959/zoom/KY266_zoom_D.jpg?sh=900&sm=fit&sw=900',
'PING G440 MAX Driver':'https://api.next.ping.com/media/catalog/product/c/l/clubs_drivers_g440_max_sole_1600x1600_8603.png?auto=webp&fit=bounds&format=pjpg&quality=80&width=1600',
'Callaway ELYTE X Driver':'https://prd-sfcc.callawaygolf.com/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1784528739488/sits/drivers-2025-elyte-x/drivers-2025-elyte-x___1.jpg?bgcolor=F7F7F7&q=90&sfrm=png&sw=3000',
'Srixon ZXi MAX Driver':'https://au.dunlopsports.com/on/demandware.static/-/Sites-masterCatalog_DunlopSports/default/dw3c859cae/images/zxi-woods/gallery/ZXi_MAX/05.jpg',
'TaylorMade R7 Quad Mini Driver':'https://assets.taylormadegolf.com/i/30/979061/R7-Quad-Mini-Studio-Hero~W1000_H562_Mcrop_P50-50.png',
'TaylorMade Qi4D Fairway #3':'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1786680948148/zoom/TC448_zoom_D.jpg?sh=900&sm=fit&sw=900',
'TaylorMade Qi4D Fairway #5':'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1786680948148/zoom/TC448_zoom_D.jpg?sh=900&sm=fit&sw=900',
'TaylorMade Qi10 Fairway #3':'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1776053356368/zoom/KY268_zoom_D.jpg?sh=900&sm=fit&sw=900',
'Srixon Z U85 U4':'https://sports.dunlop.co.jp/golf/products/clublibrary/iron/images/srzu855000_main.jpg',
'PING G440 Hybrid #4':'https://api.next.ping.com/media/catalog/product/c/l/clubs.hybrids.g440.4_hybrid_sole_1600x1600_38ee.png?auto=webp&fit=bounds&format=pjpg&quality=80&width=1600',
'Titleist GT2 Fairway #5':'https://acushnet.scene7.com/is/image/titleist/24-Spec-GT2-FW-Thumb?fmt=png-alpha&qlt=100&resMode=sharp2&wid=1200',
'TaylorMade P7TW 5-PW':'https://www.taylormadegolf.jp/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1787240910549/zoom/ST472_zoom_D.jpg?sh=900&sm=fit&sw=900',
'TaylorMade P790 5-PW':'https://www.taylormadegolf.com/dw/image/v2/AAIS_PRD/on/demandware.static/-/Sites-tmag-master-catalog/default/v1785304008150/zoom/TA283_zoom_D.jpg?sh=900&sm=fit&sw=900',
'PING G440 6-PW':'https://api.next.ping.com/media/catalog/product/c/l/clubs.irons.g440.7_iron_cavity_alt_1600x1600_58b0.png?auto=webp&fit=bounds&format=pjpg&quality=80&width=1600',
'Titleist T350 6-PW':'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-clubs-master/default/dw66fe6b50/563C_01.png?sfrm=png&sh=650&sm=fit&sw=650',
'Srixon ZXi5 5-PW':'https://au.dunlopsports.com/on/demandware.static/-/Sites-masterCatalog_DunlopSports/default/dwf7abe959/images/zxi-irons/gallery/ZXi5/09.jpg',
'Mizuno JPX 925 HOT METAL 5-PW':'https://jpn.mizuno.com/sites/default/files/2025-04/gf_gf_250418_jpx_925_HotMetal_Face_img1.jpg',
'Callaway Apex Ai300 5-PW':'https://prd-sfcc.callawaygolf.com/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1784007623121/sits/irons-2024-apex-ai300/irons-2024-apex-ai300___1.jpg?bgcolor=F7F7F7&q=90&sfrm=png&sw=3000',
'COBRA KING TEC X 5-PW':'https://www.cobragolf.com/cdn/shop/files/R9001_ADDRESS_84bf3a86-e4bf-4c99-b50b-dc501b7714a1.jpg?v=1775233744&width=1600',
'Titleist Vokey SM10 50°':'https://acushnet.scene7.com/is/image/titleist/24SM10-Finishes-Highlight?fmt=png-alpha&wid=800',
'Titleist Vokey SM10 54°':'https://acushnet.scene7.com/is/image/titleist/24SM10-Finishes-Highlight?fmt=png-alpha&wid=800',
'Titleist Vokey SM10 58°':'https://acushnet.scene7.com/is/image/titleist/24SM10-Finishes-Highlight?fmt=png-alpha&wid=800',
'Cleveland RTZ 56°':'https://srixonasia.com/wp-content/uploads/2025/02/CG25-Clubs-Wedges-RTZ-Black-Satin-1.jpg',
'PING Scottsdale DS72':'https://api.next.ping.com/media/catalog/product/c/l/clubs.putters.scottsdale.ds72_cavity_view_1600x1600_2f0b.png?auto=webp&fit=bounds&format=pjpg&height=&quality=80&width=3840',
'Odyssey Ai-ONE Square 2 Square Jailbird':'https://au.callawaygolf.com/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_AU/v1786340387764/sits/putters-2025-square-to-square-jailbird/putters-2025-square-to-square-jailbird___1.png?sfrm=png&sw=800',
'Titleist Pro V1 2025 1ダース':'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw5f9812c2/005PV1T/T2029S_01.jpg?sw=300&sh=300&sm=fit&sfrm=png',
'Titleist Pro V1x 2025 1ダース':'https://www.titleist.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-titleist-master/default/dw0b11c337/005PVXT/T2049S-72.jpg?sw=300&sh=300&sm=fit&sfrm=png',
'TaylorMade TP5 2026 1ダース':'https://assets.taylormadegolf.com/i/f7/1260171/2026-TP5-Golf-Ball-Studio_2026-01-28-200904_uyeo~W1000_Mcrop_P50-50.jpeg',
'FootJoy WeatherSof Glove':'https://www.footjoy.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-footjoy-master/default/dwff13cd1d/FJ_66159E_01.jpg?sw=300&sh=300&sm=fit&sfrm=png',
'PING Hoofer Stand Bag':'https://api.next.ping.com/media/catalog/product/h/o/hoofer_14_heather_grey_black_drop_shadow_1600x1600_6d83.png',
'Callaway Chev Stand Bag':'https://edge.disstg.commercecloud.salesforce.com/dw/image/v2/AADH_PRD/on/demandware.static/-/Sites-CGI-ItemMaster/en_US/v1742015112529/sits/bags-2018-chev-stand/bags-2018-chev-stand_2266___1.jpg?bgcolor=F7F7F7&q=90&sfrm=png&sw=3000',
'FootJoy HyperFlex BOA':'https://www.footjoy.com/dw/image/v2/AAZW_PRD/on/demandware.static/-/Sites-footjoy-master/default/dwd65937a5/FJ_55478_01.jpg?sw=300&sh=300&sm=fit&sfrm=png',
'Nikon COOLSHOT PROIII STABILIZED':'https://www.nikon-image.com/products/sportoptics/laser/coolshot_proiii_stabilized/img/product_01.png',
'Pride Professional Tee System 69mm':'https://cdn.shopify.com/s/files/1/0046/0931/0823/files/PTS-Family-Trio-Hero_480x480.jpg?v=1611008734'
};
let changed=0;
for(const row of rows){
  const image=curated[row.name];
  if(!image) continue;
  if(row.image!==image) changed++;
  row.image=image;
  row.image_verified=true;
  row.image_verification='official-curated-audit';
}
await fs.writeFile(file,JSON.stringify(rows,null,2)+'\n');
await fs.writeFile('data/gear-image-curated-audit.json',JSON.stringify({checked_at:new Date().toISOString(),curated:Object.keys(curated).length,changed},null,2)+'\n');
console.log(`Applied ${Object.keys(curated).length} curated official images; changed ${changed}`);
