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

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720 && document.body.classList.contains("menu-open")) {
      closeMenu();
    }
  });

  /* ==========================================================================
     3) Navigation Tabs & Interactive Modals
     - Overview (main hero)
     - 5-Day Training (curriculum modal)
     - Clinic Setup (turnkey roadmap modal)
     - Enquire (lead capture modal)
     ========================================================================== */
  const modalTraining = document.getElementById("modal-training");
  const modalClinic = document.getElementById("modal-clinic-setup");
  const modalLead = document.getElementById("lead-modal");
  const allModals = [modalTraining, modalClinic, modalLead].filter(Boolean);

  const desktopNavBtns = document.querySelectorAll(".nav-pill .nav-tab-btn");
  const mobileNavBtns = document.querySelectorAll(".mobile-nav .nav-tab-btn");

  function updateActiveNav(targetName) {
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
  }

  function closeAllModals() {
    allModals.forEach((m) => m.setAttribute("hidden", ""));
    updateActiveNav("overview");
  }

  function openTargetView(target, optionalInterest) {
    closeAllModals();
    closeMenu();

    if (target === "overview") {
      updateActiveNav("overview");
      return;
    }

    if (target === "training" && modalTraining) {
      modalTraining.removeAttribute("hidden");
      updateActiveNav("training");
      return;
    }

    if (target === "clinic-setup" && modalClinic) {
      modalClinic.removeAttribute("hidden");
      updateActiveNav("clinic-setup");
      return;
    }

    if (target === "enquire" && modalLead) {
      modalLead.removeAttribute("hidden");
      updateActiveNav("enquire");
      if (optionalInterest) {
        const interestSelect = document.getElementById("doc-interest");
        if (interestSelect) interestSelect.value = optionalInterest;
      }
      const nameInput = document.getElementById("doc-name");
      if (nameInput) setTimeout(() => nameInput.focus(), 100);
      return;
    }
  }

  // Handle all nav buttons and CTA links
  const allNavTriggers = document.querySelectorAll(".nav-tab-btn");
  allNavTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const target = trigger.getAttribute("data-target");
      const interest = trigger.getAttribute("data-interest");
      openTargetView(target, interest);
    });
  });

  // Close buttons inside modals
  document.querySelectorAll(".modal-close-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeAllModals();
    });
  });

  // Click outside on modal backdrop
  allModals.forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  // Escape key closes modals and menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (document.body.classList.contains("menu-open")) {
        closeMenu();
      }
      closeAllModals();
    }
  });

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
      const waUrl = `https://wa.me/919619182035?text=${encodeURIComponent(msg)}`;

      closeAllModals();
      leadForm.reset();

      // Open WhatsApp directly
      window.open(waUrl, "_blank", "noopener,noreferrer");
    });
  }
});
