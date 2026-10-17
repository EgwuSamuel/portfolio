/* ===== Shared page behaviour for index.html and blog.html ===== */
(function () {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  /* ---- Theme toggle (preference remembered per browser) ---- */
  function currentTheme() {
    const set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      if (!reduceMotion) {
        root.classList.add('theme-anim');
        setTimeout(() => root.classList.remove('theme-anim'), 500);
      }
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('site_theme', next); } catch (e) {}
      btn.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
  });

  /* ---- Mobile nav ---- */
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    const setOpen = open => {
      links.classList.toggle('open', open);
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };
    toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
    links.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  }

  /* ---- Nav shadow + reading progress ---- */
  const nav = document.querySelector('.nav');
  const bar = document.querySelector('.progress');
  let ticking = false;
  function onScroll() {
    const y = window.scrollY || 0;
    if (nav) nav.classList.toggle('scrolled', y > 8);
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    }
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---- Reveal on scroll (call again after content is rendered) ---- */
  const revealObserver = ('IntersectionObserver' in window) ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }) : null;

  window.observeReveal = function (scope) {
    const els = (scope || document).querySelectorAll('[data-reveal]:not(.reveal)');
    // Stagger siblings that share a parent so lists cascade in.
    const counters = new Map();
    els.forEach(el => {
      const parent = el.parentElement;
      const i = counters.get(parent) || 0;
      counters.set(parent, i + 1);
      el.style.setProperty('--d', Math.min(i, 8) * 0.06 + 's');
      el.classList.add('reveal');
      if (!revealObserver || reduceMotion) el.classList.add('in');
      else revealObserver.observe(el);
    });
  };

  /* ---- Scrollspy: highlight the section in view ---- */
  window.initScrollspy = function () {
    if (!links || !('IntersectionObserver' in window)) return;
    const map = new Map();
    links.querySelectorAll('a[href^="#"]').forEach(a => {
      const sec = document.getElementById(a.getAttribute('href').slice(1));
      if (sec) map.set(sec, a);
    });
    if (!map.size) return;
    const visible = new Set();
    const spy = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target); });
      let best = null;
      visible.forEach(s => { if (!best || s.getBoundingClientRect().top < best.getBoundingClientRect().top) best = s; });
      map.forEach(a => a.classList.remove('active'));
      if (best) map.get(best).classList.add('active');
    }, { rootMargin: '-35% 0px -55% 0px' });
    map.forEach((_, sec) => spy.observe(sec));
  };

  /* ---- Count-up numbers ---- */
  window.countUp = function (el, target) {
    if (reduceMotion || !('IntersectionObserver' in window)) { el.textContent = target; return; }
    el.textContent = '0';
    const io = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const start = performance.now(), dur = 1200;
      (function step(now) {
        const t = Math.min(1, (now - start) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(step);
      })(start);
    });
    io.observe(el);
  };

  /* ---- Rotating phrase in the intro ---- */
  window.initRotator = function (el) {
    if (!el) return;
    const items = Array.from(el.children);
    if (items.length < 2 || reduceMotion) return;
    let i = 0;
    setInterval(() => {
      if (document.hidden) return;
      const cur = items[i];
      i = (i + 1) % items.length;
      const next = items[i];
      cur.classList.add('out'); cur.classList.remove('on');
      next.classList.remove('out'); next.classList.add('on');
      setTimeout(() => cur.classList.remove('out'), 600);
    }, 2800);
  };

  /* ---- Toast ---- */
  window.showSiteToast = function (msg) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove('show'), 1800);
  };
})();
