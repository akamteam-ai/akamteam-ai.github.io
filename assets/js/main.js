/*  Renders the page from window.SITE (data/site.js), in either language.
 *  Plain DOM, no dependencies — works from file:// as well as a server.
 */
(function () {
  "use strict";

  var S = window.SITE;
  if (!S) { console.error("data/site.js did not load"); return; }

  var root = document.documentElement;
  var lang = pickLang();

  /* ------------------------------------------------------- utilities */

  function pickLang() {
    var stored = null;
    try { stored = localStorage.getItem("lang"); } catch (e) { /* private mode */ }
    if (stored && S.languages[stored]) return stored;
    var nav = (navigator.language || "").toLowerCase();
    if (nav.indexOf("fa") === 0 || nav.indexOf("pe") === 0) return "fa";
    return S.defaultLang || "en";
  }

  /*  t(value): a { en, fa } object resolves to the current language;
   *  anything else (a URL, a library name) passes straight through.   */
  function t(v) {
    if (v && typeof v === "object" && !Array.isArray(v)) {
      return v[lang] != null ? v[lang] : (v[S.defaultLang] || "");
    }
    return v == null ? "" : v;
  }

  function path(obj, dotted) {
    return dotted.split(".").reduce(function (o, k) {
      return o == null ? o : o[k];
    }, obj);
  }

  var $ = function (sel, r) { return (r || document).querySelector(sel); };

  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  function external(a, href) {
    a.href = href;
    if (href.indexOf("mailto:") !== 0) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  var NS = "http://www.w3.org/2000/svg";
  function svgEl(tag, attrs) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) n.setAttribute(k, attrs[k]);
    return n;
  }

  var membersById = {};
  S.members.forEach(function (m) { membersById[m.id] = m; });

  /* ------------------------------------------------------------ icons */

  var ICON = {
    github: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
    kaggle: "M8.2 3v11.1l4.6-4.6h3.1l-4.8 4.7 4.9 6.8h-3l-3.5-5-1.3 1.2V21H5.7V3h2.5Z",
    mail:   "M3 5.5h18v13H3zM3 6l9 7 9-7",
    link:   "M7 17 17 7M9 7h8v8",
    globe:  "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z",
    user:   "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.5 20.5c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5",
    lock:   "M6 10.5h12v9.5H6zM8.5 10.5V7.6a3.5 3.5 0 0 1 7 0v2.9",
    linkedin: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.1a4.2 4.2 0 0 1 3.8-2c4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z"
  };
  var FILLED = { github: true, kaggle: true, linkedin: true };

  function icon(name) {
    var svg = svgEl("svg", { viewBox: "0 0 24 24", "aria-hidden": "true" });
    var p = svgEl("path", { d: ICON[name] });
    if (FILLED[name]) { p.setAttribute("fill", "currentColor"); p.setAttribute("stroke", "none"); }
    svg.appendChild(p);
    return svg;
  }

  /* ------------------------------------------------------ card covers */
  /*  A faint line motif behind each card title, chosen per project so a
   *  card reads as belonging to its domain without a photograph.        */

  var COVERS = {
    waveform: function (g) {                       /* speech / liveness */
      for (var i = 0; i < 26; i++) {
        var h = 6 + Math.abs(Math.sin(i * 1.7)) * 34 + (i % 3) * 4;
        g.appendChild(svgEl("line", {
          x1: 8 + i * 6.6, y1: 50 - h / 2, x2: 8 + i * 6.6, y2: 50 + h / 2
        }));
      }
    },
    scan: function (g) {                           /* document / ID     */
      g.appendChild(svgEl("rect", { x: 24, y: 16, width: 128, height: 68, rx: 6 }));
      [30, 44, 58].forEach(function (y, i) {
        g.appendChild(svgEl("line", { x1: 76, y1: y, x2: 140 - i * 22, y2: y }));
      });
      g.appendChild(svgEl("rect", { x: 36, y: 30, width: 28, height: 34, rx: 3 }));
      g.appendChild(svgEl("line", { x1: 8, y1: 50, x2: 168, y2: 50, "stroke-dasharray": "4 5" }));
    },
    chart: function (g) {                          /* analytics         */
      var pts = [14, 34, 22, 46, 30, 58, 40, 26, 52, 40, 30, 62];
      pts.forEach(function (h, i) {
        g.appendChild(svgEl("rect", {
          x: 12 + i * 13, y: 82 - h, width: 7, height: h, rx: 1.5
        }));
      });
    },
    network: function (g) {                        /* embeddings / agent */
      var nodes = [[26, 50], [70, 24], [70, 76], [114, 40], [114, 66], [154, 52]];
      [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [1, 4]].forEach(function (e) {
        g.appendChild(svgEl("line", {
          x1: nodes[e[0]][0], y1: nodes[e[0]][1],
          x2: nodes[e[1]][0], y2: nodes[e[1]][1]
        }));
      });
      nodes.forEach(function (n) {
        g.appendChild(svgEl("circle", { cx: n[0], cy: n[1], r: 5 }));
      });
    },
    layers: function (g) {                         /* MRI slice stack   */
      for (var i = 0; i < 5; i++) {
        g.appendChild(svgEl("rect", {
          x: 20 + i * 26, y: 22 + i * 5, width: 60, height: 56, rx: 8
        }));
      }
      g.appendChild(svgEl("circle", { cx: 128, cy: 52, r: 11 }));
    },
    track: function (g) {                          /* tracking / pose   */
      g.appendChild(svgEl("path", { d: "M12 74 C 46 30, 74 82, 106 40 S 150 30, 166 58" }));
      g.appendChild(svgEl("path", { d: "M12 40 C 50 68, 80 22, 112 66 S 148 74, 166 34",
                                    "stroke-dasharray": "5 6" }));
      [[46, 47], [106, 40], [140, 44]].forEach(function (p) {
        g.appendChild(svgEl("rect", { x: p[0] - 9, y: p[1] - 9, width: 18, height: 18, rx: 2 }));
      });
    },
    stack: function (g) {                          /* layered services  */
      for (var i = 0; i < 4; i++) {
        g.appendChild(svgEl("rect", { x: 30, y: 16 + i * 19, width: 116, height: 13, rx: 3 }));
      }
      g.appendChild(svgEl("line", { x1: 22, y1: 12, x2: 22, y2: 90 }));
    }
  };

  function cover(name) {
    var draw = COVERS[name];
    if (!draw) return null;
    var svg = svgEl("svg", {
      class: "card-cover", viewBox: "0 0 176 100",
      preserveAspectRatio: "xMidYMid meet", "aria-hidden": "true"
    });
    var g = svgEl("g", {
      fill: "none", stroke: "currentColor", "stroke-width": "1.6",
      "stroke-linecap": "round", "stroke-linejoin": "round"
    });
    draw(g);
    svg.appendChild(g);
    return svg;
  }

  /* ----------------------------------------------------- shared parts */

  function linkBtn(href, label, iconName, primary) {
    var a = external(el("a", "btn" + (primary ? " btn-primary" : "")), href);
    if (iconName) a.appendChild(icon(iconName));
    a.appendChild(el("span", null, label));
    return a;
  }

  function statRow(node, stats) {
    node.textContent = "";
    stats.forEach(function (s) {
      var d = el("div");
      d.appendChild(el("dt", null, t(s.value)));
      d.appendChild(el("dd", null, t(s.label)));
      node.appendChild(d);
    });
  }

  /*  A round portrait, or the member's initials when there is no photo.  */
  function avatar(m, cls) {
    var wrap = el("span", "avatar " + (cls || ""));
    if (m.avatar) {
      var img = el("img");
      img.src = m.avatar; img.alt = ""; img.loading = "lazy";
      img.addEventListener("error", function () {
        img.remove(); wrap.textContent = m.initials;
      });
      wrap.appendChild(img);
    } else {
      wrap.textContent = m.initials;
    }
    return wrap;
  }

  /* ---------------------------------------------------------- services */

  function renderServices() {
    var grid = $("#serviceGrid"); grid.textContent = "";
    S.services.forEach(function (s, i) {
      var c = el("article", "service card");
      var cv = cover(s.cover); if (cv) c.appendChild(cv);
      c.appendChild(el("span", "service-num", String(i + 1).padStart(2, "0")));
      c.appendChild(el("h3", null, t(s.name)));
      c.appendChild(el("p", "card-desc", t(s.description)));
      grid.appendChild(c);
    });

    var beyond = $("#beyondGrid"); beyond.textContent = "";
    S.beyond.forEach(function (b) {
      var d = el("div", "beyond-item");
      d.appendChild(el("h4", null, t(b.name)));
      d.appendChild(el("p", null, t(b.description)));
      beyond.appendChild(d);
    });
  }

  /* -------------------------------------------------------------- team */

  function renderTeam() {
    var grid = $("#teamGrid"); grid.textContent = "";
    var B = S.ui.buttons;
    S.members.forEach(function (m) {
      var c = el("article", "member" + (m.honorary ? " is-honorary" : ""));
      c.appendChild(avatar(m, "avatar-l"));

      var body = el("div", "member-body");
      body.appendChild(el("h3", null, t(m.name)));
      body.appendChild(el("p", "member-role", t(m.role)));
      if (t(m.bio)) body.appendChild(el("p", "member-bio", t(m.bio)));

      var L = m.links || {}, row = el("div", "member-links");
      [["portfolio", "user"], ["github", "github"], ["kaggle", "kaggle"], ["linkedin", "linkedin"]]
        .forEach(function (pair) {
          if (!L[pair[0]]) return;
          var a = external(el("a", "icon-link"), L[pair[0]]);
          a.setAttribute("aria-label", t(m.name) + " — " + t(B[pair[0]]));
          a.title = t(B[pair[0]]);
          a.appendChild(icon(pair[1]));
          row.appendChild(a);
        });
      if (row.childNodes.length) body.appendChild(row);

      c.appendChild(body);
      grid.appendChild(c);
    });
  }

  /* ------------------------------------------------------------ cards */

  var activeMember = "all", activeTag = "all";

  function card(p) {
    var c = el("article", "card" + (p.featured ? " is-featured" : ""));
    c.dataset.tags = (p.tags || []).join("|");
    c.dataset.members = (p.members || []).join("|") + (p.team ? "|team" : "");

    var cv = cover(p.cover);
    if (cv) c.appendChild(cv);

    var top = el("div", "card-top");
    top.appendChild(el("h3", null, t(p.name)));
    if (p.year) top.appendChild(el("span", "card-year", p.year));
    c.appendChild(top);

    if (p.subtitle) c.appendChild(el("p", "card-sub", t(p.subtitle)));

    var who = el("div", "card-members");
    if (p.team) {
      var badge = el("span", "team-badge");
      var mark = el("img"); mark.src = S.company.emblem; mark.alt = "";
      badge.appendChild(mark);
      badge.appendChild(el("span", null, t(S.ui.projects.teamBadge)));
      who.appendChild(badge);
    }
    (p.members || []).forEach(function (id) {
      var m = membersById[id]; if (!m) return;
      var chip = el("span", "member-chip");
      chip.appendChild(avatar(m, "avatar-s"));
      chip.appendChild(el("span", null, t(m.name)));
      who.appendChild(chip);
    });
    c.appendChild(who);

    c.appendChild(el("p", "card-desc", t(p.description)));

    if (p.highlights && p.highlights.length) {
      var ul = el("ul", "card-highlights");
      p.highlights.forEach(function (h) { ul.appendChild(el("li", null, t(h))); });
      c.appendChild(ul);
    }

    if (p.tech && p.tech.length) {
      var tl = el("ul", "tech-list");
      p.tech.forEach(function (x) { tl.appendChild(el("li", null, t(x))); });
      c.appendChild(tl);
    }

    var foot = el("div", "card-foot");
    if (p.private) {
      var lock = el("span", "card-private");
      lock.appendChild(icon("lock"));
      lock.appendChild(el("span", null, t(p.privateNote) || t(S.ui.projects.privateDefault)));
      foot.appendChild(lock);
    }
    (p.links || []).forEach(function (l) {
      var label = typeof l.label === "string" ? S.ui.projects[l.label] : l.label;
      var a = external(el("a", "card-link"), l.url);
      a.appendChild(el("span", null, t(label)));
      a.appendChild(icon("link"));
      foot.appendChild(a);
    });
    if (foot.childNodes.length) c.appendChild(foot);
    return c;
  }

  function applyFilter() {
    var shown = 0;
    $("#projectGrid").querySelectorAll(".card").forEach(function (c) {
      var okM = activeMember === "all" || c.dataset.members.split("|").indexOf(activeMember) !== -1;
      var okT = activeTag === "all" || c.dataset.tags.split("|").indexOf(activeTag) !== -1;
      c.hidden = !(okM && okT);
      if (okM && okT) shown++;
    });
    $("#emptyNote").hidden = shown > 0;
  }

  function filterRow(node, options, current, onPick) {
    node.textContent = "";
    options.forEach(function (o) {
      var b = el("button", "filter-btn", o.label);
      b.type = "button";
      b.setAttribute("aria-pressed", o.id === current ? "true" : "false");
      b.addEventListener("click", function () {
        node.querySelectorAll(".filter-btn").forEach(function (x) {
          x.setAttribute("aria-pressed", x === b ? "true" : "false");
        });
        onPick(o.id);
        applyFilter();
      });
      node.appendChild(b);
    });
  }

  function renderProjects() {
    var grid = $("#projectGrid"); grid.textContent = "";
    S.projects.forEach(function (p) { grid.appendChild(card(p)); });

    /* people: only members who appear on at least one project */
    var people = [{ id: "all", label: t(S.ui.projects.all) },
                  { id: "team", label: t(S.company.name) }];
    S.members.forEach(function (m) {
      var has = S.projects.some(function (p) { return (p.members || []).indexOf(m.id) !== -1; });
      if (has) people.push({ id: m.id, label: t(m.name) });
    });
    filterRow($("#memberFilters"), people, activeMember, function (id) { activeMember = id; });

    var tags = ["all"];
    S.projects.forEach(function (p) {
      (p.tags || []).forEach(function (x) { if (tags.indexOf(x) === -1) tags.push(x); });
    });
    filterRow($("#topicFilters"), tags.map(function (id) {
      return { id: id, label: id === "all" ? t(S.ui.projects.all) : (t(S.tagLabels[id]) || id) };
    }), activeTag, function (id) { activeTag = id; });

    applyFilter();
  }

  /* ------------------------------------------------------------ kaggle */

  function renderKaggle() {
    var grid = $("#kaggleGrid"); grid.textContent = "";
    var U = S.ui.kaggle;
    S.kaggle.forEach(function (k) {
      var m = membersById[k.member];
      var c = el("article", "kaggle-card");

      var head = el("div", "kaggle-head");
      if (m) head.appendChild(avatar(m, "avatar-m"));
      var id = el("div");
      if (m) id.appendChild(el("strong", "kaggle-name", t(m.name)));
      id.appendChild(el("span", "kaggle-user", k.profiles.map(function (p) {
        return "@" + p.username;
      }).join(" · ")));
      head.appendChild(id);
      c.appendChild(head);

      var stats = el("dl", "kaggle-stats");
      ["datasets", "models", "notebooks"].forEach(function (key) {
        var d = el("div");
        d.appendChild(el("dt", null, String(k.stats[key])));
        d.appendChild(el("dd", null, t(U[key])));
        stats.appendChild(d);
      });
      c.appendChild(stats);

      var ul = el("ul", "chip-list");
      k.selected.forEach(function (s) {
        var li = el("li");
        li.appendChild(el("b", null, s.name));
        li.appendChild(el("em", null, t(s.meta)));
        ul.appendChild(li);
      });
      c.appendChild(ul);

      /*  One link per account: a member's work is split across profiles.  */
      var foot = el("div", "kaggle-foot");
      k.profiles.forEach(function (p) {
        var a = external(el("a", "card-link"), p.url);
        a.appendChild(el("span", "kaggle-handle", "@" + p.username));
        a.appendChild(icon("link"));
        foot.appendChild(a);
      });
      c.appendChild(foot);

      grid.appendChild(c);
    });
  }

  /* ------------------------------------------------------------ render */

  function render() {
    var L = S.languages[lang];
    root.setAttribute("lang", lang);
    root.setAttribute("dir", L.dir);
    document.body.classList.toggle("is-rtl", L.dir === "rtl");

    /* every element carrying a data-t path */
    document.querySelectorAll("[data-t]").forEach(function (n) {
      n.textContent = t(path(S, n.getAttribute("data-t")));
    });

    /* accessible names that are attributes, not text */
    $("#navLinks").setAttribute("aria-label", t(S.ui.nav.label));
    $("#memberFilters").setAttribute("aria-label", t(S.ui.projects.memberFilterLabel));
    $("#topicFilters").setAttribute("aria-label", t(S.ui.projects.topicFilterLabel));
    $("#themeToggle").setAttribute("aria-label", t(S.ui.themeToggle));

    var other = lang === "en" ? "fa" : "en";
    var lt = $("#langToggle");
    lt.textContent = S.languages[other].label;
    lt.setAttribute("aria-label", t(S.ui.langToggle) + " — " + S.languages[other].name);
    lt.setAttribute("lang", other);

    document.title = t(S.company.name) + " — " + t(S.company.tagline).replace(/[.。]$/, "");

    /* link buttons */
    function buildLinks(node) {
      var K = S.company.links, B = S.ui.buttons;
      node.textContent = "";
      if (K.email)    node.appendChild(linkBtn(K.email, t(B.email), "mail", true));
      if (K.linkedin) node.appendChild(linkBtn(K.linkedin, t(B.linkedin), "linkedin"));
      if (K.github)   node.appendChild(linkBtn(K.github, t(B.github), "github"));
      if (K.website)  node.appendChild(linkBtn(K.website, t(B.website), "globe"));
    }
    buildLinks($("#heroLinks"));
    buildLinks($("#contactLinks"));
    $("#contactEmail").textContent = S.company.links.email.replace(/^mailto:/, "");

    statRow($("#heroStats"), S.company.stats);

    var about = $("#aboutBody");
    about.textContent = "";
    S.company.about.forEach(function (p) { about.appendChild(el("p", null, t(p))); });

    renderServices();
    renderTeam();
    renderProjects();
    renderKaggle();

    $("#year").textContent = new Date().getFullYear();
  }

  render();

  /* -------------------------------------------------------- language */

  $("#langToggle").addEventListener("click", function () {
    lang = lang === "en" ? "fa" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
    render();
  });

  /* ----------------------------------------------------------- theme */

  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) { /* private mode */ }
  if (stored === "dark" || stored === "light") root.setAttribute("data-theme", stored);

  $("#themeToggle").addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    if (!current) {
      current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
  });

  /* ---------------------------------------------- nav + scroll spy */

  var nav = $("#nav");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("is-stuck", window.scrollY > 8);
  }, { passive: true });

  if ("IntersectionObserver" in window) {
    var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    ["services", "team", "projects", "kaggle", "contact"].forEach(function (id) {
      var s = document.getElementById(id);
      if (s) spy.observe(s);
    });
  }
})();
