/* ===== Portfolio Data ===== */
/* Seed content loaded on first visit. Admin edits stored in localStorage override these. */

const SEED_DATA = {
  about: "I am a computer scientist and machine learning researcher dedicated to applying computational methods to pressing public health challenges. My work spans medical imaging—developing deep learning models for malaria and maize disease detection—and One Health surveillance, where I contribute to AI-driven systems for managing zoonotic diseases like Mpox. I serve as an Assistant Lecturer and Research Assistant at Veritas University, Abuja, while collaborating with the AIA4OneHealth lab on geospatial modeling and predictive analytics for disease transmission hotspots across Africa.",

  education: [
    {
      id: "edu-001",
      date: "Oct 2023 – Apr 2025",
      degree: "MSc Computer Science",
      institution: "Veritas University, Abuja, Nigeria",
      details: "CGPA: 4.73/5.0 | Advisor: Dr. Mustapha Aminu | Thesis: A Mobile-Based Maize Disease Detection System Using YOLOv11 Model"
    },
    {
      id: "edu-002",
      date: "Sep 2017 – Sep 2021",
      degree: "BSc Computer Science",
      institution: "Veritas University, Abuja, Nigeria",
      details: "CGPA: 4.56/5.0 | Advisor: Dr. Emmanuel Mkpojiogu | Thesis: Design and Implementation of an Online Proctoring Examination System"
    }
  ],

  research: [
    {
      id: "res-001",
      date: "Jan 2026 – Present",
      role: "Research Assistant",
      institution: "AIA4OneHealth",
      details: "Research Areas: AI for One Health, Zoonotic Disease Surveillance, Geospatial Modeling, Deep Learning for Public Health. Contributing to development of a machine learning-driven One Health system for managing zoonotic diseases. Conducting geospatial analysis and predictive modeling of Mpox transmission hotspots."
    },
    {
      id: "res-002",
      date: "2023 – Present",
      role: "Research Assistant",
      institution: "Veritas University, Abuja, Nigeria",
      details: "Research Areas: Computer Vision, Medical Imaging, Deep Learning for Disease Detection. Designed and implemented a Convolutional Neural Network (CNN) model for detecting malaria-infected cells and identifying maize streak virus. Investigated recent advancements in object detection, recognition, and tracking for embedded computer vision."
    },
    {
      id: "res-003",
      date: "2021 – 2024",
      role: "Undergraduate Researcher",
      institution: "Veritas University, Abuja, Nigeria",
      details: "Research Areas: Digital Forensics, Human-Computer Interaction, Online Assessment Systems. Developed an online proctoring examination system to ensure academic integrity in remote assessments."
    }
  ],

  publications: [
    {
      id: "pub-001",
      venue: "AI4D 2025",
      title: "Mpox Detection System Using Deep Learning",
      authors: "Sodiya, A. S., Falana, O. J., Egwu, S. O., Imhonophi, G. B., Awodele, O., Aborisade, D. O., & Abdullahi, A.",
      journal: "PAIDeF Artificial Intelligence for Development (AI4D) Conference Proceedings, 2025",
      doi: "",
      status: "published"
    },
    {
      id: "pub-002",
      venue: "IJRIAS 2024",
      title: "Advancing Malaria Detection: A Comparative Study and Proposal for Web-Based Predictive Application Utilizing CNN and TensorFlow",
      authors: "Egwu, S. O., Eseyin, J. B., Dako, A. D., & Izuafa, B. A.",
      journal: "International Journal of Research and Innovation in Applied Science (IJRIAS), 2024: 222–232",
      doi: "https://doi.org/10.51584/IJRIAS.2024.906020",
      status: "published"
    },
    {
      id: "pub-003",
      venue: "ICTSSE 2024",
      title: "Recently Emerging Trends in Embedded Computer Vision for Object Detection, Recognition, and Tracking",
      authors: "Ikegwu, A., Egwu, S. O., & Nnanna, O. C.",
      journal: "Proceedings of the International Conference on Technological Solutions for Smart Economy, Port Harcourt, Nigeria, 2024",
      doi: "",
      status: "published"
    },
    {
      id: "pub-004",
      venue: "ICDSE 2021",
      title: "Online Examination Proctoring for Quality Assurance in the Post COVID-19 Pandemic New Normal",
      authors: "Jubrin, A. M., Adebayo, O. S., Philips, A., Joshua, A., & Egwu, S. O.",
      journal: "Proceedings of the 1st International Conference on Data Science and Engineering, Nigeria, 2021: 25–33",
      doi: "",
      status: "published"
    },
    {
      id: "pub-005",
      venue: "",
      title: "Mpox-HSAM: A Mpox Detection System Using Optimised Hybrid Deep Learning Model",
      authors: "Sodiya, A. S., Aborisade, D. O., Egwu, S. O., Abdullahi, A., & Olasoju, M. I.",
      journal: "Manuscript submitted to Scientific Reports, 2026",
      doi: "",
      status: "under-review"
    },
    {
      id: "pub-006",
      venue: "",
      title: "A Machine Learning-Driven One Health System for Managing Zoonotic Diseases",
      authors: "Contributing researcher — AIA4OneHealth",
      journal: "",
      doi: "",
      status: "ongoing"
    },
    {
      id: "pub-007",
      venue: "",
      title: "Geospatial Analysis and Predictive Modeling of Mpox Transmission Hotspots: A Case Study of Ogun State",
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

// ===== Data helpers =====
const STORAGE_KEYS = {
  about: 'portfolio_about',
  education: 'portfolio_education',
  research: 'portfolio_research',
  publications: 'portfolio_publications',
  awards: 'portfolio_awards',
  blog: 'admin_posts',
  pin: 'admin_pin'
};

function loadData(key) {
  const raw = localStorage.getItem(STORAGE_KEYS[key]);
  if (raw) {
    try { return JSON.parse(raw); } catch(e) {}
  }
  if (key === 'about') return SEED_DATA.about;
  if (key === 'blog') return SEED_DATA.blog;
  const arr = SEED_DATA[key];
  return arr ? [...arr] : [];
}

function saveData(key, data) {
  localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(data));
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