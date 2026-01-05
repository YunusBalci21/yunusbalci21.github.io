const CONTENT = {
    name: "Your Name",
    headline: "Clean work. Sharp motion. Real builds.",
    tagline: "Websites, experiments, and systems I’m building right now.",
    links: {
        github: "https://github.com/YOUR_GITHUB_USERNAME",
        website: "https://YOURDOMAIN.example",
        email: "mailto:you@example.com",
        emailRaw: "you@example.com",
        resumePdf: "assets/motion-language-model.pdf"
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
            href: "https://pilea.dk",
            tags: ["Demo", "UI", "Iteration"]
        }
    ],

    projects: [
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
            title: "ANIMA",
            meta: "In progress",
            description: "Agent simulation with emergent behavior and optional LLM-based cognition.",
            href: "https://github.com/YOUR_GITHUB_USERNAME/anima",
            tags: ["Simulation", "AI", "Agents"]
        }
    ],

    research: [
        {
            title: "Motion-language model notes",
            meta: "PDF + repo",
            description: "Open-vocabulary instruction following without vision using motion-language alignment + hierarchical RL.",
            href: "assets/motion-language-model.pdf",
            secondaryHref: "https://github.com/YOUR_GITHUB_USERNAME/motion-language-model",
            tags: ["ML", "RL", "MuJoCo"]
        }
    ],

    now: [
        { label: "Motion-language model", value: "Alignment + hierarchical RL" },
        { label: "Website builds", value: "Production + experiments" },
        { label: "Simulation systems", value: "Agents + emergent behavior" }
    ],

    footerNote: "Minimal, fast, and deployable on GitHub Pages.",
    footerLeft: `© ${new Date().getFullYear()}`,
    footerRight: "built in black/white"
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

    const githubLinks = $all('[data-bind-href="github"]');
    githubLinks.forEach((a) => (a.href = CONTENT.links.github));

    const websiteLinks = $all('[data-bind-href="website"]');
    websiteLinks.forEach((a) => (a.href = CONTENT.links.website));

    const emailLinks = $all('[data-bind-href="email"]');
    emailLinks.forEach((a) => (a.href = CONTENT.links.email));

    const footerNote = $('[data-bind="footerNote"]');
    if (footerNote) footerNote.textContent = CONTENT.footerNote;

    const footerLeft = $('[data-bind="footerLeft"]');
    if (footerLeft) footerLeft.textContent = CONTENT.footerLeft;

    const footerRight = $('[data-bind="footerRight"]');
    if (footerRight) footerRight.textContent = CONTENT.footerRight;

    const resumeBtn = $("#resumeBtn");
    if (resumeBtn) resumeBtn.href = CONTENT.links.resumePdf;

    const emailLink = $("#emailLink");
    if (emailLink) emailLink.href = CONTENT.links.email;
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
    hint.textContent = item.secondaryHref ? "open / pdf + repo" : "open";

    const link = document.createElement("a");
    link.className = "card__link";
    link.href = item.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.ariaLabel = `Open ${item.title}`;

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
        const intro = $(".intro");
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
