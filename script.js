// AmberRain marketing site: theme toggle, scroll reveal and the example-rubric explorer.
(() => {
  const root = document.documentElement;

  // Theme: an explicit choice is stored; otherwise the system preference applies.
  const toggle = document.querySelector(".theme-toggle");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const currentTheme = () =>
    root.dataset.theme === "light" || root.dataset.theme === "dark"
      ? root.dataset.theme
      : systemDark.matches
        ? "dark"
        : "light";
  const labelToggle = () =>
    toggle.setAttribute(
      "aria-label",
      currentTheme() === "dark" ? "Switch to light mode" : "Switch to dark mode",
    );
  toggle.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("amberrain-site-theme", next);
    } catch {
      // The theme still changes for this visit when storage is unavailable.
    }
    labelToggle();
  });
  systemDark.addEventListener("change", labelToggle);
  labelToggle();

  // Header border once the page scrolls.
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal sections as they enter the viewport, staggering siblings slightly.
  const revealed = document.querySelectorAll(".reveal");
  revealed.forEach((el) => {
    const siblings = [...el.parentElement.children].filter((child) =>
      child.classList.contains("reveal"),
    );
    el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 70}ms`;
  });
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    revealed.forEach((el) => observer.observe(el));
  } else {
    revealed.forEach((el) => el.classList.add("in"));
  }

  // Example-rubric explorer.
  const roles = window.AMBERRAIN_ROLES || [];
  const panel = document.getElementById("role-panel");
  const tabs = [...document.querySelectorAll('.role-tabs [role="tab"]')];
  if (!panel || !roles.length) return;
  const el = {
    title: panel.querySelector(".role-title"),
    context: panel.querySelector(".role-context"),
    summary: panel.querySelector(".role-summary"),
    criteria: panel.querySelector(".criteria"),
    seniority: panel.querySelector(".role-seniority"),
    detailTitle: panel.querySelector(".detail-title"),
    detailQuestion: panel.querySelector(".detail-question"),
    levels: panel.querySelector(".levels"),
  };
  const span = (className, text) => {
    const node = document.createElement("span");
    node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  function selectCriterion(role, index) {
    const criterion = role.criteria[index];
    el.criteria
      .querySelectorAll(".criterion")
      .forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    el.detailTitle.textContent = criterion.title;
    el.detailQuestion.textContent = criterion.question;
    el.levels.replaceChildren(
      ...criterion.levels.map((label) => {
        const item = document.createElement("li");
        item.textContent = label;
        return item;
      }),
    );
  }

  function showRole(id) {
    const role = roles.find((r) => r.id === id) || roles[0];
    for (const tab of tabs) {
      const selected = tab.dataset.role === role.id;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected) panel.setAttribute("aria-labelledby", tab.id);
    }
    el.title.textContent = role.title;
    el.context.textContent = role.context || "";
    el.summary.textContent = role.summary;
    el.criteria.classList.add("is-entering");
    el.criteria.replaceChildren(
      ...role.criteria.map((criterion, index) => {
        const item = document.createElement("li");
        const button = document.createElement("button");
        button.type = "button";
        button.className = "criterion";
        button.style.setProperty("--w", criterion.weight);
        button.setAttribute("aria-pressed", "false");
        const value = span("criterion-value", String(criterion.weight));
        const unit = document.createElement("small");
        unit.textContent = "pts";
        value.append(unit);
        const bar = span("criterion-bar");
        bar.setAttribute("aria-hidden", "true");
        button.append(span("criterion-name", criterion.title), value, bar);
        const select = () => selectCriterion(role, index);
        button.addEventListener("click", select);
        button.addEventListener("focus", select);
        button.addEventListener("pointerenter", (event) => {
          if (event.pointerType === "mouse") select();
        });
        item.append(button);
        return item;
      }),
    );
    requestAnimationFrame(() =>
      requestAnimationFrame(() => el.criteria.classList.remove("is-entering")),
    );
    el.seniority.hidden = !role.seniority;
    el.seniority.querySelector("span").textContent = role.seniority
      ? `Seniority fit is checked against ${role.seniority}.`
      : "";
    selectCriterion(role, 0);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => showRole(tab.dataset.role));
    tab.addEventListener("keydown", (event) => {
      const moves = {
        ArrowRight: index + 1,
        ArrowLeft: index - 1,
        Home: 0,
        End: tabs.length - 1,
      };
      if (!(event.key in moves)) return;
      event.preventDefault();
      const next = tabs[(moves[event.key] + tabs.length) % tabs.length];
      next.focus();
      showRole(next.dataset.role);
    });
  });
  showRole(tabs.find((tab) => tab.getAttribute("aria-selected") === "true")?.dataset.role);

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
