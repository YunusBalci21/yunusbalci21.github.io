const CONTENT = {
  name: "Yunus Emre Balci",
  headline: "Clean work. Sharp motion. Real builds.",
  tagline: "Open to work — I build websites, experiments, and systems.",

  links: {
    github: "https://github.com/YunusBalci21/",
    linkedin: "https://www.linkedin.com/in/yunus-emre-balci/",
    email: "mailto:yunus27@live.dk",
    emailRaw: "yunus27@live.dk",

    // Optional: drop your motion-language PDF into /assets and point to it here.
    motionPdf: "assets/motion-language-model.pdf"
  },

  websites: [
    {
      title: "jamabolig.dk",
      meta: "Live site",
      description: "Website build and deployment. Clean layout, fast loading, and structured content.",
      href: "https://jamabolig.dk",
      tags: ["Web", "Production", "Front-end"]
    },
    {
      title: "hdcgroup.dk",
      meta: "Live site",
      description: "Corporate site with sharp typography and straightforward information architecture.",
      href: "https://hdcgroup.dk",
      tags: ["Web", "Brand", "Business"]
    },
    {
      title: "pilea.dk (demo)",
      meta: "Demo",
      description: "Experimental demo build for Pilea. Built to iterate quickly and test direction.",
      href: "https://pilea-dk.vercel.app/",
      tags: ["Demo", "UI", "Iteration"]
    }
  ],


  projects: [
    {
      title: "MyDrive (MVP)",
      meta: "Mobile app (2025)",
      description: "End-to-end MVP vehicle management app built as sole technical founder (React Native, Firebase).",
      tags: ["React Native", "Firebase", "MVP"]
    },
    {
      title: "CTF Bachelor Project",
      meta: "Academic (Grade: 10)",
      description: "Capture the Flag challenges involving machine learning and SQL injection — part of my bachelor's project.",
      href: "https://github.com/YunusBalci21/ctf-bachelor-project", // <-- Actual repo name if different
      tags: ["Security", "CTF", "ML"]
    },
    {
      title: "Language-guided RL Agents",
      meta: "Research",
      description: "Agents trained to follow natural language instructions using reinforcement learning.",
      href: "https://github.com/YunusBalci21/motion-language-model", // <-- your motion-language-model repo
      tags: ["RL", "Agents", "Research"]
    },
    {
      title: "fidelio-music-bot",
      meta: "GitHub",
      description: "Discord music bot with presets and audio pipeline work.",
      href: "https://github.com/YunusBalci21/fidelio-music-bot",
      tags: ["Node.js", "Discord", "Audio"]
    },
    {
      title: "antivirus-project",
      meta: "GitHub",
      description: "C++ antivirus project focusing on core scanning and system-level patterns.",
      href: "https://github.com/YunusBalci21/antivirus-project",
      tags: ["C++", "Systems", "Security"]
    },
    {
      title: "rl-project",
      meta: "GitHub",
      description: "Reinforcement learning experiments and training pipelines.",
      href: "https://github.com/YunusBalci21/rl-project",
      tags: ["RL", "Python", "Research"]
    },
    {
      title: "ANIMA (Simulation)",
      meta: "In progress",
      description: "Agent-based simulation with emergent behavior and LLM-powered cognition.",
      href: "https://github.com/YunusBalci21/anima", // <-- your actual ANIMA repo link
      tags: ["Simulation", "AI", "Agents"]
    }
  ],


  research: [
    {
      title: "Motion-Language Model",
      meta: "PDF + GitHub",
      description: "Open-vocabulary instruction following without vision using motion-language alignment and hierarchical RL.",
      href: "assets/motion-language-model.pdf",
      secondaryHref: "https://github.com/YunusBalci21/motion-language-model",
      tags: ["ML", "RL", "MuJoCo"]
    },
    {
      title: "Curriculum Vitae",
      meta: "CV page + PDF",
      description: "Full CV page with embedded PDF and a readable version.",
      href: "cv.html",
      secondaryHref: "assets/Yunus_Emre_Balci_CV.pdf",
      tags: ["CV", "Experience"]
    }
  ],

  now: [
    { label: "Open to work", value: "Websites + engineering" },
    { label: "Building", value: "Clean web + prototypes" },
    { label: "Research", value: "RL + language-guided agents" }
  ],

  footerNote: "Available for freelance and full-time work — websites, tooling, and prototypes.",
  footerLeft: `© ${new Date().getFullYear()} Yunus Emre Balci — All rights reserved.`,
  footerRight: "Made by Yunus Emre Balci"
};

function $(sel, parent = document) {
  return parent.querySelector(sel);
}
function $all(sel, parent = document) {
  return Array.from(parent.querySelectorAll(sel));
}

function bindContent() {
  const nameEl = $('[data-bind="name"]');
  const headlineEl = $('[data-bind="headline"]');
  const taglineEl = $('[data-bind="tagline"]');

  if (nameEl) nameEl.textContent = CONTENT.name;
  if (headlineEl) headlineEl.textContent = CONTENT.headline;
  if (taglineEl) taglineEl.textContent = CONTENT.tagline;

  $all('[data-bind-href="github"]').forEach((a) => (a.href = CONTENT.links.github));
  $all('[data-bind-href="linkedin"]').forEach((a) => (a.href = CONTENT.links.linkedin));
  $all('[data-bind-href="email"]').forEach((a) => (a.href = CONTENT.links.email));

  const emailLink = $("#emailLink");
  if (emailLink) emailLink.textContent = CONTENT.links.emailRaw;

  const footerNote = $('[data-bind="footerNote"]');
  if (footerNote) footerNote.textContent = CONTENT.footerNote;

  const footerLeft = $('[data-bind="footerLeft"]');
  if (footerLeft) footerLeft.textContent = CONTENT.footerLeft;

  const footerRight = $('[data-bind="footerRight"]');
  if (footerRight) footerRight.textContent = CONTENT.footerRight;
}

function makeCard(item) {
  const card = document.createElement("article");
  card.className = "card reveal";

  const top = document.createElement("div");
  top.className = "card__top";

  const title = document.createElement("h3");
  title.className = "card__title";
  title.textContent = item.title;

  const meta = document.createElement("span");
  meta.className = "card__meta mono";
  meta.textContent = item.meta || "";

  top.appendChild(title);
  top.appendChild(meta);

  const desc = document.createElement("p");
  desc.className = "card__desc";
  desc.textContent = item.description || "";

  const tags = document.createElement("div");
  tags.className = "tags";
  (item.tags || []).forEach((t) => {
    const tag = document.createElement("span");
    tag.className = "tag mono";
    tag.textContent = t;
    tags.appendChild(tag);
  });

  const hint = document.createElement("div");
  hint.className = "card__hint mono";
  hint.textContent = item.secondaryHref ? "open / page + pdf" : "open";

  const link = document.createElement("a");
  link.className = "card__link";
  link.href = item.href;
  link.target = item.href.startsWith("http") ? "_blank" : "_self";
  link.rel = item.href.startsWith("http") ? "noopener noreferrer" : "";

  card.appendChild(top);
  card.appendChild(desc);
  card.appendChild(tags);
  card.appendChild(hint);
  card.appendChild(link);

  if (item.secondaryHref) {
    card.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey) return;
      if (e.shiftKey) {
        e.preventDefault();
        window.open(item.secondaryHref, "_blank", "noopener,noreferrer");
      }
    });
  }

  return card;
}

function renderSection(key, items) {
  const mount = $(`[data-render="${key}"]`);
  if (!mount) return;
  items.forEach((item) => mount.appendChild(makeCard(item)));
}

function renderNow(items) {
  const mount = $(`[data-render="now"]`);
  if (!mount) return;

  items.forEach((it) => {
    const row = document.createElement("div");
    row.className = "now__item";

    const left = document.createElement("strong");
    left.textContent = it.label;

    const right = document.createElement("span");
    right.className = "mono";
    right.textContent = it.value;

    row.appendChild(left);
    row.appendChild(right);
    mount.appendChild(row);
  });
}

function setupReveals() {
  const els = $all(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in-view");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  els.forEach((el) => io.observe(el));
}

function setupSmoothAnchors() {
  $all('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = $(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });
}

function setupTheme() {
  const btn = $("#themeBtn");
  const stored = localStorage.getItem("theme");
  if (stored === "dark") document.documentElement.setAttribute("data-theme", "dark");

  if (!btn) return;

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
}

function setupCopyEmail() {
  const btn = $("#copyEmailBtn");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CONTENT.links.emailRaw);
      btn.textContent = "Copied";
      setTimeout(() => (btn.textContent = "Copy email"), 900);
    } catch {
      btn.textContent = "Copy failed";
      setTimeout(() => (btn.textContent = "Copy email"), 900);
    }
  });
}

function setupIntro() {
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
    const intro = document.querySelector(".intro");
    if (intro) setTimeout(() => intro.remove(), 600);
  });
}

function main() {
  bindContent();

  renderSection("websites", CONTENT.websites);
  renderSection("projects", CONTENT.projects);
  renderSection("research", CONTENT.research);
  renderNow(CONTENT.now);

  setupReveals();
  setupSmoothAnchors();
  setupTheme();
  setupCopyEmail();
  setupIntro();
}

main();
