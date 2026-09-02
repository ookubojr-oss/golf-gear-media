(()=>{
  /*
   * JIRO GOLF affiliate-ready layer.
   * Fill only values issued to the site owner after each affiliate program is approved.
   * Do not invent IDs or tracking URLs.
   */
  const CONFIG = {
    amazonTag: '',
    rakutenTemplate: '', // Example shape only after issuance: a full tracking URL template containing {url}
    yahooTemplate: ''   // Example shape only after issuance: a full tracking URL template containing {url}
  };

  const hosts = {
    amazon: /(^|\.)amazon\.co\.jp$/i,
    rakuten: /(^|\.)rakuten\.co\.jp$/i,
    yahoo: /(^|\.)shopping\.yahoo\.co\.jp$/i
  };

  const merchant = (url) => {
    try {
      const h = new URL(url, location.href).hostname;
      if (hosts.amazon.test(h)) return 'amazon';
      if (hosts.rakuten.test(h)) return 'rakuten';
      if (hosts.yahoo.test(h)) return 'yahoo';
    } catch (_) {}
    return '';
  };

  const applyTracking = (href, kind) => {
    try {
      if (kind === 'amazon' && CONFIG.amazonTag) {
        const u = new URL(href, location.href);
        u.searchParams.set('tag', CONFIG.amazonTag);
        return u.toString();
      }
      if (kind === 'rakuten' && CONFIG.rakutenTemplate) {
        return CONFIG.rakutenTemplate.replace('{url}', encodeURIComponent(href));
      }
      if (kind === 'yahoo' && CONFIG.yahooTemplate) {
        return CONFIG.yahooTemplate.replace('{url}', encodeURIComponent(href));
      }
    } catch (_) {}
    return href;
  };

  const track = (payload) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event:'affiliate_click', ...payload});
    window.dispatchEvent(new CustomEvent('jiro:affiliate-click', {detail:payload}));
  };

  const prepare = (root=document) => {
    root.querySelectorAll('a[href]').forEach(a => {
      const kind = merchant(a.href);
      if (!kind) return;
      a.dataset.affiliateMerchant = kind;
      a.rel = [...new Set(`${a.rel || ''} sponsored noopener`.trim().split(/\s+/))].join(' ');
      a.target = '_blank';
      const next = applyTracking(a.href, kind);
      if (next !== a.href) a.href = next;
      if (a.dataset.affiliateBound === '1') return;
      a.dataset.affiliateBound = '1';
      a.addEventListener('click', () => track({
        merchant: kind,
        href: a.href,
        page: location.pathname,
        label: (a.textContent || '').trim().slice(0,120)
      }));
    });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => prepare(), {once:true});
  else prepare();

  const observer = new MutationObserver(records => {
    records.forEach(r => r.addedNodes.forEach(n => {
      if (n.nodeType !== 1) return;
      if (n.matches?.('a[href]')) prepare(n.parentNode || document);
      else prepare(n);
    }));
  });
  observer.observe(document.documentElement, {childList:true, subtree:true});
})();
