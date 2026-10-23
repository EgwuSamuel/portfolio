/* ===== Portfolio Data ===== */
/* Seed content shipped with the site. Content published through the admin backend
   overrides it; use "Sync from site files" in admin.html to push changes made here. */

const SEED_DATA = {
  about: "I am an AI researcher and Assistant Lecturer at Veritas University, Abuja, working on machine learning for public health. With the Artificial Intelligence for One Health initiative (AIA4OneHealth / AI4PEP Nigeria), I build geospatial and predictive models for zoonotic disease surveillance. Most recently, I developed an LGA-resolution mpox risk layer for Ogun State, published in Scientific African (2026) and integrated into the IDS-Master surveillance platform.\n\nMy earlier work applies computer vision and deep learning to medical and agricultural imaging: malaria-infected cell detection, mpox detection from skin-lesion images, and maize disease detection with YOLOv11 (my MSc thesis). I also bring industry engineering experience from serving as Chief Technology Officer at efinsuite in 2026. Across research and engineering, my aim is the same: rigorous, honestly evaluated AI that people can use.",

  interests: [
    "AI for One Health",
    "Spatial epidemiology & disease mapping",
    "Ensemble & ecological niche modelling",
    "Computer vision for medical imaging",
    "Trustworthy ML evaluation"
  ],

  news: [
    {
      id: "news-005",
      date: "Oct 2026",
      text: "Our paper on geospatial modelling of mpox transmission hotspots in Ogun State is published in Scientific African (Elsevier). I am the corresponding author.",
      link: "https://doi.org/10.1016/j.sciaf.2026.e03698",
      highlight: true
    },
    {
      id: "news-004",
      date: "Apr 2026",
      text: "IDS-Master, Ogun State's first AI-powered infectious disease surveillance system, launched at the Public Health Emergency Operation Centre, Abeokuta. Our mpox risk layer is integrated into the platform.",
      link: ""
    },
    {
      id: "news-003",
      date: "Jan 2026",
      text: "Joined the AIA4OneHealth research initiative as a Research Assistant.",
      link: "https://aia4onehealth.org/"
    },
    {
      id: "news-002",
      date: "2025",
      text: "Presented our deep-learning mpox detection system at the AI4D 2025 conference.",
      link: ""
    },
    {
      id: "news-001",
      date: "Apr 2025",
      text: "Completed my MSc in Computer Science at Veritas University (CGPA 4.73/5.0).",
      link: ""
    }
  ],

  education: [
    {
      id: "edu-001",
      date: "Oct 2023 – Apr 2025",
      degree: "MSc Computer Science",
      institution: "Veritas University, Abuja, Nigeria",
      url: "https://veritas.edu.ng",
      details: "CGPA: 4.73/5.0 | Advisor: Dr. Mustapha Aminu | Thesis: A Mobile-Based Maize Disease Detection System Using YOLOv11 Model"
    },
    {
      id: "edu-002",
      date: "Sep 2017 – Sep 2021",
      degree: "BSc Computer Science",
      institution: "Veritas University, Abuja, Nigeria",
      url: "https://veritas.edu.ng",
      details: "CGPA: 4.56/5.0 | Advisor: Dr. Emmanuel Mkpojiogu | Thesis: Design and Implementation of an Online Proctoring Examination System"
    }
  ],

  experience: [
    {
      id: "exp-001",
      date: "Jan 2026 – Sep 2026",
      role: "Chief Technology Officer",
      institution: "efinsuite · Full-time · Remote — Winnipeg, Manitoba, Canada",
      url: "https://efintax.biz/",
      details: "1. Led the development, digitalization, and scaling of the company's digital applications and platforms, including efinsuite Globe, an AI-powered cloud accounting platform.\n2. Designed and oversaw the company's technology strategy and IT architecture.\n3. Managed IT systems, software platforms, and integrations, with a focus on scalability, security, performance, and reliability.\n4. Drove automation and the adoption of emerging technologies."
    }
  ],

  research: [
    {
      id: "res-001",
      date: "Jan 2026 – Present",
      role: "Research Assistant",
      institution: "AIA4OneHealth",
      url: "https://aia4onehealth.org/",
      details: "Research Areas: AI for One Health, Zoonotic Disease Surveillance, Geospatial Modeling, Deep Learning for Public Health. Developed an LGA-resolution geospatial risk model for mpox in Ogun State using an ensemble of MaxEnt, Random Forest, and XGBoost with spatially blocked validation (published in Scientific African, 2026); the risk layer is integrated into the IDS-Master surveillance platform. Contributing to a machine learning-driven One Health system for managing zoonotic diseases."
    },
    {
      id: "res-002",
      date: "2023 – Present",
      role: "Research Assistant",
      institution: "Veritas University, Abuja, Nigeria",
      url: "https://veritas.edu.ng",
      details: "Research Areas: Computer Vision, Medical Imaging, Deep Learning for Disease Detection. Designed and implemented a Convolutional Neural Network (CNN) model for detecting malaria-infected cells and identifying maize streak virus. Investigated recent advancements in object detection, recognition, and tracking for embedded computer vision."
    },
    {
      id: "res-003",
      date: "2021 – 2024",
      role: "Undergraduate Researcher",
      institution: "Veritas University, Abuja, Nigeria",
      url: "https://veritas.edu.ng",
      details: "Research Areas: Digital Forensics, Human-Computer Interaction, Online Assessment Systems. Developed an online proctoring examination system to ensure academic integrity in remote assessments."
    }
  ],

  publications: [
    {
      id: "pub-007",
      venue: "Scientific African 2026",
      title: "Geospatial Analysis and Predictive Modelling of Mpox Transmission Hotspots: A Case Study of Ogun State, Nigeria",
      authors: "Sodiya, A. S., Egwu, S. O., Aborisade, D. O., Akinbowale, S., & Olasoju, M. I.",
      journal: "Scientific African, 34 (2026), e03698. Elsevier.",
      doi: "https://doi.org/10.1016/j.sciaf.2026.e03698",
      status: "published",
      year: 2026,
      type: "journal",
      featured: true,
      corresponding: true,
      openAccess: true,
      code: "https://github.com/EgwuSamuel/geospatial_ogun",
      summary: "An LGA-resolution mpox risk layer for the 20 LGAs of Ogun State, built with a MaxEnt, Random Forest, and XGBoost ensemble over 100 bootstrap replicates and reported under both random and spatially blocked validation. Seven LGAs were classified as high risk; the tiered layer was integrated into the IDS-Master surveillance platform.",
      bib: { type: "article", journal: "Scientific African", volume: "34", pages: "e03698", publisher: "Elsevier" }
    },
    {
      id: "pub-001",
      venue: "AI4D 2025",
      title: "Mpox Detection System Using Deep Learning",
      authors: "Sodiya, A. S., Falana, O. J., Egwu, S. O., Imhonophi, G. B., Awodele, O., Aborisade, D. O., & Abdullahi, A.",
      journal: "PAIDeF Artificial Intelligence for Development (AI4D) Conference Proceedings, 2025",
      doi: "",
      status: "published",
      year: 2025,
      type: "conference",
      bib: { type: "inproceedings", booktitle: "PAIDeF Artificial Intelligence for Development (AI4D) Conference Proceedings" }
    },
    {
      id: "pub-002",
      venue: "IJRIAS 2024",
      title: "Advancing Malaria Detection: A Comparative Study and Proposal for Web-Based Predictive Application Utilizing CNN and TensorFlow",
      authors: "Egwu, S. O., Eseyin, J. B., Dako, A. D., & Izuafa, B. A.",
      journal: "International Journal of Research and Innovation in Applied Science (IJRIAS), 2024: 222–232",
      doi: "https://doi.org/10.51584/IJRIAS.2024.906020",
      status: "published",
      year: 2024,
      type: "journal",
      bib: { type: "article", journal: "International Journal of Research and Innovation in Applied Science", pages: "222--232" }
    },
    {
      id: "pub-003",
      venue: "ICTSSE 2024",
      title: "Recently Emerging Trends in Embedded Computer Vision for Object Detection, Recognition, and Tracking",
      authors: "Ikegwu, A., Egwu, S. O., & Nnanna, O. C.",
      journal: "Proceedings of the International Conference on Technological Solutions for Smart Economy, Port Harcourt, Nigeria, 2024",
      doi: "",
      status: "published",
      year: 2024,
      type: "conference",
      bib: { type: "inproceedings", booktitle: "Proceedings of the International Conference on Technological Solutions for Smart Economy", address: "Port Harcourt, Nigeria" }
    },
    {
      id: "pub-004",
      venue: "ICDSE 2021",
      title: "Online Examination Proctoring for Quality Assurance in the Post COVID-19 Pandemic New Normal",
      authors: "Jubrin, A. M., Adebayo, O. S., Philips, A., Joshua, A., & Egwu, S. O.",
      journal: "Proceedings of the 1st International Conference on Data Science and Engineering, Nigeria, 2021: 25–33",
      doi: "",
      status: "published",
      year: 2021,
      type: "conference",
      bib: { type: "inproceedings", booktitle: "Proceedings of the 1st International Conference on Data Science and Engineering", address: "Nigeria", pages: "25--33" }
    },
    {
      id: "pub-006",
      venue: "",
      title: "A Machine Learning-Driven One Health System for Managing Zoonotic Diseases",
      authors: "Contributing researcher — AIA4OneHealth",
      journal: "",
      doi: "",
      status: "ongoing"
    }
  ],

  awards: [
    { id: "awd-001", name: "Constructor Institute Full Tuition Waiver, Switzerland", detail: "Value: $40,000 — Declined in favor of Veritas University funded MSc", year: "2024" },
    { id: "awd-002", name: "ATU Africa Innovation Challenge (3rd Edition) — Team Member", detail: "Value: $20,000 — Department of Software Engineering, Veritas University", year: "2024" },
    { id: "awd-003", name: "Veritas University Software Exhibition Grant", detail: "Value: $1,000", year: "2024" },
    { id: "awd-004", name: "Best Student (MSc Computer Science), Veritas University", detail: "", year: "2024" },
    { id: "awd-005", name: "Igala Education Foundation, Recognition of Academic Excellence", detail: "Value: $70", year: "2022" },
    { id: "awd-006", name: "Best Behaved Student, Graduation Set — Veritas University", detail: "Value: $250", year: "2021" },
    { id: "awd-007", name: "Best Student (BSc 400 Level) — Veritas University", detail: "", year: "2021" },
    { id: "awd-008", name: "Best Undergraduate Project — Veritas University", detail: "", year: "2021" },
    { id: "awd-009", name: "Senior Mathematics Olympiad Winner", detail: "", year: "2017" }
  ],

  projects: [
    {
      id: "proj-004",
      title: "Mpox Geospatial Risk Layer for Ogun State",
      description: "LGA-resolution mpox risk mapping for the 20 LGAs of Ogun State using an ensemble of MaxEnt, Random Forest, and XGBoost with bootstrap uncertainty and spatially blocked cross-validation. The tiered risk layer was exported as GeoJSON with tier-specific action packages and integrated into the IDS-Master surveillance platform. Published in Scientific African (2026).",
      link: "https://github.com/EgwuSamuel/geospatial_ogun",
      images: []
    },
    {
      id: "proj-001",
      title: "Maize Disease Detection System",
      description: "A mobile-based system that detects maize leaf diseases from images using the YOLOv11 object-detection model. Developed as my MSc thesis to support smallholder farmers with fast, on-device crop diagnosis.",
      link: "",
      images: []
    },
    {
      id: "proj-002",
      title: "Malaria Detection Web Application",
      description: "A web-based predictive application that classifies malaria-infected blood cells using a Convolutional Neural Network built with TensorFlow, aimed at accessible, low-cost screening.",
      link: "https://doi.org/10.51584/IJRIAS.2024.906020",
      images: []
    },
    {
      id: "proj-003",
      title: "Mpox Detection System",
      description: "A deep learning system for detecting Mpox from skin-lesion images, presented at the AI4D 2025 conference as part of ongoing One Health surveillance research.",
      link: "",
      images: []
    }
  ],

  blog: [
    {
      id: "seed-001",
      title: "Began Research Position at AIA4OneHealth",
      date: "2026-01-15",
      category: "Milestone",
      status: "published",
      content: "I am excited to share that I have joined the AIA4OneHealth research lab as a Research Assistant.\n\nMy work here focuses on three core areas:\n\n- AI for One Health: Developing machine learning-driven systems for managing zoonotic diseases.\n- Zoonotic Disease Surveillance: Building predictive models for early warning and response.\n- Geospatial Modeling: Analyzing and forecasting Mpox transmission hotspots across Ogun State and beyond.\n\nThis position builds directly on my MSc research in disease detection using deep learning, and I look forward to contributing to impactful public health solutions across Africa.\n\nI am deeply grateful to the AIA4OneHealth team for this opportunity, and to my advisors at Veritas University for their continued mentorship."
    }
  ]
};

/* Entries deleted from the site files. "Sync from site files" in admin.html removes
   them from the published (backend) content too. */
const SEED_SYNC = {
  removed: {
    publications: ["pub-005"]
  }
};

// ===== Data helpers =====
const STORAGE_KEYS = {
  about: 'portfolio_about',
  experience: 'portfolio_experience',
  education: 'portfolio_education',
  research: 'portfolio_research',
  publications: 'portfolio_publications',
  awards: 'portfolio_awards',
  projects: 'portfolio_projects',
  news: 'portfolio_news',
  interests: 'portfolio_interests',
  blog: 'admin_posts',
  gcToken: 'gc_api_token'
};

/* ===== Admin backend (Cloudflare Worker) =====
   The admin editor is protected by a real server that verifies your password
   and stores published content — the password is NEVER in this file or the page.

   After deploying worker/ (see worker/README.md), paste your Worker URL below,
   e.g.  const API_BASE = 'https://portfolio-admin.<your-subdomain>.workers.dev';

   Leave it '' to run the site fully static from the seed data above; while it is
   empty the admin editor stays locked (there is no client-side password to bypass). */
const API_BASE = 'https://portfolio-admin.egwusamuel-dev.workers.dev';

// The content keys the backend stores and the public pages render.
const CONTENT_KEYS = ['about', 'interests', 'news', 'experience', 'education', 'research', 'publications', 'awards', 'projects', 'blog'];

// In-memory copy of the content published through the backend (null until loaded).
let PUBLISHED = null;

// Fresh deep copy of the built-in seed for a given key (used as the offline fallback).
function seedFor(key) {
  if (key === 'about') return SEED_DATA.about;
  if (key === 'blog') return JSON.parse(JSON.stringify(SEED_DATA.blog));
  const arr = SEED_DATA[key];
  return arr ? JSON.parse(JSON.stringify(arr)) : [];
}

function loadData(key) {
  // 1) Content published through the backend — shared and live for every visitor.
  if (PUBLISHED && Object.prototype.hasOwnProperty.call(PUBLISHED, key) && PUBLISHED[key] != null) {
    return PUBLISHED[key];
  }
  // 2) Local cache (offline / before hydrate completes).
  try {
    const raw = localStorage.getItem(STORAGE_KEYS[key]);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  // 3) Built-in seed content.
  return seedFor(key);
}

// Build a full content object from whatever we currently have (backend, cache, or seed).
function currentContentSnapshot() {
  const snap = {};
  CONTENT_KEYS.forEach(k => { snap[k] = loadData(k); });
  return snap;
}

function saveData(key, data) {
  if (!PUBLISHED) PUBLISHED = currentContentSnapshot();
  PUBLISHED[key] = data;
  // Keep a local cache so the editor still shows edits if a push is briefly offline.
  try { localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(data)); } catch (e) {}
  // Persist to the backend (no-op unless configured AND authenticated).
  pushContent();
}

// ===== Backend auth + sync =====
// The session token lives in sessionStorage: it is cleared when the tab closes
// and is only ever obtained from the server after a correct password.
function getAuthToken() { try { return sessionStorage.getItem('admin_token') || ''; } catch (e) { return ''; } }
function setAuthToken(t) {
  try { if (t) sessionStorage.setItem('admin_token', t); else sessionStorage.removeItem('admin_token'); } catch (e) {}
}

// Read the published content from the backend (public, read-only).
async function apiFetchContent() {
  if (!API_BASE) return null;
  try {
    const res = await fetch(API_BASE + '/api/content', { cache: 'no-store' });
    if (!res.ok) return null;
    const json = await res.json();
    return (json && json.data && typeof json.data === 'object') ? json.data : null;
  } catch (e) { return null; }
}

// Load published content into PUBLISHED so pages/panels render it. Returns true on success.
async function hydratePublished() {
  const data = await apiFetchContent();
  if (data) { PUBLISHED = data; return true; }
  return false;
}

// Exchange a password for a session token. Returns true on success.
async function apiLogin(password) {
  if (!API_BASE) throw new Error('not-configured');
  const res = await fetch(API_BASE + '/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password })
  });
  if (!res.ok) return false;
  const json = await res.json().catch(() => null);
  if (json && json.token) { setAuthToken(json.token); return true; }
  return false;
}

// Push the whole content object to the backend. Only runs when authenticated.
let _pushing = false, _pushAgain = false;
async function pushContent() {
  if (!API_BASE) return;              // static mode — nothing to push to
  const token = getAuthToken();
  if (!token) return;                 // not authenticated — local-only edit
  if (_pushing) { _pushAgain = true; return; }
  _pushing = true;
  try {
    const res = await fetch(API_BASE + '/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ data: PUBLISHED })
    });
    if (res.status === 401 || res.status === 403) {
      setAuthToken('');
      if (typeof onAuthExpired === 'function') onAuthExpired();
    }
  } catch (e) {
    // Network hiccup: the local cache still holds the edit; it re-pushes on the next save.
  } finally {
    _pushing = false;
    if (_pushAgain) { _pushAgain = false; pushContent(); }
  }
}

// ===== Sync site files -> published content =====
// Keys whose seed entries are merged into the published content by id.
const SYNC_MERGE_KEYS = ['news', 'experience', 'education', 'research', 'publications', 'awards', 'projects'];
// Keys replaced wholesale by the seed version.
const SYNC_REPLACE_KEYS = ['about', 'interests'];

// Pure function: returns the merged content plus a summary of what changed.
// Seed entries win on matching ids; entries that exist only in the published
// content (added through admin) are kept; ids listed in SEED_SYNC.removed are dropped.
// The blog is left alone (blog.html already merges seed posts at render time).
function computeSeedSync(published) {
  const base = published && typeof published === 'object' ? JSON.parse(JSON.stringify(published)) : {};
  const summary = { added: [], updated: [], removed: [], replaced: [] };
  const removedMap = (typeof SEED_SYNC !== 'undefined' && SEED_SYNC.removed) || {};

  SYNC_REPLACE_KEYS.forEach(key => {
    const seed = seedFor(key);
    if (JSON.stringify(base[key]) !== JSON.stringify(seed)) summary.replaced.push(key);
    base[key] = seed;
  });

  SYNC_MERGE_KEYS.forEach(key => {
    const seedItems = seedFor(key);
    const current = Array.isArray(base[key]) ? base[key] : [];
    const removedIds = new Set(removedMap[key] || []);
    const currentById = new Map(current.map(i => [i && i.id, i]));
    const seedIds = new Set(seedItems.map(i => i.id));

    const merged = seedItems.map(item => {
      const old = currentById.get(item.id);
      // Keep images uploaded through admin when the site file has none.
      if (old && Array.isArray(old.images) && old.images.length && !(item.images && item.images.length)) {
        item = Object.assign({}, item, { images: old.images });
      }
      if (!old) summary.added.push(key + ': ' + (item.title || item.role || item.degree || item.name || item.text || item.id));
      else if (JSON.stringify(old) !== JSON.stringify(item)) summary.updated.push(key + ': ' + (item.title || item.role || item.degree || item.name || item.text || item.id));
      return item;
    });
    const adminOnly = current.filter(i => i && !seedIds.has(i.id) && !removedIds.has(i.id));
    current.forEach(i => {
      if (i && removedIds.has(i.id)) summary.removed.push(key + ': ' + (i.title || i.role || i.name || i.id));
    });
    base[key] = merged.concat(adminOnly);
  });

  return { data: base, summary };
}

// Allow only http(s), mailto and relative links in rendered hrefs.
function safeUrl(url) {
  const u = String(url || '').trim();
  if (!u) return '';
  if (/^(https?:|mailto:)/i.test(u) || /^[\w.\/#-]+$/.test(u)) return u;
  return '';
}
function safeImgUrl(url) {
  const u = String(url || '').trim();
  return /^data:image\/(png|jpe?g|gif|webp);base64,/i.test(u) ? u : safeUrl(u);
}

// ===== News dates =====
// News dates are stored as display strings: "Oct 2026" (month + year) or "2025" (year only).
const NEWS_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// "Oct 2026" -> { year: 2026, month: 10 }; "2025" -> { year: 2025, month: 0 }; unparseable -> null.
function parseNewsDate(str) {
  const s = String(str || '').trim();
  const y = s.match(/\b(\d{4})\b/);
  if (!y) return null;
  const m = s.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\b/i);
  return { year: parseInt(y[1], 10), month: m ? NEWS_MONTHS.indexOf(m[1].charAt(0).toUpperCase() + m[1].slice(1, 3).toLowerCase()) + 1 : 0 };
}
function formatNewsDate(year, month) {
  return month ? NEWS_MONTHS[month - 1] + ' ' + year : String(year);
}
// Larger = newer. A year-only item sorts above that year's dated items; unparseable dates sink to the bottom.
function newsSortKey(item) {
  const d = parseNewsDate(item && item.date);
  return d ? d.year * 100 + (d.month || 13) : -1;
}
// Newest first. Items with the same date keep their stored order (that is what reordering in admin changes).
function sortNewsNewestFirst(items) {
  return (Array.isArray(items) ? items : [])
    .map((item, i) => ({ item, i, k: newsSortKey(item) }))
    .sort((a, b) => (b.k - a.k) || (a.i - b.i))
    .map(x => x.item);
}
// Which items get the accent-coloured date. Content saved before the Highlight option existed
// has no `highlight` field at all; it keeps the old look (newest item highlighted).
function newsHighlightFlags(sortedItems) {
  const legacy = !sortedItems.some(n => n && Object.prototype.hasOwnProperty.call(n, 'highlight'));
  return sortedItems.map((n, i) => legacy ? i === 0 : !!(n && n.highlight));
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str || '';
  return div.innerHTML;
}

function generateId() {
  return 'item-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

/* ===== Global visit counter (worldwide, no backend needed) ===== */
const VISIT_COUNTER = {
  base: 'https://abacus.jasoncameron.dev',
  ns: 'egwusamuel-github-portfolio',
  key: 'site-visits'
};

// Increment the global counter — call once per visit on public pages
function bumpVisitCount() {
  try {
    fetch(`${VISIT_COUNTER.base}/hit/${VISIT_COUNTER.ns}/${VISIT_COUNTER.key}`, { cache: 'no-store' }).catch(() => {});
  } catch (e) { /* offline / blocked — ignore */ }
}

// Count each visit at most once per browser session (refreshes don't inflate it)
function trackVisit() {
  try {
    if (sessionStorage.getItem('sev_counted')) return;
    sessionStorage.setItem('sev_counted', '1');
  } catch (e) { /* private mode — still count */ }
  bumpVisitCount();
}

/* ===== GoatCounter (per-country views) =====
   Set this to your GoatCounter site code (e.g. 'egwusamuel' for egwusamuel.goatcounter.com).
   Leave empty until you've signed up — the admin panel shows setup steps while it's blank. */
const GOATCOUNTER_CODE = 'samuelegwu';

// Inject the GoatCounter tracker on public pages (no-op until the code is set)
function initGoatCounter() {
  if (!GOATCOUNTER_CODE) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', `https://${GOATCOUNTER_CODE}.goatcounter.com/count`);
  document.head.appendChild(s);
}

// GoatCounter read-only API token — stored per-browser (localStorage), never committed to the repo
function getGcToken() { try { return (localStorage.getItem(STORAGE_KEYS.gcToken) || '').trim(); } catch (e) { return ''; } }
function saveGcToken(t) { try { localStorage.setItem(STORAGE_KEYS.gcToken, (t || '').trim()); } catch (e) {} }

// Fetch per-country view stats from GoatCounter (needs a read-only token)
async function fetchCountryStats(token) {
  const base = `https://${GOATCOUNTER_CODE}.goatcounter.com`;
  const qs = new URLSearchParams({ start: '2024-01-01', end: new Date().toISOString().slice(0, 10), limit: '250' });
  const res = await fetch(`${base}/api/v0/stats/locations?${qs}`, { headers: { Authorization: 'Bearer ' + token } });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
  return (data.stats || []).map(s => ({ code: (s.id || '').toUpperCase(), name: s.name || s.id || 'Unknown', count: s.count || 0 }));
}

// Country ISO code -> flag emoji
function countryFlag(code) {
  if (!code || code.length !== 2) return '🏳️';
  return code.toUpperCase().replace(/./g, c => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

// Read the global counter WITHOUT incrementing (used by the admin panel)
async function getVisitCount() {
  const res = await fetch(`${VISIT_COUNTER.base}/get/${VISIT_COUNTER.ns}/${VISIT_COUNTER.key}`, { cache: 'no-store' });
  if (res.status === 404) return 0;          // key exists once first visit lands
  if (!res.ok) throw new Error('counter unavailable');
  const data = await res.json();
  return typeof data.value === 'number' ? data.value : 0;
}