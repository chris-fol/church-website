# Grace Community Church - Website

A modern, mobile-friendly, accessible church website designed for free and seamless hosting on **GitHub Pages**.

## 🌟 Pages & Key Features

1. **Home / Welcome (`index.html`)**
   - Hero banner with immediate, high-visibility **Sunday Service Times** and location
   - Quick pillars: Biblical Teaching, Authentic Community, and Loving Service
   - Pastoral Welcome letter & introduction
   - "What to Expect on Sunday" 4-step walkthrough for first-time visitors
   - Featured upcoming events spotlight

2. **About & Statement of Faith (`about.html`)**
   - Church Mission & Vision statements
   - Complete 7-part **Statement of Faith** (The Scriptures, The Trinity, Jesus Christ, The Holy Spirit, Salvation by Grace, The Church & Ordinances, The Blessed Hope & Eternity) with Scripture references
   - Pastoral & Ministry Leadership profiles

3. **Special Events & Calendar (`events.html`)**
   - Recurring weekly ministry gathering schedule (Sundays, Midweek Bible Study, Youth Nights, etc.)
   - Interactive category filtering (All, Worship & Prayer, Fellowship, Youth & Kids, Community Outreach)
   - Event cards with dates, times, locations, and descriptions
   - Google Calendar embed container & instructions

4. **Contact & Prayer Requests (`contact.html`)**
   - **Interactive Prayer Request Form**:
     - Optional anonymous submission
     - Privacy sharing preferences (*Pastoral Staff Only* vs. *Church Prayer Chain*)
     - Request for follow-up option
   - **General Contact / Plan a Visit Form**
   - Office hours, phone number, email, and physical address
   - Directions, visitor parking guide, and Google Maps link

5. **Style & Script (`css/style.css` & `js/main.js`)**
   - Responsive design (desktop, tablet, mobile) with hamburger menu
   - Warm, welcoming color palette using CSS custom properties (`:root` variables)
   - Accessible typography and high-contrast color scheme
   - Client-side form feedback and event filtering without external dependencies

---

## 🚀 How to Host on GitHub Pages (Free)

Hosting this site on GitHub Pages takes less than a minute:

1. **Commit and push** your changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Build church website structure"
   git push origin main
   ```

2. Open your repository on [GitHub](https://github.com).
3. Navigate to **Settings** > **Pages** (under the "Code and automation" section in the left sidebar).
4. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main`
   - **Folder**: Select `/(root)`
5. Click **Save**.
6. Wait about 30–60 seconds. GitHub will display a notification:
   > *Your site is live at `https://<your-username>.github.io/<repo-name>/`*

> **Note:** The included `.nojekyll` file ensures that GitHub Pages serves the static HTML/CSS/JS files directly without Jekyll overhead.

---

## 💻 Local Testing & Preview

To preview the website locally on your computer, run Python's built-in web server:

```bash
# From the project root directory
python3 -m http.server 8000
```

Then open your browser to [http://localhost:8000](http://localhost:8000).

---

## ✏️ How to Customize Your Website

### 1. Changing Church Information & Service Times
Search and replace the placeholder information in `index.html`, `about.html`, `events.html`, and `contact.html`:
- **Church Name**: Replace `Grace Community Church` with your church name.
- **Service Times**: Default is `9:00 AM & 10:45 AM`. Update times in the hero badge and floating service card.
- **Address & Phone**: Replace `123 Faith Way, Springfield` and `(555) 123-4567`.

### 2. Customizing Colors & Styling
Open `css/style.css` and adjust the variables in the `:root` block:
```css
:root {
  --color-primary: #1e3a5f;       /* Primary sanctuary navy */
  --color-primary-dark: #0f1f38;
  --color-accent: #c07a3e;        /* Warm gold / candle accent */
  --color-bg-page: #fdfbf7;       /* Background ivory */
}
```

### 3. Connecting the Prayer Request & Contact Forms to Your Email
Because GitHub Pages is a static host without a server-side backend (like PHP or Node), you can receive form submissions for free using services such as:

#### Option A: [Formspree](https://formspree.io) (Free)
1. Sign up for a free account at [Formspree](https://formspree.io).
2. Create a new form and copy your endpoint URL (e.g., `https://formspree.io/f/xbjwpkzg`).
3. In `contact.html`, set the form's `action` attribute:
   ```html
   <form id="prayer-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

#### Option B: [Web3Forms](https://web3forms.com) (Free, no login required)
1. Get a free access key at [Web3Forms](https://web3forms.com).
2. Add `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">` inside the form.

### 4. Embedding a Real Google Calendar
In `events.html`, replace the calendar demo code with your church's Google Calendar embed code:
1. Open [Google Calendar](https://calendar.google.com).
2. Click the gear icon > **Settings** > click your church calendar on the left.
3. Check "Make available to public" under **Access permissions for events**.
4. Scroll to **Integrate calendar**, copy the **Embed code**, and paste it into `events.html`.

### 5. Adding Your Google Maps Location
In `contact.html`, search for `https://maps.google.com/?q=` and update the query parameter to your church's exact street address.

---

## 📁 Repository Structure

```text
church-website/
├── .nojekyll           # Tells GitHub Pages not to process with Jekyll
├── index.html          # Welcome page with service times & visitor overview
├── about.html          # Mission, vision, statement of faith & leadership
├── events.html         # Weekly schedule & upcoming events with filter
├── contact.html        # Contact details & interactive prayer request form
├── css/
│   └── style.css       # Complete responsive styling and theme variables
├── js/
│   └── main.js         # Mobile menu, category filtering, and form handlers
├── assets/
│   └── favicon.svg     # Church cross vector favicon
└── README.md           # Documentation and hosting guide
```