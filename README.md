# [Your Church Name] - Website Template

A simple, traditional, and mobile-friendly website template designed specifically for small country churches and hosted completely free on **GitHub Pages**.

---

## 🌟 Template Overview & Design Philosophy

This website is built with a **low-maintenance philosophy**:
- **Zero build steps**: Pure, standard HTML5, CSS3, and lightweight vanilla JavaScript. No Node.js, Ruby, Jekyll, or complex dependencies to break.
- **Traditional country church aesthetic**: Timeless serif typography, warm forest green and cedar accents, warm parchment backgrounds, and dignified, clean layouts.
- **Zero-maintenance Facebook sermons integration**: Rather than requiring weekly uploads or embedding video widgets to the website, the site links directly to your church's Facebook video library (`https://www.facebook.com/[YourChurchPage]/videos`). Sermons uploaded to Facebook are instantly accessible to your visitors without ever touching the website code!
- **Simplified events**: A simple recurring weekly schedule table and a clean list of seasonal gatherings without cluttered category filters.
- **Clear template placeholders**: All names, statements of faith, dates, and locations are clearly enclosed in `[...]` brackets so you can easily customize them.

---

## 📁 File Structure

```text
church-website/
├── index.html           # Home page with service times, Facebook sermon box, & welcome
├── about.html           # Purpose, template Statement of Faith, and leadership roles
├── events.html          # Simple weekly schedule & seasonal upcoming gatherings
├── contact.html         # Interactive prayer request form & general contact details
├── css/
│   └── style.css        # Traditional country church styling with easy-to-edit colors
├── js/
│   └── main.js          # Mobile navigation toggle and prayer form submission handler
├── assets/
│   └── favicon.svg      # Church cross browser icon
├── .nojekyll            # Ensures GitHub Pages serves static files directly
└── README.md            # Documentation and customization guide
```

---

## ❓ Frequently Asked Questions

### What happens when I push to `main`? Does the live site update automatically?
**Yes!** 
Whenever you push new commits to the `main` branch (or merge a Pull Request into `main`), GitHub automatically triggers a background deployment run. 
- The updated files are deployed to GitHub's global CDN within **30 to 90 seconds**.
- You can watch the deployment progress live under your repository's **Actions** tab on GitHub.
- *Tip:* If you just pushed changes and don't see them right away in your browser, perform a hard refresh (`Ctrl + F5` on Windows/Linux or `Cmd + Shift + R` on Mac) to bypass your browser's local cache.

### Is pushing to feature branches and opening PRs a good habit?
**Absolutely.** Creating a feature branch (e.g. `git checkout -b update-service-times`), pushing it, and creating a Pull Request (PR) to merge into `main` is the industry gold standard:
1. It prevents accidental broken edits on the live site.
2. It allows you to review the exact diff before it goes live.
3. Once the PR is merged into `main`, GitHub Pages automatically publishes the changes!

---

## 🚀 How to Host on GitHub Pages (Free)

1. **Commit and push** your files to GitHub:
   ```bash
   git add .
   git commit -m "Configure church website template"
   git push origin main
   ```
2. On GitHub, go to your repository's **Settings**.
3. In the left sidebar, click **Pages** (under "Code and automation").
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Choose `main`
   - **Folder**: Choose `/(root)`
5. Click **Save**.
6. Within 1–2 minutes, your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## ✏️ Customization Checklist

Search and replace the bracketed `[...]` placeholders across the HTML files:

1. **Church Name & Details**:
   - `[Your Church Name]` &rarr; e.g., *Pleasant Valley Bible Church*
   - `[123 Church Road, Your Town, ST 12345]` &rarr; Your actual physical address
   - `[(555) 000-0000]` &rarr; Your church phone number
   - `[info@yourchurchname.org]` &rarr; Your church contact email

2. **Facebook Sermons Link**:
   - Search for `https://www.facebook.com/[YourChurchPage]/videos` across `index.html`, `about.html`, `events.html`, and `contact.html` and replace it with your church's actual Facebook URL.

3. **Service Times**:
   - Update `[9:30 AM]` (Sunday School) and `[10:30 AM]` (Morning Worship) on `index.html` and `events.html`.

4. **Statement of Faith (`about.html`)**:
   - Replace the 7 template belief cards with your church's approved doctrinal statement and scripture citations.

5. **Receiving Real Emails from the Forms (`contact.html`)**:
   - Because GitHub Pages is a static host without a backend server, you can route form submissions directly to your email inbox using free services like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
   - In `contact.html`, set the form action:
     ```html
     <form id="prayer-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
     ```

---

## 💻 Local Preview

To preview the website locally before pushing changes:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.