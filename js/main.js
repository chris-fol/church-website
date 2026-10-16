/**
 * TRADITIONAL CHURCH WEBSITE - Main JavaScript
 * Handles mobile navigation, tab switching, and template form interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('is-active');
    });

    // Close mobile menu when any nav link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('is-active')) {
        navMenu.classList.remove('is-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 3. Contact & Prayer Tabs (on contact.html)
  const tabButtons = document.querySelectorAll('.form-tab-btn');
  const tabPanels = document.querySelectorAll('.form-panel');

  function switchTab(targetTabId) {
    tabButtons.forEach(b => {
      const isTarget = b.getAttribute('data-tab') === targetTabId;
      b.classList.toggle('active', isTarget);
      b.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    tabPanels.forEach(panel => {
      if (panel.id === targetTabId) {
        panel.style.display = 'block';
      } else {
        panel.style.display = 'none';
      }
    });
  }

  if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        switchTab(targetTab);
      });
    });

    // Check URL parameters and hash on load
    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash.toLowerCase();

    if (hash === '#prayer') {
      switchTab('tab-prayer');
    } else if (hash === '#contact' || hash === '#contact-form' || hash === '#visit' || urlParams.has('subject')) {
      switchTab('tab-contact');
    }

    // Pre-fill subject if provided in query string (e.g. contact.html?subject=RSVP)
    const subjectParam = urlParams.get('subject');
    const messageField = document.getElementById('contact-message');
    if (subjectParam && messageField) {
      messageField.value = `Regarding: ${subjectParam}\n`;
    }
  }

  // 4. Form Submissions (Demo template behavior)
  const forms = document.querySelectorAll('form[data-interactive="true"]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusBox = form.querySelector('.form-status');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      setTimeout(() => {
        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.className = 'form-status success';
          if (form.id === 'prayer-form') {
            statusBox.innerHTML = '<strong>Prayer request received.</strong> [Template note: In the live version, this message will be emailed to your church office or prayer team].';
          } else {
            statusBox.innerHTML = '<strong>Message sent!</strong> [Template note: In the live version, this message will be emailed to your pastor or office].';
          }
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.getAttribute('data-default-text') || 'Submit';
        }
      }, 500);
    });
  });
});
