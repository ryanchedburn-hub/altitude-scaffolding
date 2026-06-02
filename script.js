/* ALTITUDE SCAFFOLDING — shared interactions */
document.addEventListener('DOMContentLoaded', () => {

  /* --- Sticky nav shadow + mobile burger --- */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const burger = nav.querySelector('.nav__burger');
    if (burger) burger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('.nav__links a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('open')));
  }

  /* --- Hero carousel (home) --- */
  const slidesWrap = document.querySelector('.slides');
  if (slidesWrap) {
    const slides = [...slidesWrap.querySelectorAll('.slide')];
    const dots = [...document.querySelectorAll('.hero__dots button')];
    let i = 0, timer;
    const go = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('active', k === i));
      dots.forEach((d, k) => d.classList.toggle('active', k === i));
    };
    const start = () => { timer = setInterval(() => go(i + 1), 6000); };
    const reset = () => { clearInterval(timer); start(); };
    dots.forEach((d, k) => d.addEventListener('click', () => { go(k); reset(); }));
    const prev = document.querySelector('.hero__arrow--prev');
    const next = document.querySelector('.hero__arrow--next');
    if (prev) prev.addEventListener('click', () => { go(i - 1); reset(); });
    if (next) next.addEventListener('click', () => { go(i + 1); reset(); });
    go(0); start();
  }

  /* --- Scroll reveal --- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* --- Stat count-up --- */
  const stats = document.querySelectorAll('.stat__num[data-to]');
  if (stats.length) {
    const sObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target, to = +el.dataset.to, suf = el.dataset.suffix || '';
        let cur = 0; const step = Math.max(1, Math.round(to / 45));
        const tick = () => { cur += step; if (cur >= to) { el.textContent = to + suf; }
          else { el.textContent = cur + suf; requestAnimationFrame(tick); } };
        tick(); sObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    stats.forEach(s => sObs.observe(s));
  }

  /* --- Project + gallery filters --- */
  const filters = document.querySelectorAll('.filter');
  if (filters.length) {
    filters.forEach(btn => btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.proj, .g-item').forEach(p => {
        const show = f === 'all' || p.dataset.cat === f;
        p.classList.toggle('hide', !show);
      });
    }));
  }

  /* --- Lightbox (gallery) --- */
  const lb = document.querySelector('.lightbox');
  if (lb) {
    const lbImg = lb.querySelector('img');
    const items = [...document.querySelectorAll('.g-item')];
    let idx = 0;
    const visible = () => items.filter(i => !i.classList.contains('hide'));
    const show = (el) => {
      const list = visible(); idx = list.indexOf(el);
      lbImg.src = el.querySelector('img').src;
      lb.classList.add('open');
    };
    const step = (d) => {
      const list = visible(); if (!list.length) return;
      idx = (idx + d + list.length) % list.length;
      lbImg.src = list[idx].querySelector('img').src;
    };
    items.forEach(el => el.addEventListener('click', () => show(el)));
    lb.querySelector('.lightbox__close').addEventListener('click', () => lb.classList.remove('open'));
    lb.querySelector('.lightbox__prev').addEventListener('click', (e) => { e.stopPropagation(); step(-1); });
    lb.querySelector('.lightbox__next').addEventListener('click', (e) => { e.stopPropagation(); step(1); });
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.classList.remove('open'); });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') lb.classList.remove('open');
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    });
  }

  /* --- Contact form (front-end demo handler) --- */
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = document.querySelector('.form-success');
      if (ok) { ok.style.display = 'block'; ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      form.reset();
    });
    const dz = form.querySelector('.dropzone');
    const file = form.querySelector('#fileInput');
    if (dz && file) {
      dz.addEventListener('click', () => file.click());
      file.addEventListener('change', () => {
        if (file.files.length) dz.querySelector('b').textContent = file.files.length + ' file(s) selected';
      });
    }
  }
});
