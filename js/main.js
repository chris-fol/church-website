/**
 * GRACE COMMUNITY CHURCH - Main JavaScript
 * Handles mobile navigation, dynamic content, event filters, and form interactions
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

  // 3. Event Category Filtering (on events.html)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const eventCards = document.querySelectorAll('.event-card');

  if (filterButtons.length > 0 && eventCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle active class on buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const selectedCategory = btn.getAttribute('data-filter');

        eventCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. Contact & Prayer Tabs (on contact.html)
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
      messageField.value = `Regarding event: ${subjectParam}\n`;
    }
  }

  // 5. Prayer Request & Contact Form Submissions (Demo handling)
  // NOTE: On GitHub Pages (static hosting), to receive real emails you can
  // connect these forms to a free service like Formspree (formspree.io),
  // Web3Forms (web3forms.com), or Google Forms.
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

      // Simulate a small delay for realistic feedback
      setTimeout(() => {
        if (statusBox) {
          statusBox.style.display = 'block';
          statusBox.className = 'form-status success';
          if (form.id === 'prayer-form') {
            statusBox.innerHTML = '<strong>Prayer request received.</strong> Our prayer team has received your request and will be lifting you up in prayer. God bless you!';
          } else {
            statusBox.innerHTML = '<strong>Message sent successfully!</strong> Thank you for reaching out. We will get back to you shortly.';
          }
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.getAttribute('data-default-text') || 'Submit';
        }
      }, 700);
    });
  });
});
