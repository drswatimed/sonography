// main.js

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1) Count-Up Animation for Stats
     - easeOutCubic easing
     - duration: 1500 + i * 80 ms
     - start offset: 480 + i * 90 ms
     - once via IntersectionObserver threshold 0.25
     ========================================================================== */
  const statNumbers = document.querySelectorAll(".stat-number");

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateStat(el, index) {
    const target = parseFloat(el.getAttribute("data-target"));
    const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    const duration = 1500 + index * 80;
    const startOffset = 480 + index * 90;

    setTimeout(() => {
      let startTime = null;

      function step(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const currentVal = eased * target;

        el.textContent = currentVal.toFixed(decimals);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toFixed(decimals);
        }
      }

      requestAnimationFrame(step);
    }, startOffset);
  }

  const footer = document.querySelector(".stats-footer");
  if (footer && statNumbers.length > 0) {
    let triggered = false;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            statNumbers.forEach((statEl, idx) => {
              animateStat(statEl, idx);
            });
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(footer);
  }

  /* ==========================================================================
     2) Mobile Navigation Menu
     - Toggle aria-expanded, hidden, body.menu-open
     - Close on overlay click, Escape key, link click, or resize > 720px
     ========================================================================== */
  const burgerBtn = document.querySelector(".burger-btn");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-signin-btn");

  function openMenu() {
    if (!burgerBtn || !mobileOverlay || !mobileMenu) return;
    burgerBtn.setAttribute("aria-expanded", "true");
    mobileOverlay.removeAttribute("hidden");
    mobileMenu.removeAttribute("hidden");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    if (!burgerBtn || !mobileOverlay || !mobileMenu) return;
    burgerBtn.setAttribute("aria-expanded", "false");
    mobileOverlay.setAttribute("hidden", "");
    mobileMenu.setAttribute("hidden", "");
    document.body.classList.remove("menu-open");
  }

  function toggleMenu() {
    const isExpanded = burgerBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (burgerBtn) {
    burgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMenu);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      closeMenu();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720 && document.body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  /* Desktop nav link active state toggle on click */
  const desktopLinks = document.querySelectorAll(".nav-pill .nav-link");
  desktopLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      desktopLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
