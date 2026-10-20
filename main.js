// main.js

document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1) Tab Switching Logic (Overview, 5-Day Training, Clinic Setup, Enquire)
     ========================================================================== */
  const tabPanels = {
    overview: document.getElementById("panel-overview"),
    founder: document.getElementById("panel-founder"),
    training: document.getElementById("panel-training"),
    "clinic-setup": document.getElementById("panel-clinic-setup"),
    enquire: document.getElementById("panel-enquire")
  };

  const desktopNavBtns = document.querySelectorAll(".nav-pill .nav-tab-btn");
  const mobileNavBtns = document.querySelectorAll(".mobile-nav .nav-tab-btn");

  function switchTab(targetName, optionalInterest) {
    if (!tabPanels[targetName]) {
      targetName = "overview";
    }

    // Toggle active panel
    Object.keys(tabPanels).forEach((key) => {
      const panel = tabPanels[key];
      if (panel) {
        if (key === targetName) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      }
    });

    // Update active nav button indicators
    desktopNavBtns.forEach((btn) => {
      if (btn.getAttribute("data-target") === targetName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    mobileNavBtns.forEach((btn) => {
      if (btn.getAttribute("data-target") === targetName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // If interest passed, pre-select in dropdown
    if (optionalInterest) {
      const interestSelect = document.getElementById("doc-interest");
      if (interestSelect) {
        interestSelect.value = optionalInterest;
      }
    }

    // Auto-focus name input if enquire tab
    if (targetName === "enquire") {
      const nameInput = document.getElementById("doc-name");
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 150);
      }
    }

    // Update hash cleanly without jump
    try {
      history.replaceState(null, "", `#${targetName}`);
    } catch (e) {}

    // Close mobile drawer if open
    closeMenu();
  }

  // Bind click on all buttons/links with .nav-tab-btn
  document.querySelectorAll(".nav-tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.getAttribute("data-target");
      const interest = btn.getAttribute("data-interest");
      switchTab(target, interest);
    });
  });

  // Check URL hash on initial load
  const initialHash = window.location.hash.replace(/^#/, "").trim();
  if (initialHash && tabPanels[initialHash]) {
    switchTab(initialHash);
  }

  /* ==========================================================================
     2) Mobile Navigation Menu
     ========================================================================== */
  const burgerBtn = document.querySelector(".burger-btn");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const mobileMenu = document.getElementById("mobile-menu");

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

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720 && document.body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  /* ==========================================================================
     3) Count-Up Animation for Stats
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
     4) Interactive Lead Form Submission
     ========================================================================== */
  const leadForm = document.getElementById("lead-form");
  if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("doc-name").value.trim();
      const qualification = document.getElementById("doc-qual").value;
      const city = document.getElementById("doc-city").value.trim();
      const interest = document.getElementById("doc-interest").value;
      const phone = document.getElementById("doc-phone").value.trim();

      // Store lead in browser memory
      try {
        const existingLeads = JSON.parse(localStorage.getItem("doctor_enquiries") || "[]");
        existingLeads.push({
          name,
          qualification,
          city,
          interest,
          phone,
          submittedAt: new Date().toISOString()
        });
        localStorage.setItem("doctor_enquiries", JSON.stringify(existingLeads));
      } catch (err) {
        console.warn("Storage error:", err);
      }

      // Pre-filled WhatsApp message
      const msg = `Hello Dr. Swati, I am ${name} (${qualification}) from ${city}. I am interested in ${interest}. My mobile number is ${phone}. Could you please share the curriculum and batch details?`;
      const waUrl = `https://wa.me/918356907642?text=${encodeURIComponent(msg)}`;

      leadForm.reset();

      // Open WhatsApp directly
      window.open(waUrl, "_blank", "noopener,noreferrer");
    });
  }
});
